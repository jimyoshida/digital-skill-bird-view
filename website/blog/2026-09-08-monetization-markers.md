---
slug: monetization-markers
title: Every listed product now says how it is monetized
authors: [jimyoshida]
tags: [monetization-markers, skill-list, site]
---

A curated list of tools is only half useful if it stays silent about cost. "Use n8n for
workflow automation" reads very differently once you know that its free edition gives you one
owner account and sells the admin role itself, so a team cannot even share administration of
its own instance without moving to the enterprise tier — where single sign-on also lives. And
"use MinIO for object storage" changes meaning entirely when the community edition no longer
ships the features the paid one does. Since the August update, every one of the 3,430 skill
items has been reviewed for exactly that, and the ones that are commercial products now carry
a marker.

<!-- truncate -->

## The three markers

The legend now lives at the top of the [introduction](/docs/intro), and a marker sits
immediately before the item's name:

- 🔒 **Open source or source-available, but most of the value is gated behind a paid tier.**
  The code is published, yet the vendor keeps meaningful functionality on the other side of a
  licence. n8n, Odoo, Metabase, MinIO, Neo4j, SonarQube Server.
- 💲 **Proprietary commercial product or cloud service with no meaningful free use.** No
  permanent free allowance worth planning around. Amazon RDS, Azure Monitor, Datadog,
  Salesforce, 1Password.
- 🪙 **Freemium: genuinely usable for free, with paid tiers or otherwise peripheral
  monetization.** A real free tier you can build on. Vercel, Cloudflare, AWS Lambda, Auth0,
  GitHub Copilot.

An unmarked item is either free and open source without a significant paywall, or not a
product at all — a concept, a standard, a protocol, a Wikipedia article. Roughly nine of every
ten items are unmarked, which is itself the point: this list leans open by design, and the
markers make the exceptions visible instead of leaving them to be discovered at procurement
time.

## Where the line was drawn

Three-way classifications invite arguments, so the reasoning is worth stating:

- **Open core counts as 🔒, a separate commercial product does not.** Sidekiq, Strapi, Kong
  and Gatling gate features inside the product you install, so they are marked. Grafana,
  Cilium, Calico, NGINX and Ansible are not, even though each has a vendor selling an
  enterprise platform alongside — the free edition is the whole tool for almost everybody.
- **A permanent free allowance earns 🪙; a trial does not.** AWS Lambda, Cloud Run,
  Azure Container Apps, DynamoDB and BigQuery all have always-free quotas that real projects
  live inside. Amazon EC2's twelve-month tier expires, so EC2 is 💲.
- **Licence terms count as gating even when the download is free.** Ultralytics YOLO is
  AGPL-3.0 and needs a paid licence to ship inside closed-source software; CodeQL is free for
  open source only. Both are 🔒, and both matter more than their download page suggests.
- **What it takes to run the tool decides, not what the tool costs.** Claude Code and OpenAI
  Codex need a paid plan or API credits, so they are 💲. Aider, Cline and Crush are unmarked:
  you bring your own key, and the harness itself has no paywall.

Some calls remain genuinely debatable. Amazon VPC and its Azure and Google equivalents are
marked 💲 although the network object itself is free of charge, on the grounds that it exists
only inside a paid cloud account and bills through NAT and egress in practice. Terraform and
Packer are 🔒 for being source-available under the BUSL with paid HCP tiers, not because the
CLI is crippled. MySQL is left unmarked despite MySQL Enterprise Edition gating auditing and
encryption, on the same reasoning applied to NGINX.

Every marker is mirrored verbatim into the Japanese translations, and the convention is
recorded in the repository's `CLAUDE.md` so new items arrive marked rather than needing
another sweep.
