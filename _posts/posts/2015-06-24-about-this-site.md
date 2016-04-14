---
layout: post
title:  "A bit about this site"
---

Since finishing my degree in May, I've finally had some time to put some much needed effort in to my personal site. I thought it might be useful just to have a quick rundown of the technologies behind it.

## CMS

Jekyll is at the core of the site. As someone who uses PHP frameworks daily, I was a little sceptical at first about using a static site generator, but I'm definitely starting to see the benefits in terms of performance.

## Fonts

Served from TypeKit, headers are set in Kepler Std Display, and sub-headers in FF Good Headline Pro. I'm also using Lora from Google Web Fonts Checkout the [colophon on typekit](https://typekit.com/colophons/fen3rqm).

## Taskrunners?

Due to the set-up of my deployment method (commit to GitHub, send a post hook to server), I decided to drop Grunt from my workflow, and instead opt for Jekyll's built in compilation tools. This has had the added benefit of allowing me to use ERB in my Sass files (particlary useful for changing variables depending on the environment - development/production).

## Check out the source

A lot of what I've learnt about web development, has been from looking at the source code of other developers. I would like to think that by [open sourcing this site](https://github.com/alexpate/alexpate.uk), you (most likely a developer) and others might find it useful.
