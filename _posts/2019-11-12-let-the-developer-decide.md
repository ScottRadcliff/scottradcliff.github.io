---
layout: post
title: Let the developer decide
date: 2019-11-12
---
Intentionally omitting documentation because you think someone should use a library might seem like a good idea. I mean we should use tools that are available to us. But when a developer needs to do something a little less conventional, it makes it really difficult to use your library.

I'm currently working on something with the oauth2 specification. And because reasons, we are implementing our own identity provider. We are still working within the parameters of the spec, we are just doing some authorization a little differently.

The library that we are using for our authorization server refuses to show all of the parameters needed to build urls for oauth2. The reason being _you should not code this yourself and use a library instead_. I agree. But sometimes, you need to build some things yourself. The fact that this library tells developers that they are not responsible enough to implement parts of the oauth2 spec themselves is short sighted to put in nicely.

A better approach might have been something like _we strongly discourage you from implementing parts of the oauth2 spec yourself. There are plenty of really good libraries that can do this for you. Please consider one of those. But if you have to, here is the documentation you need_

Let the developer decide.





