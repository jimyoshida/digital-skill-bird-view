# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Refer to `website/docs/intro.md` for the overview & principles.

## Build & Development Commands

Local builds on Ubuntu require these system packages:

```bash
sudo apt install pandoc asciidoctor-pdf
sudo apt install graphviz libgvplugin-neato-layout8
sudo apt install libyaml-tiny-perl
```

All build commands run from the `website/` directory.

```bash
cd website
yarn install        # Install Node dependencies (once)
yarn start          # Dev server (hot reload)
make                # Full build: PDF + markmap + graphmap + yarn build
make pdf            # Generate PDF only (requires asciidoctor-pdf)
USE_CJK=1 make pdf  # Generate PDF with CJK (Chinese/Japanese/Korean) font support
make markmap        # Generate skills mindmap HTML (static/usr/docs/map.html)
make graphmap       # Generate skill dependency graph PDF (static/usr/docs/graphmap.pdf)
make clean          # Remove build artifacts
yarn serve          # Serve the production build locally
```

CI uses the `jimyoshida/node-make-extra:node22` Docker image which bundles all required tools. To rebuild and push it after updating `docker/Dockerfile`:

```bash
cd docker
make build
make push
```

## CI/CD

GitLab CI is configured in `.gitlab-ci.yml`. On non-default branches it runs `make` as a test. On `main` it runs `make` and deploys the output to GitLab Pages.

## Branch Workflow

Day-to-day work happens on the `draft` branch. Use the `/release` command to squash-merge `draft` onto `main` and push to remotes. The command also syncs `main` back into `draft` afterward.

## Skill Files

The 12 markdown files under the `website/docs/skills/` directory contain the skill items categorized.

Each markdown level 1 header should have 6 to 10 level 2 headers as subsections.
Each level 2 header must start with a "Relevant DSS-P Skills" admonition mapping
the subsection to skills from the IPA DX Promotion Skill Standard, whose full
hierarchy is listed in `dss-p-extraction-jp.yml`. Example:

```markdown
:::note[Relevant DSS-P Skills]

- 3\. Technology > 3.1 Software Development > Computer Science & Team Development

:::
```

Each level 2 header can have up to 6 level 3 headers as subsections.
The skill items are classified into those subsections.
You can place those items just after level 2 or 3 headers.

Each subsection title must be a skill domain name. Generic titles like "Libraries"
or "Tutorials" are not allowed — use grouping items instead of subsections when the
group title is generic like "Cloud Services". That is also to meet MD024 markdownlint rules.

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
🖥️: Shell, Scripting, Terminal, IDE, Developer Productivity
⚙️: System Administration, OS, VM, Network Infrastructure
📜: Programming Paradigms, Programming Concepts, Libraries
🎨: UX, Design & Cognitive Science
🧩: Others

<Contents_Example>
🧠 Claude Code, Anthropic's AI-powered command-line coding assistant, was first introduced as a beta research preview alongside Claude 3.7 Sonnet on February 24, 2025. It then became generally available on May 22, 2025
</Contents_Example>

## Data Directory (`data/`)

Contains Perl scripts for maintaining skill classification data:

```bash
cd data
make read        # Extract section titles from skill files → sections.yml
make write       # Apply sections.yml classifications back to skill files + intro.md
make intro_sync  # Splice intro.md's body into the top-level README.md (sync_intro.pl)
make             # Default target `release`: read, then write, then intro_sync
make test_write  # Run write.pl unit tests (requires ruby)
```

`sections.yml` maps section IDs (e.g., `section01`) to their hierarchical subsection titles. When section titles change:

1. Run `make read` to extract the updated section structure from skill files into `sections.yml`
2. Run `make write` to propagate those changes back across all skill files and `website/docs/intro.md`
3. Run `make intro_sync` to copy the `intro.md` body into the top-level `README.md` between its `<!--Introduction-->` markers
4. Or simply run `make` to do all three in sequence

The digest markdown used for the mindmap is generated during the website build (see `website/Makefile`).

## Project Skills (`.claude/skills/`)

The following model-invocable skills are available for maintaining this repository:

- `insert-items` — Find the proper subsection and insert new skill items with verified URLs
- `suggest-items-for` — Suggest missing items for a given subsection
- `check-classification` — Review and suggest improvements to section classification
- `check-end-of-life` — Check if listed software/services are still actively maintained
- `research-timeline` — Research history and timeline events for a technology item
- `docusaurus-i18n` — Handle i18n/translation workflow for the Docusaurus site

## Project Commands (`.claude/commands/`)

The following slash commands are user-invoked only (not auto-invoked by the model):

- `/release` — Merge `draft` onto `main` with squash commit and push to remotes
- `/dss-p-coverage` — Evaluate how much this site's skill list covers each DSS-P skill category
- `/dss-p-linkage` — Fill in "Relevant DSS-P Skills" admonition blocks for section level-2 headings
- `/dss-p-extraction` — Extract DSS-P skills from a PDF into a structured English markdown table
- `/dss-p-extraction-jp` — Same as above but preserving original Japanese
