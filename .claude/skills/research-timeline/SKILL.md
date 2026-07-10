---
name: research-timeline
description: Use when the user asks to "research timeline", "find history of", "look up timeline", or wants to explore the historical events of a technology or concept item.
version: 1.1.0
---

# Research the timeline of a technology/concept item

For the item name provided or inferred from context, research its history and
produce timeline entries ready to drop into `website/docs/timelines/`. Print the
entries with sequential numbers so the user can review and pick from them.

## Steps

1. Identify the item. If no name is given, infer it from the current context
   (the file being edited, the user's recent messages, an `ide_selection`).
2. Research the item's history. Prefer the English Wikipedia article for the
   item (or its own project/product page). Collect the notable events that have
   a clear date.
3. Write one entry per event following the entry format below.
4. Print the entries numbered (`1.`, `2.`, …) in chronological order.
5. If a translated timeline exists (see Translations), also print the matching
   Japanese entries.

## Entry format

Each entry is a single paragraph:

- Start with one class emoji (see below), then a space, then the description.
- The description should be quoted from the source (English Wikipedia version)
  as much as possible.
- It must include the event's date. If the month or day is unclear, sort that
  event to the end of the year or month respectively.
- Arrange entries in chronological order.
- Do not use bold style.

See the "Class emojis" list in `AGENTS.md` for the available classes.

Example:

> 🧠 Claude Code, Anthropic's AI-powered command-line coding assistant, was
> first introduced as a beta research preview alongside Claude 3.7 Sonnet on
> February 24, 2025. It then became generally available on May 22, 2025.

## Target file

Timeline files are split by year range under `website/docs/timelines/`:
`1930-84.md`, `1985-99.md`, `2000-09.md`, `2010-14.md`, `2015-19.md`,
`2020-24.md`, `2025-present.md`. For each entry, note which file and which `##`
year heading it belongs to so it can be inserted in chronological order.

## Translations

If a translated file exists in
`website/i18n/ja/docusaurus-plugin-content-docs/current/timelines/`, also produce
the matching Japanese entries (same class emoji, same date, translated
description) so the two trees stay in sync.

### Translation Rules

The translation rules (preserve frontmatter keys, leave code blocks / URLs / MDX
props / admonition labels untouched, use the official DSS-P Japanese names, etc.)
live in `.claude/skills/docusaurus-i18n/translation-rules.md`. 
