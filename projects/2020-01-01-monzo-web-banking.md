---
title: Monzo Web Banking
description: Building a consumer web banking product from scratch
featured_image: monzo-web-banking.png
role: Engineering
year: 2019 - Present
is_featured: true
---

Monzo is a digital bank based in the UK. With over 4 million personal account customers, we had started to explore offering accounts to small-to-medium businesses. As part of this offering, we wanted to offer a desktop experience to allow business customers to manage their accounts and make payments.

## Building on Next.js - focusing on what's important

The web banking app is built using Next.js. Below are a few reasons why we chose to build using it.

### Less time spent on configuration

As a relatively small team, the less time we spend on configuring webpack or babel, the more time we have to spend building real product features. Having the framework take care of these things has been a huge timesaver.

### Route based code splitting

As the number of features on the web app grows, so too does our codebase. In order to minimise the amount of unused code downloaded by customers, we've taken full advantage of next.js' route-based code splitting. This allows us to keep the initial load times of the web app relatively light.

## A library of reusable components

As this was our first major public web app, we started with a clean slate. In order to support future web projects, we started to build up a library of generic low-level components that could be reused in the future.

![A library of components running in Storybook](/img/web-banking/monzo-ui.png)

## Technical details

- React based web app (Next.js)
- API layer built with Go
- Apollo for data fetching
