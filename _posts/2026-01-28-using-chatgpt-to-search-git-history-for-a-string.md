---
layout: post
title: Using ChatGPT to Search Git History for a String
date: 2026-01-28
---

I'm not really a typical software developer when it comes to AI agents and writing software with them. I don't really subscribe to the exercise where you just state what you want and it spits it out for you. My results are always substandard. 

I know AI is the future of software development. And the art of writing code is going away. I just haven't been able to find a lane that I truly enjoy.

But...

I do enjoy plugging in small things that could be helpful, and for me to build, would require some docs reading and experimenting.  I find that plugging that into an agent solves two things.

1. I get the tool I'm after (after some slight revisions)
2. I learn a bit about the thing I would have to lookup

I work in a large codebase and often I end up in a portion I don't have experience with. I can grep through the code base for things I need fine enough. I thought it might be more helpful to search through git history to get a better view of whatever that thing is via commits.

I wasn't exactly sure what that syntax was, so I threw it in ChatGPT as:

`I need a bash alias to search git history for a string`

The thing I settled on after some back and forth about colors and such is:

```
gsearch() {
  git -c color.ui=always log \
    --all \
    -S"$1" \
    --pretty=format:'%C(yellow)%h%Creset %C(cyan)%ad%Creset %C(green)%an%Creset %C(auto)%s%Creset' \
    --date=short \
    --name-only
}
```

Use with  `gsearch "some_string"`

I could have gotten there, but not as fast as ChatGPT did. The agent thing is growing on me little by little.
