---
layout: post
title:  "Chameleon - A better way to share front-end assets across projects"
---

**Context**: A few days ago I ran a session with the rest of the Pusher team about a new project I've been working on, to help manage our front-end assets across multiple projects. This blog post accompanies those slides.

## The Problem

At Pusher, we have three main projects: Our API dashboard, our marketing site, and our blog. Visual consitency is key to ensuring that we remain on brand. As much of this is achieved through my work as a front-end engineer

{% image 2016/04/chameleon_1.jpg %}
{% image 2016/04/chameleon_css_stats.jpg %}

## First steps

We knew from the off that we needed to have a single repository that held key front-end stores, such as variables and reusable components.

However, this then raised the issue of how this would be loaded into each project. For the most part, our projects are ruby based, so creating a gem was the simple solution. This isn't the case for our blog (which runs on WordPress).
