---
title: "Meshcoin"
date: "2017-12-01"
author: Brian
---
Many people have asked me over the years about combining a mesh network with a blockchain and a crypto-currency (e.g. a “meshcoin”). This could provide a reward for sharing internet over a community network. This is a list of the major problems with this idea and why it is a complete waste of time.

Creating a blockchain incentivised network is a particularly difficult thing to do because it means combining software, hardware, infrastructure and a critical mass of users. I’ve been hearing about blockchain proposals for over three years, and never seen a prototype. It is perpetual vaporware. I have seen a lot of whitepapers.

Both mesh networks and blockchains are decentralized. The idea to combine mesh and blockchains seems to be based on this abstract “decentralized” notion, not any clear idea how this could possibly work. What I think people mostly mean is combining public wifi access points with an app-based micro-payment system  (not necessarily mesh or blockchain). Basically if people are rewarded with payment they would be encouraged to install more routers and maintain their network. People that use this network would pay them a small amount per Mb, or for time and quality of connection, or a set monthly fee. All of this would be automated somehow, or a payment made with a simple login app.  Another approach is each router trades for bandwidth and the owner of the router gains or loses money.

The hardest things about building a typical community network are the social aspects and the topology of the network. These are incredibly difficult to solve and require more than a network protocol or a smart contract.

Considering the social aspects, a community network really needs density before it is useful. It can be a chicken and egg problem. How does it attract any users other than a few curious tech people. There are also countless meshcoin ideas being developed and there can only be one winner at the most. Otherwise it is just another failed social app that didn't get enough users.

For network topology, how will this blockchain based network build from the first router to a complete network? How does it figure out which rooftops to connect, where to connect to an IXP, how to get an ASN, how to peer with other networks, where to use supernodes, sector antennas, point to point connections? Many of these meshcoin ideas seem based on small devices, but it isn't possible to make a giant mesh from small devices with omni antennas. Bandwidth decreases by as much as 50% and latency increases by ~10ms on each hop! Thousands of devices meshed together in a small area results in an unusably big routing table, with close to zero bandwidth and infinite latency. There's a lot of basic physics, engineering and networking knowledge missing from meshcoin ideas.

A micropayment or reward system doesn’t have to be crypto-currency or blockchain based. Bitcoin micropayments are now impossible with bitcoin transaction fees, so maybe other theoretical crypto “payment channels” will be used. It is also possible that the rewards be more like reputation points in a social network, or points in a game. “Gamifying” or social points actually seems more realistic than cryptocurrencies. 

The router the user connects to is at the end of a line of routers connected to a gateway. Typically there are two or three “hops” to an IXP gateway node. This IXP “supernode” should really get most of the payment, as it has rent to pay for being on the roof, as well as connection charges. So the first node gets the payment and uses that to pay its gateway node and that node pays its gateway node and that node pays the “supernode”. Since a mesh network is dynamic, this could be very complicated.

If somehow people were paid in alt-coins the early adopters may benefit from coin deflation. This could also be an early incentive to help the network grow. It also sounds like a ponzi scheme and these “initial coin offerings” (ICOs) will be probably be outlawed soon.

People expect public WiFi access points to be simple and free, and costs are only going down from here (lower than free? User gets paid?). Why would they download an app to sign on? Why would they pay anything? Any implementation will need to be extremely easy to use  (“low friction”) and better than other free services. 

Most people now get data via their phone. Bandwidth for phones is increasing soon to gigabit speeds. It is getting harder for wifi to compete. People are cutting their cable and replacing it with tethering or portable hotspots from phone companies.
  
How are these meshcoins used? Someone that has shared a lot of bandwidth will only accumulate coins with nothing to spend them on, unless some future economy or exchange is developed.

Proof-of-work: A router can’t do “mining” or proof-of-work. Routers barely have enough CPU to function as a router. Would proof of “work” be proof of sharing bandwidth? How can it be done in an algorithmic unhackable way? 

Measuring Mb: It is difficult to monitor each router to record how much bandwidth has been shared and used. For privacy, this should be done without knowing who the users are, and what they are doing with their bandwidth. A big problem is how do you know these packets aren’t faked by someone trying to be paid, or that the routers are real and not virtual.

With Ethereum you could have a smart contract that moves meshcoins from the user to the sharer for the time connected. How exactly would this work? Seems like a lot of hand-waving.

NYC Mesh routers are open and all members agree to [our license (NCL)](https://nycmesh.net/ncl.pdf). This makes it impossible for us to convert the existing nodes to a closed micro-payment system. The whole idea of NYC Mesh is to have an open network.

In conclusion: I like the idea of gamifying nodes, so people see how much each node is contributing. I think that is more than enough motivation for many people. Most people involved in the mesh are inspired by their hatred of the big ISPs. Earning a tiny amount in some obscure alt-coin isn't going to motivate anything. Also the reason there is no working meshcoin system is that it is impossible to do in the real world.

A list of the websites promoting blockchain + mesh. Some of these are definitely ICO scams-

[https://andrena.tech/](https://andrena.tech/)  
[http://www.ammbr.com/](http://www.ammbr.com/)  
[http://altheamesh.com/](http://altheamesh.com/)  (no ICO)  
[http://sourcewifi.com/](http://sourcewifi.com/)  
[https://www.rightmesh.io/](https://www.rightmesh.io/)  
[https://mysterium.network/](https://mysterium.network/)  
[https://www.gotenna.com/](https://www.gotenna.com/)  
[https://smartmesh.io/](https://smartmesh.io/)  
[https://www.opengarden.com/](https://www.opengarden.com/)  
[https://www.skycoin.net/](https://www.skycoin.net/)  
[https://the-gatsby.com/](https://the-gatsby.com/)  
[https://meshbox.network/](https://meshbox.network/)  
[https://xenio.io/](https://xenio.io/)  
[https://www.thetatoken.org/](https://www.thetatoken.org/)  
[https://www.meshblockchain.com/](https://www.meshblockchain.com/)  
[https://stealthcrypto.io/](https://stealthcrypto.io/)  
[https://projecthumancity.com/](https://projecthumancity.com/what-we-do/meshwork/)  
[https://blockmesh.io/](https://blockmesh.io/)  
[https://orbismesh.com/](https://orbismesh.com/)  
[https://moeco.io/](https://moeco.io/)  
[http://mtc.io/](http://mtc.io/)  
[https://infinix.space/](https://infinix.space/)  
[https://gridnet.org/](https://gridnet.org/)  
[https://www.nexmesh.com/](https://www.nexmesh.com/)  
[https://qlcchain.org/](https://qlcchain.org/)  
[btc-hotspot](https://medium.com/@a.raspitzu/decentralizing-the-hotspot-market-introducing-btc-hotspot-9ccfd6156083)  
[https://iungo.network/](https://iungo.network/)  
[https://en.worldwifi.io/](https://en.worldwifi.io/)  
[https://www.oppopenwifi.com/](https://www.oppopenwifi.com/)  

These projects are abandoned-  
[Nodio](https://web.archive.org/web/20170516020919/https://nodio.net/)  
[BitMesh](https://web.archive.org/web/20160618235714/https://www.bitmesh.network/)  
[BEWP](https://news.bitcoin.com/meet-bewp-bitcoin-enabled-wifi/)  
[BitcoinWifi](https://web.archive.org/web/20171029202504/http://www.bitcoinwifi.net/)  

[Fon](https://en.wikipedia.org/wiki/Fon_%28company%29) was a very large network that did this basic wifi sharing idea, and then gave up. It is important to figure out why they stopped, as this is about the only example of someone doing this. You can learn a lot by studying failures.


