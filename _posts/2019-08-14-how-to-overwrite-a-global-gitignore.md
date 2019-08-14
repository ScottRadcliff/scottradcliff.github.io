---
layout: post
title: How to Overwrite a Global gitignore
date: 2019-08-14
---

I'm a big fan of ignoring files globally with git. And all was good until I needed to overwrite a setting in the that global `.gitignore`. Git has that covered to. Add a ! in the local `.gitignore` to re add those files on a per project bases.

This will add the tags directory to the tracked files just for this project.


    _site
    .sass-cache
    .jekyll-metadata
    !tags


