---
title: '5 things to consider before building your living styleguide'
summary: "It's been about 6 months since we properly began to integrate our living styleguide (Chameleon) into"
---

It's been about 6 months since we properly began to integrate our living styleguide ([Chameleon](/project/pusher-chameleon/)) into production projects. Before that, there was about a month or 2 of trying things out, scrapping them, and trying more things out.

This article provides a few lessons that we learnt that you can use as a checklist if you're planning to build out your own living styleguide.

---

## 1 - Define what it is that you actually want.

'Pattern library', 'styleguide', 'UI handbook': these are all words that are used interchangeably, however they actually refer to different things.

- A pattern library is a collection of UI components
- A living styleguide is like a pattern library, but the main difference is that it aims to reduce the duplication of CSS. The code that you write in the styleguide, is the same that will be used in whatever apps the styleguide is brought into. (Think Bootstrap or Foundation).
- A handbook is more of a static reference that provides suggestions as to how to design and build something, rather than giving you the code.

It should be noted though, that these aren't mutually exclusive. You could potentially use all three.

---

## 2 - Define the granularity of the patterns.

At what level will the styleguide sit? Is this a company wide tool that will dictate the UI of every project? Or is this for a specific project, your dashboard maybe? Remember, you're building a guide. Make sure you know who you're meant to be guiding.

Likewise, what sort of elements are going to sit in the styleguide? Is this just for Sass variables, or will it include larger components such as navigation bars and footers?

---

## 3 - Keep it language agnostic. Try to stray from building for a specific language/platform.

Once you've defined what projects the styleguide is going to be used in, you'll have a better idea of what language constraints you'll have to deal with.

![Importing Styleguides](/img/2016-12-17-5-things-consider-before-building-your-living-styleguide/styleguides-importing.jpg)

For example, consider how the styleguide is going to be imported in to your projects? Maybe you're a Ruby developer, so bundling it as a Gem would work. Or maybe you would prefer to use NPM. Whatever you use, just be aware of the impacts that these transports will have on your code. And likewise, remember that what may be _the_ package manager of today, might not be the first choice in 6 months time.

I'm a big fan of how the GDS team deal with this. They have three repositories, one which is the main repo which holds the 'actual' styleguide and has no bias towards any language. And two others that consume this and wrap it to be an NPM module/Gem.

**[The main gov.uk front-end repo](https://github.com/alphagov/govuk_frontend_toolkit)**

- [Wrapped into an NPM module](https://github.com/alphagov/govuk_frontend_toolkit_npm)
- [Wrapped into a Gem](https://github.com/alphagov/govuk_frontend_toolkit_gem)

---

## 4 - Build a process to manage it.

One of the hardest parts of development, is building processes. How should new components be reviewed before they're added in? How often are old components reviewed to prevent them from becoming stale?

At Pusher, [Craig](https://twitter.com/_ctfd_uk) (our new product designer) has started to roll out a process to manage this. We have a Trello board that holds the state of every component (requests, ready, in development, in production), and we then meet every 3 months or so to review the entire library and pick out points or improvements that could be made. Maybe it's a certain icon that isn't as recognisable anymore, or updating colours so that they're more accessible. Maybe it's a certain icon that doesn't make sense anymore, or removing a variation of a button that we don't use anymore.

---

## 5 - Keep it lightweight.

Having a process in place should help enforce this, but your styleguide shouldn't be a place where you dump every variable/component/element. Excluding patterns is just as important as adding new ones.

**Source Code**: If you're interested in seeing how we implemented our living styleguide at Pusher, go check out the source code on [GitHub](https://github.com/pusher/chameleon)!
