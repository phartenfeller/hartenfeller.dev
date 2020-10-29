---
title: 'APEX: Highlight important values in tables with chips'
date: '2020-06-08'
description: 'Tables make it hard to give hierarchy to data. To underline the importance of certain values in a table you can use chips that highlight the values with colors.'
slug: 'apex-highlight-values-chips'
titleImage: './apex-status-chip-hero-hartenfeller.png'
titleImageAlt: 'Display of status chips'
titleImageSource: { text: null, href: null }
tags: ['APEX', 'User-Interfaces']
---

While tables are really good at structuring data, they don't give hierarchy to the information. Some columns are more important than others, so the user should be able to easily scan the data to quickly find needed entities. One way to highlight the values of a column is by using color to underline for example a status of a dataset. How it looks is shown below:

```html-embed
<style>
  table {
    border: 1px solid #e6e6e6;
    border-collapse: collapse;
    text-align: center;
    font-size: 1.5rem;
    margin: auto;
  }

  th,
  td {
    border: 1px solid #e6e6e6;
    padding: 10px 16px;
  }

  td {
    border-top-width: 0;
    border-bottom-width: 0;
  }

  .chip {
    padding: 4px 10px;
    border-radius: 16px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .chip-success {
    background: #cdffe0;
    color: #00592e;
  }

  .chip-danger {
    background: #ffebeb;
    color: #a50000;
  }

  .chip-warning {
    background: #fffedc;
    color: #764400;
  }

  .chip-primary {
    background: #e9f5ff;
    color: #004f95;
  }

  .chip-purple {
    background: #eddbfa;
    color: #5200a5;
  }

  .chip-pink {
    background: #ffeffa;
    color: #990067;
  }

  .chip-orange {
    background: #fff2e4;
    color: #8d3600;
  }

  .chip-teal {
    background: #e4fdff;
    color: #00526e;
  }
</style>
<table>
  <thead>
    <tr>
      <th><span>Variant</span></th>
      <th><span>With Bullet Symbol</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span class="chip chip-primary">primary</span></td>
      <td><span class="chip chip-primary">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-success">success</span></td>
      <td><span class="chip chip-success">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-warning">warning</span></td>
      <td><span class="chip chip-warning">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-danger">danger</span></td>
      <td><span class="chip chip-danger">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-purple">purple</span></td>
      <td><span class="chip chip-purple">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-pink">pink</span></td>
      <td><span class="chip chip-pink">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-orange">orange</span></td>
      <td><span class="chip chip-orange">• lorem ipsum</span></td>
    </tr>
    <tr>
      <td><span class="chip chip-teal">teal</span></td>
      <td><span class="chip chip-teal">• lorem ipsum</span></td>
    </tr>
  </tbody>
</table>
```

These colored pills are called chips and they first caught my attention inside the [Material Design Guidlines](https://material.io/components/chips) by Google. I think they are a good approach to highlighting values because of their minimal look and the ability to also transfer meaning by the chosen color. Similar to APEX alerts, red can be used for an error status and green for a successful state. Using a light shade of the color as the background and a darker one as the text color is also used in Microsoft Excel and looks really clean in my opinion.

You can implement these chips in your application too with tiny effort by adding an HTML-Expression column inside your report. In there you can add a span element with the class "chip" which adds the styles relevant to all variations like the shadow or the rounded shape. The second class used is the chip-variant. For a warning status, I used "chip-warning" as a class but you can change the class names. Inside the span, you can display any text you want.

```html
<span class="chip chip-&STATUS.">&STATUS_TEXT.</span>
```

After that, you need to add the actual CSS-Styles for the classes to the page. The ones I used are listed below but you can of course modify them as you prefer. Keep in mind that a lighter text color might look nicer but isn't as accessible as darker ones. The text-color in the styles below all have a AAA contrast-ratio to the background.

```gist
b4c67ff691ecda0081312190f78e4095
```
