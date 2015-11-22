---
layout: post
title:  Test Files Should Be Small Too
date:   2013-01-14
categories:
---

Stop me if you've heard this one. Your model class is relatively small. Maybe not *small*, but definitely manageable. On the other hand, your unit test file is out of control. Tests everywhere! It's approaching 100 lines, if not more, and it's often hard to get through that file or read the *documentation* that everyone tells you is in there.

I have that problem too. If you think about it, your test file probably has 3-4 times the code that your model does. Each unit being tested needs a [happy path](http://xunitpatterns.com/happy%20path.html), a sad path, and probably some [edge cases](http://en.wikipedia.org/wiki/Edge_case).

If you're using [Rails](http://rubyonrails.org/), you might accept the defaults. With the defaults, a model gets 1 file named {model_name}_test.rb (*ex. for a user model it would be user_test.rb*). Also, if you are new to Rails, you may just accept that as the place where those unit tests go, even though they are a mess.

The truth is you can split that file up just like any other. Testing a specific portion of your model, or some specific logic? Create a new file under `test/`. I keep mine in `test/unit`, but name it something a little different; like `contractor_status_promotion_test.rb`. Now I know the logic for the contractor status promotion lives in here and it's **much** easier to read. Just make sure it ends in `_test`.

Try breaking up those monster unit test files into something a little more user friendly.
