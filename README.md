Source for my personal site. It's built with [Jekyll](http://jekyllrb.com/).

This is pretty boring. Here. Look at this gif.

![](./assets/images/ouch.gif)



docker build -t jekyll-app .


docker run --rm -p 4000:4000 -v $(pwd):/app jekyll-app


