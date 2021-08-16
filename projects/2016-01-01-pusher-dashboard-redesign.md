---
title: Pusher Dashboard
description: How we rebuild our API dashboard
year: 2016
role: Engineering / Design
featured_image: pusher-dashboard.jpeg
---

## The Project

Besides the API, the dashboard is the main point of interaction that customers have with Pusher. As the company has grown, new features have been added, however these additions have resulted in a bloated interface that's no longer fit for purpose.

These UX issues, combined with various visual inconsistencies, led us to rebuilding the dashboard from scratch.

![Navigation in the Pusher Dashboard](/img/pusher-dashboard/pusher_dashboard_nav.gif)

<h2>Designing with <del>real data</del> <ins>no data</ins></h2>
Dashboards work great when they're filled with information, but what's the experience like if you've just started?

As a new user, being dumped into a half-blank view is disorientating. We wanted to encourage users to explore their new dashboard. In order to aid this journey, we developed the onboarding wizard which guides users through the process of creating their first app.

Since the wizard was first implemented, over 48,000 new apps have been created through it.

![Onboarding in the Pusher Dashboard](/img/pusher-dashboard/pusher_dashboard_wizard.png)

## Code to last

From a development perspective, one of the most glaring issues with the front-end code, was the wide variety of naming conventions, and duplicated styles.

In order to help better manage this in the future, I opted for a modular development process. Every pattern is clearly scoped, and split in to its own name-spaced partial.

```sass
// - - - - - - - - - - - - - - - - - - - - - - - - -
// Base & Component Styles
// - - - - - - - - - - - - - - - - - - - - - - - - -

@import "partials/base";
@import "grid/grid";
@import "components/boards";
@import "components/typography";
@import "components/buttons";
@import "components/forms";
@import "components/alerts";
@import "components/modal";
@import "components/tabs";
@import "components/table";
@import "components/account-manager";
@import "components/empty-state";
@import "components/user-avatar";
...
```

## Launching publically

After some testing with a small set of beta users, we finally launched our new dashboard into the wild. Through tools such as FullStory, we quickly identified areas where users were struggling, and quickly rolled out fixes.

For further reading, check out [these](http://blog.invisionapp.com/redesigning-api-dashboard/) [articles](http://thenextweb.com/dd/2016/02/26/pushers-new-interface-lets-developers-worry-about-apps-instead-of-infrastructure/).
