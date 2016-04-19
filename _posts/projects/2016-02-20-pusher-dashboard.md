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
Besides raw code, the dashboard is the main point of interaction that customers have with Pusher. As the company has grown, new features have been added, however these addtions have been at the cost of the overall user experience and aesthetic.

A subteam consisting of myself, [Hamilton](https://twitter.com/hamchapman) (the project owner), and [Lauren](https://twitter.com/laurenmplews) (our lead designer), we set about planning how our new dashboard should work.

{% image 2016/04/pusher_dashboard_nav.gif alt:"Quick access to all apps" %}

## Simple from the off
The dashboard works great when it's filled with information, but what's the experience like if you've just started? We wanted to encourage a sense of exploration for new users, and so developed the onboarding wizard. 

{% image 2016/04/pusher_dashboard_wizard.png alt:"The all new onboarding wizard" %}

## Reusable patterns for the future
As the product grows and new features are added, it's important that the front-end codebase remains as slick and as tight as possible. Every style from the graphs down to the titles have been componentized.

```sass
// - - - - - - - - - - - - - - - - - - - - - - - - -
// Base & Component Styles
// - - - - - - - - - - - - - - - - - - - - - - - - -

@import "partials/base";
@import "partials/grid";
@import "partials/boards";
@import "partials/typography";
@import "partials/buttons";
@import "partials/forms";
@import "partials/alerts";
@import "partials/modal";
@import "partials/tabs";
@import "partials/table";
@import "partials/account-manager";
@import "partials/empty-state";
@import "partials/user-avatar";
...
```


## Launching publically
After some testing with a small set of beta users, we finally launched our new dashboard into the wild. Through tools such as FullStory, we quickly identified areas where users were stuggling, and quickly rolled out fixes.

For further reading, check out [these](http://blog.invisionapp.com/redesigning-api-dashboard/) [articles](http://thenextweb.com/dd/2016/02/26/pushers-new-interface-lets-developers-worry-about-apps-instead-of-infrastructure/).

