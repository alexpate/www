---
title: Design Kit
description: A custom Sketch plugin to house design documentation and components
year: '2019'
role: Engineering
featured_image: design-kit.png
is_featured: true
---

Design Kit is a custom Sketch plugin built to aid our designers in navigating our design system. Through it, they can search design system documentation, access our style guide, as well as drag-and-drop components directly in to their designs.

![Design Kit](/img/design-kit/preview.png)

## Meeting designers where they work

Before Design Kit, our design documentation was scattered across various Google Docs, Notion pages, and in peoples heads. Rather than simply consolidating this in to a single place (such as a website), we wanted to find a way to bring the docs directly in to the workflow of designers.

Building the documentation right in to Sketch removes the friction of having to switch context, open the browser, type in the URL. Instead, docs are a single click away from within Sketch.

## Always up to date docs

As our design documentation is managed by designers, it was important that they had an easy way to create and update the docs. To support this, we host all of our documentation on Contentful. In order to keep the initial opening speed of Design Kit low, a copy of the documentation is cached the first time it's opened, which is then periodically refreshed every few days.

## Drag and drop design system components

One of our core principles when building Design Kit was that using it should always add to the experience of design. In the initial versions of Design Kit there was a clear disconnect between documentation and process. Designers would read a components documentation in one window, and then switch back to Sketch . Or in some cases, just not read documentation at all.

Building drag and drop in to the tool, provided a very clear path for designers to follow. Open Design Kit, find your component, and build your UI. We also explored the idea of being able to select and drop multiple components in to a design at once.

<video controls autoplay loop muted>
  <source src="/img/design-kit/dragging-symbols-prototype.mp4" type="video/mp4" />
</video>

## Technical details

- Built in vanilla HTML, CSS, JavaScript
- Also used Cocoascript to access MacOS and Sketch ObjectiveC APIs (such as dragging and dropping a Sketch component)
