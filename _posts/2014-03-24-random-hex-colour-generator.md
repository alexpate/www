---
layout: post
title:  "Random HEX Colour Generator in JavaScript"
date:   2014-03-24 15:12:43
---
I first made this when I was getting started with jQuery. At the time, I guess it seemed like a good little exercise to do. Check out a working [demo here](http://jsfiddle.net/alexjpate/ESmTJ/7/).

The basic idea is to generate a random hex colour, and update some DOM elements by setting their background/text color/and contents to the value of the new hew code.

## The Markup
``` html
<div id="container">
    <h1 id="colour">#e63c44</h1>
    <button id="change">New Colour</button>
</div>
```

## jQuery
``` javascript
dh = $(document).height();

$('#container').css({'padding-top':dh/3});

$('#change').click(function() {
    newColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('body').css({'background':newColour});
    $('#change').css({'color':newColour});
    $('#colour').text(newColour);
});
```

## UPDATE 28-06-2015
Two years later, have included a vanilla JavaScript version as well:

``` javascript
var dh = window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight;

document.getElementById('container').style.paddingTop = (dh/3);

var btn = document.getElementById('change');
var text = document.getElementById('colour');

btn.addEventListener('click', function() {
    newColour = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.background = newColour;
    btn.style.color = newColour;
    text.innerText = newColour;
});
```
