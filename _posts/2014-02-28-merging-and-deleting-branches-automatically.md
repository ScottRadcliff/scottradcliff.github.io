---
layout: post
title:  Merging And Deleting Branches Automatically
date:   2014-02-28
permalink: merging-and-deleting-branches-automatically
categories:
---

If there is one thing I do a lot of in Git, it's merging branches and then deleting them. I have this thing for merged branches laying around. It drives me nuts. I like to keep my repo as clean as I can.

So, I created a small shell script that I can call and pass a branch name to that merges the branch and then deletes the branch in one step.

If you want to use it, place it in your path and make it executable.

<script src="https://gist.github.com/ScottRadcliff/9270497.js"></script>
