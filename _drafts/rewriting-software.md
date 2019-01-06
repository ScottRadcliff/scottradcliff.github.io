I came across [this article](https://arxiv.org/pdf/1702.01715.pdf) from a Google engineer about Google's software engineering processes. There are a lot of good things in it. And quite a few surprises.


I'm still surprised at the monorepo that Google uses. They have an insane amount
of code, and lots of developers. Keeping all of that in one repository seems
problematic. I mean we are talking about 2 billion lines of source code and 40
thousand commits per day!


## Monorepo
Even more surprising is that everything happens on the master branch. They don't
seem to follow the branching workflow. Their build system to check for errors
must be spectacular. Although, I've felt the pain of trying to merge code on
large code bases. It leads to several problems. I imagine Google has used
several strategies, and found this one to be most effective.

## Code Review
Their internal code review tool seems pretty cool. I love Github, but I like how
this integrates. Feels like the developers at Google saw some flaws in the
Github system and improved upon them. 

## Rewriting
By far the most surprising thing to me was the part on rewriting software. As
you probably know, rewrites are pretty taboo in the software development field.
But Google supports this every couple of years, and based on my experience, have
some valid reasons why.


> In a period of a few years, it is typical for the requirements for a product to
change significantly, as the software environment and other technology around it change, and as changes in technology or in the marketplace affect user needs, desires, and expectations.

Anyone that has worked on aging software (I could say legacy) has seen this.
Parts that are confusing, code rot, old dependencies that aren't supported very
well anymore, and so on. I imagine this is similar to monorepo. Google sees
value here that is greater than the trade-off.

> Software that is a few years old was designed around an older set of requirements and is typically not designed in a way that is optimal for current requirements.

> Furthermore, it has typically accumulated a lot of complexity. Rewriting code cuts away all the unnecessary accumulated complexity that was addressing requirements which are no longer so important.

We've seen this too. I think we reach a point where iterating in small increments
isn't always enough. Not sure if it's from being agile and releasing and
iterating or just some sort of requirements rot (I may have just made that up).
But working on aging software does show signs of many aspects the team didn't
get right. Maybe a rewrite helps reduce those warts a bit.


> rewriting code is a way of transferring knowledge and a sense of ownership to newer team members. This sense of ownership is crucial for productivity: engineers naturally put more effort into developing features and fixing problems in code that they feel is "theirs". Frequent rewrites also encourage mobility of engineers between different projects which helps to encourage cross-pollination of ideas

Arguably the best benefit is from engineer mobility and cross-pollination of ideas. This is especially true if you have a diverse team in both experience and background








If I ever lead an engineering team again.


Programmer as wizard
