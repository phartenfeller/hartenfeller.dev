---
title: 'APEX 20.2: improve Dropzone UX with CSS'
date: '2020-10-28'
description: 'APEX 20.2 is finally out and bring a new Dropzone component. For me, it does not look very intuitive so I improve the UX of it with a few lines of CSS.'
slug: 'apex-dropzone-ux'
titleImage: './apex-20-2-dropzone-improved-css.png'
titleImageAlt: 'Dropzone with improved UX'
titleImageSource: { text: null, href: null }
tags: ['APEX', 'User-Interfaces']
---

As a longtime user of the [Dropzone Plug-In](https://apex.world/ords/f?p=100:710:30566163864771::::P710_PLG_ID:DE.DANIELH.DROPZONE) by [Daniel Hochleitner](https://twitter.com/Dani3lSun), I am quite happy that APEX 20.2 brought us an own Dropzone option for the File Browser item.

```img-name
{"filename": "apex-20-2-dropzone.png", "alt": "Screenshot of the new Dropzone Component"}
```

After taking a look at the new component I noticed that somehow it does not look like you can drop a file into there. It looks like a normal basic APEX region but does not stand out. The text says you can simply drop a file there but with the Plug-In, I subconsciously knew you could without reading the text.

I googled pictures of typical Dropzones and noticed that most ones have a dashed border. I applied that to the APEX Dropzone and darkened the background a little bit to make it stand out. I also rounded the border, added shadow, and changed the border color when a file hovers over the region. The results are in the following GIF:

```gif-name
{"filename": "dropzone-improved-ux-css.gif", "alt": "Dropzone with CSS and improved UX"}
```

Here is the complete CSS that you can use and of course tweak the way you like.

```gist
9607bfa8d62ce16bafd8ccf9e4abdcc1
```
