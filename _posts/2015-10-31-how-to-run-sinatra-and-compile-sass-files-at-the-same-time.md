---
layout: post
title: How To Run Sinatra And Compile Sass Files At The Same Time
date: 2015-05-14
permalink: how-to-run-sinatra-and-compile-sass-files-at-the-same-time
categories:
---
I love me some [Sinatra](http://sinatrarb.com). More often than not, I reach for Sinatra when starting a new app. It’s not that I don’t like Rails. I just prefer the control and simplicity of Sinatra.

Naturally when using something like Sinatra, you lose certain things like the auto reloading of files and niceties like compiling [Sass](http://sass-lang.com/) for you.

There are tools for these. [Shotgun](https://github.com/rtomayko/shotgun) allows Sinatra apps to be reloaded when files change. You do still have to manually refresh the browser, but you no longer need to restart the server.

And of course, Sass comes with a [CLI](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass) for compiling sass files into css files. It’s pretty straight forward. Pass it some sass files and some css files, and it will compile them for you. I generally pass it entire directories. Something like this

    sass —watch sass:css

That will grab all my sass files, compile them, and place them in the css directory.

I also need my server running. Shotgun handles this. This particular Sinatra app isn’t modularized yet, so I just pass it the entry point. For me that’s almost always `app.rb`

  shotgun app.rb

You can probably see my issue already. I need two terminal instances for this. Or I can combine them.

Here is where you might want to grab the `&&` operator, but that would be a mistake. The `&&` operator will wait for the first task to complete and since both tasks watch, the second task will never fire because the first won’t complete until you kill it.

What you need here is the `&` operator. This will run a task in the background. When your terminal reaches this operator, it will detach that tasks from `stdin` and allow other tasks to be run simultaneously.

Now you have something like this

    shotgun app.rb & sass —watch sass:css

You can run that in one terminal tab and see both processes at the same time.

To make it even nicer, you can throw it in a [Rakefile](https://github.com/ruby/rake) so it’s easy to remember.


    task default: "start"

    desc 'Run the server and watch sass files'
    task :start do
      system "shotgun app.rb & sass —watch sass:css"
    end

Because we have defined a default task, we can run this one of two ways.

    rake

    rake start

One less thing you need to think about.
