---
layout: post
title:  How To Get Started With Css
date:   2015-02-03
categories:
---

Once you master HTML, it's time to style what you have and level up. And that means CSS. Before we get into all the nuts and bolts of CSS, I want to take a minute and explain what CSS is, what it's used for, and what not to do.

CSS is yet another acronym in a very long line of acronyms you will learn if you want to make web sites. It stands for Cascading Style Sheets, and is a way to target specific HTML elements on a web page and add styling to them.

That styling can be color, size, shape, effects like drop shadows, or even the position of the elements.

While HTML is pretty straight forward, CSS is a different animal, and can become quite complex. I will spare you the hard stuff and concentrate on the basics to get you going.


## Style or File
CSS can be added a few ways. The two main ways are in the head of the HTML document, and in a file that is linked into the head of the HTML document.

To include CSS in the head of the document, you define a style section.

    <style>
      CSS stlyes...
    </style>

To include a file, add a link to that file.

This example assumes the file is named main.css in a folder called styles.

    <link href='styles/main.css' rel='stylesheet' type='text/css'>


## Syntax
The syntax of CSS differs some from the syntax of [HTML](http://scottradcliff.com/post/getting_started_with_web_development). In HTML, you have tags that use < and > with elements in between.

CSS has an HTML selector, followed from curly braces {}, and a series of key/value pairs separated by a semicolon. If you have zero programming experience, this will be your first foray into curly brace syntax. This type of syntax will carry over into many languages. **CSS is not a programming language. But it does share some syntax.** That is where the similarities end.

An example.

If I wanted to access all paragraphs on the page and set the text to bold (a terrible idea, but a decent example), I would access the p tag and set the font-weight to bold.

    p {
      font-weight: bold;
    }

The CSS declaration starts with HTML element `p`. This grabs all paragraphs on the page. Then the opening curly brace tells the browser that we are ready to define what each paragraph looks like. Then we start with the styles. The `font-weight` declaration tells the browser that we want to define the text of the paragraph. Specifically the weight of the text. When we define bold, we tell the browser to make everything in there as bold as it can. We could have passed other values in. Instead of bold, we could have said normal, bolder, or a any one of (100, 200, 300, 400, 500, 600, 700, 800. 900); each of those a little bolder than the previous, and finally inherit.

Mozilla is your friend and has an [awesome resource](https://developer.mozilla.org/en-US/docs/Web/CSS) for what's available with CSS.

## The Cascading Part
Now that we have the basic syntax out of the way, you'll notice that we just used an HTML element to grab all of the elements on the page. That's great. But what if we just wanted the first one, or the last one, or even one in between. We can use ids to get specific.

To use an id, you just add an id attribute and give it a unique name. Ids must be unique and cannot be duplicated on the same page.

    <p id='first-paragraph'>text here</p>

Now, in your CSS declaration, instead of using just the HTML element, we can add the id selector.

    p#first-paragraph {
      font-weight: bold;
    }

You will notice the pound sign #. This is how you will select any id. This grabs just that one element and applies styles to it, but leaves all other paragraphs alone.

## Playing, Learning, and Progressing
That is the basics. With this you can grab and style anything you need to on your webpage and start styling them.

Play is important. Visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS) and start playing with some styles and see what you can come up with.

Enjoy!

