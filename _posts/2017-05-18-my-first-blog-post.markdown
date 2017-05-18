---
layout: post
title:  "Setting up a Jekyll Blog"
date:   2017-05-18 17:17:11 +0300
categories: hello
---
Hello, and welcome to my blog. I'm a mediocre schmuck developer just like you... well, okay, if you aren't mediocre schmuck, then more power to you! But if you aren't a developer, then I'm afraid you will find everything here very boring.

Mostly I will be jotting down and taking notes of what kind of development-related stuff I've been doing, so if I have to do it again, I have a ready reference for it. Hopefully that will save someone else's time too. Ok, so how about if I start off with telling you how I set up this blog.

I've had this github.io site for some time already, so I picture me looking for some lightweight, easy to maintain blogging system to run on it. Well, it looks like [Jekyll](https://jekyllrb.com/) is the thing. Check out [this excellent article](https://briancaffey.github.io/2016/03/17/jekyll-tutorial.html) first, otherwise what follows may be a little hard to understand.

To get Jekyll, I need to use _gem_, the Ruby package manager. I'm not familiar with ruby, and I don't have it on my Ubuntu 16.10 machine.

Of course my first impulse is to use _sudo apt-get install ruby_ and that seems to work just fine, but then, when I type

``` html
$ gem install jekyll
Fetching: public_suffix-2.0.5.gem (100%)
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /var/lib/gems/2.3.0 directory.
``` 

Now what? No, I'm not going to 'sudo gem'. My next search for answer takes me to this [Stack Overflow post](http://stackoverflow.com/questions/37720892/you-dont-have-write-permissions-for-the-var-lib-gems-2-3-0-directory), where I'm advised to remove the previous Ruby installation and re-install it using a rather daunting set of command-line-conjurations. After some hesitation, I sheepishly copy-paste all that, one line at a time, and next time I issue _gem install jekyll_ it all works out.

So, starting from my local copy of my github.io site, I go up one level...

``` html
~/yarkol.github.io$ cd ..
```
... and next up I init the jekyll site

``` html
~$ jekyll new yarkol.github.io
Running bundle install in /home/jarkko/yarkol.github.io... 
``` 

Ok good. Then I _cd_ into the _yarkol.github.io_ directory again and start the server

``` html
$ jekyll serve
``` 
Then I go to check it in browser, _http://localhost:4000_, and **hey presto!** here's my beautiful jekyll blog!

![img](/img/blog.png)

Flash my teeth in mirror.. and push the repo up to Github.

Then it's just fun editing the markup files in the __posts_ folder. Also, the __config.yml_ needs to be edited for the basic features, and for learning Markdown (the markup language that Jekyll and Github use), here is a useful [cheat sheet](http://assemble.io/docs/Cheatsheet-Markdown.html).

Coming up: Adding analytics...




