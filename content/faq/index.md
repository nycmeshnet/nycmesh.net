---
title: "Frequently asked questions"
---

**About NYC Mesh**

*   [Why is NYC Mesh building a community-owned network?](#why)
*   [How does it work?](#how)
*   [Is this a replacement for my current Internet connection?](#replace)
*   [Is the mesh secure?](#security)
*   [What is your user data policy?](#data)
*   [Who owns NYC Mesh?](#ownership)
*   [What is your business plan?](#businessplan)
*   [What can I do on the mesh that I can’t do on the internet?](#meshonly)

**Joining the Community**

*   [How do I sign up?](#signup)
*   [How much does it cost to join?](#cost)
*   [I heard that NYC Mesh is free Internet. Is that true?](#free)
*   [What are my obligations as an NYC Mesh community member?](#obligations)
*   [How can I volunteer? What if I don’t know anything about networking?](#volunteer)
*   [I have neighbors who would also like to join NYC Mesh. Can we get connected together?](#neighbors)
*   [Do I need to provide identification to join NYC Mesh?](#id)
*   [What is Slack and how do I use it?](#slack)

**Getting connected to the mesh**

*   [How can I tell if I’m in the coverage zone for NYC Mesh?](#covered)
*   [My neighbor has a rooftop router and is connected to NYC Mesh. Can I also use it to connect?](#alsouse)
*   [What is the wait time for an installation? How do you decide who to connect first?](#waittime)
*   [What is involved in a typical installation?](#typicalinstall)
*   [What will the hardware setup look like?](#hardwaresetup)
*   [How should I prepare before the install team arrives?](#prepare)
*   [What happens if the install team can’t connect me to the mesh?](#nogo)
*   [What if I can’t get roof access?](#noroof)
*   [Can I install a router if I have no view or no rooftop access?](#noview)
*   [Can I install the hardware and connect to NYC Mesh on my own?](#bymylonesome)
*   [Can I use any router to connect?](#anyrouter)

**Hardware, software and networking**

*   [What is a router? What is an antenna? What is a radio? Are they different things?](#defrouter)
*   [What is a Node? What is a Supernode? What is a Hub Node?](#defnode)
*   [What software/firmware do you use?](#software)

**Everything Else**

*   [What exactly is the Internet anyway?](#definternet)
*   [Why don’t we mesh mobile phones instead of routers?](#phones)
*   [How far can the mesh extend? Could it cover the whole country?](#far)
*   [Blockchain?](#blockchain)
*   [Why aren't you doing this obvious thing I just thought of?](#obvious)

---

# About NYC Mesh

### <a name="why"></a>Why is NYC Mesh building a community-owned network?

Here’s a list of our reasons for building a community-owned mesh network:

*   An infrastructure commons in which the community owns the network
*   A [neutral network](https://en.wikipedia.org/wiki/Net_neutrality_in_the_United_States) that does not block or discriminate content or throttle data
*   No [personal data collection](https://techcrunch.com/2017/03/23/senate-votes-to-allow-isps-to-collect-personal-data-without-permission/)
*   Bridging the [Digital Divide](https://en.wikipedia.org/wiki/Digital_divide) by connecting underserved communities to the Internet
*   Freedom from the telecom [oligopoly](https://www.newyorker.com/news/daily-comment/we-need-real-competition-not-a-cable-internet-monopoly) of Verizon, Optimum and Spectrum
*   Emergency community networking (for the next [hurricane](http://nymag.com/selectall/2017/10/what-happens-to-the-internet-after-a-disaster.html))
*   Decentralized, with no single point of failure
*   Self-configuring (simple!)
*   Community-building with highly localized websites
*   Eventual self-sufficient network as alternative to the corporate-owned Internet
*   Providing public wifi access points
*   Allows fast uploads as well as downloads, so members can serve content and services rather than only consume them from centralized hosts.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="how"></a>How does it work?

Most NYC Mesh members (“nodes”) use wireless routers mounted on a rooftop or balcony to connect to other nodes, forming a network. Our network in turn peers (connects) with many other networks at an [Internet exchange point (IXP)](https://en.wikipedia.org/wiki/Internet_exchange_point), providing direct access to the Internet without the intermediary of a commercial Internet Service Provider. NYC Mesh maintains a number of primary Internet exchange points that we call “Supernodes.”

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="replace"></a>Is this a replacement for my current Internet connection?

NYC Mesh provides an independent, fast, and reliable connection to the Internet. Many of our members have ended their contracts with commercial Internet Service Providers (ISPs) and now exclusively rely on their NYC Mesh connection.

Service disruptions are possible for both commercial ISPs and NYC Mesh. Extreme weather such as heavy rain, blizzards and hail, for example, can decrease connection speeds as they affect the router’s wireless signal. Our community actively monitors the health of the network, and, unlike commercial ISPs, responds quickly to service requests.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="security"></a>Is the mesh secure?

By default, our mesh router is firewalled from your local network. It is not possible to reach beyond the mesh router to your local access network (LAN).

Network traffic within the mesh is not encrypted by default. When connecting through the mesh you should use the same standard precautions as you would when connecting to WiFi at a coffee shop or airport: use [https](https://en.wikipedia.org/wiki/HTTPS) (lock icon) web sites for secure connections (most browsers do this by default nowadays), or use a VPN service.

If you connect to the mesh network indirectly over the internet (for example over a cable ISP connection) this is by [tinc VPN](https://www.tinc-vpn.org/) and is secure.
<!---
 "data" links from a few different places
-->
<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="data"></a>What is your user data policy?

NYC Mesh does not collect, store, or log any user traffic or content that passes through our network.

NYC Mesh may periodically look at [traffic headers](https://en.wikipedia.org/wiki/IPv6_packet) for troubleshooting purposes as traffic passes through the NYC Mesh network, however, this data is never logged or stored. NYC Mesh may collect aggregate statistics to monitor traffic flow to ensure a successful network.

The NYC Mesh network is unencrypted, easy to join, and depends on donated internet from individuals and other companies which is outside the control of NYC Mesh, therefore NYC Mesh is unable to detect or prevent traffic monitored at those access points.

NYC Mesh will comply with all laws in the jurisdictions where it operates; however, as per our community policy, no data is collected or stored, and therefore no data exists to provide to agents who request it.

Here is our [privacy-policy](../privacy-policy)

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="ownership"></a>Who owns NYC Mesh?

We are a non-profit project of the New York chapter of the [Internet Society](https://www.internetsociety.org/) (ISOC-NY). Most of the equipment that makes up the Mesh is owned by the individual members. Some common infrastructure is owned or rented by the project under ISOC-NY, or by individual members who are donating it. Intellectual property is limited and is under open licenses such as GNU and Creative Commons.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="businessplan"></a>What is your business plan?

We are not a business and we are not a commercial Internet Service Provider! We aim to grow our community in a sustainable and inclusive way for the benefit of all of our members. Our members are contributors to our community, not customers, consumers or users. Being a member of our network has many benefits, including replacing your current ISP with fast, neutral, affordable, and unmonitored Internet access. Businesses are free to join or connect to the mesh as long as they obey the [network commons license](/ncl.pdf).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="meshonly"></a>What can I do on the mesh that I can’t do on the internet?

Other than the benefit of not paying the cable cartel for overpriced Internet access, it is also possible to connect directly to other people on the mesh without using the Internet. If for some reason the Internet is shut down (hurricane, government crackdown, cyberattack, zombie apocalypse), the mesh will likely still work for a while longer.

The mesh also has its own web servers that show local information and allow you to chat and post messages. We are in need of [volunteers](/help) to help add content and maintain our servers.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

---

# Joining the Community

### <a name="signup"></a>How do I sign up to get connected?

After reading through the FAQs, fill out the [join form](/join) to be assigned a Potential Node, and look for an email with next steps (check your email spam folder or contact us directly at install@nycmesh.net if you don’t receive any reply).

If you would like to volunteer with NYC Mesh, reach out on [slack][] or join us at our monthly [meetup](https://www.meetup.com/nycmesh/).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="cost"></a>How much does it cost to join?

There is no fee to join NYC Mesh but you will need to pay for the required networking equipment to get connected. If you do a DIY install, you can purchase this equipment on your own. If you choose a volunteer-led install, we charge the following rates per apartment:

*   The average actual equipment cost of $290 ($240 plus $50 cash to cover the install leader's expenses)
*   A subsidized cost of $160 ($110 plus $50 cash cash to cover the install leader's expenses)

If we are not able to connect you, you do not need to pay the parts and equipment fee and you can decide whether or not you want to pay the labor fee.

If you can afford it, we also recommend that you pay a recurring monthly donation of $20, $30 or $50. We rely on these donations to maintain and expand our network.

Here is our ["rate card"](../rate-card) for more details.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="free"></a>I heard that NYC Mesh is free Internet. Is that true?

NYC Mesh costs money and time to operate and maintain. We don't demand a monthly fee like a commercial Internet Service Provider, but we rely on recurring monthly donations from our members maintain and expand our network.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="obligations"></a>What are my obligations as an NYC Mesh community member?

By joining the mesh you are obliged to share and extend the mesh in the same way that it was shared with you. At a minimum, this requires providing power to your rooftop router so that other members can connect to it. (It uses less power in a whole day than it takes to lightly toast a slice of bread). We may also request access to your rooftop after the initial installation in order to upgrade the rooftop router infrastructure. You are not obligated to pay a monthly fee although we request a recurring donation if you can afford it, to help keep the network running and growing.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="volunteer"></a>How can I volunteer? What if I don’t know anything about networking?

NYC Mesh welcomes people with diverse skill sets and from all backgrounds. Many of our volunteers started without any technical background. Join as at our monthly [meetup](https://www.meetup.com/nycmesh/) or reach out to us on [slack](https://slack.nycmesh.net/) to start a conversation about how you can contribute to our community. You can also read about some ways to help [here](/help).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="neighbors"></a>I have neighbors who would also like to join NYC Mesh. Can we get connected together?

Yes! We prioritize installs for entire buildings and set up high-bandwidth point-to-point connections with dedicated hardware. If your building would like this dedicated service please email us, reach out to us on [slack][], send us an email at install@nycmesh.net or call us directly at (646) 727-0866. Using this service can replace your current ISP for very large buildings.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="id"></a>Do I need to provide identification to join NYC Mesh?

NYC Mesh asks for only basic contact information to be able to carry out the install. We welcome everyone living in New York to join the community regardless of immigration status or life circumstance. If you have concerns about privacy, please send us an email at help@nycmesh.net or talk to us in person at our monthly [meetup](https://www.meetup.com/nycmesh/).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="slack"></a>What is Slack and how do I use it?

Slack is the main communication and collaboration platform we use at NYC Mesh. It consists of public channels, which anyone can post messages to, and invitation-only channels, which serve specific community groups and volunteer teams. Go to the [NYC Mesh Slack page][slack] to sign up for an account and join the conversation!

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

---

# Getting connected to the mesh

### <a name="covered"></a>How can I tell if I’m in the coverage zone for NYC Mesh?

Connecting to the Internet with NYC Mesh requires a direct line-of-sight to an existing supernode or hub node. Look at our [map](/map) to see if you’re either:

*   within range of a supernode or hub node
*   close to a LinkNYC kiosk

If any of the above are true, there is a good chance you will be able to connect to NYC Mesh. Fill out the [join form](/join) and we will assess your location. We will also ask you to take a picture or panorama from your balcony or rooftop.

Some additional things you can do to determine if you are in a coverage zone:

*   Click on active nodes around you on the [map](/map) to see if a panorama photo is available. If you can see your building in the photo, you are in the node’s coverage zone.
*   Use 3D mode in Google Maps or Google Earth to see if there is a likely line of sight from your building to an active node.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="alsouse"></a>My neighbor has a rooftop router and is connected to NYC Mesh. Can I also use it to connect?

We encourage neighbors to share their Internet access. Ask your neighbor for permission to connect via their rooftop router and reach out to us on [slack](https://slack.nycmesh.net/). We can probably install a switch at the rooftop router and run an ethernet cable to your apartment. We have a standard $160 install fee, and we ask for a $20 monthly donation if you can afford it.

### <a name="waittime"></a>What is the wait time for an volunteer-led installation? How do you decide who to connect first?

Once you submit your node request form, we will request a panoramic photo from your rooftop or balcony to assess line of sight to nearby nodes and we will then invite you to schedule an appointment on our install calendar. Wait times will vary based on the availability of volunteer installers. If you can convince your neighbors to also join, we will put you at the top of the install list.

### <a name="typicalinstall"></a>What is involved in a typical volunteer-led installation?

For a volunteer-led install, NYC Mesh will send a team of volunteers to your building to conduct a site survey. If we can connect to an existing node from your rooftop or balcony, we will install all the necessary hardware to get you connected to the mesh.

Typically, installs take between one and three hours to complete, but in certain cases they can take longer. We require you to be present for the duration of the install, so we recommend that you plan to remain at your apartment for at least four hours from the start of the install. We will update you on the progress of the install in case of major delays.

Most installations proceed in the following order:

*   Survey the apartment and rooftop
*   Decide where ethernet cable should enter the apartment
*   Test signal strength to confirm connection is possible
*   Install mounting hardware and align router
*   Run cable into apartment
*   Set up indoor WiFi router
*   Speed test
*   Clean up

In case of bad weather conditions, we will notify you that the install has been canceled and will invite you to make a new appointment.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="hardwaresetup"></a>What will the hardware setup look like?

Here's a diagram showing typical hardware and how it connects together.

![Installing_a_rooftop_router](/img/diagram_textbottom.jpg "Typical installation diagram")


<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="prepare"></a>How should I prepare before the install team arrives?

First, make sure that you will be able to be present at your apartment for at least four hours from the start of the install.

To ensure the safety of volunteer installers, please check the rooftop and the ladder or stairs to the rooftop for any obstacles or hazards. Please remove any obstacles you find and inform us of any hazards. Be prepared to lead volunteers up to the roof if you are able to safely climb the ladder or stairs yourself.

If you would like to participate in the install, please let us know and read our [safety guidelines](https://docs.nycmesh.net/installs/safety/).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="nogo"></a>What happens if the install team can’t connect me to the mesh?

If we are not able to connect you, we will not charge you the $110 parts and equipment fee, and you can decide whether or not you want to pay the $50 labor fee.

If we think a connection may be possible by installing a mast, mounting equipment to a neighbor’s roof or another method, we will discuss those options with you on site.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="noroof"></a>What if I can't get roof access?

You may be able to connect from your balcony or window if you have a good view, or you are very near another access point. We don't usually do window installs as they are very difficult and the results aren't predictable.

Once you fill out the [join form](/join), we can help you determine the viability of a balcony install. If you would like to install an NSM5 router on your own, see this [blog post](/blog/nsm5-install/). If you would like to connect to LinkNYC kiosk [see here](https://docs.nycmesh.net/installs/linknyc/)

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="noview"></a>Can I install a router if I have no view or no rooftop access?

In some rare cases you might be close enough to another node to get signal without line of sight to it.

If you’re in an area that’s currently underserved by NYC Mesh but can get a dozen or more of your neighbors together, you can also create your own hub or supernode which would expand the mesh further. Contact us on [slack][] or email us at install@nycmesh.net to discuss this option further.

If you can’t connect to any existing node yet but would still like to access community tools or content that are only available on the mesh, you have the option of [“tunneling”](https://en.wikipedia.org/wiki/Tunneling_protocol) over the Internet by VPN.

### <a name="bymylonesome"></a>Can I install the hardware and connect to NYC Mesh on my own (DIY)?

Yes you can. Make sure to sign up for a node by filling out our [join form](/join) even if you are installing by yourself.

We provide a list of hardware you can purchase along with firmware and configuration instructions [here](/download). For guidance on hardware installation, check out our [docs pages](https://docs.nycmesh.net/).

If you need assistance with your self-installs, reach out to us on the #support channel on [slack][].

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="anyrouter"></a>Can I use any router to connect?

To connect to NYC Mesh you must use outdoor routers supported by NYC Mesh, which are listed [here](/download). For your indoor router, you may use any product.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

---

# Hardware, software and networking

### <a name="defrouter"></a>What is a router? What is an antenna? What is a radio? Are they different things?

Most of the devices we use, such as a LiteBeam or NanoStation, are self-contained so they have an antenna, radio and ethernet router all in one. Ubiquiti call their self-contained AirFiber device a “radio”, other manufacturers call similar devices a router or an antenna, and “wireless router with antenna” is a real mouthful to say, so to avoid confusion, we usually call the self-contained device a router and the home WiFi router you connect your laptop and phone to the “home router” or “indoor router.”

Sector antennas used on supernodes and hub nodes may have a separate radio plugged into the back of them so we call those antennas (although some sectors are self-contained).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="defnode"></a>What is a Node? What is a Supernode? What is a Hub Node?

A node is a location with one or more [routers](#defrouter).

A supernode is a node that has multiple routers and maybe a server too. It connects to many other nodes. Supernodes also have a fast connection (gateway) to the rest of the Internet. Supernode 1 has five sector antennas, an AirFiber24, a LiteBeam, two ethernet switches, two servers and gigabit fiber.

A hub node is an important neighborhood node that extends the mesh around it, without having it's own gateway. Our largest hub node, [1340](../map/nodes/1340), has four sector antennas, two LiteBeams (in P2P mode), six access points, two ethernet routers, four powerline adapters and a "pi" computer for monitoring. A small hub may have just a LiteBeam and an OmniTik access point.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="software"></a>What software/firmware do you use?
We use a variety of open source and proprietary firmware. Lately we have been using a lot of BGP and WDS to mesh things together.

We also use an OpenWrt package made by qMp. This uses the BMX6 mesh protocol. We have added tinc tunneling so a router can mesh over the internet when out of range using a secure virtual private network (VPN).

Our point-to-point connections use factory firmware such as AirOS. The supernodes are running Linux with Bird and BGP. For network monitoring we use Grafana and other packages.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

---

# Everything Else

### <a name="definternet"></a>What exactly is the Internet anyway?

The Internet is a decentralized, global network of networks. No-one owns it and it is governed by voluntary agreements between network owners. For an easy-to-read introduction to how the Internet works, check out [this article](https://www.vox.com/2014/6/16/18076282/the-internet).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="phones"></a>Why don't we mesh mobile phones instead of routers?

Our focus at the moment is to connect buildings and expand an open, neutral, resilient, and affordable broadband network that connects to the wider Internet. Mobile “mesh” networks are very low bandwidth, not real-time, and require phones to connect in close range. They are great for events or some emergency situations, and we’re happy to see them developed alongside our project, but consider them out of our scope for now.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="far"></a>How far can the mesh extend? Could it cover the whole country?

Yes, it could. In Spain there is a mesh network called [Guifi](https://guifi.net/) that covers a large part of the country. In order to do this, they have a backbone of many long distance WiFi connections and also community-owned fiber.

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="blockchain"></a>Blockchain?

[Meshcoin](/blog/meshcoin).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

### <a name="obvious"></a>Why aren't you doing this obvious thing I just thought of?

We have a lot on our to-do list and everyone is a volunteer. We welcome new ideas big and small, but the best way to move ideas forward is for you to take initiative to help implement them.

Our community on [slack][] is a great forum for new ideas, and you can also start a conversation with long-term and new members at one of our [meetups](https://www.meetup.com/nycmesh/).

<font size="3"> <a href="#top">&#8598; Back to top</a> </font>

[slack]: https://slack.nycmesh.net
