# DX Skill Landscape & Timeline

<!--Introduction-->

This site aims to provide a comprehensive overview of concepts, techniques, tools, platforms, and frameworks related to DX (Digital Transformation), featuring Software Development and DevOps spaces, spanning the following 12 categories:

- [01 - Business Transformation](website/docs/skills/section01.md)
- [02 - Web Application Development](website/docs/skills/section02.md)
- [03 - Cloud & Cloud-Native Computing](website/docs/skills/section03.md)
- [04 - Security & Privacy](website/docs/skills/section04.md)
- [05 - Data Science & Engineering](website/docs/skills/section05.md)
- [06 - AI, Machine Learning & LLM](website/docs/skills/section06.md)
- [07 - Fundamental Developer Skills](website/docs/skills/section07.md)
- [08 - OS & Network Basics](website/docs/skills/section08.md)
- [09 - Programming Concepts & Paradigms](website/docs/skills/section09.md)
- [10 - Advanced Programming](website/docs/skills/section10.md)
- [11 - Specialized Development Domains](website/docs/skills/section11.md)
- [12 - Personal Skills](website/docs/skills/section12.md)

## Monetization Markers

A marker before an item's name flags it as a commercial product and shows how it is monetized:

- 🔒 Open source or source-available, but most of the value is gated behind a paid tier (e.g. n8n, Odoo, Metabase)
- 💲 Proprietary commercial product or SaaS with no meaningful free use
- 🪙 Freemium: genuinely usable for free, with paid tiers or otherwise peripheral monetization

An unmarked item is free and open source without a significant paywall, or is not a product at all — a concept, standard, or protocol. This complements the "Prioritizing Openness" principle below.

## Timelines

In addition to the skill categories above, this site provides [chronological timelines](website/docs/timelines/2025-present.md) documenting significant technology events, product releases, and industry milestones from 1930 to the present. Each entry is categorized by domain using emojis:

- 🏢 Business Administration, Development Methodology, Management
- 🎨 UX, Design & Cognitive Science
- 🌐 Web Technology incl. Web Frameworks
- ☁️ Cloud, Cloud Native, Container, DevOps/SRE
- 🔐 Security, Privacy
- 🐛 Malware, Virus, Security Incident
- 📊 Data Science, Databases, Data Platforms
- 🧠 AI, Machine Learning, Large Language Models
- 🖥️ Shell, Terminal, IDE, Developer Productivity
- ⚙️ System Administration, OS, VM, Network Infrastructure
- 📜 Programming Paradigms, Programming Concepts, Libraries
- 🧩 Others

These timelines help trace the evolution of technologies listed in the skill sections and provide historical context for understanding current trends in software development and digital transformation.

## Coverage for IPA DSS-P

This site's skill list attempts to cover all of the **[Digital Skills Standard for Promotion (DSS-P) v2.0](website/docs/dss-p-v2-skills.md)** defined by IPA. Under each subsection of each section page, the most relevant DSS-P skill names are listed.

The IPA (Information-technology Promotion Agency, Japan) is a policy implementation agency under the jurisdiction of Japan's Ministry of Economy, Trade and Industry (METI).
It plays a central role in Japan's national IT strategy, including **Human Resource Development** (administering national IT examinations), **Information Security Measures**, and establishing **Guidelines for Digital Transformation (DX)**.

The **DSS-P** referenced in this document is a public standard defined by the IPA to accelerate DX in Japanese companies. It is widely adopted by many Japanese enterprises as a benchmark for talent development and hiring.

The table below shows the primary DSS-P category covered by each skill section:

| Section - Title | Primary DSS-P Category |
|-----------------|------------------------|
| 01 - Business Transformation | 1. Business Transformation |
| 02 - Web Application Development | 3. Technology |
| 03 - Cloud & Cloud-Native Computing | 3. Technology |
| 04 - Security & Privacy | 4. Security |
| 05 - Data Science & Engineering | 2. Data Preparation & Utilization |
| 06 - AI, Machine Learning & LLM | 2. Data Preparation & Utilization |
| 07 - Fundamental Developer Skills | 3. Technology |
| 08 - OS & Network Basics | 3. Technology |
| 09 - Programming Concepts & Paradigms | 3. Technology |
| 10 - Advanced Programming | 3. Technology |
| 11 - Specialized Development Domains | 3. Technology |
| 12 - Personal Skills | 5. Personal Skill |

## Principles

This site is built on the following principles:

**AI-Driven Development & Human Interaction:** As AI agents take over increasingly detailed tasks in software development, the ability to articulate requirements precisely becomes critical. This demands a broad, cross-domain knowledge base — the wider one's understanding of technologies and concepts, the more effectively one can direct AI to produce the right outcomes. At the same time, Digital Transformation involves significant organizational and individual change, so elements from human sciences such as sociology and psychology are incorporated. Understanding human behavior is crucial for driving transformation.

**Prioritizing Openness:** Open Source Software (OSS) and open formats are favored over proprietary alternatives. This minimizes restrictions and vendor lock-in, which can impede agile decision-making. Furthermore, the availability of source code significantly aids in troubleshooting. Cloud services are included where essential.

**Language Agnosticism:** Programming languages are treated primarily as tools. Since modern developers can easily work with multiple languages, multi-language workflows have become routine. The focus is on selecting the most suitable language for a specific problem domain or cultural context.

<!--/Introduction-->

## Local Build

Install the following dependencies on Ubuntu (tested with 26.04):

```bash
sudo apt install pandoc asciidoctor-pdf
sudo apt install graphviz libgvplugin-neato-layout8  # libgvplugin-neato-layout8 for sfdp support
sudo apt install libyaml-tiny-perl
```

Then build from the `website/` directory:

```bash
yarn install        # once, to install Node dependencies
make all            # pdf + markmap + graphmap + yarn build
```

The CI Docker image (`jimyoshida/node-make-extra`) bundles all of the above. To rebuild and push it after updating `docker/Dockerfile`, run from the `docker/` directory:

```bash
cd docker
make build
make push
```

When section titles are renamed, run `make` in the `data/` directory to propagate changes across all skill and doc files:

```bash
cd data
make    # reads sections.yml, rewrites titles in all files, regenerates digest.md
```

## License

This material is licensed under the Creative Commons Attribution-ShareAlike 4.0 International
except for the source code portions, which are licensed under the MIT License.

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
