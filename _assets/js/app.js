function App() {
    this.init();

    if (typeof console == "object") {
        console.log("%c Hey there! Why not just skip to the good stuff?", "color: #bada55; font-size: 20px");
        console.log("%c github.com/alexpate/alexpate.uk", "color: #bada55; font-size: 16px");
    }
};

proto = App.prototype;

proto.init = function () {
    this.portGridListen();
    this.parallax();

    window.addEventListener('scroll', this.parallax);
};

proto.portGridListen = function() {
    addEventListenerList(document.querySelectorAll('.port-grid__item'), 'mouseover', this.portGridChangeBg);
    addEventListenerList(document.querySelectorAll('.port-grid__item'), 'mouseout', this.portGridRevertBg);
};

proto.portGridChangeBg = function() {
    img_src = this.getElementsByTagName('img')[0].src;
    document.getElementsByTagName('body')[0].style.background = "url("+img_src+") repeat center center";
};

proto.portGridRevertBg = function() {
    document.getElementsByTagName('body')[0].style.background = "#161920";
}

proto.parallax = function() {
    var sL = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var sT = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var bgdiv = document.getElementsByClassName('page__header--feature')[0];
    // bgdiv.style.transform = 'translateY(' + (scrollTop / 5) + 'px)';
    // bgdiv.style.opacity = '1' -(scrollTop / 200);
    bgdiv.style.backgroundPosition = 'center ' + (sT / 4) + 'px';
}

function addEventListenerList (list, type, listener, useCapture) {
    var i = list.length;
    while (i--) {
        list[i].addEventListener(type, listener, useCapture);
    }
};

new App();
