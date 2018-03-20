---
layout: post
title: How To Structure React Components
date: 2018-03-19
---

I've been working with [React](https://reactjs.org/) for a while now. Actually, just about every project I work on lately has been React with various back ends. React is pretty simple. But if you have been away from JavaScript for awhile, there will be some things that may take a while to understand. Well, not necessarily understand. More like develop a taste for.

Because they are so many ways to do things in React, you end up developing a taste of how you like to structure things. A way that things work best for you.

Today, how small I should  make components clicked. I mean I knew how to make components. And I knew what _seemed_ like a good system, but it turns out I wasn't breaking them down enough.

<!--more-->

The trick is to break them down so far, that a [container component has no native HTML code](https://www.ludovf.net/blog/make-small-reactjs-components/). Just a series of calls to other components. This seems like a good rule of thumb to shoot for. Dan Abramov has a great article on [presentational and container components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0). And now that I've had some experience with the pain of not breaking them down far enough, I really see the beauty in this.

Take some info for a meeting for example.

It could have a title, a day, a time, a url, and maybe a number to call in with.

I might have set it up like this.

    <MeetingContainer>
      <div>
        <h1>{this.state.meeting.title}</h1>
        <p>{this.formatDate()}</p>
        <p>{this.meetingDuration()}</p>
        <a href={this.state.meeting.url}>Join in</a>
        <p>Call in: {this.state.meeting.callInNumber}</p>
      </div>
    </MeetingContainer>

This works. Use some markup to display data in state. And use some functions to format data for display.

I found that this falls apart. Even If I take similar data and place it in more components, it's still not enough. Let's take the phone number and the url and place those together in a `MeetingDetails` component.

    <MeetingContainer>
      <div>
        <h1>{this.state.meeting.title}</h1>
        <p>{this.formatDate()}</p>
        <p>{this.meetingDuration()}</p>
        <MeetingDetails phone={this.state.meeting.callInNumber} url={this.state.meeting.url} />
      </div>
    </MeetingContainer>

That's certainly better. But I've found that it's _still_ not enough. It feels halfway there. I almost always need this somewhere else and forget what was a component (actually a presentational component, but I didn't know that at the time) and what I just placed in a function.

If I were to put all presentation items in components, I get a much more readable container.


    <MeetingContainer>
      <Title text={this.state.meeting.title} />
      <Day date={this.state.meeting.start_date} />
      <MeetingLength duration={this.state.meeting.durationInMinutes} />
      <MeetingUrl url={this.state.meeting.url} />
      <CallIn number={this.state.meeting.callInNumber} />
    </MeetingContainer>

I like this better. It seems to align with the readable code that I love on the back end. Less cognitive load for the developer. I can glance at it and know it displays a Title, Day, MeetingLength, MeetingUrl, and CallInNumber. If I care about any of those things, I can dive in.


