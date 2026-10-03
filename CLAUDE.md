# AI Authoring Contract for eMarketeer Support Docs

This repository is the Git-Sync backing store for the eMarketeer GitBook space. Commits to `main` publish immediately to production. Be precise.

## What this repo is

- Markdown files in this repo are rendered as pages on the eMarketeer support GitBook.
- The site has two language variants: **English** (repo root) and **Swedish** (`sv/` subfolder). Each maps to its own GitBook Space; a language picker switches between them.
- `SUMMARY.md` defines the English navigation; `sv/SUMMARY.md` defines the Swedish navigation.
- `.gitbook.yaml` configures the English space; `sv/.gitbook.yaml` configures the Swedish space.
- `sv/CLAUDE.md` holds Swedish-specific glossary and style rules. Read it whenever you touch any file under `sv/`.

## File layout

- `getting-started/` — onboarding articles for new users.
- `knowledge-base/` — feature guides and how-tos, grouped by topic in subfolders.
- `documentation/` — technical reference, grouped by topic in subfolders. Sub-folder `legal/` for legal docs.
- `changelog/` — release notes. Its own GitBook space (has `changelog/SUMMARY.md`), English-only. See Linking between spaces.
- `.gitbook/assets/` — English images. `sv/.gitbook/assets/` — Swedish images. Each GitBook space only reads files inside its own folder, so the Swedish space cannot see the root `.gitbook/assets/`; every image a Swedish article uses must also exist in `sv/.gitbook/assets/`. See Images below.
- `assets/<article-slug>/` — leftover from the migration import. Not used by articles; do not add to it or link to it. Scheduled for cleanup.
- `sv/` — Swedish variant. Mirrors the English structure exactly except `sv/documentation/legal/` does not exist (legal stays English-only).

## Naming

- Filenames are kebab-case slugs, e.g. `setting-up-smtp.md`. The English and Swedish copies of an article share the same filename and folder path under their respective roots.
- Every article starts with one H1 (`# Title`) matching its title.
- Image paths: see Images below.

## Images

Every space keeps its images flat in its own `.gitbook/assets/` folder:

| Space | Folder | Path from an article at `<section>/<group>/article.md` |
|---|---|---|
| English | `.gitbook/assets/` | `../../.gitbook/assets/<file>` |
| Swedish | `sv/.gitbook/assets/` | `../../.gitbook/assets/<file>` (same text, resolves inside `sv/`) |
| Changelog | `changelog/.gitbook/assets/` | `.gitbook/assets/<file>` from `changelog/<page>.md` |

- The path is relative: one `../` per folder level between the article and its space root. An article one level deeper uses `../../../.gitbook/assets/`.
- English and Swedish copies of an article use the **identical** image path. When translating, copy the path unchanged, and make sure the file exists in both `.gitbook/assets/` and `sv/.gitbook/assets/` (copy it if not).
- Name new images `<article-slug>-<what-it-shows>.png` in lowercase kebab-case, e.g. `import-contacts-step-2.png`, so the owning article is obvious from the file name. Never name a new file `image.png`, `image (3).png` or similar.
- To replace a screenshot, add a new file with a new name and repoint the article. Do not overwrite an existing file: some files are shared by several articles, and overwriting changes them all.
- Do not delete old image files. Leave them for a cleanup pass (confirm with the user first).
- Before committing, check that every image path in the changed articles resolves to an existing file, in both languages.
- Screenshot look and capture rules (annotation style, crop, fake data instead of real names): follow the `support-screenshots` skill in `.claude/skills/support-screenshots/SKILL.md`.

## Linking between spaces

This site is published as more than one GitBook **space**: the main docs space (the repo root, with its own `SUMMARY.md`) and a separate **changelog** space (the `changelog/` folder, which has its own `changelog/SUMMARY.md`).

Relative markdown paths (`../documentation/...`, `../knowledge-base/...`) only resolve **within** one space. A relative link that crosses from one space into another will break.

For cross-space links, use GitBook's internal URL form `https://app.gitbook.com/s/<spaceId>/<published-path>`. The docs space ID is `0ywqCs3au1x0DqPhEJTR`, e.g. `https://app.gitbook.com/s/0ywqCs3au1x0DqPhEJTR/guides/guides/forms/the-form-component`. Picking the target page in the GitBook editor's link dialog produces this format automatically. Note the published path does not mirror the repo folders (`documentation/forms/the-form-component.md` publishes under `/guides/guides/forms/the-form-component`), so confirm the real URL rather than guessing.

