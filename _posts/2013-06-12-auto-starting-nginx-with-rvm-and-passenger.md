---
layout: post
title:  Auto Starting Nginx With Rvm And Passenger
date:   2013-06-12
categories:
---

If there is one thing that drives me nuts, it's trying to figure out what isn't running after a server reboot. I wish I had all the time back from grepping through history to see what services were started manually.

The problem with installing nginx through passenger and rvm is it doesn't behave like a normal install. The usual startup script doesn't work.

This script works pretty good for me, so I thought I would share it here. There is also a [GitHub repo](https://github.com/ScottRadcliff/nginx-passenger-autostart) with instructions. This is all thanks to [http://serverfault.com/a/69753](http://serverfault.com/a/69753)

1) Create shell script in /etc/init.d

    sudo vim /etc/init.d/nginx-passenger.sh

2) Paste in this text:

    #!/bin/bash
    # this script starts the nginx process attached to passenger
    sudo /opt/nginx/sbin/nginx

3) Make it executable

    sudo chmod +x /etc/init.d/nginx-passenger.sh

4) Run it to make sure it works

5) Update the init script links
    sudo update-rc.d nginx-passenger.sh defaults
