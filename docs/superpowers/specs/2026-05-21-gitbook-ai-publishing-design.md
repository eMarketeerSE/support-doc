# GitBook AI Publishing Workflow — Design

**Date:** 2026-05-21
**Status:** Draft, awaiting review

## Goal

Set up a workflow where a person can collaborate with an AI (Claude Code) to publish and maintain support documentation at our GitBook space. Migrate existing content from `https://support.emarketeer.com` into the same workflow.

## Non-goals

- Building a hosted chatbot or web app for authoring.
- A multi-environment setup (staging vs. production).
- A redirect map from the old site to GitBook URLs.
- Translation, analytics, search, or comment features beyond what GitBook provides out of the box.
- Tests for the migration script beyond a smoke test on one real page.
- Any tooling for translation, link checking, or CI link validation.

## Architecture: three stages, one repo

```
┌────────────────────────────────────────────────────────────────┐
│                  Stage 1: Migration (one-time)                 │
│                                                                │
│  support.emarketeer.com  ──(crawl)──>  raw HTML cache          │
│                                              │                 │
│                                              v                 │
│                              turndown + cheerio + image fetch  │
│                                              │                 │
│                                              v                 │
│                          Markdown files + assets/ in repo      │
│                                + initial SUMMARY.md            │
│                                + migration-report.md           │
└────────────────────────────────────────────────────────────────┘
                              │
                              v
┌────────────────────────────────────────────────────────────────┐
│        Stage 2: AI rewrite pass (Claude Code in repo)          │
│                                                                │
│  You: "rewrite knowledge-base/smtp-setup.md"                   │
│  Claude: reads CLAUDE.md style → rewrites → commits → pushes   │
│  GitBook: auto-publishes on push                               │
└────────────────────────────────────────────────────────────────┘
                              │
                              v
┌────────────────────────────────────────────────────────────────┐
│        Stage 3: Ongoing authoring (Claude Code in repo)        │
│                                                                │
│  You: "write a guide for Journey Conditions"                   │
│  Claude: drafts file in right folder, updates SUMMARY.md,      │
│          commits, pushes → live on GitBook within a minute     │
└────────────────────────────────────────────────────────────────┘
```

- **Stage 1** is a deterministic Node/TypeScript script run once (re-runnable from cache). It produces faithful but unpolished Markdown.
- **Stage 2** is a Claude Code session in the same repo. Claude reads the raw Markdown and rewrites for clarity, guided by `CLAUDE.md`. Done per article or per batch, in the loop with the user.
- **Stage 3** is the durable mode: Claude Code in the repo, with `CLAUDE.md` as the contract that keeps future sessions consistent without re-explaining.

The key idea: stages 2 and 3 are not separate software. They are the same tool (Claude Code) using the same conventions. There is no bespoke publishing pipeline to build — the repo plus `CLAUDE.md` is the pipeline.

## Repository layout

The repo is the GitBook Git-Sync backing store. Structure:

```
support-doc/
├── README.md                  # Home page in GitBook
├── SUMMARY.md                 # Table of contents — defines GitBook nav
├── .gitbook.yaml              # GitBook config (root, excludes tools/)
├── CLAUDE.md                  # Conventions for AI authoring (the contract)
├── .gitignore
│
├── getting-started/
│   ├── README.md              # Section landing page
│   └── <article>.md
│
├── knowledge-base/
│   ├── README.md
│   └── <article>.md
│
├── documentation/
│   ├── README.md
│   ├── legal/
│   │   └── …
│   └── <article>.md
│
├── change-log/
│   └── README.md
│
├── assets/                    # All images, screenshots, downloads
│   └── <slug>/<image>.png     # Grouped by article slug
│
├── docs/superpowers/specs/    # Design docs for this project (this file)
│
└── tools/
    └── migrate/               # Stage 1 migration script (Node/TS)
        ├── package.json
        ├── tsconfig.json
        └── src/
```

Notes:

