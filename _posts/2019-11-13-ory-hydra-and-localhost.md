---
layout: post
title: Ory Hydra and localhost
date: 2019-11-13
---

I've always seen `localhost` and `127.0.0.1` as the same thing. It's definitely the same location. But I hadn't considered that it may be seen as a different host. In fact, I'm still not sure if it is, or even if it _should_ be.

I've spent a couple of days debugging some weird issues with [Ory Hydra](https://github.com/ory/hydra). Let's set aside the fact that it uses OAuth2, but what seems to be in an unconventional way. I need to make about six `http` requests to get a token. I don't know if that's normal for an identity provider, but it seems excessive.

The issue I ran into was within those six calls, `localhost` and `127.0.0.1` had gotten used interchangeably. I received various error messages. Everything from telling me the `error is indistinguishable` to errors about an unknown client, or errors about `CSRF` tokens.

While googling the error messages over and over, just looking for a sliver of hope, I saw a comment that fixed everything.

Turns out Hydra sees `localhost` and `127.0.0.1` as different hosts, but doesn't complain about an unknown host. That might have led me down the right path sooner. And I never use `127.0.0.1`, so I'm pretty sure that was a config setting when I was using the 5 minute tutorial to set everything up.

Make sure to check what host you are passing around when setting up `Hydra`.
