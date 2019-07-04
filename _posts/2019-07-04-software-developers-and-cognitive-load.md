---
layout: post
title: Software Developers and Cognitive Load
date: 2019-07-04
---

There are a lot of things that make a difficult job even more difficult. It’s often difficult to explain to non-developers how mentally exhausting creating software is. It’s just something that has to be experienced first hand.

Knowing that, it often seems that we don’t do enough to lessen the burden of cognitive load. Every developer has experienced the frustration of trying to fit more things in their brain than it can hold.

It's one of the reasons why I am a fan of having a pen and a notebook handy to write down random things as they pop up. An easy way to make sure the cognitive ability you have is reserved for the most important work.

<!--more-->

There are a few things we can do to limit the cognitive load for fellow developers.

1. Explicit and readable code. I like the term _literate programming_. That's how I prefer the code I write to be received by other developers. I hope that they can open a file, read the method names, and understand what they do.  This also includes naming conditional logic in regards to what it does and moving it to a descriptive method.  For example:  The first chunk of code is not as readable as the second  `if (user.company.name == “google” && user.email.ends_with? “google.com”)`   `if (user_works_for?(“google”))`  Much less effort required to just read that and know that this condition is only for Google employees. _How_ that is determined doesn't matter.  I simply moved the conditional logic to a method.

	```
	def user_works_for?(company)
		user.company.name == company && user.email.ends_with? “#{company}.com”
	end
	```

2. Reduce DRY. I know, it might sound opposite of what you've heard. This doesn't mean don't use DRY at all. But there is a limit to its usefulness. What that limit is exactly is hard to say. It’s one of those _it depends_ things. For me, it’s somewhere around three files. If indirection for the sake of DRY has me reading three or more files at once to work on, or understand a piece of code, it feels like too much.  In that case, a little repetition could help. Seeing something in the same file twice is probably better than the indirection. Especially if it’s only used like twice, and only in this file.

3. Use common formatting across the codebase. If there is one thing that slows down code review unnecessarily, its differences in opinion in code style. One programmer likes hashes written one way, another programmer disagrees. One likes tabs ... Nah, just kidding, no one likes tabs.  Linters will address this. They let the whole team decide on some defaults for style. Before code can be accepted for code review, it has to pass the linter.  I like them because I no longer have to think about how things are styled or written in the project. My brain adjusts quickly to the styles and I no longer have to wonder if it will pass code review. I can concentrate on solving problems with code, and that's the most important thing.  There are a lot of tools for this based on your language. Currently [rubocop](https://www.rubocop.org/en/stable/) is the best for Ruby, and I've used [jslint](https://jslint.com/) for JavaScript. But [prettier](https://prettier.io/) is the latest in linters. I haven't used it, but it looks great and some friends are completely sold on its awesomeness.


A lot of this stuff may seem like unnecessary work in the beginning, but the speed you gain as a codebase grows is completely worth it.
