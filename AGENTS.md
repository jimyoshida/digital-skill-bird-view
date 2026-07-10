# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

Refer to `website/docs/intro.md` for the overview & principles.

## Categorized Skills

The 12 markdown files under the `website/docs/skills/` directory contain the skill items categorized.
The section classification structure is defined in `data/sections.yml`.

Each markdown level 1 header should have 6 to 10 level 2 headers as subsections.
Each level 2 header must start with a "Relevant DSS-P Skills" admonition mapping
the subsection to skills from the IPA DX Promotion Skill Standard, whose full
hierarchy is listed in `dss-p-extraction-jp.yml`. Example:

```markdown
:::note[Relevant DSS-P Skills]

- 3\. Technology > 3.1 Software Development > Computer Science & Team Development
- 3\. Technology > 3.1 Software Development > Front-end & Back-end System Development

:::
```

Each level 2 header can have up to 6 level 3 headers as subsections.
The skill items are classified into those subsections.
You can place those items just after level 2 or 3 headers.

Each subsection title must be a skill domain name.
Generic titles like "Libraries" and "Tutorials" are not allowed.
You should use grouping items instead of subsections in such cases.
That is also to meet MD024 markdownlint rules.

Each skill item should have a hyperlink which label is the concise linked website title.
The website should be its own project/product home or its article on Wikipedia.
And the item should have its abstract description string just after the link element.

The description string should be quoted from the linked site as much as possible.
The description string should start with "A" or "The", and must omit the trailing period.
Don't repeat the item name in the description string.

Make sure the markdown code meets the following markdownlint rules.

- MD024/no-duplicate-heading
- MD032/blanks-around-lists
- MD047/single-trailing-newline

<Contents_Example>

```markdown
## Cloud-Native Computing

### Cloud-Native Infrastructure

* Event-driven Autoscaling
  * [KEDA (Kubernetes Event-driven Autoscaling)](https://keda.sh/) - A single-purpose and lightweight component that can be added into any cluster to provide event-driven scale for any container running in the environment
```

</Contents_Example>

## Timeline Files

In addition, the markdown files under the `website/docs/timelines/` directory contain the background timeline of the skill items.

Each entry is a paragraph which contains the description basically quoted from Wikipedia English version. It must include the date information of the event and must be arranged in chronological order.
If the event's month or day is unclear, they should be located at the last position of the year or month respectively.

The description should not use bold style.

Each entry starts with one of the following class emoji.

Class emojis:

🏢: Business Administration, Development Methodology, Management
🌐: Web Technology incl. Web Frameworks
☁️: Cloud, Cloud Native, Container, DevOps/SRE
🔐: Security, Privacy
🐛: Malware, Virus, Security Incident
📊: Data Science, Databases, Data Platforms
🧠: AI, Machine Learning, Large Language Models
🖥️: Shell, Terminal, IDE, Developer Productivity
⚙️: System Administration, OS, VM, Network Infrastructure
📜: Programming Paradigms, Programming Concepts, Libraries
🎨: UX, Design & Cognitive Science
🧩: Others

<Contents_Example>
🧠 Claude Code, Anthropic's AI-powered command-line coding assistant, was first introduced as a beta research preview alongside Claude 3.7 Sonnet on February 24, 2025. It then became generally available on May 22, 2025
</Contents_Example>
