---
layout: post
title: How to Match a Partial String in a Ruby Array
date: 2018-06-16
---

The other day I was working on a feature that takes some form content, conditionally sets parameters and sends that data to a third party so another team can access it.

I ran into a slight issue that was sort of surprising to me. I have an array of field values that I can't control the formatting before I get it. It’s kind of silly, but it is what it is.

The data comes from a series of checkboxes, and looks something like this.

    [“The Lemon Song”, “Whole Lotta Love”, “Dazed and Confused”]

<!--more-->

This would be what I would get if the user selected `The Lemon Song`, `Whole Lotta Love`, and `Dazed and Confused`. 

The logical part here is that I need to set a value if an option is checked.

A few ways to do this, but I decided some sort of partial match is best.

_This is where I say that I am strongly against matching any data by string. It’s super fragile. But sometimes you just have to work within your constraints._

Being that Ruby is awesome and makes a programmer's job easier. I always just try what I want to work. Using `include?` on the `Array` would have been perfect.

    ["The Lemon Song", "Whole Lotta Love", "Dazed and Confused”].include? “Whole Lotta”

    => false

Turns out that `include?` could work. But needs to match the entire string exactly.

    ["The Lemon Song", "Whole Lotta Love", "Dazed and Confused”].include? “Whole Lotta Love”

    => true

The problem with this, again a constraint that I can’t change, is that some of these strings are very long. The shorter my matching substring is, the lesser chance I have of breaking something because someone decided to move the words around.

Turns out `Enumerable` has a method `any?` that takes a block. The side effect here is that it walks through the entire collection. One last trade off I am reluctant to accept, but decide it’s worth it given the requirements.

The code now looks like this:

    ["The Lemon Song", "Whole Lotta Love", "Dazed and Confused"].any? {|item| item.include? "Whole Lotta”}

    => true

Okay, I lied. One more small trade off. `Enumerable#include?` is case sensitive because it matches using `==`.

    ["The Lemon Song", "Whole Lotta Love", "Dazed and Confused"].any? {|item| item.include? "whole lotta”}

    => false

But at least now I can walk through the Array and set parameters conditionally. 

_While writing this, I learned that I can use `String#casecmp` to match strings with case insensitivity. The return value is a little weird. 0 for a match. It looks like if you are using Ruby 2.5, you can use `String#casecmp?` and get a boolean back._
