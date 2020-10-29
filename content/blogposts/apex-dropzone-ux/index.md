---
title: 'APEX 20.2: improve Dropzone UX with CSS'
date: '2020-10-29'
description: 'Great News: APEX 20.2 is finally out and adds a Dropzone component. For me, it does not look as intuitive as the Plug-In did, so I tried to improve the UX of it with a few lines of CSS.'
slug: 'apex-dropzone-ux'
titleImage: './apex-20-2-dropzone-improved-css.png'
titleImageAlt: 'Dropzone with improved UX'
titleImageSource: { text: null, href: null }
tags: ['APEX', 'User-Interfaces']
---

As a longtime user of the great [Dropzone Plug-In](https://apex.world/ords/f?p=100:710:30566163864771::::P710_PLG_ID:DE.DANIELH.DROPZONE) by [Daniel Hochleitner](https://twitter.com/Dani3lSun), I am entirely happy that APEX 20.2 brought us an own Dropzone option for the File Browser item and we don't have to use a Plug-In any more.

```img-name
{"filename": "apex-20-2-dropzone.png", "alt": "Screenshot of the new Dropzone Component"}
```

After taking a closer look at the new component, I noticed that somehow it does not look like you can drop a file into there. It just looks like a basic APEX region but does not stand out for its use. The text says you can drop a file there, but with the Plug-In, I subconsciously knew you could without reading the info.

I googled pictures of typical Dropzones and noticed that most ones have a dashed border and stand out from the rest of the page contents. I applied a dashed border to the APEX Dropzone and darkened the background a little bit to make it stand out. I also rounded the border, added some shadow, and changed the border color when a file gets hovered over the region. You can see the results in the following GIF:

```gif-name
{"filename": "dropzone-improved-ux-css.gif", "alt": "Dropzone with CSS and improved UX"}
```

I think this improves the UX of the Dropzone and looks as great as the Plug-In does. Below are the few lines of CSS that you can use and of course tweak the way you like.

```gist
9607bfa8d62ce16bafd8ccf9e4abdcc1
```
