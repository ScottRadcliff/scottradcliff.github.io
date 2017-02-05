--- layout: post title:  Ignoring Local Files with Git date:   2017-02-04 ---


When your are working on a team, it changes some of the decisions regarding
things you may or may not want to add to the codebase. If everyone has their
personal preferences in a project, it can become pretty polluted.

I often like to have some text files to track tasks and other notes regarding a
feature I may be working on. I could add these files to the `.gitignore` file,
but I'm sure I'd be questioned as to why I was adding that. And with good
reason. I should only add things that are project specific, not programmer
specific.

Turns out, I can have some sort of local `.gitignore`.

Your `.git` directory has a lot of stuff. Lots of useful stuff. Admittedly, I've
never really looked inside. As it turns out, it contains an `exclude` file in
`.git/info/exclude`

By default, it looks something like this:


    # git ls-files --others --exclude-from=.git/info/exclude # Lines that start
    with '#' are comments.  # For a project mostly in C, the following would be
    a good set of # exclude patterns (uncomment them if you want to use them): #
    *.[oa] # *~


Anything you add to that file will be ignored locally. 

So, in my case, I want to ignore `issues.txt`. Adding that line to the file,
sets me up.


    # git ls-files --others --exclude-from=.git/info/exclude # Lines that start
    with '#' are comments.  # For a project mostly in C, the following would be
    a good set of # exclude patterns (uncomment them if you want to use them): #
    *.[oa] # *~ issues.txt

I can see a potential issue with forgetting that you added lines to that file.
For more information, check out the docs
[https://git-scm.com/docs/gitignore](https://git-scm.com/docs/gitignore)

Use with caution.