- Section folders mirror the four top-level areas of `support.emarketeer.com`: Getting Started, Knowledge Base, Documentation, Change Log.
- `assets/<slug>/` keeps images grouped per article so moves don't orphan files.
- `tools/migrate/` lives in the same repo for convenience but is excluded from GitBook publication via `.gitbook.yaml`. (If GitBook's exclude support is too limited, fall back to a sibling repo — see Risks.)
- `docs/superpowers/specs/` holds design docs for the project itself, also excluded from GitBook.

## Stage 1: migration script

**Location:** `tools/migrate/` — a small Node/TypeScript project. TS matches the team stack (yarn, tsc, eslint, lodash, single quotes, no semicolons).

**Behavior, in order:**

1. **Discover URLs.** No sitemap exists at `/sitemap.xml` or `/wp-sitemap.xml` (verified). BFS crawl from `/`, restrict to `support.emarketeer.com`, follow internal links only, deduplicate. Skip `/wp-admin/`, `/wp-content/`, query-string-only variants, `?replytocom=`, `/feed`, `/page/<n>` paginations. Cap depth and total page count as safety rails.
2. **Fetch each page** with polite throttling (~1 req/sec), retry on 5xx with backoff. Cache raw HTML to `tools/migrate/.cache/` keyed by URL hash so re-runs are cheap and offline-replayable.
3. **Extract main content.** Strip header, nav, sidebar, footer, and comments using a tuned CSS selector. Selector is determined by inspecting one real page during implementation.
4. **Convert HTML → Markdown** via `turndown` with `turndown-plugin-gfm`. Rules tuned for:
   - Code blocks: `<pre><code class="language-x">` → fenced with language hint when present.
   - Tables: GitHub-Flavored Markdown.
   - Callouts/admonitions: preserve where source uses styled divs (convert to GitBook hint syntax).
5. **Download images.** For each `<img src>` in the extracted content, download to `assets/<article-slug>/<filename>` and rewrite the Markdown link to the local path. Deduplicate by URL hash. Failures are logged, not fatal.
6. **Decide target folder** from the source URL path prefix:
   - `/kb/getting-started/*` → `getting-started/`
   - `/knowledgehome/*` or `/kb/*` (not getting-started) → `knowledge-base/`
   - `/documentation/legal/*` → `documentation/legal/`
   - `/documentation/*` → `documentation/`
   - `/change-log/*` → `change-log/`
   - Anything else → `unsorted/` for manual triage.
7. **Generate `SUMMARY.md`** by walking the resulting folder tree. Use each file's H1 as its title.
8. **Write `migration-report.md`** listing every URL processed, its target path, any image failures, and any pages that landed in `unsorted/`. This is the audit trail.

**What the script does NOT do:** rewrite content, judge quality, fix typos, restructure, write new prose. That is Stage 2.

**Libraries:** `axios`, `cheerio`, `turndown`, `turndown-plugin-gfm`, `p-limit`, `slugify`, `commander`.

**CLI:**

```bash
yarn migrate --start https://support.emarketeer.com --out ../.. --max-pages 500 --concurrency 2
yarn migrate --resume      # re-uses .cache, only fetches missing pages
yarn migrate --dry-run     # crawls, reports URL list, writes nothing
```

## Stage 2: AI rewrite pass

This is not a script — it is how Claude Code is used on the freshly-migrated repo. The design is mostly about conventions in `CLAUDE.md` that make the rewrite produce consistent results.

**Trigger.** User opens Claude Code in the repo and asks for a rewrite, e.g. *"rewrite the getting-started section for clarity"* or *"rewrite knowledge-base/smtp-setup.md"*.

**Per-article steps Claude performs:**

1. Reads the raw migrated Markdown.
2. Reads the voice/style section of `CLAUDE.md`.
3. Rewrites in place — clearer headings, tighter prose, normalized code fences, technical facts kept intact (ports, headers, API names, links).
4. Leaves images alone — same `assets/<slug>/` references.
5. If the article's H1 changes, updates `SUMMARY.md` in the same commit.
6. Commits with `rewrite: <slug>` and pushes.

**Guardrails (encoded in `CLAUDE.md`):**

- Do not invent facts, prices, version numbers, or endpoints. If the source is unclear, leave a `> TODO:` callout instead of guessing.
- Do not merge, split, or reorder articles in this pass — structure changes are human-driven.
- Do not rename files (URL stability matters even within GitBook).
- Keep code blocks verbatim.
- Any article that ends up with a `> TODO:` after rewrite gets logged to `migration-report.md`.

**Batching.** User-driven. *"Do the next 10 articles in knowledge-base"* is fine. Each becomes its own commit. The process is resumable — raw migrated content remains valid until rewritten.

**Why not a script:** a per-file LLM script would be cheaper to run but worse to use. No in-loop oversight, no easy abort, no per-article judgment, and it costs API tokens on top of the user's Claude Code subscription. Keeping the human in the loop via Claude Code is the deliberate choice.

## Stage 3: ongoing authoring — the `CLAUDE.md` contract

`CLAUDE.md` at the repo root is the durable spec for how future Claude Code sessions behave. Initial sections:

### 1. Repo purpose & publishing model

One paragraph: this repo is the GitBook backing store, Git Sync is enabled, commits to `main` publish immediately to production. Changes go straight live — be precise.

### 2. File layout & naming

- New articles go in the appropriate section folder (`getting-started/`, `knowledge-base/`, `documentation/`, `change-log/`).
- Filenames are kebab-case slugs (e.g. `setting-up-smtp.md`).
- Every article opens with a single H1 matching its title.
- Images live in `assets/<article-slug>/`.

### 3. `SUMMARY.md` rules

Whenever a page is added, renamed, or moved, `SUMMARY.md` is updated in the same commit. Standard GitBook TOC nesting.

### 4. Voice & style guide

Initial version (iterated over time):

- Second person ("you"), present tense.
- Short sentences, plain English. No marketing voice.
- Lead with the task, not the feature name.
- Code blocks must have a language hint.
- Screenshots get alt text describing what is shown.
- No emoji unless the source had one.

### 5. Autonomous vs. confirm-first actions

- **Autonomous:** drafting/editing article content, updating `SUMMARY.md`, fixing typos, adding cross-links, committing, pushing to `main`.
- **Confirm first:** deleting articles, renaming files (URL change), restructuring sections, force-pushing, anything in `tools/`.

### 6. Ask, don't guess

If a user request is ambiguous (which section, what audience, conflicting facts), Claude asks one clarifying question before writing.

### 7. Commit message style

`add: <slug>`, `update: <slug>`, `rewrite: <slug>`, `fix: <slug>`, `restructure: <area>`.

## Risks & open questions

1. **WordPress content selector.** The exact CSS selector for the article body is unknown until one real page is inspected. Resolved during stage 1 implementation by viewing one page's HTML and tuning.
2. **GitBook subdirectory exclusion.** Plan assumes `.gitbook.yaml` can exclude `tools/` and `docs/`. If GitBook insists on rendering everything, fall back to a sibling repo for `tools/migrate/` and the spec docs. Either way is cheap.
3. **Auto-push to `main` feels fast.** Per the user's choice, commits to `main` publish immediately with no PR review gate. If this proves uncomfortable in practice, the change is small: add a `draft` branch convention to `CLAUDE.md` and have Claude push there instead of `main`.
4. **Unsorted bucket.** Pages that don't match the URL-prefix routing fall to `unsorted/` for manual triage. If this bucket is large, the routing rules need tuning before stage 2 begins.

## Implementation order (handed off to writing-plans)

1. Clone the GitBook GitHub repo into `/Users/mbaudin/dev/support-doc`.
2. Lay down the directory skeleton (`README.md`, `SUMMARY.md`, `.gitbook.yaml`, section folders, `CLAUDE.md`).
3. Scaffold `tools/migrate/` (TS project).
4. Build the migration script (crawl → cache → extract → MD → assets → routing → SUMMARY → report).
5. Run migration end-to-end. Triage `unsorted/`.
6. Begin Stage 2 rewrites, section by section.
7. Stage 3 is then steady-state.
