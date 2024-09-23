---
title: "Administrating the Mesh: How we used Django, Postgres, and Datadog to build a powerful member database."
images: ["/img/blog/700Jefferson_Photo_03_sm.jpg"]
author: Willard
date: "2024-09-16"
draft: false
---

## Summary

NYC Mesh had its 10th birthday this year! In that time, we have learned a lot about how to organize and build a decentralized, equitable, and community-owned network. One critical component of which is storing and managing data about our network and the members who use it. In this post, I'd like to talk a bit about the history of our data model, how it developed, what we're doing today, and how we use Datadog to monitor it.

## The Problem

NYC Mesh organizes its network into a web of Nodes. At each Node, you'll find a router, some equipment, the address it is installed at, and a member to whom it belongs. Each router has what we call a "Network Number" (NN), and each member is represented by an Install, which has an Install Number (Install #). This information is critical for coordinating installs, performing maintenance, and strategizing about how to expand the Mesh.

![Diagram of a typical install](/img/datadog/diagram.jpg)

_Source: [https://wiki.mesh.nycmesh.net/books/2-install-maintenance-guides/page/typical-installs](https://wiki.mesh.nycmesh.net/books/2-install-maintenance-guides/page/typical-installs)_

Historically, this was done with a system of carefully manicured spreadsheets, fed from a web form that took down the contact info of folks looking to join the mesh. What this would end up looking like, for example, would be the Install Number, as well as the member's contact info, address, and Network Number were compressed into a single row on a spreadsheet, with a supplementary spreadsheet to represent links between nodes.

From that spreadsheet we've invented a number of systems for tracking equipment installations, IP allocations, and other IPAM-ish information required to run a network. As the mesh grew, so too did the volume of information we had to handle with this system of spreadsheets, and at this point, our largest one is around 15k rows! Web-based spreadsheet software is not great at scaling to this volume, and the challenges posed by this system has been the bottleneck for a number of projects.

## Enter MeshDB

![MeshDB Admin Panel](/img/datadog/admin.png)

To address the challenges posed by our spreadsheet-based system, mesh volunteers have been working hard over the last year or so to build a replacement for our system to store and access information about our members and nodes. The project is called [MeshDB](https://github.com/nycmeshnet/meshdb), a [Django](https://djangoproject.com/) app backed by [Postgres](https://www.postgresql.org/) designed to ingest new requests to join the mesh, track and manage the status of equipment installations, visualize our networking infrastructure, expose data for use in other projects via an API, and more, all from a flexible and scalable Web UI.

We chose django because we wanted to build a system with a technology that was well understood and easy to get up to speed on. According to the [Stack Overflow Developer Survey](https://survey.stackoverflow.co/2024/technology/), Python is the #1 language for learning programming, and the #3 language used by professional developers.

Building the application was a challenge, but with it has also come the challenge of deploying and operating microservices in a containerized environment. NYC Mesh is a community network with a heavy emphasis on DIY, so we run all of our own infrastructure on bare metal compute nodes that live in rented rackspace throughout New York City, on top of which we run Proxmox and virtualized kubernetes clusters. We built this using [infrastructure-as-code](https://github.com/nycmesh/k8s-infra) with Terraform and Ansible, which, though it was quite a learning exercise, has been an excellent way to manage our new project.

## Observability 

But how do you keep an eye on a system like this? How do you ensure that you can continue to ingest join requests, and how do you know that your volunteers aren't hitting HTTP 500 errors when they try to access the information they need? MeshDB is going to replace a system we rely on for quite literally all of our operations. This data and our ability to access and modify it is foundational. With our old cloud-managed spreadsheet solution, we didn't need to worry about any of this ops stuff, but now we're relying on talented engineers to maintain the codebase and operate the infrastructure.

**The answer for us is Datadog!**

![Datadog APM Product](/img/datadog/apm.png)


Datadog has an awesome suite of tools for monitoring web services. When installing Datadog to our k8s clusters with a few [Ansible tasks](https://github.com/nycmeshnet/k8s-infra/blob/main/ansible/roles/k8s-cluster-helm/tasks/main.yaml#L16-L44), we got k8s monitoring and logs basically for free, giving us deep insight into our clusters' health, and providing a centralized place to see our logs. From there, an extra afternoon of work got us detailed traces from MeshDB and its frontend microservice, Meshforms. The [Synthetics Product](https://docs.datadoghq.com/synthetics/) allowed us to create End-to-End (E2E) tests (without a single line of code, I might add) for common volunteer tasks such as querying all of the installations in a building, sanity checking the consistency of data on the frontend, and, critically, ensuring that we can successfully ingest join requests. We can also monitor celery tasks with ease by creating monitors on the traces emitted by the pod.

Having everything in one place, interconnected, has enabled us to debug issues more quickly and confidently. For example, if we get alerted about a rejected join request, we can know if we logged it for later ingestion right away, and, through APM know what specific error was returned to the user, and trace down through our join form, through MeshDB, and into Postgres. With this, we know exactly what went wrong, and where to focus our attention.

With Datadog, _you_ can also see the status and health of NYC Mesh. Datadog has an excellent collection of tools for creating dashboards, which are great for getting at-a-glance information about things like pod count, request volume, and latency. To show off how we use Datadog, we have created a public dashboard.

![Public MeshDB Dashboard](/img/datadog/dashboard.png)

[Click here](https://p.us5.datadoghq.com/sb/4614e554-06a1-11ef-b43a-da7ad0900005-ba514715f9683f103794ee705df1db95) to see the public dashboard for MeshDB!

## Conclusion

Datadog has proven to be a powerful solution that has quickly met our observability needs, and is adaptable to emergent requirements as we gain experience with operating our new infrastructure. I've been thoroughly satisfied with Datadog's flexibility and ease of use, and am now confident enough in the system we've built to release it into the world.

## See Also

Networking (How NYC Mesh's Network works) - https://wiki.mesh.nycmesh.net/books/5-networking

MeshDB Unveiling - https://www.youtube.com/live/V6bF8e0-T6c?si=uVXMnyv__yrEjLLL&t=1827

Contribute to MeshDB! - https://github.com/nycmeshnet/meshdb

Join NYC Mesh! - https://www.nycmesh.net/join
