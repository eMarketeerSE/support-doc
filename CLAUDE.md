# AI Authoring Contract for eMarketeer Support Docs

This repository is the Git-Sync backing store for the eMarketeer GitBook space. Commits to `main` publish immediately to production. Be precise.

## What this repo is

- Markdown files in this repo are rendered as pages on the eMarketeer support GitBook.
- `SUMMARY.md` defines the navigation tree.
- `.gitbook.yaml` configures GitBook.

## File layout

- `getting-started/` — onboarding articles for new users.
- `knowledge-base/` — feature guides and how-tos.
- `documentation/` — technical reference. Sub-folder `legal/` for legal docs.
- `change-log/` — release notes.
- `assets/<article-slug>/` — images and downloads for a specific article.

## Naming

- Filenames are kebab-case slugs, e.g. `setting-up-smtp.md`.
- Every article starts with one H1 (`# Title`) matching its title.
- Image paths are always relative, e.g. `![Alt](../assets/setting-up-smtp/diagram.png)`.

## `SUMMARY.md`

When you add, rename, or move a page, update `SUMMARY.md` in the same commit. Follow the existing nesting. If a section gets large, group with `## Subheading` lines.

## Voice and style

Voice: professional and approachable. Like a colleague who knows the
product and respects your time. Confident, never breezy. No marketing
fluff, no exclamation marks, no "easy as pie."

### Tone rules
- Second person ("you"), present tense, active voice.
- Short sentences. Average 12–18 words. Break long ones.
- Lead with the task or outcome, not the feature name. "To set up SMTP"
  beats "SMTP Configuration."
- One idea per paragraph. Use paragraphs of 1–3 sentences.
- No emoji, no "🚀", no exclamation marks.

### Terminology (use these, not synonyms)
- "Contact" — a person in the database. Not "lead," "subscriber,"
  "user," or "recipient" (unless quoting an interface label).
- "Journey" — automated sequence. Not "workflow" or "campaign."
- "Campaign" — single outbound send. Not "broadcast" or "blast."
- "Form" — eMarketeer's form builder output. Not "survey" or "page."
- "Account" — the user's eMarketeer subscription. Not "tenant" or
  "workspace."

### Structure of an article
Every article should follow this shape (omit a section only if it
genuinely doesn't apply):
1. **One-sentence opener** — what this article is about, written so a
   user can decide in five seconds whether to keep reading.
2. **Brief context** — 1–2 sentences. Why this matters, who it's for.
3. **The how / the details** — the substantive body, broken into H2/H3
   sections. Use ordered lists for steps, unordered lists for options
   and considerations.
4. **What to do next** (optional) — link to a related article if there's
   a natural follow-up.

### What to fix when rewriting an existing article
- Strip " – eMarketeer Support" and " - eMarketeer Support" suffixes
  from the H1.
- Remove inline bold inside headings: `### **Foo**` becomes `### Foo`.
- Collapse loose lists: remove blank lines between items unless the
  source clearly intended a loose list with paragraph-length items.
- Remove leftover Word/Pages presentational classes if any survived as
  raw HTML (`<span class="s1">`, empty `<b></b>`).
- Preserve all images, code blocks, and links as-is. Image alt text
  should describe what the image shows, not "image" or "screenshot."

### What NOT to change
- Do not invent facts, version numbers, API endpoints, or pricing.
- Do not merge, split, or reorder articles. One article in, one out.
- Do not rename the file (URL stability).
- If a claim in the source is unclear or contradictory, leave the
  original wording and add a `> TODO: verify` callout near it.

### What is out of scope (do NOT add)
- GitBook hint blocks (`{% hint %}`). Not in this pass.
- New screenshots, embedded videos, or external links.
- Translations or alternate-language versions.

## Autonomous vs. confirm-first

**Autonomous (do, then push):**
- Drafting or editing article content.
- Updating `SUMMARY.md` to match file changes.
- Fixing typos, broken links, formatting.
- Adding cross-links between related articles.

**Confirm with the user first:**
- Deleting articles.
- Renaming files (URL changes).
- Restructuring sections.
- Force-pushing.

## Ask, don't guess

If a request is ambiguous — which section, what audience, conflicting facts in the source — ask one clarifying question before writing.

## Commit message style

- `add: <slug>` — new article.
- `update: <slug>` — content changes.
- `rewrite: <slug>` — Stage 2 AI rewrite pass.
- `fix: <slug>` — typo, broken link, small correction.
- `restructure: <area>` — moving or grouping pages.

## Publishing flow

After a content commit, push to `origin/main`. GitBook syncs within ~1 minute.

```bash
git push origin main
```
