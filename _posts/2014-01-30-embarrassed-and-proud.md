---
layout: post
title:  Embarrassed And Proud
date:   2014-01-30
categories:
---

Yesterday, I wrote some code that left me half-embarrassed and half-proud. I was half-embarrassed because it was kinda ugly and not very elegant. I was half-proud because it solved my problem very quickly and I was then able to move on to the next thing.

A little background.

Rails 4 has this new method for working with dates in forms called ```select_date```. It should give you the power to generate date fields for year, month, and day when you don't have an object behind them. I needed to program a search form that had many options, starting date and ending date being two of those options. This seemed like the perfect tool for me to use.

I added it to my form and moved on.

Once I finished the backend logic, I headed back to the view to make sure the previous selections were being preselected. For example, if I select March 12, 2013; when I submit the form and get the results, I should still see March 12, 2013 selected.

In previous versions of Rails, I just pass a selected attribute on the end of the method and the options are preselected. That doesn't seem to work with this method.

Here is the method signature.

```select_date(date = Date.current, options = {}, html_options = {})```

Logic says pass the selected attribute with the option I want selected to the html_options parameter.

Nope.

I couldn't get anything to work. I googled. Nothing. I StackOverflowed. Nothing.

All I got was solutions to the previous method ```date_select```. It appears as if I may have used the wrong method? Too late to change now.

After about 30-40 minutes of trying to get a very simple concept to work, I decided to timebox some JavaScript code.

The pseudocode, (not really pseudocode, but I can't think of a better term) went something like this. This is a get request with a query string on the URL.

- Get the url
- Split on "?"
- Split the 2nd half of that array on "&"
- Use a regular expression to pull out the date data
- Grab the select and option elements from the page
- Loop through them looking for a match
- Assign the matched option's select attribute to 'selected'

Within 15 minutes I had a working solution hacked together. The options were being selected for me with client-side code.

Here is the code I wrote. You can see the embarrassing parts. There are global functions, but this is a small app and I know for a fact there will not be any collisions anytime soon. And there is some duplication that I could have abstracted out further. I can/will clean it up some, but it's often more important to get something done than it is to create a masterpiece.

[View the Gist](https://gist.github.com/ScottRadcliff/8689650)

<script src="https://gist.github.com/ScottRadcliff/8689650.js"></script>

