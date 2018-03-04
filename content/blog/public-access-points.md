---
title: "Internet gateways"
author: Brian
date: "2016-10-25"
aliases: [/kiosk/]
---
To get on the internet, the mesh needs what we call "gateways". We have a few choices when looking for internet gateways. Mostly people are sharing their own internet, and soon (if you live close enough) you will be able to connect to our new supernode as your primary gateway.

Another gateway is a public access point. If you are too far away from an access point to get a good connection, you can use a directional router such as the NanoStation in "client mode". This is a bit like using it as an antenna to boost the signal.

 It is very easy to configure a NanoStation to connect to these new kiosk access points to extend the range. I've already configured an NSM5 and saved the config file for you- [NSM5 config](/download/config/NSM5-XW-link.html). In my test I was getting 60Mb down and 20Mb up, so it is a very healthy speed. 

To use this config file you need a new NanoStation NSM5 or one that is running AirOS.  
* Plug an ethernet cable from POE on the power adapter to "main" on the NSM5  
* Plug from LAN on the adapter to your computer (You may need a USB ethernet adapter)  
* Turn off Wi-Fi on your computer  
* Open Network Prefs (or equivalent)  
* Connect by ethernet using DHCP with manual address e.g. 192.168.1.11  
* Go to [192.168.1.20](http://192.168.1.20) in your browser  
* You will get https warning "your connection is not private" or some such  
* Click "advanced" and "proceed to 192.168.1.20"  
* Enter ubnt, ubnt, USA, [x] agree to terms, login  
* On the tabbed panel select "System"  
* At the bottom select "Upload Configuration:Choose file" and upload the file you downloaded above.  

The config file changes the IP to https://192.168.10.20 instead of the usual 192.168.1.20, so adjust your laptop to the correct subnet, e.g. 192.168.10.11

This should now automatically connect to the kiosk by seeing the kiosk SSID. Aim it in the general direction of the top of the kiosk. Connect the 'main' ethernet port to your laptop, or to the WAN of another (mesh!) router. The first time you connect you will have to enter an email address. This will keep you logged in for about a month.

To connect to different SSIDs go to the "Wireless" tab and "Select..." You can use this while traveling to connect to various access points over long distances. A NanoStation will work from a 12V battery if you want to make this portable.

Here is a video that shows how to configure AirOS for client mode yourself- [client mode using AirOS](https://www.youtube.com/watch?v=zWxAHA5PkdE)

With all these gateways we get lots of questions about security. As always, https (used by most web sites) is a secure way to transmit information across wifi. We recommend using VPN services for end-to-end encryption for total security.



