Source for my personal site. It's built with [Jekyll](http://jekyllrb.com/).


## Run the app in a container
`docker build -t jekyll-app .`

`docker run --rm -p 4000:4000 -v $(pwd):/app jekyll-app`


* --rm removes the container when stopped.

* -p 4000:4000 maps the container’s port 4000 to your machine.

* -v $(pwd):/app mounts your local directory into the container for live updates.


