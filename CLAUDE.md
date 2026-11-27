# AI Authoring Contract for eMarketeer Support Docs

This repository is the source of the eMarketeer support site, support.emarketeer.com. Each push to `main` deploys to production in about 5 minutes. Be precise.

## What this repo is

- Markdown files in this repo are rendered as pages on the support site. The site is an Astro build in `site/`, deployed by `.github/workflows/deploy.yml`.
- The site has two language variants: **English** (repo root) and **Swedish** (`sv/` subfolder). A language picker switches between them.
- `SUMMARY.md` defines the English navigation; `sv/SUMMARY.md` defines the Swedish navigation.
- The `.gitbook.yaml` files are left over from GitBook. The site does not read them.
- `sv/CLAUDE.md` holds Swedish-specific glossary and style rules. Read it whenever you touch any file under `sv/`.

## File layout

- `getting-started/` — onboarding articles for new users.
- `knowledge-base/` — feature guides and how-tos, grouped by topic in subfolders.
- `documentation/` — technical reference, grouped by topic in subfolders.
- `legal/` — legal docs. Its own space (has `legal/SUMMARY.md`), English-only.
- `changelog/` — release notes. Its own space (has `changelog/SUMMARY.md`), English-only. See Linking between spaces.
- `.gitbook/assets/` — English images. `sv/.gitbook/assets/` — Swedish images. Each space keeps its images in its own folder, so every image a Swedish article uses must also exist in `sv/.gitbook/assets/`. See Images below.
- `assets/<article-slug>/` — leftover from the migration import. Not used by articles; do not add to it or link to it. Scheduled for cleanup.
- `sv/` — Swedish variant. Mirrors the English structure exactly. There is no `sv/legal/`: legal stays English-only.

## Naming

- Filenames are kebab-case slugs, e.g. `setting-up-smtp.md`. The English and Swedish copies of an article share the same filename and folder path under their respective roots.
- Every article starts with one H1 (`# Title`) matching its title.
- The frontmatter `description` must be 200 characters or fewer. The site shows it under the page title, where a long one is hard to read. Check the Swedish translation separately, since it usually runs longer.
- Image paths: see Images below.

## Images

Every space keeps its images flat in its own `.gitbook/assets/` folder:

| Space | Folder | Path from an article at `<section>/<group>/article.md` |
|---|---|---|
| English | `.gitbook/assets/` | `../../.gitbook/assets/<file>` |
| Swedish | `sv/.gitbook/assets/` | `../../.gitbook/assets/<file>` (same text, resolves inside `sv/`) |
| Changelog | `changelog/.gitbook/assets/` | `.gitbook/assets/<file>` from `changelog/<page>.md` |
| Legal | `legal/.gitbook/assets/` | `.gitbook/assets/<file>` from `legal/<page>.md` |

- The path is relative: one `../` per folder level between the article and its space root. An article one level deeper uses `../../../.gitbook/assets/`.
- English and Swedish copies of an article use the **identical** image path. When translating, copy the path unchanged, and make sure the file exists in both `.gitbook/assets/` and `sv/.gitbook/assets/` (copy it if not).
- Name new images `<article-slug>-<what-it-shows>.png` in lowercase kebab-case, e.g. `import-contacts-step-2.png`, so the owning article is obvious from the file name. Never name a new file `image.png`, `image (3).png` or similar.
- To replace a screenshot, add a new file with a new name and repoint the article. Do not overwrite an existing file: some files are shared by several articles, and overwriting changes them all.
- Do not delete old image files. Leave them for a cleanup pass (confirm with the user first).
- Before committing, check that every image path in the changed articles resolves to an existing file, in both languages.
- Screenshot look and capture rules (annotation style, crop, fake data instead of real names): follow the `support-screenshots` skill in `.claude/skills/support-screenshots/SKILL.md`.

## Linking between spaces

The site has four spaces, each with its own `SUMMARY.md`: English (the repo root), Swedish (`sv/`), changelog (`changelog/`) and legal (`legal/`).

Link to another page with a relative path to its Markdown file, also when the page is in another space. Example: from `changelog/2025.md`, link to `../documentation/forms/the-form-component.md`. The build turns the path into the page URL. It fails on a link to a file that no `SUMMARY.md` lists.

Do not add `https://app.gitbook.com/s/...` links. The build still maps the old ones in the text. When you edit an article that has one, replace it with the relative path.

## Bilingual policy

**Every article exists in both English and Swedish.** Whenever you add, edit, or rewrite an article in one language, you must mirror the change in the other language in the same commit (or a tightly paired follow-up commit). The pair is the unit of work.

### Rules

