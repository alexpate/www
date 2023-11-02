---
title:  "Searching multiple tables with one query with Laravel"
summary: "Whilst developing the back-end for my final year project (redesign of Panasonic Global), I ran in to"
---

Whilst developing the back-end for my final year project (redesign of Panasonic Global), I ran in to the problem of how best to search multiple tables at once through the relationship models.

## The Problem

Okay, so that's probably not the best way to describe it. We have a search field that allows users to search for products by either the product name, or the product category. So searching for 'cameras', would show all of the cameras, where as searching for 'Lumix DMC-GM1' should only show that individual product.

Here's some basic context to the issue. We have two models ('Product', and 'Category'). They are joined on a one-to-many relationship:

```php
// app/models/Product.php
class Product {
  ...

  public function category() {
    return $this->belongsTo('Category', 'product_category');
  }
}
```

```php
// app/models/Category.php
class Category {
  ...

  public function product() {
    return $this->hasMany('Product', 'category_id');
  }
}
```

(The public functions in each model provide us with a method to search a table through another table. For example, we can search for all categories via a product, which would only give us the categories that that individual product is in. This will be useful later.)

The data is stored in tables as such:

| Products            | Categories    |
| ------------------- | ------------- |
| _product_id_        | _category_id_ |
| product_name        | category_name |
| product_category \* | category_slug |
| ...                 | ...           |

The `product_category` refers to the `category_id`.

Of course this could be done relatively easily using multiple queries, however where possible it's best to minimize the number of database queries we're making.

## The Solution

Here's the final code:

```php
$products = Product::whereHas('category', function($query) use($term) {
    $query->where('category_name', 'like', '%'.$term.'%');
})->orWhere('product_name','LIKE','%'.$term.'%')->orderBy($order, 'asc')->get();
```

But let's break it down a bit.

So first, we search for all products that have a related category. This is using the 'category()' function that defined earlier in the Product Model. We use this to see if our query is 'like' any of the related category names.

```php
Product::whereHas('category', function($query) use($term) {
    $query->where('category_name', 'like', '%'.$term.'%');
})
```

If this returns no results, then we fall back to the second query, where we query the product directly, checking if the product name is like the search query:

```php
->orWhere('product_name','LIKE','%'.$term.'%')->get();
```

Here's a quick breakdown in pseudocode:

* User searches for something
* First, find all products that are in categories, and match the search query against each category name.
* If this returns any results, great!
* Next, find all products that have a name containing the search query
* If we have results, show them. Otherwise, show something else.
