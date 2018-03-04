---
title: "Splash Screen"
author: Brian
date: "2017-01-27"
---

**The Splash Screen**

Our default install includes a "captive portal" splash page. It requires one click and, if it opens in a browser, it will take you to our website. Most phones now open the splash in the notification area. If you click there it just disappears.

If you are using the router at home the splash can get annoying. It will also stop devices like Chromecast or Alexa from connecting. You can disable it for a list of devices or disable it completely if needed. It is good promotion for the network to have the splash. Many people have joined the mesh after seeing the splash page.

To disable it for certain devices, first, you need to find the MAC address of your devices that you want to allow. Then you need to ssh in (ask us for name/pwd) and-

```vi /etc/config/nodogsplash```

At the end of the file add a line with a list of your MAC addresses (replacing examples)-

```list trustedmac 'aa:bb:cc:dd:ee:ff, 11:22:33:44:55:66, '```


The default config file lives here-
[https://github.com/openwrt-routing/packages/tree/master/nodogsplash/](https://github.com/openwrt-routing/packages/blob/master/nodogsplash/files/nodogsplash.config)

To completely stop the splash-

```
rm /etc/hotplug.d/iface/95-nodog 
/etc/init.d/nodogsplash stop
/etc/init.d/nodogsplash disable
```

[Email me](mailto:brian@nycmesh.net) if you have any comments or suggestions.



