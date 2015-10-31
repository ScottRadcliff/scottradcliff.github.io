---
layout: post
title:  Better Test Cases
date:   2011-11-10
permalink: better-test-cases
categories:
---

The single most important thing you can do to help your code is not just to test, but to use a good test case. Bugs often sneak through a vague test case. For example, let's say I want to test that when a new customer is created, the url for the customer is prefixed with the proper http protocol. I might write something like this:


<code>
def test_url_is_prefixed
  &nbsp; &nbsp;customer = Customer.create!(:url => "scottradcliff.com")
  &nbsp; &nbsp;assert customer.url == "http://scottradcliff.com"
end
</code>

Assuming I have a before save filter, this test will pass. But it's not a good test. It's simple and to the point, but this test case needs another test. What happens if an empty string is sent? Then "http://" gets returned and the feature is broken, but the tests pass. Add another test case.

<code>
def test_url_is_not_prefixed_for_empty_string
&nbsp; &nbsp;customer = Customer.create!(:url => "")
&nbsp; &nbsp;assert customer.url == ""
end
</code>

Now I have handled a more specific test case. I wanted to use the term scenario instead of test case, but that is synonymous with cucumber. Scenario is really a better term. When testing a method, I am usually testing a series of test cases, but I always keep mindful to keep my tests short. Always ask "What if..."

