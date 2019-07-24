---
title: "How to start a community network"
author: Brian
date: "2017-05-11"
aliases: [/how/]
---

Here are some notes and ideas on how to start a community network.

---

**Research**

It is important to do some research first. There are a few really big community networks (mostly non-English speaking). The biggest is [Guifi](https://guifi.net/en/node/38392) in Spain. Others include [Freifunk](https://freifunk.net/en/) in Germany, and [Wlan Slovenija](https://wlan-si.net/en/). Follow those links and see what they are doing.

Guifi began on farms and gradually expanded across the country. They use hundreds of kilometers of fiber, and wireless in all modes- point-to-point (P2P), point-to-multipoint (P2MP) and mesh (MP2MP). Here is a good long [interview with Ramon Roca,](http://www.cookreport.com/pdfs/march-april13diowireless.pdf) who started Guifi.

NYC Mesh has done many presentations that explain what we are doing. You can [watch videos and see the slides here.](/blog/presentations)

**Essential Reading**

[Wireless Networking in the Developing World (WNDW)](http://wndw.net/book.html) is a great free book about designing, implementing, and maintaining low-cost wireless networks. http://wndw.net/book.html. 

You need to know the basics of wifi and networking. The OSI layers, IPv4, IPv6, 2.4GHz vs 5GHz, wifi modes- infrastructure vs. ad-hoc (which is used by mesh routers) etc. This book covers all of that.

Community organizations with shared resources often fail. This is called the tragedy of the commons. Others succeed and have been successful for centuries. [Governing the Commons, Ostrum](https://www.amazon.com/Governing-Commons-Evolution-Institutions-Collective/dp/B00DELQ2T0/ref=sr_1_3?) lists the principles that the successful collectives share. Design principles illustrated by long-enduring "common pool resources" (CPR) institutions-

*  Clearly defined boundaries
*  Congruence between appropriation and provision rules and local conditions
*  Collective-choice arrangements
*  Monitoring
*  Graduated sanctions
*  Conflict-resolution mechanisms
*  Minimal recognition of rights to organize

**Choose appropriate antennas, routers and firmware**

NYC Mesh is a hybrid network of point-to-point, point-to-multipoint (sector antennas), ethernet and mesh. It is important to pick the right solution for each networking problem. 

Point-to-point is used to go long distances often with expensive equipment such as an AirFiber pair.

Point-to-multipoint sector antennas are good for getting high-bandwidth into neighborhoods. Put one or more of these on a tall building. You don't need to flash these with mesh software, just use the factory software such as AirMax, usually set in "bridge" mode.

Mesh usually uses different firmware from the factory firmware or different configurations. It is good for the last mile as it re-configures automatically. If there is a mesh network on your block, often you can use just one device to extend the network.

For mesh protocols we are currently using OSPF in a MikroTik Omnitik. We have our own [config generator](https://configgen.nycmesh.net) for this to make it simple. We have used BATMAN protocols such as bmx6 or batman-adv (bmx7 is still experimental). There are prebuilt packages- Libremesh, qMp and Gluon. We use [qMp](http://qmp.cat). Don't try creating your own, just modify an existing package to your configuration. [Libremesh](https://libremesh.org/) has been very active lately and has support for a large range of routers. We are currently trying this as well.

**Install your first node**

Some groups never get around to installing anything. Just go and install your first node to prove you can. Set up a public access point in a cafe or other meeting place. [Leave the router open](https://www.schneier.com/blog/archives/2008/01/my_open_wireles.html), and set the SSID to "-Our Name-" (the first dash means it will be at the top of the list of SSIDs). With each successful install you get experience, publicity and more members joining.

**Online collaboration**

* Chat software (Slack)

* Meeting (Meetup)

* Planning (Trello)

* Build your website with a map, join form, blog and your [commons license](/ncl.pdf)

* Tweet and get local news involved. Local news gets stories from the hashtags for their area.

**Commons license**

The [commons license](/ncl.pdf) is important as it is has the rules to help the network sustain and expand. The basic idea is that anyone can join the network but they also must agree to not harm the network and also to extend the network by letting other people join their node. It has a similar function to the GNU GPL license for open source software, where you are free to use the software but must share the changes you make to the code.

The basic tenets are:

* Participants are free to use the network for any purpose that does not limit the freedom of
others to do the same.

* Participants are free to know how the network and its components function.

* Participants are free to offer and accept services on the network on their own terms.

* By joining the free network, you agree to extend the network to others under the same conditions.

As the network grows, people may want to build businesses around the network. This is generally a good thing as the businesses will need the network to be stable and will help in doing this. The license will prevent any business from closing up the network and unduly profiting from it.

**Meetup spaces**

Get a regular space for meetups. There are offices that will donate their space for free after work hours. These are good for general meetups. You should also have technical meetups in makerspaces where you can configure routers and practice crimping ethernet cable etc.

**Install team**

Get a team of people together to do installs. These installs will mostly be weekends as that is when people are free during the day. The team has to know how to crimp and run cable, configure and align antennas, drill and install antenna mounts and drill through window frames.

Roof installs can sometimes be done using abandoned TV antenna masts. Otherwise you will need to install your own J-pipe mast or bracket using a drill, or use a [non-penetrating mast](http://wadeantenna.com/product-category/mounts-masts/)

**Whole buildings**

Try to get whole buildings to install a rooftop antenna and then run ethernet to the apartments. You want long term installs! Don't connect rooftops unless a) multiple tenants OR b) person owns apartment OR c) person intends to stay very long time i.e. avoid students etc. who will move out! 

**Gateways**

Plan your internet gateways. Initially you will probably use your home ISP connection (totally legal in this country). Eventually you may want a "supernode" with bigger bandwidth. An IXP or ISP may donate a connection, as DE-CIX and Packet.net did for us.

Another kind of gateway is a public wifi access point. By using directional routers you can extend the range of public access points very easily. Here are some instructions- [how to connect to a kiosk.](/blog/public-access-points). This uses a NanoStation NSM5 or Omnitik SXTsq.

**Tall structures**

Tall structures are the fastest way to expand your network. There are a few different types in a city and you need to try them all- housing association buildings, skyscrapers, [churches](/leaflet/church.pdf), schools, libraries, existing antenna masts and building coops. Make specific [presentations and handouts](/leaflet/) for different types of structures.

**Supernodes**

Plan your first major gigabit install at an data center or tower. This will have sector antennas (P2MP) and point to point. You may need a network engineer to help in their spare time. An IXP connection at a data center requires a network engineer familiar with BGP.

A sector antenna is basically a Wireless ISP (WISP) tower so WISP expertise is needed. The best online forum is the [Ubiquiti community](https://community.ubnt.com/), and the best organization in America is [WISPA](http://www.wispa.org/). The sector antennas can be a gateway and also bridge your mesh network and reduce the amount of hops. Try to not to be more than three hops from a gateway. Every hop halves the bandwidth and adds ~15ms of latency.

To get a long distance from a gateway use P2P setups- either cheap: 150Mbps such as a pair of LiteBeams, or expensive: gigabit such as a pair of AirFiber.

The most popular cheap outdoor routers are [Ubiquiti](https://ubnt.com). Other good companies are [LigoWave](https://www.ligowave.com/), [MikroTik](https://mikrotik.com/).

For short distance gigabit connection (less than 1Km) you can use 60GHz antennas like this [Wireless Wire dish](https://mikrotik.com/product/wireless_wire_dish)

**Local mesh networks**

Besides connecting to a major tower like a supernode, you can build up a neighborhood network. This is usually based around a person who has strong connections to that area, and can be as simple as sharing your connection within a building using ethernet and mesh routers. Also putting a mesh router in your window to give access to a cafe or park across the street or a neighboring building.

**Computer networking groups**

Go to local [NANOG](https://www.nanog.org/) and other computer networking groups. These people will understand what you are trying to do, and be very supportive. Some of them may want to join the group and help with the hardcore networking problems.

Talk to local WISPs and alternate ISPs. WISPs have the skills needed to make a fast wifi network.

**Fiscal sponsor**

Get a non-profit to be your fiscal sponsor (ISOC in your state etc.). This will make it easier to accept donations and get grants. Eventually you may want to form a non-profit organization.

**Grants**

Apply for grants! ISOC has a "Beyond the Net" grant which is specifically for community internet projects. Other grants and city RFPs will come up. It's a lot of work but you should apply to everything you can.

**Donations**

Set up an easy to use donation page on your website. You will need to figure out a structure that can accept tax-deductible donations, like a 501(c)3 fiscal sponsor, or form a non-profit organization. You can use a service like Stripe to do credit-card processing.

**Collaborations**

Look for potential collaborations. Many computer networking companies are strictly business to business and will not see you as a competitor. They are often willing to donate to a community network. People that work at these companies will want to join the network and set up their own nodes.
