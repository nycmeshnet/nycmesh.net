---
title: "Firmware"
date: "2017-07-05"
---

Unfortunately the firmware meetups were not successful. I'm leaving this here as documentation

**Notes from first firmware meetup: July 5, 2017**

The aim of this meetup is to:

* have a method to compile our firmware that anyone can follow
* support for 802.11ac routers and move away from 802.11n
* support for more directional outdoor routers 

Our current firmware was created by Dan and is over two years old. It uses qMp Clearance 3.2 based on OpenWRT Chaos Calmer. It also has tinc vpn for meshing over the internet and nodogsplash captive portal. It is configured as an OpenWRT packages "feed". The repo is on [our github](https://github.com/nycmeshnet/nycmeshfeed)

qMp's latest firmware (release candidate) is based on the OpenWRT fork [LEDE](https://lede-project.org/)

OpenWRT's development seems to have stalled and many packages are moving to the LEDE fork.

Another package we should look at is [LibreMesh](http://libremesh.org/)

We would like to have a method of building on any OS, not just a Debian based distro. Originally we thought Docker would be the best way to do this. But now we are looking at continuous integration (CI) tools such as [CircleCI](https://circleci.com/)

Our first step is to compile our original image and fix a few minor issues. The next step is to update it to the LEDE version of qMp.

Three members have compiled or almost compiled our original firmware- Jesse, Zach and Seva.

[Jesse expands]

[Zach expands]

The routers we are looking at are:

**GL**  

[GL](https://www.gl-inet.com/) is sending us a "dev board of Gigabit and ac router using Qualcomm 4018 chip.
The wifi driver is not opensource."

GL routers come with OpenWrt installed

**MikroTik**

We have a [SXT Lite5 ac](https://routerboard.com/RBSXT5HacD2n), 
DFS channels are disabled and "hardware locked"

LEDE is adding support for many MikroTik routers

**LigoDLB ac**

We have a few of these [LigoDLBs](https://www.ligowave.com/products/ligodlb-5-15-ac). These are really small and great for window installs. They can run OpenWRT and we have a link to a [kernel patch](http://ml.ninux.org/pipermail/battlemesh/2015-August/004114.html).

Previous models (non ac) had problems with the bootloader, but this is not a problem now.