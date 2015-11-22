---
layout: post
title:  Async Javascript Doesnt Work Like I Thought
date:   2014-02-03
categories:
---

Turns out async calls in JavaScript don't work like I expect them too.

I updated the code in my personal RSS reader to use Ajax calls for each source, thinking that it would get content on the screen faster than fetching the data on the server and returning it all once.

I was wrong.

It just ties up the browser. Yes, content gets on the screen more quickly. But I can't scroll or interact with the page at all until all the sources are loaded, parsed, and placed into the DOM.

I have a few options that I could try.

1) Revert back to the loading all data initially on the server side. Then return that data. I will still have the option of selecting a single source from the sidebar and loading data quickly based on what I want to read.

2) Split my sources into groups of like 4. Then get the data for four sources at a time.

3) Add something that allows me to save the updated at time, and only fetch what I haven't seen yet. Not sure if this will help performance or not because I still have to make a http call.

For now, I plan on reverting it back to letting the server fetch everything and return that. That's the better user experience based on what I have so far.