- **New article**: write it in whichever language the user gave you, then translate to the other language. Both files land before the commit is pushed.
- **Update**: if the user edits the English file, re-translate the matching Swedish file (or surgically apply the same edit if the change is small and the structure is unchanged). Same in reverse.
- **Rename / move**: rename both files in parallel and update both `SUMMARY.md`s, and add redirects (see the `SUMMARY.md` section).
- **Delete**: confirm with the user before deleting either side. If deletion is approved, delete both, and add redirects (see the `SUMMARY.md` section).
- **Translation engine**: translate using Claude (you), guided by `sv/CLAUDE.md`'s glossary and style rules. Do not call external translation services.
- **Image paths**: keep the image path identical when translating, and make sure each image file exists in both `.gitbook/assets/` and `sv/.gitbook/assets/` (see Images).
- **Legal docs** (`legal/*.md`) are the only exception. Legal content is English-only and is not translated. Do not create `sv/legal/`.

If the user explicitly asks you to edit only one language for a deliberate reason (e.g. "fix a typo in Swedish only"), respect that. Otherwise, keep the pair in sync.

## `SUMMARY.md`

When you add, rename, or move a page, update `SUMMARY.md` in the same commit. Follow the existing nesting. If a section gets large, group with `## Subheading` lines.

A URL contains the `##` heading and the file name of every parent page. Renaming a parent file, renaming a `##` heading, or moving a page under another parent changes the URL of the page and of all its child pages. When a URL changes or a page is deleted, add `"<old url>": "<new url>"` to `site/redirects.json` for each changed URL and each language in the same commit. A deleted page and each of its child pages point at the hub page. Point any existing redirect that targets an old URL at the new one.

The `site-check` job lists each URL in `site/sitemap-snapshot.txt` that has no page and no redirect. A page added after the snapshot is not in it, so the job cannot catch a missing redirect for that page.

## Hub pages and link cards

Many section pages are hubs that list their articles as link cards. The cards are `{% content-ref %}` blocks, usually inside `{% columns %}`, or a `<table data-view="cards">`. Most hubs have `page-type: overview` in the frontmatter.

- When you add, remove, move or rename an article, update the link cards on its hub page in the same commit. The hub is the page the article sits under in `SUMMARY.md`. Update the Swedish hub the same way.
- Every article nested directly under a hub in `SUMMARY.md` should have a card on that hub, and every card should point to an existing article.
- Match the link format of the hub's existing cards, and keep the columns roughly balanced.
- The Welcome page (`overview.md`) is the exception. Its cards point to sections, not to individual articles.

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

### Hint blocks
- GitBook hint blocks are allowed for things the reader must not miss: a pitfall, a
  limitation, or an action that can't be undone.
- Ask the user before adding a new hint block. Turning existing text into a hint at the
  user's request needs no extra confirmation.
- Use `info` for tips and context, and `warning` for pitfalls that lead to unwanted
  results. Example: `{% hint style="info" %}` … `{% endhint %}`.
- Keep a hint to one to three sentences. Don't start it with "Tip:" or "Note:"; the
  box already signals that.
- Mirror every hint block in the Swedish article.

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
- Embedded videos or external links.
- New screenshots during a voice or structure rewrite. Exception: replacing old-UI screenshots with new-UI ones is in scope; follow the Images rules above.
- Additional languages beyond English and Swedish (the bilingual pair is fixed).

## Autonomous vs. confirm-first

**Autonomous (do, then push):**
- Drafting or editing article content.
- **Translating the change to the other language** to keep the English/Swedish pair in sync (per the Bilingual policy section).
- Updating `SUMMARY.md` and `sv/SUMMARY.md`, and the hub link cards, to match file changes.
- Fixing typos, broken links, formatting.
- Adding cross-links between related articles.

**Confirm with the user first:**
- Deleting articles (in either language — and deletion always applies to both sides of the pair).
- Renaming files (URL changes).
- Restructuring sections.
- Force-pushing.
- Editing legal docs (`legal/`).
- Adding a new GitBook hint block.

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

After a content commit, push to `origin/main`. The `deploy` workflow builds the site and publishes it in about 5 minutes.

```bash
git push origin main
```

After each push, wait for the `deploy` run of the pushed commit:

```bash
gh run list --workflow deploy.yml --commit "$(git rev-parse HEAD)" --json databaseId --jq '.[0].databaseId'
gh run watch <id> --exit-status
```

If the run is not listed yet, wait a few seconds and list again. The change is live when the run passes. If the run fails, the change may not be live, and the run posts a message in the #support-site Slack channel. Read its log, fix what it lists, and push again. If `gh` is not installed or not logged in, tell the user that the check could not be read and that a developer must look at it.

## Working with a non-technical editor

Non-technical team members edit the site through Claude Code, following `EDITING-GUIDE.md`. They do not know Git. When the user says they are editing the support site, or the session is clearly for that:

- Handle all Git steps silently. Describe results in plain words ("published to the support site"), not Git terms.
- Before every push to `main`, summarize the change in plain words and ask for a yes. It goes live in about 5 minutes.
- After each push, wait for the `deploy` run. Then give the support site link. If the run fails, say that the change is not live yet and that a developer sees the failure in #support-site.
- To undo a published change, revert the commit and ask before pushing the revert.
