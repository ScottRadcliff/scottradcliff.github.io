---
layout: post
title: Dysfunctional Single Page Apps
date: 2018-11-08
---

I have been a vocal critic of modern single page apps. I feel like they are often (not always) over engineered, and because JavaScript frameworks change so fast, they are really hard to maintain.

But more importantly, I don't think they meet the users needs nearly as often as we think they do. I've been in more than one client meeting where the developers try to sell benefits that clients/users don't care about. Things like: 

Developer: _Look! Notice how the page didn't reload?_ 

Client: _Uh, yea. That's cool._

Most likely, the client only cares about the task at hand. The truth is it's the developers that care about the tooling  or of pages reload.

[Jim Newery has done a superb job describing patterns](https://tinnedfruit.com/articles/create-your-own-dysfunctional-single-page-app.html) that single page apps follow that lead to being dysfunctional.

So many quotes I could pull from the article. But my favorite is this.

> Mistake 4: Use naïve dev practices
> Under-investing in front end skills has knock-on effects.
>
>The relative ease with which we can create working software with JavaScript frameworks is alluring. But naïve development practices can threaten the long-term maintainability and quality of products.
>
> Poor development practices reinforce each other:
>
> * Poor or no test coverage, results in…
> * Highly-coupled code, that encourages…
> * Over-engineered solutions, that leads to…
> * Big monolithic balls of mud, that forces us to deliver…
> * Giant monolithic asset bundles

Each of those is spot on and directly leads to the next. Almost all single page apps I have worked on lack tests and lead to hard to maintain code because of how interconnected it is. I'm at fault too. I never take the time to think about the front end architecture like I do the backend.

Source: [Create your own dysfunctional single-page app in five easy steps](https://tinnedfruit.com/articles/create-your-own-dysfunctional-single-page-app.html)
