---
layout: page
title: Projects
permalink: /projects/
---

# Random Password Generator
Once upon a time while starting to play with Node, I wanted to see what was involved with creating an NPM package. I came up with the idea of a random password generator and built it as an NPM package. I haven't touched it since I wrote expect to add on pull request. It may be useful for you. If so, feel free to download and use it.

`npm install random-password-generator`

Using it is really simple.


    var generator = require('random-password-generator');  
    generator.generate();  
    #=> qkqtuflq

[Random Password Generator NPM Package](https://www.npmjs.com/package/random-password-generator)

[Random Password Generator on Github](https://github.com/ScottRadcliff/random-password-generator)

# Schema Parser
I dislike reports. I dislike reports a lot. A whole lot. I started to write a library that would search throw the schema file in a Rails app and build a form that contained every model and and their attributes with data types. I never finished it. And I'm not even sure it's the right solution, but if you need something to build from that has started parsing the schema, feel free to grab it and go. I haven't touched it in a very long time.

[Schema Parser on GitHub](https://github.com/ScottRadcliff/schema_parser)

# Programmer's Notebook
Every programmer writes an app for snippets, right? This was one of my two attempts at that. This one used MongoDB and only has 40-some commits. It's pretty old. Still sitting on Rails 3.2

Feel free to grab it and go if there are some things in there that help you.

**This app no longer being maintained**

# Snippets
Attempt two at a snippet app. This one uses Heroku and is a little cleaner than the Rails app. Turns out Rails is overkill for an app like this. 

It still used Mongo, but now with the standard Ruby mongo driver. What can I say? I loved MongoDB at this time.

Feel free to use.

**This app no longer being maintained**


# Linker
