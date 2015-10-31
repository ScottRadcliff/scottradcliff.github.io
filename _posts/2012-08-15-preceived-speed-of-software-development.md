---
layout: post
title:  Preceived Speed Of Software Development
date:   2012-08-15
permalink: preceived-speed-of-software-development
categories:
---

I have trouble thinking of something in software development more troubling than the illusion of speed. When one developer cuts corners to get things done _fast_, a few things happen than make things for other developers more difficult.

1) Code is difficult to read and understand
When things are done a little too quickly and corners get cut, you end up with what is equal to a code band-aid. A quick fix, often near a comment that says 'FIX ME' or 'Hack', which  will soon grow into a big wound. A large problem area  that requires surgery.

2) Managers, stake holders, etc... think that the speed is normal
When a developer is able to bust out code quickly, those around them assume that this is the expected turn around time. The next developer is held to that standard, and when it's not met, it's often assumed that the new guy isn't as good as the last guy. Non-developers rarely understand the dynamics of testing, refactoring, and cleaning up all those FIXME areas.

3) The quality suffers.
When a developer knows that a quick fix will get this request off his desk so he can work more important/fun things and throws in a few lines, commits it, and deploys it. It's almost always someone else that has to clean it up.

#### The Fallacy of Speed
There is a pattern here. Quick fixes make other developers around you suffer. Naturally, the new developers wonder if they can trust anything with your name  on it.  Git blame becomes their best friend and they start to assume that everything is a quick fix.

Quick fixes are also a lie. They are cancer to an otherwise healthy code
base. There are no quick fixes, only well thought out solutions to problems
solved through programming. This is why simple code is so diffucult. It's the
thinking part that is difficult.


#### Stop Patching and Start Thinking
Stopping the quick fixes and speed illusions are difficult. Quick fixes are
easy. You see a problem, have a thought of what _might_ work, and slap it down.  Often, there may be other underlying issues that aren't obvoious right away. Those issues are not caught because not enough thought went into it. The only way to improve the code base is through thinking. Maybe it should TDD (Thinking Driven Development).
