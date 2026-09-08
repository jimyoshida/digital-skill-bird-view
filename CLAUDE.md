# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Refer to `website/docs/intro.md` for the overview & principles.

## What This Repository Is

A Docusaurus 3 site (`website/`) that curates a categorized list of DX/software-engineering
skills and tools (`website/docs/skills/section01.md` … `section12.md`) alongside chronological
technology-history timelines (`website/docs/timelines/*.md`). The same source markdown is also
compiled into a single PDF (plus a Japanese-language PDF from the `i18n/ja` translations), a
mindmap, and a dependency graph. `data/` holds Perl tooling that keeps section titles consistent
across all of the derived files.

## Build & Development Commands

Local builds on Ubuntu require these system packages (already bundled in the CI Docker image):

```bash
sudo apt install pandoc asciidoctor-pdf
sudo apt install graphviz libgvplugin-neato-layout8
sudo apt install libyaml-tiny-perl
```

All build commands run from the `website/` directory.

```bash
cd website
yarn install                   # Install Node dependencies (once)
yarn start                     # Dev server (hot reload)
./scripts/download-fonts.sh    # Fetch Noto fonts into fonts/ (gitignored; needed before make pdf)
make                           # Full build: PDF + Japanese PDF + markmap + graphmap + yarn build
make pdf                       # Generate English PDF only (requires asciidoctor-pdf + fonts/)
make pdf-ja                    # Generate Japanese PDF only (requires asciidoctor-pdf + fonts/)
make markmap                   # Generate skills mindmap HTML (static/usr/docs/map.html)
make graphmap                  # Generate skill dependency graph PDF (static/usr/docs/graphmap.pdf)
make clean                     # Remove build artifacts
yarn serve                     # Serve the production build locally
```

`make pdf` renders every file under `docs/*.md`, `docs/skills/*.md`, and `docs/timelines/*.md`
through `perl scripts/preprocess.pl` (converts Docusaurus admonitions to blockquotes) → `pandoc`
(Markdown → AsciiDoc, one `.adoc` per source file under `pdf/tmp/`) → `asciidoctor-pdf`, which
assembles them via the `include::` directives in `pdf/index.adoc` using the theme
`pdf/eng-theme.yml` (Noto Sans base font, with Noto Emoji registered as a font fallback so the
timeline class emoji render). `make pdf-ja` does the same for the Japanese translations under
`i18n/ja/docusaurus-plugin-content-docs/current/`, assembled via `pdf/index-jp.adoc` using the CJK
theme `pdf/cjk-theme.yml` (Noto Sans JP base font and headings, Noto Emoji fallback)
and asciidoctor-pdf's `scripts=cjk` attribute for CJK line-wrapping. Fonts are gitignored — run
`scripts/download-fonts.sh` first, which pulls static (non-variable) TTF instances from Google
Fonts' CSS API; asciidoctor-pdf's font embedding does not reliably support variable-font tables.

CI uses the `jimyoshida/node-make-extra:node22` Docker image which bundles all required tools. To rebuild and push it after updating `docker/Dockerfile`:

```bash
cd docker
make build
make push
```

## CI/CD

Both GitLab CI (`.gitlab-ci.yml`) and GitHub Actions (`.github/workflows/ci.yml`) are configured
identically and kept in sync: on non-default branches they run `make` as a build check; on the
default branch they run `make` and deploy `website/build` to GitLab Pages / GitHub Pages
respectively. The repo is pushed to both remotes (see `/release` below).

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

A skill item may carry a leading monetization marker emoji, placed immediately after the
list marker and before the link (`- 🔒 [n8n](https://n8n.io/) - ...`):

- 🔒 — open-source or source-available, but most of the value is gated behind a paid tier
  (e.g. n8n, Odoo, Metabase, Mattermost, OpenProject)
- 💲 — proprietary commercial product or cloud service with no meaningful free use
- 🪙 — freemium: genuinely usable for free, with paid tiers or otherwise peripheral monetization

Items with no marker are either not products (concepts, standards) or are free/open-source
tools without a significant paywall. Markers are mirrored verbatim into the `i18n/ja`
translations. The build tooling ignores item lines, so markers do not affect the mindmap,
dependency graph, or `data/` scripts; the PDF renders them via the Noto Emoji font fallback.

Make sure the markdown code meets the following markdownlint rules (there is no linter config in
this repo enforcing them in CI — follow them by convention):

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

In addition, the markdown files under the `website/docs/timelines/` directory contain the background timeline of the skill items, one file per era (`1930-89.md`, `1990-99.md`, … `2025-present.md`).

Each entry is a paragraph which contains the description basically quoted from Wikipedia English version. It must include the date information of the event and must be arranged in chronological order.
If the event's month or day is unclear, they should be located at the last position of the year or month respectively.
The description should not use bold style.

Each entry starts with one of the following class emoji.

Class emojis:

🏢: Business Administration, Development Methodology, Management
🎨: UX, Design & Cognitive Science
🌐: Web Technology incl. Web Frameworks
☁️: Cloud, Cloud Native, Container, DevOps/SRE
🔐: Security, Privacy
🐛: Malware, Virus, Security Incident
📊: Data Science, Databases, Data Platforms
🧠: AI, Machine Learning, Large Language Models
🖥️: Shell, Scripting, Terminal, IDE, Developer Productivity
⚙️: System Administration, OS, VM, Network Infrastructure
📜: Programming Paradigms, Programming Concepts, Libraries
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

`sections.yml` is the single source of truth for the section/subsection hierarchy — it maps
section IDs (e.g., `section01`) to their heading structure. When section titles change:

1. Run `make read` to extract the updated section structure from skill files into `sections.yml`
2. Run `make write` to propagate those changes back across all skill files and `website/docs/intro.md`
3. Run `make intro_sync` to copy the `intro.md` body into the top-level `README.md` between its `<!--Introduction-->` markers — everything between those markers in `README.md` is generated, not hand-edited
4. Or simply run `make` to do all three in sequence

The digest markdown used for the mindmap and dependency graph (`scripts/digest.pl`,
`scripts/graphmap.pl`) is generated during the website build from the same skill files (see
`website/Makefile`), independently of `data/`.

## Internationalization

The site is built with locales `en` (default) and `ja` (`website/docusaurus.config.js`).
Japanese translations live under `website/i18n/ja/docusaurus-plugin-content-docs/current/`,
mirroring the `docs/` source tree. Use the `docusaurus-i18n` skill to add locales or translate
documents — it delegates each document's actual translation to the `docusaurus-translator`
subagent so the source text doesn't clutter the main session's context.

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
