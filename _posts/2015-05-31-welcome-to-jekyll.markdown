---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-05-31 15:12:43
categories: jekyll update
---
You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight scss %}
$grid-names: (
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    8: eight,
    9: nine,
    10: ten,
    11: eleven,
    12: twelve
);

@each $number, $name in $grid-names {

    .inner__col-#{$name} {
        @include grid-column(12);

        @media #{$medium-up} {
            @include grid-column($number);
        }
    }
}

.content-area {
    padding-top: 50px;
    overflow: auto;
}

.main-content {
    @include grid-column($columns:12, $collapse: true);

    @media #{$medium-up} {
        @include grid-column($columns:8);
        padding-left: 1.875rem !important;
        padding-right: 1.875rem !important;
    }

    @media #{$large-up} {
        @include grid-column($columns:7);
    }
}
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