Links **within** a single space (docs → docs, or changelog → changelog) stay as normal relative paths.

## Bilingual policy

**Every article exists in both English and Swedish.** Whenever you add, edit, or rewrite an article in one language, you must mirror the change in the other language in the same commit (or a tightly paired follow-up commit). The pair is the unit of work.

### Rules

- **New article**: write it in whichever language the user gave you, then translate to the other language. Both files land before the commit is pushed.
- **Update**: if the user edits the English file, re-translate the matching Swedish file (or surgically apply the same edit if the change is small and the structure is unchanged). Same in reverse.
- **Rename / move**: rename both files in parallel and update both `SUMMARY.md`s.
- **Delete**: confirm with the user before deleting either side. If deletion is approved, delete both.
- **Translation engine**: translate using Claude (you), guided by `sv/CLAUDE.md`'s glossary and style rules. Do not call external translation services.
- **Image paths**: keep the image path identical when translating, and make sure each image file exists in both `.gitbook/assets/` and `sv/.gitbook/assets/` (see Images).
- **Legal docs** (`documentation/legal/*.md`) are the only exception. Legal content is English-only and is not translated. Do not create `sv/documentation/legal/`.

If the user explicitly asks you to edit only one language for a deliberate reason (e.g. "fix a typo in Swedish only"), respect that. Otherwise, keep the pair in sync.

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
- Framed images: the wrapper div must include `align="left"`. Correct form:
  `<div data-with-frame="true" align="left"><img ...></div>`.

### What NOT to change
- Do not invent facts, version numbers, API endpoints, or pricing.
- Do not merge, split, or reorder articles. One article in, one out.
- Do not rename the file (URL stability).
- If a claim in the source is unclear or contradictory, leave the
  original wording and add a `> TODO: verify` callout near it.

### What is out of scope (do NOT add)
- GitBook hint blocks (`{% hint %}`). Not in this pass.
- Embedded videos or external links.
- New screenshots during a voice or structure rewrite. Exception: replacing old-UI screenshots with new-UI ones is in scope; follow the Images rules above.
- Additional languages beyond English and Swedish (the bilingual pair is fixed).

## Autonomous vs. confirm-first

**Autonomous (do, then push):**
- Drafting or editing article content.
- **Translating the change to the other language** to keep the English/Swedish pair in sync (per the Bilingual policy section).
- Updating `SUMMARY.md` and `sv/SUMMARY.md` to match file changes.
- Fixing typos, broken links, formatting.
- Adding cross-links between related articles.

**Confirm with the user first:**
- Deleting articles (in either language — and deletion always applies to both sides of the pair).
- Renaming files (URL changes).
- Restructuring sections.
- Force-pushing.
- Editing legal docs (`documentation/legal/`).

## Ask, don't guess

If a request is ambiguous — which section, what audience, conflicting facts in the source — ask one clarifying question before writing.

## Commit message style

- `add: <slug>` — new article (covers both English + Swedish).
- `update: <slug>` — content changes (covers both languages when paired).
- `translate(sv): <slug>` — Swedish translation of an existing English article (use when the English file was already committed earlier and you're catching up the Swedish side).
- `translate(en): <slug>` — same in the reverse direction.
- `rewrite: <slug>` — rewrite pass for voice or structure.
- `fix: <slug>` — typo, broken link, small correction.
- `restructure: <area>` — moving or grouping pages.

## Publishing flow

After a content commit, push to `origin/main`. GitBook syncs within ~1 minute.

```bash
git push origin main
```

## Working with a non-technical editor

Non-technical team members edit the site through Claude Code, following `EDITING-GUIDE.md`. They do not know Git. When the user says they are editing the support site, or the session is clearly for that:

- Handle all Git steps silently. Describe results in plain words ("published to the support site"), not Git terms.
- Before every push to `main`, summarize the change in plain words and ask for a yes. It goes live within about a minute.
- After each push, give the support site link and say it updates in about a minute.
- To undo a published change, revert the commit and ask before pushing the revert.
