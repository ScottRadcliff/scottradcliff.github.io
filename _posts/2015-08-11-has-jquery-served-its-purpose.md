---
layout: post
title:  Has Jquery Served Its Purpose
date:   2015-08-11
permalink: has-jquery-served-its-purpose
categories:
---

I used to be a jQuery hater. I’m sure that stuff is on the Internet somewhere. But when jQuery hit the scene, I was convinced that it didn’t really serve a purpose. I could already write JavaScript. What did I need a library for? Then I started to see some usefulness in the library. Animations were kinda cool. And the Ajax stuff was **really** cool.

I started to convert. I started to see how this tool could actually help me. But it was a pretty long road. One that I fought pretty hard. But in the end. jQuery won me over.

Those days were a little different. Writing the same code for different browsers was very common. There was a lot you had to remember. Lots of little quirks and bugs in browsers. I’m not so sure that’s the case anymore. Browsers have gotten pretty standard.

## jQuery as a Crutch

jQuery is a crutch now. It’s such a default in a web developer’s tool belt that they don’t ask if they need it. Until they start to ask if they need it.

What gets me is the API changes in jQuery. There are a lot of them. Functions get renamed all the time and old functions get deprecated and finally removed.

## An Example
There used to be this real handy function for attaching an event to an element and have that event watch for new elements and automatically attach the event handler to those also. It was called `live` and it was one of my favorite features of jQuery.

If you look at that function now, you will see that it has changed twice. I’m not even sure if they functionality has changed, but the name has changed.

> As of jQuery 1.7, the .live() method is deprecated. Use .on() to attach event handlers. Users of older versions of jQuery should use .delegate() in preference to .live().

So here we are. I can’t use `live`. I need to use `on`, unless I use an older version. Then I should use `delegate`.

This is just one example that frustrates me. I hit these deprecations all over the place.

I understand deprecations are common, but this is extreme.

## Another example.

To access an element’s attributes, you could use `attr`. This still kinda works on some things. More often than not, I need to use `prop` in Firefox or it just fails silently. I don’t know why. They seem like they do the same thing.

Here is the same code in JavaScript: `getAttribute`. Why am I using an abstraction that seems to change? I can’t answer that. I don’t know.

I think it’s time to go back to vanilla JavaScript. Well, except for Ajax. That doesn’t seem to change much and is super helpful. But then again, the cool kids tell me there are libraries just for Ajax now.
