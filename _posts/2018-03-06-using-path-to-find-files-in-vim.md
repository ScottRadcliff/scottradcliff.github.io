---
layout: post
title: Using Path to Find Files in Vim
date: 2018-03-06
---

I’m a Vim user, and I use [CtrlP](https://github.com/ctrlpvim/ctrlp.vim) to find files quickly. Occasionally when I don’t know the name of the file, I’ll jump into the `:edit` command to find where I need to be. if I’m really unsure,  I’ll use `:explore` to get a tree view.

There are lots of ways to find files in Vim. Typing a few letters and hitting tab is okay, but fuzzy matching a file name is best and fastest option.

<!--more-->

My typical environment is in Rails. I’ve been writing code in Rails for several years and have lots of tools setup to maximize writing code in that environment. It's pretty automatic at this point. I don't have to think about it too much.

Recently, I've taken on some Laravel projects and there are some issues with the path in Vim that is a bit different than Rails. I finally grew tired of doing things the hard _type a few letters and hit tab_ way, and decided to look into making it better.

The issue is that `ctrlp` wasn’t finding files. Mainly `React` files in `resources/assets/js/components`.  So each time I needed a file, assuming it wasn’t in the buffer list, I would need to use `:edit` or `:explore` to find the file. That kinda sucks. And it takes too long.

I admin to being a bit spoiled by the Rails Vim plugin that gives you a path by default. This is not your computers path, but a path that Vim uses for finding finding files via `find` or `gf`. 

After a bit of reading, I had a couple of options. Enter `:set path=.,app/**/*,resources/**/*` each time I worked on this project or just script it. The best thing I could figure out was adding a function to my `.vimrc` that set the path for me for this project. I’m not really a fan of the project path being hard coded, but I can live with it. I also would rather the function execute when I launch Vim, but I can live with executing when a file is opened. 

    function! SetupEnvironment()
      let l:path = expand('%:p')
      if l:path =~ '/Users/scott/Projects/cool_new_laravel_project'
        set path=$PWD,app/**,resources/**
      endif
    endfunc
    autocmd! BufReadPost,BufNewFile * call SetupEnvironment()

Now opening any file will check to see where I am. If I am in the Laravel project, it will set the path for me. When I need to find a file, I can just enter the file name and because I se the path, the file will be found quickly. Like this:

    :find UserContainer.js


I kinda dig using find. This could potentially replace `ctrlp` if I could get it to fuzzy match the file name. Especially on a remote server.

