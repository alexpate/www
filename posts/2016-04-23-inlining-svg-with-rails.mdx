---
title: "Inlining SVG's with Rails"
summary: 'As part of our recent redesign of the Pusher dashboard, we changed the way that we bring in icons'
---

As part of our recent redesign of the Pusher dashboard, we changed the way that we bring in icons. Previously, we used FontAwesome to provide a simple way to use icons across the project. It was easy enough for anyone to use, and provided some level of customization (color, width/height, position).

However, icon fonts are seriously flawed in several key areas:

Accesibility - They provide screenreaders and assistive technologies with no context.
Control - The icons are glyphs in a font, and as such we only have limited control over what they look like.

## SVG is the way

SVG seemed like the best option. They can be rendered through all of the ways that an image can be, plus more:

- Through the `<img>` tag
- Through the CSS `url` value (used in background-image and content)
- Through the `<object>` tag
- Inlined

The first three work well however, they don't allow for full manipulation of the SVG's code.

As such, I opted for the fourth option: inlining. This means including the raw SVG code inside the DOM:

```html
<div>
  <svg class="logo" width="90" height="40" viewBox="0 0 120 37">
    <path class="logo__mark" d="M23.419..." fill="inherit"></path>
  </svg>
</div>
```

The benefit of this is that we can control elements of the SVG with CSS, just as we would with any other html element:

```css
.logo .logo__mark {
  fill: #f00;
}

.logo:hover .logo__mark {
  fill: #000;
}
```

This is great, but it now starts to spin up issues concerning maintenance. Let's say an icon is used 10 times across a site. If we inlined the icon in those 10 places and we want to update the icon, it would involve making changes in 10 seperate places. We need to keep the code DRY.

## What we did

_Our dashboard is built on rails, so although this code is ruby specific, the methodology can be ported to any language/framework._

Our solution was to build a helper that searches our store of svg files, pulls the relevant one, and inlines it for us. We can then call the helper in multiple places, and pull the SVG from a single source. This inherits the basic pattern of partials, that's used across web development.

### The helper

```ruby
# app/helpers/application_helper.rb
def svg_asset(asset, options = {})
  file = File.read(Rails.root.join('app', 'assets', 'images', 'svg_store', "#{asset}.svg"))
  doc = Nokogiri::HTML::DocumentFragment.parse file
  svg = doc.at_css 'svg'

  if options[:class].present?
    svg['class'] = options[:class]
  end

  if options[:width].present?
    svg['width'] = options[:width]
  end

  if options[:height].present?
    svg['height'] = options[:height]
  end

  doc.to_html.html_safe
end
```

### Using it

```html
<a href="/" class="global-nav__logo"> <%= svg_asset("pusher_logo") %> </a>
```

### Which spits out:

```html
<a href="/" class="global-nav__logo">
  <svg
    class="svg-pusher-logo"
    width="70"
    height="35"
    role="img"
    version="1.1"
    viewBox="0 0 120 37"
  >
    <path
      d="M23.4196429,3.26418269 C19.8125,1.53870192 16.1607143,3.6377403..."
      fill="#ffffff"
    ></path>
  </svg>
</a>
```

You might also have noticed that through the helper, we can pass in `class`, `height`, and `width` attributes. These will override any existing properties that already exist in the SVG file when it is inlined:

```html
<a href="/" class="global-nav__logo">
  <%= svg_asset("pusher_logo", width: 90, height: 45) %>
</a>
```
