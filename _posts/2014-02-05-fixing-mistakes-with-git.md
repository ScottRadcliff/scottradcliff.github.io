---
layout: post
title:  Fixing Mistakes With Git
date:   2014-02-05
permalink: fixing-mistakes-with-git
categories:
---

Sometimes in Git I screw things up. The beauty of version control is that I can always go back and fix what I did. If I add a bunch of stuff and decide it's all crap, I can go back to a previous state.

Unfortunately, it's not a straight forward in Git as you think it would be.

## Revert

From the [man pages](https://www.kernel.org/pub/software/scm/git/docs/git-revert.html)

> Given one or more existing commits, revert the changes that the related patches introduce, and record some new commits that record them. This requires your working tree to be clean (no modifications from the HEAD commit).

This seems like it should work. Find the last commit that you think is the good one and revert back to that commit.

This is not my experience. I struggled to get this to work as I expected. I wanted to go back to where I was before. When I tried, I just got conflicts. And after I fixed them, it still wasn't right.

To be honest, I'm not sure how revert works. Maybe it's just for one commit. More research needed...

## Reset

From the [man page](https://www.kernel.org/pub/software/scm/git/docs/git-reset.html)

> In the first and second form, copy entries from <commit> to the index. In the third form, set the current branch head (HEAD) to <commit>, optionally modifying index and working tree to match. The <commit> defaults to HEAD in all forms.

There are a few ways to use reset, but mine is usually the same and in the third form.

    git reset --hard [some commit]

Usually that commit is HEAD. But as it turns out, I can pass it a sha and it reacts the exact way I need it to.

    git reset --hard 0d1d7fc32

For me, resetting to a previous state makes the most sense. I'm not interested in preserving history. I want to throw these changes away. I really don't want mix up the repo with my screw ups. That's embarrassin'

Worth noting that I had to check out a few branches to poke around until I found what I needed. Actually, I did the whole thing on a branch and then merged that branch once I figured out where my last good save point was.


