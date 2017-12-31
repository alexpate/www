---
title:  "Random HEX Colour Generator in JavaScript"
---

I first made this when I was getting started with jQuery. At the time, I guess it seemed like a good little exercise to do. Check out a working [demo here](http://codepen.io/alexpate/pen/oxddzg).

The basic idea is to generate a random hex colour, and update some DOM elements by setting their background/text color/and contents to the value of the new hew code.

## The Markup

```html
<h1 id="colour">#e63c44</h1>
<button id="change">New Colour</button>
```

## jQuery

```javascript
$('#change').click(function() {
  newColour = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  $('body').css({background: newColour});
  $('#change').css({color: newColour});
  $('#colour').text(newColour);
});
```

## UPDATE - 28-06-2015

Long overdue, have included a vanilla JavaScript version as well:

```javascript
var btn = document.getElementById('change');
var text = document.getElementById('colour');

var generator = function() {
  newColour = '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  console.log(newColour.length);
  if (newColour.length < 7) {
    generator();
  }
};

btn.addEventListener('click', function() {
  generator();

  document.body.style.background = newColour;
  btn.style.color = newColour;
  text.innerText = newColour;
});
```

## UPDATE II - 17-04-2016

I was recently moving my code snippets over to codepen, and this one seemed to get picked up by the mods and was featured on the home page.

Because of the new love it's got, I've fixed one of the most glaring issues of it sometimes generating malformed hex codes. (See the new code above!)
