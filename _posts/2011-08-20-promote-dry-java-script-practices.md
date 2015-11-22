---
layout: post
title:  Promote Dry Java Script Practices
date:   2011-08-20
categories:
---

I’ve griped about jQuery plenty. Not the framework itself, it’s an awesome tool to have when doing front end work, but the code that many produce with jQuery. I like to call it <em>anonymous functionitis</em>. New developers see anonymous functions in jQuery code, assume <em>everything</em> should be done that way, and create code that doesn’t promote reuse. The code is full of functions that serve one purpose and need to be recreated if they are needed elsewhere. Another thing that bugs me is throwing everything in <span class="caps">DOM</span> ready. I mark this up as inexperience.

<a href="http://blog.rebeccamurphey.com/">Rebecca Murphy</a> has done a nice job of summing this up in her JS Conf talk <a href="http://jsconf.eu/2010/speaker/the_jquery_divide_by_rebecca_m.html">The jQuery Divide</a>. I think she is right; we need to educate those that write poor jQuery. But how?
<ul>
	<li>Teach the need to understand what jQuery is doing. New developers should dig into the code and learn how jQuery does what it does.</li>
	<li>Promote writing JavaScript without jQuery.</li>
	<li>Take a part of JavaScript (event handlers, animations, Ajax) and really explain how it works.</li>
</ul>

If those of us that understand the language, help teach those that do not, maybe we can  move the developer community forward.  With event driven JavaScript gaining speed, there hasn’t been a better time to promote the core language.
