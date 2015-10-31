---
layout: post
title:  Exposing Bugs With Tdd
date:   2012-04-03
permalink: exposing-bugs-with-tdd
categories:
---

Today, I sat down to write a feature in an existing application that takes two csv files, parses them, and generates orders in the system based on their data. As I generally do with any code that I write, I thought about the problem for awhile, came to what I thought would be a decent solution, and started writing code.

How I write code has changed over time. I enjoy coding with TDD in mind, so I usually open or create a test file, and make comments about the steps that I think I need to take to complete the feature. And drive the feature out one test case at a time. Usually 2 - 4 tests, depending on complexity.

I was reminded again today of the power of TDD. While driving these tests out I found two bugs that I may have never seen. They didn't produce any errors, just resulted in missing data. Had I built the feature without any tests, I _may_ have spotted the bug, but it's highly unlikely. The bugs were very similar, so I will describe only one.

The bug existed with an after create callback. The callback expected 6 attributes, but I was only using 4, so I only supplied the 4 I needed. It appeared that records were created correctly, but they actually were not because all of the data was not being passed in correctly. The model file is extremely fat and the callback didn't have any comments and was not obvious.

Because my assertion was failing, I knew data was missing. This forced me to look a little more closely. This is a perfect example of a bug that slides through non TDD based development all the time.

By driving out a feature through tests I was able to expose bugs that were hidden by silent failures. There is no doubt in my mind that the users of the system would have found it in record time.

All code that I write has tests and documentation. I prefer both, for different reasons, but if limited, I will go with tests every time.
