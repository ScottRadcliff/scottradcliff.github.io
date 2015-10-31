---
layout: post
title:  A Few More Chapters To Go
date:   2015-02-13
permalink: a-few-more-chapters-to-go
categories:
---

I just finished up the initial section on HTML. Still needs to go through some editing and formatting.

Deciding what tp concentrate on was a little harder than I thought. I feel myself diving into the more technical stuff, and that's not what **[Changing Lanes](https://gumroad.com/l/changinglanes)** is yet.

After the first draft of the HTML chapter, I included

* How it's the backbone of the web
* Syntax with elements and attribute descriptions
* Document structure with doctype, head, and body
* And a note on viewing local files in the browser and viewing source

Here's a little sample

<hr>

## Document Structure

To wrap up our intro to HTML and send you on your way to learning the foundation of the web, we need to understand the document structure of HTML.

First, all HTML is just a file. Like any other text file on your computer. To create a new HTML file, open up one of the text editors I mentioned in the beginning of this book and create a new file. Save it as `index.html`.

That’s it.

That `.html` extension makes it an HTML file. Now you are ready to fill it up with HTML.

A little about the document structure of HTML.

There are two distinct sections to an HTML document. The head section, where all of the data goes. And the body, where everything you see goes. I often refer to the body as the canvas of the web page.

One more little side note. In addition to the head and body sections, there is a `DOCTYPE`. It’s not really a section, but more of a declaration. It tells the browser _This is an HTML document. Display all this stuff as HTML_.

It we had a skeleton of an HTML document. It would look like this.


    <html>
      <head>
      </head>
      <body>
      </body>
    </html>


You may notice some indentation. This is not required, but certainly helps seeing that a certain tag is inside of another tag.

You may remember that all HTML tags have a closing tag (some are self-closing). You may also notice that we start with an `<html>` tag, and it has a `<head>` and a `<body>` tag nested inside of it. We know this because the closing tag is at the bottom.

The `<head>` and `<body>` tags are part of the content of the `<html>` tag. When I use the indentation, I can see that these are part of something else. Not a big deal with a skeleton of an HTML page, but a huge help with a large page where it’s a little harder to find things.

<hr>


Now onto CSS,  JavaScript, and closing it up.

Remember, you can **[pre-order Changing Lanes](https://gumroad.com/l/changinglanes)** if you are looking to learn how to create web sites.
