---
layout: post
title: Working With Git Stash
date: 2015-05-09
permalink: working-with-git-stash
categories:
---

Have you ever been working on something and you’re not quite in a good spot to commit? You know, a *good* commit. The kind with meaningful commit messages that describe what you’re committing and why.

You don’t really want to commit because you have some garbage changes that you would like to go back and fix, but you haven’t gotten around to it. You’re still developing.

Then something comes up and you need to jump on another branch and fix something really quick. Call it a hot fix.

Now you’re stuck. You might just grumble a little bit, add what you have, and commit with a vague and often unhelpful commit message. I’ve done this a lot. Too often.

This is what `git stash` was designed for. With stash you take everything you have, store it somewhere so it doesn’t mess you’re working tree, and come back to it later.

Here’s how it works.

Just running `git stash` without any arguments saves the changes and applies a WIP message. For example, if you were working on a dev branch, change a couple of files, and then you needed to jump back on master and typed `git stash`. It would stash the changes for you. Running `git stash list` would show your lone stash with a WIP message.

    stash@{0}: WIP on dev: 3bff306 Initial message

The initial message text is my last commit message. This is where the branch was reverted to after saving my changes.

Once you’re done doing what you needed to do and jump back on your dev branch, you can simply run `git stash apply` and have your changes reapplied to the dev branch. It’s worth noting that apply leaves the stashed changes in your stash list. That may not be what you expect. If you want to apply your changes and remove the changes from the stash list, run `git stash pop`. This will apply that last change and remove those changes from the stash list.

Now you should see something like this

    On branch dev
    Changes not staged for commit:
      (use “git add <file>…” to update what will be committed)
      (use “git checkout — <file>…” to discard changes in working directory)

    modified:   sample.txt
    modified:   sample2.txt

    no changes added to commit (use “git add” and/or “git commit -a”)
    Dropped refs/stash@{0} 			(4974d43e224dd25ab4c75c0b1e583e0748d7d200)

That’s great and all, but maybe you want to leave yourself a message. Maybe it’s going to be a while before you come back. For that case you can use `git stash save` with a message.

If you run `git stash save “Another emergency needs my attention”`, you should see something like this.

    Saved working directory and index state On dev: Another emergency needs my attention
    HEAD is now at 3bff306 Initial message

And `git stash list` should show something like this.

    stash@{0}: On dev: Another emergency needs my attention

This has been a huge help for those situations where I need to jump to another branch when I’m in the middle of something. Hopefully, it will help you too.
