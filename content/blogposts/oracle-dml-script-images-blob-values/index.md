---
title: 'Oracle: Generate DML scripts for images / blobs'
date: '2020-06-01'
description: 'I want to share a little script I wrote which generates a DML scripts for blob values like images. The output script can be used in your schema install script with your other master data.'
slug: 'oracle-dml-script-images-blob-values'
titleImage: './sarandy-westfall-qqd8APhaOg4-unsplash.jpeg'
titleImageAlt: 'multiple polaroid photos'
titleImageSource:
  {
    text: 'Photo by sarandy westfall',
    href: 'https://unsplash.com/photos/qqd8APhaOg4',
  }
tags: ['Oracle', 'APEX']
---

Sometimes your master data includes images. One problem with blob data is that you can't easily include them in your install script for a database schema. But in times where DevOps is becoming more important every day (and that is really good), I just want to easily empty a database and install it from scratch without worrying about my blobs. To solve this problem I've written a little script that exports blob values from a table to an insert script with the blobs casted to raw text. APEX also used this technique to install CSS or JavaScript files for Plug-Ins.

```gist
41f727791dd0926ead0b55568af9fded
```

To use this script you have to adjust the values in the cursor definition. The script produces an update statement because I wanted to add the images after I inserted the main data of the table, but you can adjust the script to generate insert value.

Note that the output script gets really large (thousands of lines) when you have a lot of images and really big images. Because of this the script inserts the output script into a table instead of logging it with dbms_output for example. Depending on your image sizes and amount this script could not be a good solution because it can take some time to transform the raw data back to blobs.

If you have a better solution / feedback feel free to comment under the gist.

Thanks to Kees Vlek who made a [blogpost about how to export static workspace files](https://orcado.eu/export-static-workspace-files-in-apex5/) where I got the code on how to transform the blobs to raw data from.
