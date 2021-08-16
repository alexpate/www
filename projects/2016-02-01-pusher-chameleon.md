---
title: Pusher Chameleon
description: How to share front-end assets across projects
featured_image: pusher-chameleon.png
role: Engineering
year: 2016
---

**Context**: Last week I ran a session with the rest of the Pusher team to introduce a new project I've been working on, to help manage our front-end assets across multiple projects. This article accompanies the presentation.

## The Problem - 50 shades of grey

CSS is a pretty easy language to write. But this makes it near impossible to manage. When I joined Pusher 6 months ago as the first dedicated front-end developer, it was clear we had a problem. Styles were scoped to individual patterns on individual pages, and among these, styles differed.

A quick run through CSS Stats, showed us that we were using over 600 different text colors, and 402 different font sizes. Not only was this impacting the visual consitency, but it also made it difficult to maintain.

Further to this, there was also a variety of naming conventions. The color white was defined in every possible combination: `#fff`, `#fffff`, `#FFF`, `#FFFFFF`, `white`, `rgb(255, 255, 255)`...

![CSS Stats of Pusher](/img/pusher-chameleon/chameleon_css_stats.jpeg)

## Bring in Bootstrap/Foundation

Bootstrap is a great tool for getting a site up and running quickly. My issue with bootstrap isn't in it's use, but rather how it's used.

If you were to look through all of the main stylesheets from all of our projects, somewhere near the top, this is probably what you'll see:

```sass
@import 'bootstrap';
```

What's the problem with this? Abstraction. There's no way of knowing what's actually being included in the compiled code without going and looking at it. And when we do take a look, we see an extra 6000+ lines of uncompressed CSS that's been prepended to our stylesheet. Do we really need those progress bar styles on a blog?

## So what styles do we actually need?

Rather than starting with a bootstrapped site and removing what we don't use, we took the approach to only ever start with what's required. And that's the grid, some Sass utilities, and a few helper classes. Everything else such as our buttons, our dropdowns, and our typography is custom to us.

## Sharing assets across projects

Now that we had a repo of assets (not just css: javascript and images as well), it was a case of working out how we actually include that in to projects that require those assets.

Most of our projects are written in Ruby (rails), apart from our blog which runs on WordPress. Because of this, it was important to remove any bias towards any framework or language, and for the core Chameleon repo to be able to stand alone.

We then have individual build processes to port to specific languages. For example, Rails apps import Chameleon as a standard Gem.

However, in order to make the non rails standard directory structure (`app/assets/*`) play nicely with Rail's asset pipeline, we also added helpers to allow Chameleon to adapt to it's parent environment.

For example, when in a Rails app:

```ruby
# lib/pusher_chameleon/engine.rb
module PusherChameleon
  module Rails
    class Engine < ::Rails::Engine

      initializer 'pusher_chameleon.assets.precompile' do |app|
        %w(stylesheets javascripts fonts).each do |sub|
          app.config.assets.paths << root.join(sub).to_s
        end
      end

    end
  end
end
```

## Only what you need, and nothing else

Certain projects only need certain styles. As such, every pattern in Chameleon is scoped inside a mixin. Simply adding `@import 'chameleon'` won't give you any styles. In order to output any CSS, patterns need to be explicitly included:

```scss
// stylesheets/typography/typography.scss
@mixin CHAMELEON-typography {
  h1 {
    ...
  }

  .feature-title {
    ...
  }
}
```

```sass
// Bring in all mixins/variables/utils
@import 'chameleon';

// Define what patterns we actually want
@include CHAMELEON-base
@include CHAMELEON-grid
@include CHAMELEON-typography
@include CHAMELEON-forms
@include CHAMELEON-flex-aligners
@include CHAMELEON-visibility-classes
@include CHAMELEON-spacers
```

## Simple to use

As the primary front-end engineer, it's likely that most of the front-end work will be done myself. However, there are still times when others (be they platform engineers, or designers) are making changes to the CSS. Because of this, it was important that Chameleon gives you as much for free as possible.

Inputs don't require extra classes, buttons are classed as expected (`.btn`), and title styles are applied through using the relevant HTML tag, or by adding a class for when use of the semantic tag doesn't make sense:

```html
<h1>Big Page Title</h1>
<span class="h1">Big Page Title</span>
```

![Colors in Pusher Chameleon](/img/pusher-chameleon/chameleon_color.jpeg)

## Into the future

There are still various issues with this process that I'm still wrangling with, such as an effective way to develop locally on Chameleon whilst also working on another project. Likewise, I would be interested to introduce some sort of visual testing step such as PhantomJS to make it more obivous changes to the repo will have on projects using it. However, from a metrics perspective (leaner compiled .css, and less time spent writing code), the project is certainly a step in the right direction.

---

### Notes and Extended Reading

- [Move Slow and Fix Things - Dan Eden](https://www.youtube.com/watch?v=zmjfh099zYg)
- [GOV.UK Elements](https://www.gov.uk/service-manual/user-centred-design/resources/elements/index.html)
