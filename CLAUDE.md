# AI Authoring Contract for eMarketeer Support Docs

This repository is the Git-Sync backing store for the eMarketeer GitBook space. Commits to `main` publish immediately to production. Be precise.

## What this repo is

- Markdown files in this repo are rendered as pages on the eMarketeer support GitBook.
- `SUMMARY.md` defines the navigation tree.
- `.gitbook.yaml` configures GitBook.
- `tools/migrate/` and `docs/superpowers/` are internal — they do not render as docs.

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

- Second person ("you"), present tense.
- Short sentences, plain English. No marketing voice.
- Lead with the task, not the feature name. "To set up SMTP" beats "SMTP Configuration."
- Code blocks always have a language hint (` ```bash `, ` ```json `, ` ```typescript `).
- Screenshots have alt text describing what is shown.
- No emoji unless the source had one.
- Do not invent facts, prices, version numbers, or API endpoints. If unclear, leave a `> TODO:` callout and flag it to the user.

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
- Any change inside `tools/`.

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

## When unsure

Read the spec: `docs/superpowers/specs/2026-05-21-gitbook-ai-publishing-design.md`. It captures the intent behind these rules.
