---
layout: page
title: "Frequently asked questions"
---
[Why are you building a community-owned network?](#why)  
[Is there a monthly fee?](#fee)   
[What is your business plan?](#business)   
[Is this a replacement for my current internet connection?](#replace-isp)   
[What can I do on the mesh that I can't do on the internet?](#mesh-services)   
[Why should I join the mesh now?](#why-join)   
[Can the mesh cover the whole country?](#coverage)   
[Are you an internet Service Provider (ISP)?](#isp)   
[What is a node?](#node)  
[What is the difference between a router and an antenna?](#router)  
[What software/firmware do you use?](#firmware)   
[Can I use my own different router?](#other-router)   
[Can I install a router if I have no view or rooftop access?](#no-view)   
[What is involved in a rooftop or window install?](#install)   
[I want a NanoStation but I'm not ready for a rooftop install?](#nsm5-indoor)   
[I can see another node from my window. Can I put a router there?](#window)   
[Why don't we mesh mobile phones instead of routers?](#mobile)   
[Is the mesh secure?](#secure)   
[What is your user data policy](#data)  
[Why aren't you doing this obvious thing I just thought of?](#obvious)   

## <a name="why"></a>Why are you building a community-owned network?

This is our most common question, so we made it into a blog post- [12 Reasons for mesh](/blog/twelve-reasons-for-mesh/)
 
## <a name="business"></a>What is your business plan?

We are not a business and we are not an ISP! We don't have "customers" or "users", we have members. Being a member of our network has many benefits including replacing your current ISP with real, unmonitored internet access. Businesses are free to join or connect to the mesh as long as they obey the [network commons license](../ncl.pdf).

## <a name="fee"></a>Is there a monthly fee?

Once you buy a router and install it you are part of NYC Mesh. There is no compulsory fee. Donations help us cover maintenance. By joining the mesh you are obliged to share and extend the mesh in the same way that it was shared with you.

If you are benefitting from the network, or you would like to help us extend the network, please pay a small [monthly donation.](/donate) If you cannot afford this, we understand!

We also do installs for entire buildings and set up high-bandwidth point-to-point connections with dedicated hardware. If your building would like this dedicated service please [email us](mailto:install@nycmesh.net) or call us on (646) 727-0866. Using this service can replace your current ISP for very large buildings.

## <a name="replace-isp"></a>Is this a replacement for my current internet connection?

We are connected to the internet through peering at an internet exchange point. If you have line-of-sight to supernode1 in downtown Manhattan, or supernode2 in Brooklyn you can have a fast, reliable connection with suitable hardware, and replace your ISP.

Many members who cannot connect directly to our supernode are sharing their internet. If you have line-of-sight to another member or they are very close by you can ask if it is OK to share internet. We encourage people to share or make deals with their neighbors. If you are within range of the mesh, your router will automatically use the fastest internet connection.
   
## <a name="mesh-services"></a>What can I do on the mesh that I can't do on the internet?

It is possible to connect directly to other people on the mesh without using the internet. If for some reason the internet is shut down by a fascist dictator, the mesh will still work. Internet shutdowns are becoming increasingly common in the world. 

The mesh has small web servers that show local information and allow you to chat and post messages. So far we have servers in five locations- Harlem, Bay Ridge, 3rd St. and 7th St. in the East Village, and our main directory "wiki.mesh" in Williamsburg. We are in need of volunteers to help add content and maintain our servers.

## <a name="why-join"></a>Why should I join the mesh now?

By joining the mesh you help us grow and increase our reach across the city. This is a community project and you will be helping to create a decentralized infrastructure, free from traditional business interests.

You can also help your neighborhood by providing access points for local parks, cafes and bars. Local businesses are often keen to host a node once you explain the benefits to them.

## <a name="coverage"></a>Is it possible for the mesh to cover the whole country?

Yes, there is a mesh network called "Guifi" in Spain that covers a large part of the country. In order to do this, they have a backbone of many long distance WiFi connections and also community owned fiber.

## <a name="isp"></a>Are you an Internet Service Provider (ISP)?

No, we are not an ISP, we are a community that shares ownership of a network. Collectively we have our own internet connection at our "supernode". Also some of our members share their own internet connections. 

Our supernode peers with other networks at an internet exchange point and provides access to the internet without traditional ISPs. We are a non-profit project of the New York chapter of the Internet Society (ISOC-NY).

## <a name="node"></a>What is a node?

A node is a location with one or more routers or antennas, i.e. it is usually a dot on our map. Some dots have multiple apartments with installs in the same building so that would be one node per apartment. A supernode will have multiple radios, routers, antennas and maybe a server too.

## <a name="router"></a>What is the difference between a router and an antenna?

Most of the devices we use, such as a LiteBeam or NanoStation are self-contained so they have an antenna, radio and ethernet router all in one. "Wireless router with antenna" is too long so we usually call the whole thing a router, just like your home wifi "router". Sector antennas usually have a separate radio plugged into the back of them so we call those antennas (although some sectors are self-contained). 

Ubiquiti call their self-contained AirFiber a "radio", and others call an AirFiber a router or an antenna, so yes everyone is confused about what term to use.

## <a name="firmware"></a>What software/firmware do you use?

We are using an OpenWrt package made by qMp. This uses the BMX6 mesh protocol. We have added tinc tunneling so a router can mesh over the internet when out of range using a secure virtual private network (VPN). 

Our point-to-point connections use factory firmware such as AirOS. The supernode is running Linux with Quagga and BGP. For network monitoring we use Nagios and Icinga2.

We also have some members experimenting with and contributing to cjdns/hyperboria software. Let us know if you are interested in this.

## <a name="other-router"></a>Can I use my own different router?

No, the router we currently support and recommend for building-to-building is the Ubiquiti NanoStation M5. For supernode connections you will need a LiteBeamAC or NanoBeamAC router. Our [download page](../download) has our firmware for the NanoStation and links to buy. We are working on supporting other routers. 

TP-Link have locked down some of their routers, and others are not supported well by OpenWrt, so we unfortunately are looking at other options for indoor routers at the moment.

## <a name="no-view"></a>Can I install a router if I have no view or no rooftop access?

Yes you can. Because you may be out of range of other mesh nodes, your router will use secure VPN tunneling to connect to the mesh over the internet. You will still see the exclusive mesh web content. Neighbors could also install routers creating a mesh for your building. 

## <a name="install"></a>What is involved in a rooftop or window install?

Rooftop installs are mostly to connect you to a supernode or a second hop from a supernode. Look at our [map](../map) to find line-of-sight to another node location less than two miles away. You can also talk to people in the neighborhood and convince them to also install a node. We also have a collection of rooftop panoramas where you can check for possible line-of-sight connections. 

The other type of install is where a directional Ubiquiti router is aimed at a nearby public space (park, cafe, bar etc.) as a public Wi-Fi access point. We currently have five public spaces with this type of install. 

We support one outdoor router, the Ubiquiti Nanostation NSM5 (~$90). We have links for this on the [download page](../download)

We can help you with the rooftop installation. Typically one or two routers are attached to a pole on the roof and an ethernet cable is run to the apartment, and connected to the TP-Link mesh router and an internet gateway. The install cost is usually $160 including labor and equipment. The ethernet cable also supplies the power to the router using "power over ethernet". If the roof (or balcony or window) is close to your apartment you might not need an additional mesh router.

## <a name="nsm5-indoor"></a>I want a NanoStation but I'm not ready for a rooftop install

It is easy to use the NanoStation indoors. It is 5GHz router, and all modern phones and most laptops support that. It looks a little strange but has a very good signal. If you have a long apartment or thick walls, a NanoStation is ideal.

## <a name="window"></a>I can see another node from my window. Can I put a router there?

Yes! You can use a directional NanoStation in your window. It will work from behind glass if you are unable to place it outside the window. The simplest install is to velcro the flat surface of the NanoStation NSM5 to the window. We have a [blog post about NSM5 installs.](../blog/nsm5-install/)

## <a name="mobile"></a>Why don't we mesh mobile phones instead of routers?

There is "mesh" software for mobile phones such as Serval and FireChat. This is mainly used for chat messages. It stores the messages until a phone is within range and then transfers the data. Mobile "mesh" networks are very low bandwidth, not real-time and require many phones in a small area. They are great for events or some emergency situations.

## <a name="secure"></a>Is the mesh secure?

If you use the internet while on the mesh, you should use standard precautions such as using https (lock icon) web sites for secure connections, or use a VPN service.

By default, our mesh router is firewalled from your local network. It is not possible to reach beyond the mesh router to your LAN. Mesh tunneling over the internet is by tinc VPN and is secure. Network traffic within the mesh is not encrypted by default.

## <a name="data"></a>What is your user data policy?

NYC Mesh does not collect, store, monitor, or log any user traffic or content that passes through our network. 

NYC Mesh may periodically look at traffic headers for troubleshooting purposes as traffic passes through the NYC Mesh network, however, this data is never logged or stored. NYC Mesh may collect aggregate statistics on links to monitor traffic flow to ensure a successful network. 

Beyond the scope of NYC Mesh, the NYC Mesh network is unencrypted, open, and depends on donated internet from individuals and other companies which is outside the control of NYC Mesh, therefore NYC Mesh is unable to detect or prevent traffic monitored at those points. 

NYC Mesh will comply with all federal laws in the countries it operates, however, as policy, no data is collected and therefore no data exists to provide requestors.

## <a name="obvious"></a>Why aren't you doing this obvious thing I just thought of?

We have a lot on our to-do list and everyone is a volunteer. Please [email us](mailto:contact@nycmesh.net) with suggestions, or better still volunteer to help us. [Join our slack.com group](https://slack.nycmesh.net/) where we do our planning. We need help with everything such as publicity, emailing, printing leaflets, writing FAQs, and installing routers on rooftops.










 
