---
name: insert-items
description: Insert new items into the proper sections. Use when the user asks to "insert items", "add items", or provides a list of skills/tools/platforms to add to the skill set.
version: 1.0.0
---

# Insert new items into the proper sections

For each skill/concept/tool/platform item provided or inferred from context:

1. Find its most proper website URL — the item's own project/product home or its English Wikipedia article — and verify the site is reachable.
2. Find its most proper subsection of the skill set (e.g., `section03.md` -> Cloud-Native Computing > Cloud-Native Infrastructure). Create a new subsection only when no existing one fits, and never use a generic title like "Libraries" or "Cloud Services" (use a grouping item instead).
3. Insert the item, then explain why that subsection was selected.

Format each item to match the document convention:

- A Markdown link whose label is the concise linked website title, followed by ` - ` and an abstract description.
- Quote the description from the linked site as much as possible; start it with "A" or "The", omit the trailing period, and do not repeat the item name in it.

Keep the markup clean per markdownlint: no duplicate headings (MD024), blank lines around lists (MD032), and a single trailing newline (MD047).

## Translations

If a translated file exists in
`website/i18n/ja/docusaurus-plugin-content-docs/current/skills/`, also produce
the matching Japanese entries so the two trees stay in sync.

### Translation Rules

The translation rules (preserve frontmatter keys, leave code blocks / URLs / MDX
props / admonition labels untouched, use the official DSS-P Japanese names, etc.)
live in `.claude/skills/docusaurus-i18n/translation-rules.md`. 
