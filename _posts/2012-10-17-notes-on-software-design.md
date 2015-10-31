---
layout: post
title:  Notes On Software Design
date:   2012-10-17
permalink: notes-on-software-design
categories:
---

It's up to me to direct the software that I write. It's easy for me to forget that. It's also easy to just jump into a code base and make a quick change because it's, well, quick.

Today I was after a small change. Easy enough. I just needed to add a an additional check to an if/else statement. First thought was to simply add an or to the statement. But then that little voice in my head reminded me of all of the times that one additional check turned into 3, 4, or 10.

I decided to pull that code out into a new class. Now as the requirements change, the class can handle it. I knew it was the right thing to do, even though it took longer than adding an or to the statement. I decided to design that code the way I thought it should be designed.

It's my job to drive the software. I dictate how long something takes. I dictate how something should be built. And I dictate when something is finished. Software design means a lot. 
