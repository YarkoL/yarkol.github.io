---
layout: post
title:  "The Very First Post"
date:   2017-05-16 21:24:36 +0300
categories: jekyll update
---

Hello, and welcome to my blog. I'm a mediocre schmuck developer just like you... well, okay, if you aren't mediocre schmuck, then more power to you! But if you aren't a developer, then I'm afraid you will find everything here very boring. Mostly I will be telling what kind of software development-related stuff I've been doing, so if I have to do it again, I have a ready reference for it. Hopefully that will save someone else's time too. So it is only natural that I start off with outlining how I set up this blog.

I've had this github.io site for some time already, so I was looking some light-weight easy to maintain blogging system to run on it. Searching "blog on github.io" gave me recommendations that Jekyll is what I need, but the quickstarts and tutorials were little confusing, and not that suitable for someone who already had a site on GitHub.

After doing some googling I came upon [this tutorial](https://briancaffey.github.io/2016/03/17/jekyll-tutorial.html) and reading it dawned on me that all I had to do was to install jekyll into a subdirectory on my local copy of the site and then push it on GitHub. Okay, but I need to get Ruby first, since it wasn't installed on my Ubuntu 16.10 machine, and then use 'gem' command. Of course, I simply entered sudo apt-get install ruby and got Ruby from the standard repository, but then, when I typed 

``` html
$ gem install jekyll
Fetching: public_suffix-2.0.5.gem (100%)
ERROR:  While executing gem ... (Gem::FilePermissionError)
    You don't have write permissions for the /var/lib/gems/2.3.0 directory.
```

Now what? No, I'm not going to 'sudo gem'. This time, search for answer took me to [this Stack Overflow post](http://stackoverflow.com/questions/37720892/you-dont-have-write-permissions-for-the-var-lib-gems-2-3-0-directory), where I was advised to remove the previous Ruby installation and re-install it using this rather daunting set of conjurations:

``` html
sudo apt-get update 
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libffi-dev

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3.1
rbenv global 2.3.1
ruby -v
``` 

After some hesitation, I sheepishly copy-pasted all that, one line at a time, and the entire installation took about 15 minutes.

Ok, so now, back in my site folder:

``` html
$ mkdir blog
$ cd blog
$ jekyll new
jekyll 3.4.3 | Error:  You must specify a path.
``` 

Oh bummer. Let's retrace a bit.

``` html
$ cd ..
$ jekyll new blog
Running bundle install in /home/yarko/yarkol.github.io/blog... 
``` 

Hey presto. 

``` html
$ cd blog
$ ls
about.md  _config.yml  Gemfile  Gemfile.lock  index.md  _posts
```

Hm? This all I got, oh well, but let's just move on. Start the server.

``` html
$ jekyll serve
```

Now it started humming nicely and generated a _site sub-directory, as well as some configuration files. Let's check it out in the browser.
I haven't figured out yet a good way to link images, but http://127.0.0.1:4000/ should now show a very nice looking homepage.

Click that "Welcome to Jekyll" link and start to follow it's instructions.. now goodness starts. The Brian Caffey tutorial that I linked above is a good resource, and as for the markup, here's a [cheatsheet](http://assemble.io/docs/Cheatsheet-Markdown.html). 

Next, I'm just going to push this on my github, and if you are reading this, the last step must have been a success too! :)


















