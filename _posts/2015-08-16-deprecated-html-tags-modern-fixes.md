---
layout: post
title:  "Deprecated HTML tags, and modern day fixes: Bring back blink..."
---
Over the years, HTML features and tags have come and gone: Marquee, blink, and strike just to name a few. But what if you're still after some of those effects? Here's how to achieve them whilst sticking to modern standards.

---

1. [Blink](#blink)
2. [Strikethrough](#strikethrough)
3. [Marquee](#marquee)
3. [Center](#center)

---

## Blink

{% highlight scss %}
.blink {
	animation: blink 1s steps(5, start) infinite;
}

@keyframes blink {
	to {
    	visibility: hidden;
    }
}
{% endhighlight %}

<div class="live-code">
	<style>
		.live-code__blink {
			animation: blink 1s steps(5, start) infinite;
		}
		@keyframes blink {
			to {
		    	visibility: hidden;
		    }
		}
	</style>
	Hello, I <span class="live-code__blink">blink!</span>
</div>


## Strikethrough

The old <code>&lt;strike&gt;</code> tag has been deprecated in HTML5. There are several ways of recreating this effect. If you're wanting to show information that has been deleted and replaced with new information, then you can make use of the <code>&lt;del&gt;</code> and <code>&lt;ins&gt;</code> tags.

{% highlight html %}
<p>I live in <del>Southampton</del> <ins>London</ins></p>
{% endhighlight %}

This leaves it up to the browser to apply basic styling (linethrough/underline):
<div class="live-code">
	I live in <del>Southampton</del> <ins>London</ins>
</div>

Or simply use the css text-decoration property 'line-through':

{% highlight scss %}
.strike {
	text-decoration: line-through;
}
{% endhighlight %}

<div class="live-code">
	<style>
		.live-code__strike {
			text-decoration: line-through;
		}
	</style>
	<span class="live-code__strike">I'm striked out</span>
</div>

## Marquee

The <code>&lt;marquee&gt;</code> tag, allowed you to create an animation of scrolling text. Here's how to do it to modern standards:

{% highlight scss %}
.marquee {
    animation: marquee 15s linear infinite;
    overflow: hidden;
    width: 100%;
}

@keyframes marquee {
    from   {
    	text-indent: 120%;
    }
    to {
    	text-indent: -250%;
    }
}
{% endhighlight %}

And for extra points, you can add a paused state when you hover:

{% highlight scss %}
.marquee:hover {
    animation-play-state: paused
}

{% endhighlight %}

<div class="live-code">
	<style>
		.live-code__marquee {
		    width: 100%;
		    overflow: hidden;
		    white-space: nowrap;
		    animation: marquee 15s linear infinite;
		}

		@keyframes marquee {
		    from   {
		    	text-indent: 120%;
		    }
		    to {
		    	text-indent: -250%;
		    }
		}
		.live-code__marquee:hover {
		    animation-play-state: paused
		}
	</style>
	<div class="live-code__marquee">At this point, i'd set you up with a chimpanzee if it'd brought you back to the world! you're only supposed to blow the bloody doors off! you wouldn't hit a man with no trousers on, would you?</div>
</div>

## Center

Of all of the above, the <code>&lt;center&gt;</code> tag is probably the one I see still in use today. Centering something using css isn't too hard:

{% highlight scss %}
.center-text {
    text-align: center;
}
{% endhighlight %}

<div class="live-code">
	<style>
		.live-code__center-text {
    		text-align: center;
		}
	</style>
	I'm non-centered text.
	<br/>
	<div class="live-code__center-text">I'm centered!</div>
</div>

<em>*Note: If you're using <code>text-align: center</code> on a span element, remember to set a width.</em>

And for centering other elements:

{% highlight scss %}
div {
	width: 100px;
   	background: red;
    height: 100px;
}

.center-div {
    margin: 0 auto;
}
{% endhighlight %}

<div class="live-code">
	<style>
		.live-code__center-div {
		    width: 100px;
		    height: 75px;
		   	background: red;
		}

		.live-code__center-div--centered {
			margin: 0 auto;
			background: green;
		}
	</style>
	<div class="live-code__center-div">I'm non-centered</div>
	<br>
	<div class="live-code__center-div live-code__center-div--centered">I'm a centered div!</div>
</div>