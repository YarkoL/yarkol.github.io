---
layout: post
title:  "Cryptocoins 1. Building and running Peercoin client."
date:   2017-05-19 14:35:16 +0300
categories: cryptocurrency peercoin altcoin
---

Recently there has been a resurgence of interest on cryptocurrencies such as Bitcoin and it looks like there is a steady influx of newcomers into the scene and eager to learn about it. I can really relate to all that, because this is the hottest sh*t since Watt's steam engine. This post will be the first one in a series that explains how you can roll out your own cryptocoin for learning purposes, and for learning purposes only. 

We will clone the source of Peercoin, the first coin to implement proof of stake. The pre-requisite for following my guide is a working knowledge of C++ programming and that you aren't scared of linux terminal. I also assume that you've done your homework regarding Bitcoin and are familiar with some of the terminology. Rather than doing a coin cloning 101 guide, which been done many times already. I intend to follow up this with more posts explaining how the coin works internally.

Right, so you have Ubuntu or some other debian. No? Well grab one, I'll wait.

Okay. You need to install dependencies.

``` html
sudo apt-get install git nano build-essential autoconf libssl-dev libboost-all-dev libdb++-dev libdb-dev --yes
``` 
Then go wherever you want the coin source to be; we'll assume it is your home dir from now on, and get the source using Git:

``` html
$ git clone https://github.com/peercoin/peercoin.git
``` 
Once that is done go to the source directory.

``` html
$ cd peercoin/src
``` 
then in _src_, you build the Peercoin client with 

``` html
$ make -f makefile.unix USE_UPNP=- 
``` 
The USE_UPNP=- is optional, it just disables peer discovery using universal plug'n'play, and we don't need that for now. 

Okay, if the build was succesful, you ought to have _ppcoind_, the Peercoin daemon in the _src_ directory. Let's start that with

``` html
$ ./ppcoind -printtoconsole -debug
``` 
_-printtoconsole_ will print out what the node is doing, and _-debug_ will show some special messages, that can be useful.

After getting up and opening databases - we'll get back to all this later - it will exit with a message about missing configuration file.

Go to your home directory. 

``` html
$ cd
``` 
Open _nano_ or some other text editor

``` html
$ nano .ppcoin/ppcoin.conf
``` 

and think of a password. Since we are testing, we can do with 

``` html
rpcuser=rpc       
rpcpassword=pwd 
testnet=1
``` 

Just remember, if you were running your client out there in the wild (i.e. without setting the testnet flag), you'd like to replace the password with something reasonable (like a random string), but for now, this will suffice.

Again run the node, and this time it should keep up humming nicely. Next time we'll have a closer look at what it is doing.



