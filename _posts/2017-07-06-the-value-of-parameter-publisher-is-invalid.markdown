---
layout: post
title:  "The value of parameter publisher is invalid"
date:   2017-06-02 17:02:43  +0300
categories: microsoft azure ssh vm
---

I had to add myself as a sudoer to an existing Ubuntu VM running on Azure cloud. The title of the post is just one of the many error messages I had to deal with. If you got stuck the same way I did... I feel for you.

The official documentation is apparently outdated. They say this should work on the azure-cli command line 

``` html
azure vm extension set RESOURCE-GROUP-NAME VIRTUAL-MACHINE-NAME
VMAccessForLinux Microsoft.OSTCExtensions 1.* --private-config-path userdata.json
``` 

But no. And the messages that come are hard to decipher. Actually, what worked beautifully was this:

``` html
azure vm extension set RESOURCE-GROUP-NAME VIRTUAL-MACHINE-NAME 
LinuxDiagnostic Microsoft.OSTCExtensions 2.0 --private-config-path userdata.json
``` 

Why? Beats me. 

In the case my relationship woth Microsoft Azure grows deeper, chances are I'll update this post, but for now I'll just leave this as an emergency first aid.





