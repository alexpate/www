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

These UX issues, combined with mah visual inconsitencies, lead us to rebuilding the dashboard from scratch.

As the dashboard is the interface to our main product, it quickly became clear that there were going to be many opinions from many voices on the project. Whilst it was important that we didn't just shut out others from being involved, we had to manage how we dealt with feedback. As way to better define who was directly involved in the project, we created a subteam consisting of myself, [Hamilton](https://twitter.com/hamchapman) (the project owner), and [Lauren](https://twitter.com/laurenmplews) (our lead designer).


{% image 2016/04/pusher_dashboard_nav.gif alt:"Quick access to all apps" %}

## Simple from the off
The dashboard works great when it's filled with information, but what's the experience like if you've just started? We wanted to encourage a sense of exploration for new users, and so developed the onboarding wizard. 

{% image 2016/04/pusher_dashboard_wizard.png alt:"The all new onboarding wizard" %}

## Code to last
From a development perspective, one of the most glaring issues with the front-end code, was the wide variety of naming conventions, and duplicated styles.

In order to help better manage this in the future, I opted for a modular development process, whereby every pattern is scoped to it's own partial. 

For example, the CSS for a user avatar should live in one place.

As the product grows and new features are added, it's important that the front-end codebase remains as slick and as tight as possible. Every style from the graphs down to the titles have been componentized.

```scss
// stylesheets/partials/_user-avatar.scss
.user-avatar {
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  margin: 0 10px 0 0;
  padding: 0;

  > img {
    display: block;
    height: 100%;
    width: 100%;
  }
}

$user-avatar-sizes: (
  sm: 24px,
  md: 30px,
  lg: 48px
);

@each $avatarPrefix, $avatarSize in $user-avatar-sizes {
  .user-avatar--#{$avatarPrefix} {
    height: $avatarSize;
    width: $avatarSize;
    min-width: $avatarSize;
  }
}
```


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

