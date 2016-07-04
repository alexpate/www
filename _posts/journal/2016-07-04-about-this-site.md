---
layout: post
title:  "A bit about this site (updated)"
category: journal
---

I originally wrote this post last year, however a few people have pointed out that it's out of date. The idea of this is to explain the high level of what's running this site.

## Core

Jekyll is at the core of the site. This works really well with me  as I get a really light weight static site, but still get the niceties of a templating language.

However I'm not a massive fan of using the built in asset pipeline, and favour running all of my asset tasks through Gulp. You can check out my gulpfile (as well as the rest of the source code for this site), on [GitHub](https://github.com/alexpate/alexpate.uk/blob/master/gulpfile.js).

## Fonts

I have two font families on the site: GT Pressura Mono, and Graphik.

- Pressura Mono is an awesome font from [Grilli Type](https://www.grillitype.com/typefaces/gt-pressura). I've been looking for a not-too-techy monospace for months, but I finally stumbled across this one during the research stages of the Pusher Rebrand.
- Graphik (the font this is written in), is my primary font. I was first made aware of it on the [Facebook Developer F8](https://www.fbf8.com/) site.

## Other

The entire site is hosted at [DigitalOcean](https://m.do.co/c/ab7c3d0a9c23). I could definelty get away with sticking it on S3 or GitHub Pages, but as I have other sites in the same droplet, it makes sense just to keep it there.

The deployment process it pretty simple. I have git running on the server, which is set up as a git remote on my local machine. This means deploying is a simple task of:

```bash
git push production master
````

Heroku style!

There's then a `post-receive` hook which `cd`'s in to a new directory, runs the `buildOnServerOnly` task in the gulpfile, and sets up a new symlink to point the production directory to the latest build directory.

## Check out the source

A lot of what I've learnt about web development, has been from looking at the source code of other developers. I would like to think that by [open sourcing this site](https://github.com/alexpate/alexpate.uk), you (most likely a developer) and others might find it useful.
