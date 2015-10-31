---
layout: post
title:  Display An Attribute In Rails Uppercase And Handle Nil
date:   2014-02-07
permalink: display-an-attribute-in-rails-uppercase-and-handle-nil
categories:
---

It may not be obvious, but you can access attributes in Rails through the attributes array. You can use that array to upcase entries and handle nils.

Now anything you through at it, assuming it's an attribute of the object, will either display in uppercase or rescued with an empty string.

<script src="https://gist.github.com/ScottRadcliff/034ae089b14e86d6ac02.js"></script>
