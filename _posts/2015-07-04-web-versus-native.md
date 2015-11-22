---
layout: post
title:  Web Versus Native
date:   2015-07-04
categories:
---

Somewhere along the way, we lost our way. We went from using the web at what it’s ideal for, linking documents together, to trying to make it do something it’s not good at. Making *desktop-like applications*. Or maybe we could call them *native-type applications*, since what we are really doing is trying to mimic mobile devices.

I think I know what this stems from. I think it’s just a fact that mobile is taking over at an rapid pace. You either have to get on board or get out of the way. Clearly no one wants to get out of the way, making software is fun.

But what if, like me, you don’t really have much, if any, experience making installable software? It’s not like web development. It’s a completely different animal. What do you do if you can’t get on board because you don’t *want* to make native software?

Simple.

You bring it to where you are comfortable. The web.

Seems like a good idea. Use JavaScript to make smooth animations instead of page loads. The user will never know. They will *think* it’s like an iPhone app. But they will know. They will know they are on a website. They will know because, more than likely, they use the web everyday. And they know it’s not an iPhone app. And they are okay with that. They know pages load, links to go other pages, and they expect URLs to work.

What we’ve done is make it convenient for **us**. Sure we tell the customer/user that we have done this for them. Look at how fast the transitions are! They don’t care. Look at how only part of the page gets updated! They don’t care. Look at how the URL changes but the page doesn’t. Again. They don’t care.

If an effort to side step making a truly delightful web experience on the web. And a delightful native experience on a device. We have introduced a level of complexity that we think makes it awesome, when in reality, it causes more issues than it solves. Some may argue there wasn’t a problem to begin with.

How do fix this?

Let’s call it [SRP](http://en.wikipedia.org/wiki/Single_responsibility_principle). Use the web for the web and use native for native. Understand that native apps are generally faster. They are closer to the metal. Web apps will always have a browser between the user and the computer.
