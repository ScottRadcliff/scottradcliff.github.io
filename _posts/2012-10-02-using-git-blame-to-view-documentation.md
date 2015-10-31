---
layout: post
title:  Using Git Blame To View Documentation
date:   2012-10-02
permalink: using-git-blame-to-view-documentation
categories:
---

I work with a lot of legacy code. And in that work, I often hit situations where documentation is either non-existent or vague. **No, method names are not enough**, but that's an argument for another time.

I have a couple of options here. I can grep through the commits looking for some common indicator that might give me what I need. Or, I can use blame to see who wrote this and hope it wasn't me. Git blame is a far superior option here, but generally I just call it with a file name. If you have never worked with legacy code, I'm here to tell you, the files are never small. They are always hundred of lines,  and that output is painful to sift through.

The fix is pretty simple. Call blame with a range

    git blame [filename]  -L 10,20


That will give me only the lines 10 through 20 in this given file. That output also gives me a commit hash. Grab that hash use it with git show and there are my docs, hopefully telling me why this code was written.
