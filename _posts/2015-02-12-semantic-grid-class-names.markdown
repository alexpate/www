---
layout: post
title:  "Semantic Grid Class Names with Sass"
date:   2015-02-12 12:12:33
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan pharetra urna id tristique. Curabitur augue justo, vehicula a lectus id, tempor bibendum velit. Sed ultricies ultrices tellus at venenatis. Fusce suscipit efficitur fringilla. Morbi lacinia arcu vitae sollicitudin maximus. Suspendisse potenti.

Sed ultricies ultrices tellus at venenatis. Fusce suscipit efficitur fringilla. Morbi lacinia arcu vitae sollicitudin maximus. Suspendisse potenti.

## The Markup
``` scss
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
```
Etiam at consequat mauris, ac ultrices urna. Cras quis nisi odio. Nam sodales elit eget libero maximus ornare. In venenatis dui eu dolor vehicula, eget commodo magna luctus. Aliquam ante massa, varius ut nunc ac, venenatis sollicitudin risus. Aliquam erat volutpat. Donec eget lectus ac purus eleifend placerat. Vestibulum lorem sapien, pulvinar quis dui vel, cursus suscipit nibh. Proin non purus laoreet, sodales augue eget, ultrices orci. Fusce nec vestibulum dolor. Duis auctor leo vitae facilisis feugiat. Ut id cursus magna. Aenean fermentum neque vitae dignissim venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Donec lectus risus, sollicitudin nec pretium non, suscipit et leo. Sed vel arcu sapien. Nunc lectus mauris, tempor tincidunt accumsan ac, tempus eu orci. Ut dignissim justo et malesuada dictum. Vivamus aliquam bibendum rhoncus. Nulla condimentum elementum enim, et blandit diam ornare nec. Duis orci lectus, rhoncus ut mollis sed, maximus sed velit. Nam sed leo vel purus aliquet interdum eget quis enim. Vivamus finibus ligula non enim ultrices vehicula in ac risus. Ut interdum nisl laoreet purus lacinia dapibus. Morbi cursus tortor ante, vel consectetur neque imperdiet in. Mauris id elit suscipit, rhoncus sem sed, porttitor arcu. Cras hendrerit laoreet sem ut pellentesque. Integer nec vulputate quam.

Nullam imperdiet nec nibh et accumsan. Curabitur at scelerisque ex. Suspendisse pellentesque dui eget bibendum eleifend. Nullam in risus hendrerit, facilisis nisi ut, congue nibh. Maecenas et magna enim. Suspendisse iaculis risus turpis, in faucibus augue placerat vel. Aliquam erat volutpat. Donec fringilla nibh ac est efficitur pharetra. Maecenas cursus facilisis leo, ut condimentum augue vehicula sed. Quisque tempus ultrices pharetra.
