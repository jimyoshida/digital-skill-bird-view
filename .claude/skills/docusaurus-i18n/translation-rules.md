# Docusaurus Markdown → Japanese Translation Rules

Translate the given Docusaurus Markdown file into Japanese, following these rules.

1. **Preserve the frontmatter** — keep key names like `title:`, `sidebar_label:`, `id:` as-is. Translate only the values.
2. **Do not translate code blocks** — leave anything enclosed in ` ``` ` untouched.
3. **Do not change URLs or paths** — leave link hrefs and image paths as-is.
4. **Do not translate MDX component props** — preserve the tag structure of `<Component prop="value">`. Translate only the text nodes.
5. **Do not translate admonition labels** — keep keywords like `:::note`, `:::warning` as-is.
6. **Translate DSS-P skill names using the official Japanese translation** — when the source contains a `:::note[Relevant DSS-P Skills]` admonition, translate the skill category/subcategory/item names by looking them up in `dss-p-extraction-jp.yml`. Use the exact Japanese names from that file. Do not freely translate these names.
7. **Use the desu-masu (です・ます) polite style** — write all prose sentences in the polite form (e.g. 〜です / 〜ます / 〜しました), not the plain da/dearu (だ・である) form. This does not apply to headings. It DOES apply to skill-item description strings even though they are noun phrases in the English source (e.g. "A weakness which can be exploited...") — translate them as complete polite sentences ending in です, matching the existing convention across all section files: `弱点です`, `プロセスです`, `プログラミング言語です`.
8. **Put a space between full-width and half-width characters** — insert a single half-width space at every boundary where a full-width (Japanese) character meets a half-width one (Latin letters, digits, `` `inline code` ``, links). Example: `Gemini 3 を 2025 年 11 月 18 日にリリースしました`. Do not add a space adjacent to Japanese punctuation (、。「」（）) or inside code spans, URLs, and paths.
9. **Use half-width parentheses** — always `()`, never full-width `（）`, whatever the content:
   `強制アクセス制御 (MAC) を含む`, `Pretty Good Privacy (PGP) は`, `VMware ESXi (旧 ESX)`,
   `C# (see sharp と発音)`. Put a half-width space on each side and none just inside, but drop the
   trailing space when the next character is Japanese punctuation: `(Lean Manufacturing)」`.
10. **Keep proper names in the original Latin script** — do not transliterate people, products,
    companies, organizations, or book/paper/article titles into katakana. Write `Richard Stallman`,
    `Bjarne Stroustrup`, `Netscape Navigator`, `*The Mythical Man-Month*` — not `リチャード・ストールマン`
    or `マイシカル・マンマンス`. Preserve any `*italic*` markers around titles. **Exception:** people
    and works that are natively Japanese take their real Japanese form rather than the source's
    romanization — `Taiichi Ohno` → 大野耐一, `Hirotaka Takeuchi` → 竹内弘高, `Ikujiro Nonaka` → 野中郁次郎,
    `Matsumoto` (Ruby) → まつもとゆきひろ, `Toyota Production System: Beyond Large-Scale Production`
    → 『トヨタ生産方式 — 脱規模の経営をめざして』.

**Example:**

```markdown
<!-- Source (English) -->
---
title: Getting Started
sidebar_label: Quick Start
---

# Getting Started

Run the following command:

\```bash
npm install
\```
```

```markdown
<!-- Translated (Japanese) -->
---
title: はじめに
sidebar_label: クイックスタート
---

# はじめに

以下のコマンドを実行してください：

\```bash
npm install
\```
```
