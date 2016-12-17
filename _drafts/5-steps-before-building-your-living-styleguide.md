---
layout: post
title:  "5 steps to take before building your living styleguide"
category: journal
---

It's been about 6 months since we properly began to integrate our living styleguide (Chameleon) into production code. Before that, there was about a month or 2 of trying things out, scrapping them, and trying more things out.

This article aims to provide a very brief checklist that you should run through if you're planning to build out your own living styleguide,

## 1 - Define what it is that you actually want.
'Pattern library', 'styleguide', 'UI handbook', these are all words that tend to be used, however they actually refer to different things.

- A pattern library is a collection of UI components
- A living styleguide is like a pattern library, but the main difference is that it aims to reduce the duplication of CSS. The code that you write in the styleguide, is the same that will be used in whatever apps the styleguide is brought into. (Think Bootstrap or Foundation).
- A handbook is more of a static reference that provides suggestions as to how to design and build something, rather than giving you the code.
Maybe a living styleguide isn't for you, but that's fine.

## 2 - Define the granularity of the components.
At what level does this styleguide sit? Is this a company wide tool that will dictate the UI of every project? Or is this for a specific project, your dashboard maybe?

Likewise, what sort of elements are going to sit in the styleguide? Is this just for Sass variables, or will it include larger components such as navigation bars and footers?

## 3 - Keep it language agnostic. Try to stray from using language/platform specific features.

Once you've defined what projects the styleguide is going to be used in, you'll have a better idea of what language constraints you'll have to deal with.

For example, consider how the styleguide is going to be imported in to your projects? Maybe you're a Ruby company, so bundling it as a Gem would work. Or maybe you would prefer to use NPM. Whatever you use, just be aware of the impacts that these transports will have on your code.

I'm a big fan of how the GDS team deal with this. They have three repositories, one which is the main repo which holds the 'actual' styleguide. And two others that consume this and wrap it to be an NPM module/Gem.

**The main repo**

- Wrapped into an NPM module
- Wrapped into a GEM

## 4 - Build a process to manage it.

One of the hardest parts of development, is building processes. How should new components be reviewed before they're added in? How often are old components reviewed to prevent them from becoming stale?

At Pusher, Craig (our new product designer) has started to roll out a process to manage this. We have a Trello board that holds the state of every component (requests, ready, in development, in production), and we then meet every 3 months or so to review the entire library and pick out points or improvements that could be made. Maybe it's a certain icon that isn't as recognisable anymore, or  updating colours so that they're more accessible.

## 5 - Keep it lightweight

Having a process in place should help enforce this. But styleguides shouldn't be a place where you dump every variable/component/element. It should contain just enough to be useful
