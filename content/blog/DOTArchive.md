---
title: "We’ve Created a Public Archive of NYC’s Surveillance Footage"
author: Aakash
date: "2020-06-10"
draft: false
---

*written in collaboration with Willem*

Holding the police accountable involves witnessing, recording and sharing footage of their actions. Inspired by the brave actions of Darnella Frazier, whose recording of George Floyd’s murder has sparked a global movement, I created a project with help from the NYC Mesh community to develop an archive of NYC traffic camera footage with the goal of making it easier for citizens to identify police misconduct. 

**If you experience or hear about a policing incident, you can use the archive [the archive](https://aaka.sh/projects/nyc_dot_camera_archive/) to check the camera footage at the corresponding intersection and time.**

![NYC Alert](/img/blog/DOT_notify.jpg)

![5 Av Police Activity](/img/blog/DOT_5av.jpg)

*A Notify NYC text message alert and the corresponding DOT traffic camera footage*

We’ve all watched as journalists at CNN captured their own arrest. We’ve seen military-grade weapons used against peaceful protestors, thanks to the hundreds of people [who filmed](https://www.washingtonpost.com/video/national/a-video-timeline-of-the-crackdown-on-protesters-before-trumps-photo-op/2020/06/08/0d107cb4-bf2b-4ba4-906a-d59800a32146_video.html) the June 1 Lafayette Square rally. The video of Martin Gugino getting pushed by police in Buffalo has been viewed more than 82 million times on Twitter, at the time of writing. 

While the NYC Department of Transportation (DOT) provides public access to live streams of its traffic cameras [on its website](https://www1.nyc.gov/html/dot/html/motorist/atis.shtml), it does not make recorded data available. But, if the government can access all of this footage to monitor citizens, then we should have access to monitor the police.

Currently, to witness and document an incident using the DOT footage, you have to be watching the right camera at the right time and be ready to take a screenshot at a moment’s notice. The archive makes it possible to review footage after an event has taken place. By making this resource available to the public, we hope to provide another source of visual evidence. 

##How It Works (at the moment - see below to join the effort!)
We’re only able to access feeds from Manhattan and Brooklyn, but we’ve reached out to the DOT to request formal access for the rest of New York City. The tool saves an image from each camera every time the feed updates (usually once every 1-30 seconds) and publishes them in easy-to-access bundles. 

The NYC Mesh colocation facility allows us to plug a server directly into the internet backbone with low latency and high bandwidth. This allows the tool to quickly pull over 200GB per day in footage, and make all that data available to whomever wants to access it. Hosting the server at a commercial colocation facility would be prohibitively expensive, but at Mesh, we’re able to do so because the rack space is made available for community projects at a low cost. 

##How You Can Help
We need help to make the archive a more useful public resource. Please reach out at apatel@nycmesh.net if you have experience and would like to help with:
-**Spreading the word:** We want to let activists, journalists and other concerned citizens know about the tool.
-**Expanding to all cameras in all 5 boroughs:** Do you have an “in” at the NYC DOT? Could you connect us to the right person to help us request access to formal data feeds for The Bronx, Queens and Staten Island and any cameras not listed on the website? This would help us increase how often we’re able to capture footage in Manhattan and Brooklyn as well. 
-**Server upkeep:** Do you have experience with shell scripting? Could you help maintain the ingestion server?
-**Expanding to other cities:** Does your city livestream public surveillance footage that we could scrape and add to the archive?
-**UI/UX design:** How can we make the archive easier to navigate?

*Special thanks to Zach Giles for his ongoing technical guidance, and to the rest of the NYC Mesh community.*

