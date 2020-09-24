---
title: "NYC Camera Archive Update: Streetwatch.live"
images: ["/img/blog/DOT2_Image4.gif"]
author: Shea
date: "2020-09-21"
draft: false
---
*Written on behalf of all the volunteers working on the NYC DOT Camera Archive Project*


The most common unifier in the tech industry is the emphasis on learning, and the technology community at large has a lot of well-intentioned folks willing to dedicate their time and skills to making technology reflect the world we want to live in. NYC Mesh is made up entirely of volunteers, many of whom work in tech or adjacent fields and choose to spend their time and skills making the internet more accessible. One of our members, Aakash Patel, [started a DOT surveillance camera archive project to support protestors](www.nycmesh.net/blog/nyc-surveillance-archive/) in the beginning of this year’s BLM movement because he felt it would align with NYC Mesh’s values of transparency, accessibility, and community. In his own words:

>*Holding the police accountable requires witnessing, recording and sharing footage of their actions. Inspired by Darnella Frazier, whose recording of George Floyd’s murder sparked a global movement, I am archiving NYC traffic camera footage with help from the NYC Mesh community to make it easier for the public to identify police misconduct.*

This project has since taken off: gaining the interest of [Vice Motherboard](https://www.vice.com/en_us/article/y3zp55/activists-are-using-traffic-cameras-to-track-police-brutality), [The Verge](https://www.theverge.com/tldr/2020/6/16/21292810/new-york-streets-throughout-the-day-archived-images), [Business Insider](https://www.businessinsider.com/activists-using-nyc-traffic-cameras-to-track-police-brutality-2020-6) and other media outlets. We've rebuilt at [Streetwatch.live](http://streetwatch.live/) and will be exploring activist security, computer vision analysis, and surveillance as a tool for accountability. In order to accommodate all of the wildly talented people interested in supporting the project, we’ve collectively developed community guidelines, general meetings, documentation processes, and progress tracking. These skills from our day jobs have helped us grow and retain a core group of community-oriented, curious technologists who want to help make a difference in activist spaces. 


![Diagram of organizing processes in the Streetwatch.live project](/img/blog/DOT2_Image1.png)
>*Processes in Streetwatch.live by Shea*

We have seen a lot of positive feedback but have also encountered some challenging questions from many different perspectives. It is important that we recognize that as technologists in activist spaces, there are many moving parts to the problems we are trying to solve and we need to ask more questions in order to do more good than harm. One of the most important realizations we have had in our team of volunteers is that we must always ask ourselves, “Should we even build this?” when contemplating the construction of technology that has potential for harm or misuse. We have sought out experts in these spaces and have made space for any concerns raised.

Some of the research we’ve done has been field work: we’ve spoken with community activist [Dennis Flores](https://en.wikipedia.org/wiki/Dennis_Flores_(activist)), archival activist [Rachel Mattson](https://rachelmattson.wordpress.com/), surveillance policy researchers at [S.T.O.P](https://www.stopspying.org/), and documentation activists at [WITNESS](https://www.witness.org/). We’ve taken time to engage with individual questions from social media and looked at the impact of individual data requests on our overall project direction. Some of these requests, including one from a personal injury lawyer, have had nothing to do with our project’s mission to support protestors. We’ve learned that, more than anything, we need to proactively learn about vulnerabilities in communities we’re trying to empower and pivot to minimize risks to those communities or even be prepared to end the project altogether.

![Social Media posts for the DOT camera archive project](/img/blog/DOT2_Image2.png)

>*From: Aakash, Shea, Scott, Willem*
  
  
### Surveilling Surveillance for Safe Spaces

One of the main concerns we’ve been exploring is the storage of visual data and the implications that non-consensual footage have on personal privacy. Upon realizing the risk of bad actors abusing this archive, we made the previously publicly-accessible archive private and incorporated an account management workflow into our redesign efforts in order to promote accountability. Community accountability is an important part of [transformative justice](https://transformharm.org/transformative-justice-a-brief-description/), and we believe it should be applied to technological security practices as well. Anonymity online and offline has an important role in activism, but taking a community-oriented approach to information distribution can provide powerful insight into how a platform will be used.


| Identity  |  Experience |
| ------------- | ------------- |
| ![Streetwatch Live redesigns](/img/blog/DOT2_Image5_sm.jpg)  | ![Streetwatch Live redesigns](/img/blog/DOT2_Image4_sm.gif)  |

>*Design Team credit: Winnie, Craig, Shea*


Another pivot we’ve made to accommodate findings from our research has been developing computer vision (CV) applications to anonymize public data. In finding [other projects that use CV to identify important objects in high-risk situations](https://forensic-architecture.org/investigation/detecting-tear-gas) and contribute to the data needed to understand the gravity of those situations, we’ve started exploring what visual cues we can use from footage while still minimizing risk. We are currently exploring how it would be possible to anonymize protestors effectively, identify police presence, and estimate crowd sizes with enough camera footage. These approaches need to be developed to minimize risk at scale while providing tangible enough value to activists to justify its existence.  
  

### Decentralized Tech for Accountability

The largest challenge we’ve faced in activist concerns has been with the infrastructure and storage. We’re investigating creative encryption methods and researching best practices for other technologists to proceed building tools safely in this space. Arguably one of the most important things we can learn from this project is understanding and defending against the liability involved in hosting important data as a community as well as applying existing anti-surveillance best practices in hosting it. 

We learned from a conversation with Rachel Mattson that law enforcement can and will try to access the information technologists store in America. In her words: “They don’t know how to manage this material either. That’s why the archival work that activists do is so important to them: they don’t know what they have.” This emphasizes both that the work that we are doing is important and that it can also empower those we originally thought would already have more sophisticated informational tools. In designing a new platform user experience, we have begun tackling the unique overlap of usability and security problems in what information needs to be accessible, who is going to access it, and what engagement looks like in product development that could put people’s privacy (and safety) at risk.

![Compositions with Streetwatch Live archival footage by Tom Lum](/img/blog/DOT2_Image6.gif)

>*Video credit: Tom. Source: youtube.com/watch?v=VdPGO54hFfM*  
  


### Taking Back Tools

In all of our research and collective work on this project, we’ve met incredible people and found ourselves in inspiring conversations with other tech activists aiming to reduce the harm of the growing presence of technology. From [NYC bicyclists using camera data to inform policy](https://www.nytimes.com/2012/07/21/technology/bicyclists-using-cameras-to-capture-accidents.html) to [educational organizations teaching individuals on the front line how to use imagery as evidence for justice](https://vae.witness.org/video-as-evidence-field-guide/), the possibilities are as seemingly endless as the data collections themselves. Technologists need to understand that security and user concerns require the utmost attention and consideration, keep questioning the mentality of “move fast and break things”, and continue to ask each other who is benefiting from what we build. 

Some excellent resources we’ve found so far and will be using in our platform include:
1. [Archiving Video for Human Rights Guide](https://archiving.witness.org/) from WITNESS
2. [The Public’s Right to Record in Public](https://www.stopspying.org/record) from S.T.O.P.
3. [Protect Yourself from Protest Surveillance](https://www.stopspying.org/protest) from S.T.O.P.

To keep the conversation going, we’re hoping to speak with even more archivists, activists, policy makers, security experts and legal professionals. **If you’re interested in discussing ideas or concerns with us, please [email us](mailto:archive@nycmesh.net) or [join the NYC Mesh slack](https://nycmesh.slack.com/join/shared_invite/zt-a60pusap-syb6K0iFD7MQZBflLKNuJA#/) #nyc-camera-archive channel. We'll also be sending out regular updates and notable events that you can sign up for [here](http://eepurl.com/brFf5D).** The work we do will only be as important as the people it helps and we have lots of questions to tackle together.


![Some of our amazing volunteers, on weekly remote calls](/img/blog/DOT2_Image7.png)
>*Thanks so much to everyone who has given us their time.*


Special thanks to Aakash, Aidan, Albert, Alex, Aubergine, Brian, Craig, Dia, Dennis, Dustin, Katie, Larry, Logan, Mark, Olivier, Oliver, Pete, Rachel, Rodrigo, Scott, Tom, Willem, Winnie, Yvonne, and all the groups who’ve given us feedback so far!
