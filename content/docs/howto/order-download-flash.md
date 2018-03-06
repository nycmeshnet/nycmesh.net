---
title: "Order, Download and Flash"
aliases: [/download/]
---
Please read our [FAQ](/faq) if you haven't already.

**Join the mesh**  
First you need to enter a [new node request](/join). This will add your router to our list of node requests and put your location on our map. If you have multiple locations enter them separately. If you are within range of a supernode and have line-of-sight you may be able to connect directly. Otherwise we will try to connect you to a nearby rooftop.

To connect to the supernode, please [contact us](mailto:install@nycmesh.net) and we will advise. This usually uses a LiteBeamAC or NanoBeamAC. Configuration info is [here](/cpe).

To setup a rooftop to rooftop connection you can use two NanoStation M5s. You can also just set up a public access point and aim it towards the street. It is best to figure out exactly what kind of connection you are making before proceeding. Chat with us first to make sure.

**Order a router**    

* Ubiquiti NSM5 directional 5GHz (~$90 including tax)  

**For Supernode connections you need a different router (usually LiteBeamAC)**


Buy on Amazon:   
[Ubiquiti NanoStation NSM5](http://www.amazon.com/dp/B0049AVWAO/?tag=nsm5-nycmesh-20)  

Buy at B&H: (free delivery)   
[Ubiquiti NanoStation NSM5](http://www.bhphotovideo.com/c/product/1049768-REG/)  


**Download the firmware and flash your router**

**NanoStation NSM5 instructions**  

If you want to connect to a public access point, such as a Link NYC kiosk, there is no need to flash the router. Just follow [these instructions](/blog/public-access-points/).

  (for old NSM5s or if you are upgrading see below)  
   
  FOLLOW ALL THE STEPS OR YOU MAY PERMANENTLY BRICK THE ROUTER!  

Firstly you need to get your NSM5 back to AirOS 5.5.

* If your new NSM5 is running 6.x you need to first downgrade to [v6.0.6 beta](https://www.ubnt.com/downloads/XN-fw-internal/v6.0.6/XW.v6.0.6-beta.30875.170526.0023.bin) before downgrading again to 5.5
* For a new NSM5, download this file to your computer- [AirOS5.5 download](http://dl.ubnt.com/firmwares/XW-fw/v5.5.10/XW.v5.5.10-u2.28005.150723.1358.bin) **You MUST downgrade from AirOS 5.6 to 5.5**
* Plug an ethernet cable from POE on the power adapter to "main" on the NSM5 (we will switch to "secondary" later)
* Plug from LAN on the adapter to your computer (You may need a USB ethernet adapter)
* Turn off Wi-Fi on your computer
* Open Network Prefs (or equivalent)
* Connect by ethernet using a manual address e.g. 192.168.1.11 with mask 255.255.255.0
* Go to [192.168.1.20](http://192.168.1.20) in your browser
* You will get https warning "your connection is not private" or some such
* Click "advanced" and "proceed to 192.168.1.20"
* Enter ubnt, ubnt, USA, [x] agree to terms, login
* On the tabbed panel select "System"
* Click "Upload Firmware: Choose File"
* Select the AirOS file
* Click "Upload"
* There are two loading screens here, and if you don't go through both, you will irreparably break the router.
* Wait until it reboots
* Make sure you are now running 5.5.10 and NOT 5.6.x or 6.x. Double check. Triple check. If not, you'll permanently break the router.
* Download our firmware- [NSM5 XW download](http://nycmeshnet.github.io/download/NSM5-XW.html) 
* Go to [192.168.1.20](http://192.168.1.20), login and select "System" again
* Click "Upload Firmware: Choose File"
* Select the M5-XW factory image you downloaded
* Click "Upload"
* You will get a "third-party" warning. Ignore this and click "Update"
	
Wait ten minutes or so. It now has a SSID name like "-NYC Mesh- 1a2b" and a random IP of the form 10.x.x.x

* Plug an ethernet cable from LAN on your current router to LAN on the power supply, and from POE to the **secondary** input on the NanoStation. 

* <a href="mailto:newnode@nycmesh.net">Email us</a> and we will check that everything is working and add you to the mesh. You must do this as we manually configure the tinc tunneling for each newly flashed router.

**You must also install a watchdog script to keep the network stable**. [Here are the instructions](/blog/watchdog). <a href="mailto:newnode@nycmesh.net">Email us</a> if you are not comfortable doing this. This script will be included in the next version of our firmware.

Now your router is flashed, read how to [install a NanoStation](/blog/nsm5-install/)

**Upgrades**  
Upgrades are for when your router is already running nycmesh/qMp or another version of OpenWrt.

[WR842N upgrade download](http://nycmeshnet.github.io/download/WR842N-upgrade.html)  
[WDR3600 upgrade download](http://nycmeshnet.github.io/download/WDR3600-upgrade.html)  
[NSM5-XW upgrade download](http://nycmeshnet.github.io/download/NSM5-XW-upgrade.html)  

**Older (2014 or earlier) XM NSM5s**  
[NSM5-XM download](http://nycmeshnet.github.io/download/NSM5-XM.html)  
[NSM5-XM upgrade download](http://nycmeshnet.github.io/download/NSM5-XM-upgrade.html)  

**Firmware**  
[Our firmware](https://github.com/nycmeshnet) is based on [qMp](http://qmp.cat/), which is an [OpenWrt](https://openwrt.org/) package using [BMX6](http://bmx6.net/projects/bmx6) meshing protocol. Thanks to Roger at qMp for all of his help.

**Am I on the mesh?**  

After you successfully flash your router and you have <a href="mailto:newnode@nycmesh.net">emailed us</a>, and we have added your tinc tunneling key, you should be on the mesh. If you re-flash your router (not usually necessary) you will have to email us again so we can add your new tinc tunneling key. Emailing us also lets us know who's router was just flashed.

A quick test to see if you are on the mesh is to go here-
[http://10.100.4.10/](http://10.100.4.10/)

This URL should resolve after an hour or so of being online-  
[http://wiki.mesh/](http://wiki.mesh/)  

Here are our old TP-Link instructions in case you find an old TL-WR842N on ebay-

**TP-Link instructions**

* Click to download the firmware to your computer-  
  [TL-WR842N  download](http://nycmeshnet.github.io/download/WR842N.html)
  (For upgrades see above)
* Connect to the router via Wi-Fi. It has a name like "TP-LINK_ABC123"
* Enter the "wireless password/pin" that is printed on the bottom of the router e.g. "12341234"
* In your browser, go to 192.168.0.1
* Enter name: admin, pwd: admin
* Click System Tools>Firmware upgrade
* Click "choose file" and select the image you downloaded and click "upgrade"

Wait ten minutes or so and connect to the router via Wi-Fi. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

* Plug an ethernet cable from LAN on your current router to the blue WAN on the TP-Link.

* <a href="mailto:contact@nycmesh.net">Email us</a> and we will check that everything is working.

 

