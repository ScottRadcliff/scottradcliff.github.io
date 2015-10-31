---
layout: post
title:  Getting Started With Web Development
date:   2015-01-17
permalink: getting-started-with-web-development
categories:
---

If you are thinking about getting started with any type of web design or development, you have likely seen **lots** of stuff about code schools, Rails workshops, and bootcamps. Not so much about how to get started as a complete newbie or how the very basics of web design and development work.


I'd like to take a few moments and explain to you how the core of *anything* on the web works. The reality is that without HTML, we can't display anything on the web. Without HTML, none of the previously mentioned ways about learning matters. HTML is the foundation of the web.

HTML isn't that hard or scary, and once you understand it, things really start to make sense.

## How HTML Works
HTML is an acronym for HyperText Markup Language and it's core job is to display what you tell it. HTML will not decide *how* to display anything. It will know what to display what you tell it to.

The first thing to understand is that HTML is just a text document. It's just like any other document. The only difference is how it's formatted and it's file extension (*the .html part*).

**Warning: Microsoft Word, Apple Pages, or any other Word Processor does not create text documents. I am referring to plain text documents. You will need a text editor. Check out [Atom](https://atom.io/) or [SublimeText](http://www.sublimetext.com/).**

To create an HTML file, you can simple open a text editor, create a new file with any name, and save it with an html extension. A sample html file might be called `intro.html`

It could look like this:

    <html>
      <head>
        <meta charset="utf-8">
        <meta name="description" content="my first webpage">
      </head>
      <body>
        <h1>Hello World</h1>
        <p>My First Document</p>
      </body>
    </html>

## HTML Tags
If you have never seen HTML before, there is a lot here. I'll break it down.

**The `<html>` element should actually be &lt;!doctype html&gt;, but the browser tries to display a new document. You can google HTML5 doctype to see how it should be formatted**

The first thing to notice is all the greater than (>) and less than (<) signs. These are part of HTML tags. Inside this greater than and less than signs are HTML elements. This is the part that tells the web browser what to display. You can see a [full list of HTML elements on Mozilla's Developer Portal](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

Anything you place between the opening and closing tags are part of that element. For example, `<h1>Hello World</h1>` is a heading that displays the text Hello World because we have instructed the browser to display a heading by using the `<h1>` html tag, and to make that heading read Hello World because we placed that inside the opening and closing tags.

Some tags don't have the closing part. These are self-closing tags. More on those another time.

## Head Section
Once you get past the doctype, you see two sections. Head and body. These are the main sections of the document. First the head section. This is all meta data. It's just giving the document information. If you look at the `meta` tags, you will notice that the description meta tag has a name and content. This tells the browser and search engines (we will save search engines for another time) what this web page or web site is about. It does absolutely nothing for what is displayed on the page.

Later on in your learning, when you get into CSS and JavaScript, this is where you will tell the document how to get to those files.

## Body Section
Think of the body section as your canvas. Not to be confused with the JavaScript canvas. I'm simply using the word canvas here to illustrate that this is the part of the document that you actually see.

Anything you place between the opening and closing body tag will be displayed on the page.

In this example, the html page is displaying Hello World as a heading, and My First Document as a paragraph.

You will notice that a lot of HTML elements are simply abbreviations of larger words. Things like img for image, p for paragraph, and a for anchor.

The body section of HTML documents can get pretty complex with things like forms, large images, and complicated layouts. Understanding what is in the body section is critical. It can get overwhelming very quickly. Spend some time playing around and continually build upon your knowledge.

## Go Forth and Play!
Well, that's the basics of an HTML page. If you follow that structure, you will just need to know that elements to use to display what you want. That just comes with experience and playing around. Spend some time on [Mozilla Developer Portal](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and start experimenting.

If this helped you at all, I'd love to hear from you. Reach out to me on Twitter [@scottradcliff](https://twitter.com/scottradcliff) or [send me an email at scott@scottradcliff.com](mailto:scott@scottradcliff.com).

