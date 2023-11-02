---
title: "SVG Progress Circles Part 2 - With JavaScript"
summary: "This is a follow on post from my previous post a few weeks ago, about implementing an SVG progress"
---

This is a follow on post from my previous post a few weeks ago, about implementing an [SVG progress circle using Sass](/journal/pure-svg-progress-circles/). I mentioned briefly that it could be done in JavaScript, so here's the code:

[Skip to demo](http://codepen.io/alexpate/pen/wGxVZd)

## (This uses ES6, so you will need a compiler such as babel)

```javascript
class ProgressCircle {
  constructor(percent, radius, elementClass) {
    this._percent = percent;
    this._radius = radius;
    this._elementClass = elementClass;
  }

  get percent() {
    return this._percent;
  }

  get radius() {
    return this._radius;
  }

  get elementClass() {
    return this._elementClass;
    return document.getElementsByClassName(this._elementClass)[0];
  }

  calcDashOffset() {
    let circumference = Math.PI * (2 * this.radius);
    return Math.floor(circumference - this.percent / 100 * circumference);
  }

  createCSS() {
    document.querySelectorAll(
      `.${this._elementClass} .donut__svg .donut__svg__circle--one`
    )[0].style.strokeDashoffset = this.calcDashOffset();
  }

  updateText() {
    document.querySelectorAll(
      `.${this.elementClass} .js-donut-figure`
    )[0].innerText = this.percent;
  }

  updateFigure(newStat) {
    this._percent = newStat;
    this.updateText();
    this.createCSS();
  }

  init() {
    this.updateText();

    setTimeout(() => {
      this.createCSS();
    }, 1000);
  }
}

var progress = new ProgressCircle(82, 90, 'donut');
progress.init();
```

If you're looking to dynamically update the donut, then you can use the `updateFigure()` function:

```javascript
progress.updateFigure(25);
```
