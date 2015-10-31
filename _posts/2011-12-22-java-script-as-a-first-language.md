---
layout: post
title:  Java Script As A First Language
date:   2011-12-22
permalink: java-script-as-a-first-language
categories:
---

How do you feel about JavaScript being taught as a first language? John Resig has a great post about the subject. He goes into detail about why he thinks it would work. I have a few thoughts also.

[http://ejohn.org/blog/javascript-as-a-first-language/](http://ejohn.org/blog/javascript-as-a-first-language/)

**Prototypical Inheritance**

Prototypical inheritance is  different from classical inheritance I'm still not sure I completely I understand how it works. Teaching prototypical inheritence from the start sure does have an upside. For starters, it gives a developer a great start with a language that is poised to have a solid future. Who knows where JavaScript is going from here, or what other technologies are going to branch off from it.

The bad side is that server side languages are vital to anything serious and I can't think of one that uses prototypical inheritence. It could be difficult for a developer to wrap their head around common design patterns. MVC specifically.

**Strict data checking**

John mentions not even introducing == as a method for performing any type of data checking, and instead use strict checking (===) for everything. I love this idea. I can still remember when I learned that I could create an if statement  in JavaScript without any curly braces. 

I remember it well because I was not taught that I could. Not because my instructor didn't know, but because he thought it was bad practice to leave them out. I do leave out braces occasionally, but never without thinking if I should be leaving them out.

**Function literals**

>>"Makes it easier to understand functions as an object. I've found that when you show new developers a function being assigned to a variable it suddenly becomes much more obvious that a function is actually an object and can be manipulated as such (and that a function can be passed as an argument to another function). Thus students are advanced along the path towards a better understanding of functional programming."

Coming from function statements in every language I know, function literals were difficult for me. Once I grasped the concept, tossing around anonymous functions started making more sense. Teaching tossing functions around from the beginning can be quite powerful.

John is a very advanced JavaScript developer that always seems to have revolutionary ideas. Worth the time to read.
