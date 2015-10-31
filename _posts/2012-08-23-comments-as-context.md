---
layout: post
title:  Comments As Context
date:   2012-08-23
permalink: comments-as-context
categories:
---

I recently had the rare opportunity to edit some old code that I left behind. I expected to be embarrassed, and I was, but I found something a little unexpected. The comments that I had written were superb.

The comments were superb because they gave me context. They were documentation. I knew why I wrote that code, what it did, and what my inout/output was expected to be. This is real simple stuff that I somehow convinced myself that real programmers don't need.

I admit it. I drank the kool aid. I bought into comments being unnecessary. A code smell. Something that novice programmers did because their code wasn't clear enough. While I do believe that code should be _somewhat_ self-documenting, a few lines above each method and/or file take almost no time to write and help the next guy dive in quickly. Remember, that next guy might be you, even if it's your code.

I won't go into how inline comments are the worst comments, and this is how you end up with stuff like **# Hack** or **# Fix me**, but I do encourage you to write a comment block above each method first. Before you write any code. List the input expected, including parameters and data types, and the output expected. Also include an example of how it's used. Not only will this help with the design, but will help you later on down the road.

Lastly, have a look at [tomdoc](http://tomdoc.org/). As usual, Tom Preston-Werner is onto something here. The only thing that might be missing is the date and time the method/file was created/edited. But names and dates have been replaced with solid commit messages.

