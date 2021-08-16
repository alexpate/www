/**
 * Large portions of this code are borrowed from this excellent article on how
 * to create mesh gradients in SceneKit: https://movingparts.io/gradient-meshes
 */
window.onload = () => {
  function hex2float(string) {
    const color = new THREE.Color(string);
    color.convertSRGBToLinear();
    return color.toArray();
  }

  function lerp(t, min, max) {
    return min + t * (max - min);
  }

  function render(canvasID, mesh) {
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: document.getElementById(canvasID),
      antialias: true,
    });
    renderer.inputEncoding = THREE.sRGBEncoding;
    renderer.outputEncoding = THREE.sRGBEncoding;

    scene.add(mesh);

    renderer.render(scene, camera);
  }

  function buildGeometry(points, colors) {
    let vertexList = [];
    let colorList = [];

    for (let x = 0; x < points.width - 1; x++) {
      for (let y = 0; y < points.height - 1; y++) {
        vertexList = vertexList.concat([
          ...points.get(x, y),
          ...points.get(x + 1, y),
          ...points.get(x + 1, y + 1),

          ...points.get(x + 1, y + 1),
          ...points.get(x, y + 1),
          ...points.get(x, y),
        ]);
      }
    }

    if (colors) {
      for (let x = 0; x < points.width - 1; x++) {
        for (let y = 0; y < points.height - 1; y++) {
          colorList = colorList.concat([
            ...colors.get(x, y),
            ...colors.get(x + 1, y),
            ...colors.get(x + 1, y + 1),

            ...colors.get(x + 1, y + 1),
            ...colors.get(x, y + 1),
            ...colors.get(x, y),
          ]);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(vertexList), 3)
    );
    geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(new Float32Array(colorList), 3)
    );

    return geometry;
  }

  class ControlPoint {
    color = [0, 0, 0];
    location = [0, 0];
    uTangent = [0, 0];
    vTangent = [0, 0];
  }

  class Grid {
    elements = [];

    width = 0;

    height = 0;

    constructor(width, height) {
      this.elements = new Array(width * height);
      this.height = height;
      this.width = width;
    }

    get(x, y) {
      return this.elements[x + y * this.width];
    }

    set(x, y, value) {
      this.elements[x + y * this.width] = value;
    }

    foreach(block) {
      for (let x = 0; x < this.width; x++) {
        for (let y = 0; y < this.height; y++) {
          block(this.elements[x + y * this.width], x, y);
        }
      }
    }
  }

  class Handle {
    element;
    container;

    active;
    callback;
    current;
    initialX;
    initialY;
    touchIndex;
    xOffset = 0;
    yOffset = 0;

    constructor(selector, callback) {
      this.element = document.querySelector(selector);
      this.container = this.element.parentElement;

      this.element.addEventListener(
        'touchstart',
        (e) => this.dragStart(e),
        false
      );
      this.element.addEventListener('touchend', (e) => this.dragEnd(e), false);
      this.element.addEventListener('touchmove', (e) => this.drag(e), false);

      this.element.addEventListener(
        'mousedown',
        (e) => this.dragStart(e),
        false
      );
      document.addEventListener('mouseup', (e) => this.dragEnd(e), false);
      document.addEventListener('mousemove', (e) => this.drag(e), false);

      this.callback = callback;
    }

    dragStart(e) {
      e.preventDefault();

      if (e.type === 'touchstart') {
        this.initialX = e.targetTouches[0].clientX - this.xOffset;
        this.initialY = e.targetTouches[0].clientY - this.yOffset;
      } else {
        this.initialX = e.clientX - this.xOffset - this.element.clientWidth / 2;
        this.initialY =
          e.clientY - this.yOffset - this.element.clientHeight / 2;
      }

      if (e.target === this.element) {
        this.active = true;
      }

      if (e.type === 'mousedown') {
        document.body.classList.add('dragging');
      }

      return false;
    }

    dragEnd(e) {
      if (!this.active) return;

      e.preventDefault();

      this.initialX = this.currentX;
      this.initialY = this.currentY;

      this.active = false;

      if (e.type === 'mouseup') {
        document.body.classList.remove('dragging');
      }
    }

    drag(e) {
      if (!this.active) return;

      e.preventDefault();

      if (e.type === 'touchmove') {
        this.currentX = e.targetTouches[0].clientX - this.initialX;
        this.currentY = e.targetTouches[0].clientY - this.initialY;
      } else {
        this.currentX =
          e.clientX - this.initialX - this.element.clientWidth / 2;
        this.currentY =
          e.clientY - this.initialY - this.element.clientHeight / 2;
      }

      this.xOffset = this.currentX;
      this.yOffset = this.currentY;

      let x = this.currentX / this.container.clientWidth;
      let y = -this.currentY / this.container.clientHeight;

      x = Math.max(0, Math.min(x, 1));
      y = Math.max(0, Math.min(y, 1));

      this.callback(x, y);

      this.setPosition(this.currentX, this.currentY);
    }

    setFraction(x, y) {
      this.xOffset = x * this.container.clientWidth;
      this.yOffset = y * -this.container.clientHeight;

      this.setPosition(this.xOffset, this.yOffset);
    }

    setPosition(xPos, yPos) {
      xPos = Math.max(0, Math.min(xPos, this.container.clientWidth));
      yPos = Math.max(-this.container.clientHeight, Math.min(yPos, 0));

      this.element.style.transform =
        'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }

    setBackgroundColor(hex) {
      this.element.style.backgroundColor = hex;
    }
  }

  let grid2 = new Grid(3, 3);
  grid2.foreach((_, x, y) => grid2.set(x, y, new ControlPoint()));

  let colorWells = new Grid(3, 3);
  grid2.foreach((_, x, y) => {
    let colorWell = document.querySelector(`#example-2-color${x | 0}${y | 0}`);
    colorWells.set(x, y, colorWell);
  });

  const M_h = new THREE.Matrix4();
  M_h.set(2, -2, 1, 1, -3, 3, -2, -1, 0, 0, 1, 0, 1, 0, 0, 0);

  const M_hT = M_h.clone().transpose();

  function surfacePoint(u, v, X, Y) {
    let Ux = new THREE.Vector4(u * u * u, u * u, u, 1);
    let Uy = new THREE.Vector4(u * u * u, u * u, u, 1);

    let V = new THREE.Vector4(v * v * v, v * v, v, 1);

    let xAcc = X.clone().transpose().premultiply(M_h).multiply(M_hT);

    Ux.applyMatrix4(xAcc);
    const x = V.dot(Ux);

    let yAcc = Y.clone().transpose().premultiply(M_h).multiply(M_hT);

    Uy.applyMatrix4(yAcc);
    const y = V.dot(Uy);

    return [x, y, 0];
  }

  function colorPoint(u, v, X, Y, Z) {
    let Ux = new THREE.Vector4(u * u * u, u * u, u, 1);
    let Uy = new THREE.Vector4(u * u * u, u * u, u, 1);
    let Uz = new THREE.Vector4(u * u * u, u * u, u, 1);

    let V = new THREE.Vector4(v * v * v, v * v, v, 1);

    let xAcc = X.clone().transpose().premultiply(M_h).multiply(M_hT);
    Ux.applyMatrix4(xAcc);
    const x = V.dot(Ux);

    let yAcc = Y.clone().transpose().premultiply(M_h).multiply(M_hT);
    Uy.applyMatrix4(yAcc);
    const y = V.dot(Uy);

    let zAcc = Z.clone().transpose().premultiply(M_h).multiply(M_hT);
    Uz.applyMatrix4(zAcc);
    const z = V.dot(Uz);

    return [x, y, z];
  }

  function meshCoefficients(p00, p01, p10, p11, axis) {
    const l = (p) => p.location[axis];
    const u = (p) => p.uTangent[axis];
    const v = (p) => p.vTangent[axis];

    let result = new THREE.Matrix4();
    result.set(
      l(p00),
      l(p01),
      v(p00),
      v(p01),
      l(p10),
      l(p11),
      v(p10),
      v(p11),
      u(p00),
      u(p01),
      0,
      0,
      u(p10),
      u(p11),
      0,
      0
    );

    return result;
  }

  function colorCoefficients(p00, p01, p10, p11, axis) {
    const c = (p) => p.color[axis];

    let result = new THREE.Matrix4();
    result.set(
      c(p00),
      c(p01),
      0,
      0,
      c(p10),
      c(p11),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    );

    return result;
  }

  let grid4 = new Grid(3, 3);
  for (let x = 0; x < grid4.width; x++) {
    for (let y = 0; y < grid4.height; y++) {
      let controlPoint = new ControlPoint();
      controlPoint.location = [
        lerp(x / (grid4.width - 1), -1, 1),
        lerp(y / (grid4.height - 1), -1, 1),
      ];

      controlPoint.uTangent[0] = 2 / (grid4.width - 1);
      controlPoint.vTangent[1] = 2 / (grid4.height - 1);

      grid4.set(x, y, controlPoint);
    }
  }

  let handles = new Grid(3, 3);
  grid4.foreach((controlPoint, x, y) => {
    let handle = new Handle(
      `#example-4-canvas-handle-${x | 0}${y | 0}`,
      (u, v) => {
        controlPoint.location = [u * 2 - 1, v * 2 - 1];

        requestAnimationFrame(() => {
          example4();
        });
      }
    );

    let [u, v] = controlPoint.location;
    handle.setFraction((u + 1) / 2, (v + 1) / 2);

    handles.set(x, y, handle);

    let colorWell = document.querySelector(`#example-2-color${x | 0}${y | 0}`);
    colorWells.set(x, y, colorWell);
  });

  function resetHandles() {
    handles.foreach((handle, x, y) => {
      let controlPoint = grid4.get(x, y);
      let [u, v] = controlPoint.location;
      handle.setFraction((u + 1) / 2, (v + 1) / 2);
    });
  }

  resetHandles();

  let example4subdivisions = 15;
  let points4 = new Grid(
    (grid4.width - 1) * example4subdivisions,
    (grid4.height - 1) * example4subdivisions
  );
  let colors4 = new Grid(
    (grid4.width - 1) * example4subdivisions,
    (grid4.height - 1) * example4subdivisions
  );

  var showWireframe = false;

  function example4() {
    const COLORS = [
      '#F4061D',
      '#F5119F',
      '#FA224D',
      '#2B15F4',
      '#645BE6',
      '#3A67E7',
      '#2615F5',
      '#00F6CD',
      '#F6FA00',
    ];

    const indexValues = [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 0],
      [2, 1],
      [2, 2],
    ];

    COLORS.forEach((color, index) => {
      grid4.get(indexValues[index][0], indexValues[index][1]).color =
        hex2float(color);
      handles
        .get(indexValues[index][0], indexValues[index][1])
        .setBackgroundColor(color);
    });

    for (let x = 0; x < grid4.width - 1; x++) {
      for (let y = 0; y < grid4.height - 1; y++) {
        let p00 = grid4.get(x, y);
        let p01 = grid4.get(x, y + 1);
        let p10 = grid4.get(x + 1, y);
        let p11 = grid4.get(x + 1, y + 1);

        let X = meshCoefficients(p00, p01, p10, p11, 0);
        let Y = meshCoefficients(p00, p01, p10, p11, 1);

        let R = colorCoefficients(p00, p01, p10, p11, 0);
        let G = colorCoefficients(p00, p01, p10, p11, 1);
        let B = colorCoefficients(p00, p01, p10, p11, 2);

        for (let u = 0; u < example4subdivisions; u++) {
          for (let v = 0; v < example4subdivisions; v++) {
            points4.set(
              x * example4subdivisions + u,
              y * example4subdivisions + v,
              surfacePoint(
                u / (example4subdivisions - 1),
                v / (example4subdivisions - 1),
                X,
                Y
              )
            );

            colors4.set(
              x * example4subdivisions + u,
              y * example4subdivisions + v,
              colorPoint(
                u / (example4subdivisions - 1),
                v / (example4subdivisions - 1),
                R,
                G,
                B
              )
            );
          }
        }
      }
    }

    const geometry = buildGeometry(points4, colors4);

    const geometry2 = new THREE.CircleGeometry(0.5, 128);

    let colorList = [];

    if (colors4) {
      for (let x = 0; x < points4.width - 1; x++) {
        for (let y = 0; y < points4.height - 1; y++) {
          colorList = colorList.concat([
            ...colors4.get(x, y),
            ...colors4.get(x + 1, y),
            ...colors4.get(x + 1, y + 1),

            ...colors4.get(x + 1, y + 1),
            ...colors4.get(x, y + 1),
            ...colors4.get(x, y),
          ]);
        }
      }
    }

    geometry2.setAttribute(
      'color',
      new THREE.BufferAttribute(new Float32Array(colorList), 3)
    );

    console.log(geometry2);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      vertexColors: true,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry2, material);

    render('example-4-canvas', mesh);
  }

  function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
      let context = this;
      let args = arguments;

      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) func.apply(context, args);
    };
  }

  const update = debounce(() => example4(), 50, true);

  update();

  window.onresize = () => {
    resetHandles();
  };

  update();
  resetHandles();

  window.gradientMeshes = {
    example4,
    update,
  };
};
