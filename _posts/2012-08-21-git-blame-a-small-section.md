---
layout: post
title:  Git Blame A Small Section
date:   2012-08-21
categories:
---

I work on a few large projects and there are times when I need to see some details about a section of code. Not necessarily who wrote it, but more when it was written or what commit it is tied to. Often commits have the best docs.

    git blame [file] -L start, end

This will return each line you requested from the start line to the end line, in the file you asked for. Each line will contain the commit sha, date, and name of the person who committed it.

A great way to grab a small section without loading the whole file in your terminal window.
