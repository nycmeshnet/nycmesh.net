---
title: "Does it mesh?"
author: Brian
draft: true
---
As NYC Mesh has grown, people may wonder whether we are still a "real" mesh network. Yes we are! The network architecture has grown quite a bit and become complicated, but we still try to interconnect all of our nodes and maintain an internal network for running services independent from the internet. All of the people working on our network call it simply "the mesh".

NYC Meshnet was originally part of the CJDNS "Project Meshnet" (now known as Hyperboria). In 2014 we switched to using a different mesh protocol- BMX6 and shortened our name to NYC Mesh. Dynamic mesh protocols like BMX6 are great for quickly creating small networks. They have a limit of around 30 routers. Beyond that the speed and reliability drastically decline. Basically this ad-hoc dynamic mesh can be used for the "last mile" but it isn't suited for getting huge bandwidth over a long distance. It is a nice idea that every router could have the same role and no router is more important than any other, but unfortunately this just doesn't scale. We still use BMX6 for local neighborhood mesh networks.

As we grew beyond the 30 nodes, we needed to get our own connection, or "backhaul", to the internet. This started the long process of setting up our first supernode. This supernode site is an internet exchange point (IXP) where we connect directly to the fiber backbone of the internet (Thanks DE-CIX!). To connect at an IXP we need to have a server running BGP, which is the protocol used to mesh together all the networks that make up the internet. We got a number assigned to our network (an ASN) and then [peered](/peering) with other networks through this IXP. 

Once we started connecting rooftops to our supernode, it created what looked like a hub and spoke topology on our map, taking us away from the decentralized mesh idea. Many rooftops were connecting straight to the supernode, similar to how a wireless ISP (WISP) would create a network. Where we differ from a WISP is that every rooftop we connect is also a possible extension of our network. We are now creating many hub nodes within neighborhoods that people can mesh with rather than connecting directly to the supernode. 

These hub nodes usually have a direct connection to a supernode using a LiteBeam that is plugged into OmniTik router which has power over ethernet (POE) and five ethernet ports. The OmniTik runs BGP for meshing back through the supernode and also WDS for meshing over air with other hub nodes. The hub nodes may also have sector antennas and a failover antenna aimed at a nearby public access point. 

Here's some of our new hub nodes. 731 has an OmniTik powering two LAP-120 sectors and a LiteBeam. It connects to the Rivington hub (2463) via the LiteBeam, and the OmniTik meshes with the St Marks hub and the 9th St using WDS. It is very meshy.

![7th St hub](/img/blog/hubs.png)


