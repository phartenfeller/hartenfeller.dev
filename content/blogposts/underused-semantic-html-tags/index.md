---
title: 10 semantic HTML tags to better structure your website
date: '2020-06-15'
description: 'HTML 5 added a set of new HTML tags known as "semantic" tags to better structure websites. You should use them to avoid sinking in chaos with many levels of nested divs. They also have the benefit to make your website more accessible.'
slug: 'underused-semantic-html-tags'
titleImage: './semantic-html-hartenfeller.jpeg'
titleImageAlt: 'semantic html'
titleImageSource: ''
tags: ['HTML', 'Web-Development']
---

## Semantic HTML

The idea of semantic HTML is that some special tags give a certain meaning to their content. A well-known example is headings (h1-h6) in HTML. Besides giving default styles (that get overwritten most of the time), everyone that looks at the HTML can directly see that the text inside the h1-tag is an important heading. Instead of using HTML-headings you could also do something like this, but that is of course counter-intuitive:

```html
<style>
  .heading {
    font-size: 1.5rem;
    font-weight: bold;
  }
</style>
<div class="heading">My heading</div>
```

Using the example code above, the average user just visiting the page might not spot the difference to a real heading tag but it has drawbacks in relation to accessibility. Blind users for example who depend on screen readers don't see the cool styles you crafted for your headings but instead, they get the info about headings from the screenreader, which gets the info from the HTML. Another huge factor is search engine optimization (SEO). Google states in their [SEO Starter Guide](https://support.google.com/webmasters/answer/7451184) that headings are important to get the hierarchical structure of the page. So by using semantic HTML you help the search engines to better understand your page.

Headings and other examples like [description lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#examples) and [ordered/unordered lists](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) are widely used. HTML 5 added a set of tags that are not used as often and I always tend to forget about. In the following paragraphs, I want to present to you 10 of the most useful ones.

## 1 - 6: Header, Nav, Article, Section, Aside and Footer

These tags were added to better structure important and main parts of the website. An example of how these tags can be used is displayed in the following image:

```img-name
{"filename": "semantic-structure-hartenfeller.jpg", "alt":  "structure how header, nav, article, section, aside and footer can be used"}
```

- **[Header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)**: introductory content as page header or article header
- **[Nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)**: section that provides navigation links as a menu, table of content or breadcrumbs
- **[Main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)**: main content of a page
- **[Article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)**: complete or self-contained composition of a website that can independently distributable or reusable
- **[Section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)**: generic section of a page, usually comes with a heading
- **[Aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)**: content that is indirectly related to the main content like a sidebar
- **[Footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)**: footer to the nearest sectioning content for example a page footer or author details after a blogpost

## 7: Time

The [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article) element can be used to represent a point of time. It can (or should) have a datetime attribute which indicates the time in a machine readable format:

```html
<p>I went to bed at <time datetime="23:00">11 o'clock</time> in the evening</p>
<p>I was born on the <time datetime="21-07-1965">21st July of 1965</time></p>
```

Valid formats are [defined the W3C](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#dates-and-times).

## 8: Address

The [address](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address) tag can be used for enclosed contact information blocks:

```html
<address>
  <a href="mailto:test@example.com">E-Mail</a>
</address>
```

## 9 and 10: Figure and Figcaption

The [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) element represents a picture. Optionally a [figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) can be added to describe the figure.

```html
<figure>
  <img src="example.com/image.jpg" alt="mona lisa" />
  <figcaption>Figure 1: Wonderful portrait of mona lisa</figcaption>
</figure>
```

## Summary

I think semantic HTML really helps to bring structure to your code. When writing my own HTML structures I often end up with a div hell where it is hard to keep track of which does what. You can easily change many div tags to some semantic tags listed above. Besides that, the website becomes a little bit more accessible and loved by the SEO-crawlers.

So the next time you create for example a card component, you could structure it like this:

```html
<section class="card">
  <header class="card-header">
    <div class="card-icon"></div>
    <h2>Card Header Text</h2>
  </header>
  <main class="card-body">
    lorem ipsum dolor sit amet, consectetur adipiscing
  </main>
  <footer class="card-footer">
    <button class="red-btn">Delete</button>
    <button class="hot-btn">Accept</button>
  </footer>
</section>
```
