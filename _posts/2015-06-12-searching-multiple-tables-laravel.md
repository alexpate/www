---
layout: post
title:  "Searching multiple tables with one query with Laravel"
date:   2015-06-12 11:19:15
---
Whilst developing the back-end for my final year project (redesign of Panasonic Global), I ran in to the problem of how best to search multiple tables at once through the relationship models.

## The Problem

Okay, so that's probably not the best way to describe it. We have a search field that allows users to search for products by either the product name, or the product category. So searching for 'cameras', would show all of the cameras, where as searching for 'Lumix DMC-GM1' should only show that individual product.

The data is stored in tables as such:

| Products | Categories |
|----------|------------|
| *prod_id* | *cat_id* |
| prod_name | cat_name |
| prod_pretty | cat_slug |
| prod_category * | ... |
| ... |


Of course this could be done relatively easily using multiple queries, however where possible it's best to minimize the number of database queries we're making.

## The Solution

{% highlight php startinline %}

    $products = Product::whereHas('category', function($query) use($term) {
        $query->where('cat_name', 'like', '%'.$term.'%');
    })->orWhere('prod_pretty','LIKE','%'.$term.'%')->orderBy($order, 'asc')->get();

{% endhighlight %}

So first, we search (via a product model) for all products that have a category name that is like the category name:

{% highlight php startinline %}

    Product::whereHas('category', function($query) use($term) {
        $query->where('cat_name', 'like', '%'.$term.'%');
    })

{% endhighlight %}

If this returns no results, then we fall back to the second query, where we query the product directly, checking if the product name is like the search query:

{% highlight php startinline %}

    ->orWhere('prod_pretty','LIKE','%'.$term.'%')->get();

{% endhighlight %}
