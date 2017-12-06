# Problems Solved

I work on a lot of private projects. And some of those projects aren't things I can necessarily share for various reasons. Sometimes it's because I performed this work for another company, or I was part of a larger team and I don't want it to look like I am taking credit for something I didn't do. 

But I can share insight into the problems faced and how they were solved. That is what this is. Some insights into the types of things I have worked on without sharing anything that shouldn't be shared for privacy reasons.


## Group Presentation Software
The Problem: There is a need for many people to join into a presentation and interact with it in real time.

Solution: Rails 5.0 application that takes advantage of ActionCable to use WebSockets.

I was part of a team that was approached to build web based software that allowed a company to present some content that allowed every participant to be involved, and allowed the participants to see that what the other participants were doing.

The tricky part was managing screens. How do we make sure everyone was on the same screen at the same time? What happens if a person drops off and comes back? 

To solve for this, we used a bit of state management on the server and a countdown redirect manage what page the entire group was in at any given time. First, we had series of URL segments and routes that defined the process, in sequential order, that the group would go through. Secondly, we had a list of every participant in the session. On certain pages, all participants had a call to action to confirm that they were finished. Other pages had a percentage of participants that had to confirm they were finished. It's these percentage pages that implemented a countdown and a redirect. For example, if there were 10 participants and the threshold were set to 80%, once the 8th person confirmed they were finished, a countdown would display letting the remaining participants that the group is moving on and give them a chance to finish without just leaving the page abruptly.


## HIPPA Compliant Web Application with secure file transfer
The Problem: There is a need to central web application to manage multiple physical devices

Solution: Rails 5.0 application to store data and allow importing/exporting of encrypted sensitive data

The first hurdle was to manage HIPPA guidelines. Thankfully, [link]Aptible handles this perfectly. So that left us to concentrate on data insertion and retrieving. Data retrieval is the tricky part. Due to HIPPA guidelines data must be encrypted at all times, including at rest. Transport was easy enough, SSL handles that. It's the at rest part with data that has been exported that is tricky.

We decided to go with [more data needed about encryption type] and JSON data based on it's interoperable nature and we knew that the data type would be supported on the machines that we were dealing with. To make sure the data was secure, we encrypted all exported data with a private key. To keep this secure and to align with best practices, we decided to make sure the private key and the encrypted file were sent in two channels. We send the encrypted file through a standard file download dialogue, and the key via the email address we have on record for the signed in user. With this, we could make sure that the secure key was not sitting right next to the encrypted file that it unlocks. If they were to sit next to each other, that would be the equivalent of taping your house key to your front door.


## Loyalty Rewards System
Problem: Offer redeemable rewards to customers for their loyalty.

Solution: Rails 4.2.1 application that allows a customer to redeem prizes based on the points they have accumulated.

With this application, there were a few considerations.

1) The point system is actually managed in another application, so an employee should be able to upload a file of all customers that have accumulated points.

2) Sometimes the upload script has an error or inaccurate information. An employee should have the ability to override points. But we need to know who overrode points and for what reason.

3) We need a way to display a filter a large set of products in modern user friendly way.














## Rails API
Problem: Gain speed an efficiency within a development team and take advantage of React and modern web application


Solution: Build an API in Rails 5.0 that is built in parallel with React build.


Having worked on a handful of these client/server applications now, I've found that the best thing to do is to spend some time defining what the server should return, and start building out the API infrastructure while client-side code is being written. This allows a team to tie things together as needed without effecting the speed of either team.

I've worked on three of these so far. Here are some best practices, in my experience.

* Keep client side code and server side code in the same repository. Usually a client directory for front end code and a server directory for the server side code. Splitting client side and server side into separate repositories creates a headache. Having them inside the same repository helps keep development costs down.

The most difficult part is deployment. If using Heroku and you don't have the root of git repository at the root of the rails app, you may need to jump through some hoops to get Heroku to recognize that it's a rails app.

I haven't done this with Docker yet, but I doubt the same problem still exists.

* Use an API documentation tool to automatically turn you tests into functional API docs. This makes the transfer of knowledge super easy and _mostly_ up to date.

* Always pass authentication token is HTTP headers

* Use a serializer to only return the data you need to the client side.
