---
layout: post
title:  "The value of parameter publisher is invalid"
date:   2017-07-06 17:02:43  +0300
categories: microsoft azure ssh vm
---

I just faced the task of having to add a new user with sudo privileges to an existing Ubuntu VM running on Azure cloud. I could not do that by logging in as root (don't ask), so I had to create a new sudoer from the bash shell that the Azure portal provides. That turned out to be quite an ordeal.

The title of the post is just one of the many error messages I had to deal with (google did not know about it, so I hope this will rectify the situation).

The current docs say something like this should work:

``` html
azure vm extension set vmname VMAccessForLinux Microsoft.OSTCExtensions 1.*
 --private-config-path conf.json
``` 

where vmname is the name of your virtual name. But no. You need to specify a resource group name. And if you use asterisk on the commandline, you'll get the weird error that is the title of this post. And the error messages that come are hard to decipher. 

Well, after lots of cursing and googling, what finally worked was this:

``` html
azure vm extension set resourcegroupname vmname
LinuxDiagnostic Microsoft.OSTCExtensions 2.0 --private-config-path conf.json
``` 

(I got that from [here](https://disqus.com/home/discussion/thewindowsazureproductsite/monitoring_a_linux_vm_with_a_vm_extension_microsoft_azure/))

Maybe some day I will understand what is going on... For now, I'll just leave this as an emergency first aid, should some other poor bastard run into the same issue.





