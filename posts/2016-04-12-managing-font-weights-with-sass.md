---
title:  "Managing font weights with Sass"
summary: "Managing font families and weights shouldn't be a big deal. Add the font family to the body tag, and"
---

Managing font families and weights shouldn't be a big deal. Add the font family to the body tag, and define the font weights on the individual titles.

However, when dealing with some web font providers (looking at you fonts.com!), you might find that different font weights require entirely seperate font families. For example the DIN Next family is provided as two fonts. One for the `light`, `medium`, and `bold` weights, and another for the `regular` weight.

## How to work with this

The way that we solved this at Pusher, is to use Sass's placeholder classes. These allow us to define multiple CSS properties with just one line. Think of them as multiline variables.

### The Old Way

```scss
$font-family-primary: 'Open Sans', sans-serif;

body {
  font-family: $font-family-primary;
}

h1 {
  font-weight: bold;
}
```

### The Improved way

```scss
%font-weight-regular {
  font-family: 'Open Sans WF Regular', sans-serif;
  font-weight: regular;
}

%font-weight-bold {
  font-family: 'Open Sans WF Bold', sans-serif;
  font-weight: bold;
}

body {
  @extend %font-weight-regular;
}

h1 {
  @extend %font-weight-bold;
}

.nav__logo {
  @extend %font-weight-bold;
}
```

The added benefit of this, is that any selector that is extended by the `%font-weight-XXX` classes will be grouped, helping to reduce duplication in your compiled CSS:

```css
body {
  font-family: 'Open Sans WF Regular', sans-serif;
  font-weight: regular;
}

h1,
.nav__logo {
  font-family: 'Open Sans WF Bold', sans-serif;
  font-weight: bold;
}
```
