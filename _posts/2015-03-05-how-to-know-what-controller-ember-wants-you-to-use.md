---
layout: post
title:  How To Know What Controller Ember Wants You To Use
date:   2015-03-05
categories:
---

As I continue my dive into JavaScript frameworks and currently working with Ember, I really struggle with knowing what Ember wants  me to do.

With Rails, the server log usually gives me a clue. With Ember the server log, or output, is less helpful. Part of the reason for this is because Ember seems to silently handle errors. I think part of the reason is that Ember is doing things for me, and part of it is the fact that JavaScript **loves** to fail silently.

When working with a feature in an existing Ember app, I needed to now what controller Ember expects. I had a form using [Dockyard’s](http://dockyard.com/) super cool [EasyForm](https://github.com/dockyard/ember-easy-form), but every time I submitted the form, the console would yell at me saying that my controller didn’t handle the action.

After hours of reading docs and trying to understand how the controller was wired up for this form, a coworker had the perfect solution.

    {{controller}}

Place that code in your template and it will print what controller that template is tied to.

I think of this as similar to Ruby’s `debug` method, where I can print out data in the view so I can try and diagnose errors I don’t understand.

It’s not a great solution. Some sort of proper debugging method would be way more helpful, but it works for now.

If you know of a better way, please let me know.

