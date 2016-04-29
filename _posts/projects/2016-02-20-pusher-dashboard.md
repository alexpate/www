---
layout: work
title: Pusher Dashboard
sub: "Redesigning our API dashboard"
slug: pusher-dashboard
backgroundColor: #3cd6ee
description: "The story of how we redesigned our API dashboard"
category: project
---

## The Project
Besides raw code, the dashboard is the main point of interaction that customers have with Pusher. As the company has grown, new features have been added, however these additions have resulted in a bloated interface that's no longer fit for purpose.

These UX issues, combined with various visual inconsitencies, led us to rebuilding the dashboard from scratch.

As one of the companies biggest assets, it quickly became clear that there were going to be many opinions on the project. Whilst it was important that we didn't just shut out others from being involved, we had to manage how we dealt with feedback. As a way to better define who was directly involved in the project, we created a subteam consisting of myself, [Hamilton](https://twitter.com/hamchapman) (the project owner), and [Lauren](https://twitter.com/laurenmplews) (our lead designer).

{% image 2016/04/pusher_dashboard_nav.gif alt:"Quick access to all apps" %}

<h2>Designing with <del>real data</del> <ins>no data</ins></h2> 
Dashboards work great when they're filled with information, but what's the experience like if you've just started?

As a new user, being dumped into a half-blank view is disorientating. We wanted to encourage users to explore their new dashboard. In order to aid this journey, we developed the onboarding wizard which guides users through the process of creating their first app.

Since the wizard was first implemented, over 48,000 new apps have been created through it.

{% image 2016/04/pusher_dashboard_wizard.png alt:"The all new onboarding wizard" %}

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
After some testing with a small set of beta users, we finally launched our new dashboard into the wild. Through tools such as FullStory, we quickly identified areas where users were stuggling, and quickly rolled out fixes.

For further reading, check out [these](http://blog.invisionapp.com/redesigning-api-dashboard/) [articles](http://thenextweb.com/dd/2016/02/26/pushers-new-interface-lets-developers-worry-about-apps-instead-of-infrastructure/).

