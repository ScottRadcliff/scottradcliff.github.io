# Problems Solved

I work on a lot of private projects. And some of those projects aren't things I can necessarily share for various reasons. Sometimes it's because I performed this work for another company, or I was part of a larger team and I don't want it to look like I am taking credit for something I didn't do. 

But I can share insight into the problems faced and how they were solved. That is what this is. Some insights into the types of things I have worked on without sharing anything that shouldn't be shared for privacy reasons.


## Group Presentation Software
The Problem: There is a need for many people to join into a presentation and interact with it in real time.

Solution: Rails 5.0 application that takes advantage of ActionCable to use WebSockets.

I was part of a team that was approached to build web based software that allowed a company to present some content that allowed every participant to be involved, and allowed the participants to see what the other participants were doing.

The tricky part was managing screens. How do we make sure everyone was on the same screen at the same time? What happens if a person drops off and comes back? 

To solve for this, we used a bit of state management on the server and a countdown redirect to manage what page the entire group was on at any given time. First, we had a series of URL segments and routes that defined the process, in sequential order, that the group would go through. Secondly, we had a list of every participant in the session. On certain pages, all participants had a call to action to confirm that they were finished. Other pages had a percentage of participants that had to confirm they were finished. It's these percentage pages that implemented a countdown and a redirect. For example, if there were 10 participants and the threshold were set to 80%, once the 8th person confirmed they were finished, a countdown would display letting the remaining participants know that the group is moving on and give them a chance to finish without just leaving the page abruptly.


## HIPPA Compliant Web Application with secure file transfer
The Problem: There is a need for a central web application to manage multiple physical devices.

Solution: Rails 5.0 application to store data and allow importing/exporting of encrypted sensitive data.

The first hurdle was to manage HIPPA guidelines. Thankfully, [Aptible](https://www.aptible.com/) handles this perfectly. So that left us to concentrate on data insertion and retrieving. Data retrieval is the tricky part. Due to HIPPA guidelines that state that data must be encrypted at all times, including at rest. Transport was easy enough, SSL handles that. It's the *at rest* part with data that has been exported that is tricky.

We decided to go with asymmetrical cryptography and JSON data based on it's interoperable nature and we knew that the data type would be supported on the machines that we were dealing with. *Asymmetrical cryptography is also called public key encryption. But I think that can be confusing. If you’re confused, [check this article out](https://medium.com/@vrypan/explaining-public-key-cryptography-to-non-geeks-f0994b3c2d5)* To make sure the data was secure, we encrypted all exported data with a private key. To keep this secure and to align with best practices, we decided to make sure the private key and the encrypted file were sent in two channels. We send the encrypted file through a standard file download dialogue, and the key via the email address we have on record for the signed in user. With this, we could make sure that the secure key was not sitting right next to the encrypted file that it unlocks. If they were to sit next to each other, that would be the equivalent of taping your house key to your front door.


## Loyalty Rewards System
Problem: Offer redeemable rewards to customers for their loyalty.

Solution: Rails 4.2.1 application that allows a customer to redeem prizes based on the points they have accumulated.

With this application, there were a few considerations.

1) The point system is actually managed in another application, so an employee should be able to upload a file of all customers that have accumulated points.

2) Sometimes the upload script has an error or inaccurate information. An employee should have the ability to override points. But we need to know who overrode points and for what reason.

3) We need a way to display a filter a large set of products in modern user friendly way.














