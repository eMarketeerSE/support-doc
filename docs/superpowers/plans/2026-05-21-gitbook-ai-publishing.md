# GitBook AI Publishing Workflow — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Stand up a GitBook-backed support documentation repo with (1) a one-shot Node/TypeScript migration script that imports content from `support.emarketeer.com`, and (2) a `CLAUDE.md` contract that turns the repo into an AI-friendly authoring environment.

**Architecture:** Three stages share one Git repo. Stage 1 is a deterministic crawler/converter under `tools/migrate/`. Stage 2 (AI rewrite) and Stage 3 (ongoing authoring) are usage modes of Claude Code in the same repo, governed by `CLAUDE.md` conventions. GitBook's Git Sync auto-publishes commits from `main`.

**Tech Stack:** Node 20+, TypeScript, yarn, `axios`, `cheerio`, `turndown`, `turndown-plugin-gfm`, `p-limit`, `slugify`, `commander`. ESLint with airbnb-base + sonarjs (per team standards). Single quotes, no semicolons, 2-space indent.

**Spec reference:** `docs/superpowers/specs/2026-05-21-gitbook-ai-publishing-design.md`

**Working directory:** `/Users/mbaudin/dev/support-doc`

---

## Phase A — Repo Bootstrap

### Task 1: Connect local working directory to GitBook GitHub repo

**Context:** The directory `/Users/mbaudin/dev/support-doc` already contains the spec and this plan under `docs/superpowers/`. We can't naively `git clone` into a non-empty directory. Use `git init` + remote + fetch + checkout to merge the existing local files with the remote starting state.

**Files:**
- Modify: `/Users/mbaudin/dev/support-doc/` (initialize as git repo)

- [ ] **Step 1: Ask the user for the GitHub repo URL**

The user has not yet provided the SSH/HTTPS URL of the GitBook GitHub repo. Ask:
> "What's the GitHub URL of the GitBook repo? (e.g. `git@github.com:emarketeer/support-doc.git` or `https://github.com/...`)"

Save the answer to a shell variable for use in subsequent steps:

```bash
REPO_URL="<paste from user>"
```

- [ ] **Step 2: Init the local repo and add the remote**

```bash
cd /Users/mbaudin/dev/support-doc
git init -b main
git remote add origin "$REPO_URL"
git fetch origin
```

Expected: `From <repo url>` followed by `* [new branch]      main       -> origin/main` (or similar).

- [ ] **Step 3: Inspect what's on the remote**

```bash
git ls-tree -r --name-only origin/main | head -30
```

If the remote is empty (no `main` ref yet), `git fetch` will report no refs. In that case, skip to Step 5.

If the remote has existing content (GitBook may have initialized a `README.md` or starter `SUMMARY.md`), note what's there.

- [ ] **Step 4: Merge remote state into the working tree**

If remote `main` exists:

```bash
git checkout -b main --track origin/main
```

This will fail with "untracked working tree files would be overwritten" only if the remote has files at the exact paths we already created (`docs/superpowers/specs/2026-05-21-gitbook-ai-publishing-design.md`, etc.). That is unlikely. If it does fail, the message will name the conflicting file — stash the local version, checkout, then restore: `git stash -u && git checkout -b main --track origin/main && git stash pop`.

If remote `main` does not exist:

```bash
git checkout -b main
```

- [ ] **Step 5: Verify state**

```bash
git status
git log --oneline -5 2>/dev/null || echo "(no commits yet)"
```

Expected: spec file and this plan show as untracked (or already tracked if we hit an existing remote with them — unlikely). The branch is `main` and tracks `origin/main` if the remote had one.

- [ ] **Step 6: Commit the spec + plan**

```bash
git add docs/superpowers/specs/2026-05-21-gitbook-ai-publishing-design.md
git add docs/superpowers/plans/2026-05-21-gitbook-ai-publishing.md
git commit -m "docs: add gitbook ai publishing design and plan"
```

Do NOT push yet — we'll push after the skeleton is in place to avoid a half-published state on GitBook.

---

### Task 2: Lay down the GitBook directory skeleton

**Files:**
- Create: `README.md`
- Create: `SUMMARY.md`
- Create: `.gitbook.yaml`
- Create: `.gitignore`
- Create: `getting-started/README.md`
- Create: `knowledge-base/README.md`
- Create: `documentation/README.md`
- Create: `change-log/README.md`
- Create: `assets/.gitkeep`

- [ ] **Step 1: Write the root `README.md`**

Path: `/Users/mbaudin/dev/support-doc/README.md`

```markdown
# eMarketeer Support

Welcome to the eMarketeer support documentation.

- **Getting Started** — set up your account and learn the basics.
- **Knowledge Base** — feature guides and how-tos.
- **Documentation** — technical reference.
- **Change Log** — what's new.

Use the navigation on the left to find what you need.
```

- [ ] **Step 2: Write the initial `SUMMARY.md`**

Path: `/Users/mbaudin/dev/support-doc/SUMMARY.md`

```markdown
# Table of contents

* [Welcome](README.md)

## Getting Started

* [Overview](getting-started/README.md)

## Knowledge Base

* [Overview](knowledge-base/README.md)

## Documentation

* [Overview](documentation/README.md)

## Change Log

* [Overview](change-log/README.md)
```

- [ ] **Step 3: Write `.gitbook.yaml`**

Path: `/Users/mbaudin/dev/support-doc/.gitbook.yaml`

```yaml
root: ./

structure:
  readme: README.md
  summary: SUMMARY.md
```

Note on the `tools/` and `docs/` exclusion question from the spec: GitBook 2025+ ignores any folder not referenced from `SUMMARY.md`, so we do not need an explicit excludes list. We will verify after the first push that `tools/` and `docs/superpowers/` are not rendered. If they are, we revisit.

- [ ] **Step 4: Write `.gitignore`**

Path: `/Users/mbaudin/dev/support-doc/.gitignore`

```
# Migration script
tools/migrate/node_modules/
tools/migrate/dist/
tools/migrate/.cache/

# Editor / OS
.DS_Store
*.swp
.vscode/
.idea/

# Logs
*.log
```

- [ ] **Step 5: Write each section's landing page**

Path: `/Users/mbaudin/dev/support-doc/getting-started/README.md`

```markdown
# Getting Started

A collection of useful articles and guides for new eMarketeer users.
```

Path: `/Users/mbaudin/dev/support-doc/knowledge-base/README.md`

```markdown
# Knowledge Base

Articles and guides about eMarketeer features.
```

Path: `/Users/mbaudin/dev/support-doc/documentation/README.md`

```markdown
# Documentation

Technical documentation about features and services.
```

Path: `/Users/mbaudin/dev/support-doc/change-log/README.md`

```markdown
# Change Log

Recent changes and releases.
```

- [ ] **Step 6: Create the assets directory placeholder**

```bash
mkdir -p /Users/mbaudin/dev/support-doc/assets
touch /Users/mbaudin/dev/support-doc/assets/.gitkeep
```

- [ ] **Step 7: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add README.md SUMMARY.md .gitbook.yaml .gitignore getting-started/ knowledge-base/ documentation/ change-log/ assets/
git commit -m "feat: scaffold gitbook directory structure"
```

---

### Task 3: Write the `CLAUDE.md` authoring contract

**Files:**
- Create: `CLAUDE.md`

- [ ] **Step 1: Write `CLAUDE.md`**

Path: `/Users/mbaudin/dev/support-doc/CLAUDE.md`

```markdown
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
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add CLAUDE.md
git commit -m "docs: add CLAUDE.md authoring contract"
```

---

### Task 4: Push the skeleton to GitBook and verify rendering

**Files:** none (verification task)

- [ ] **Step 1: Push to remote**

```bash
cd /Users/mbaudin/dev/support-doc
git push -u origin main
```

If this is the first push and the remote `main` did not exist, this creates it. If GitBook reports a sync conflict, resolve by inspecting `git log` on both sides — but with a fresh repo this should not happen.

- [ ] **Step 2: Wait ~60 seconds, then open the GitBook space in a browser**

Ask the user for the GitBook space URL (e.g. `https://docs.emarketeer.com`) and open it. Verify:
- The home page renders the `README.md` content.
- All four section landing pages appear in the nav.
- `tools/` and `docs/superpowers/` do NOT appear as pages.

- [ ] **Step 3: If `tools/` or `docs/` render as pages**

GitBook is rendering everything in the repo. Add explicit exclusions:

Modify `/Users/mbaudin/dev/support-doc/.gitbook.yaml`:

```yaml
root: ./

structure:
  readme: README.md
  summary: SUMMARY.md
```

Note: GitBook does not currently support a documented `exclude:` list. If unwanted folders render, the workaround is to move `tools/` and `docs/superpowers/` to a sibling repo. Defer this — it does not block Phase B. Flag to the user and continue.

- [ ] **Step 4: Confirm with the user that publishing works**

Show the GitBook URL and confirm with the user that the skeleton looks right before proceeding.

---

## Phase B — Migration Script

### Task 5: Scaffold the migration script TypeScript project

**Files:**
- Create: `tools/migrate/package.json`
- Create: `tools/migrate/tsconfig.json`
- Create: `tools/migrate/.eslintrc.json`
- Create: `tools/migrate/src/index.ts` (placeholder)

- [ ] **Step 1: Create directories and init**

```bash
mkdir -p /Users/mbaudin/dev/support-doc/tools/migrate/src
cd /Users/mbaudin/dev/support-doc/tools/migrate
```

- [ ] **Step 2: Write `package.json`**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/package.json`

```json
{
  "name": "emarketeer-support-migrate",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc",
    "migrate": "tsx src/index.ts",
    "lint": "eslint 'src/**/*.ts'"
  },
  "dependencies": {
    "axios": "^1.7.0",
    "cheerio": "^1.0.0",
    "commander": "^12.1.0",
    "p-limit": "^6.1.0",
    "slugify": "^1.6.6",
    "turndown": "^7.2.0",
    "turndown-plugin-gfm": "^1.0.2"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/turndown": "^5.0.5",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0"
  }
}
```

- [ ] **Step 3: Write `tsconfig.json`**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"]
}
```

- [ ] **Step 4: Write a placeholder `src/index.ts`**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/index.ts`

```typescript
// Migration script entrypoint — wired in Task 14
console.log('migrate: not yet implemented')
```

- [ ] **Step 5: Install dependencies**

```bash
cd /Users/mbaudin/dev/support-doc/tools/migrate
yarn install
```

Expected: `Done in <N>s.` and a populated `node_modules/`.

- [ ] **Step 6: Smoke-test the placeholder**

```bash
cd /Users/mbaudin/dev/support-doc/tools/migrate
yarn migrate
```

Expected output: `migrate: not yet implemented`

- [ ] **Step 7: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/package.json tools/migrate/tsconfig.json tools/migrate/src/index.ts
git commit -m "feat: scaffold migration script project"
```

(Note: `yarn.lock` is intentionally NOT committed here — wait until the script is functional in Task 14 to avoid lockfile churn from incremental dep changes.)

---

### Task 6: Inspect one real page to learn the WordPress content selector

**Files:** none (research task with notes)

- [ ] **Step 1: Fetch one representative page**

```bash
cd /Users/mbaudin/dev/support-doc/tools/migrate
mkdir -p .cache
curl -sL https://support.emarketeer.com/knowledgehome/ -o .cache/sample-knowledgehome.html
curl -sL https://support.emarketeer.com/kb/getting-started/ -o .cache/sample-getting-started.html
```

- [ ] **Step 2: Identify the main content container**

Look at the HTML structure:

```bash
grep -oE '<(article|main|div)[^>]*class="[^"]*"' .cache/sample-knowledgehome.html | sort -u | head -20
```

Look for a container like `<article class="…">`, `<main class="entry-content">`, or `<div class="post-content">`. Record the selector that wraps the article body, separate from header/footer/sidebar.

- [ ] **Step 3: Record selectors in a notes file**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/SELECTORS.md`

Write down:

```markdown
# WordPress content selectors

Inspected: 2026-05-21

Main content container (priority order — try first match):
- `article.<class>` — <fill in actual selector>
- `main` — <fallback>
- `.entry-content` — <fallback>

Elements to strip inside content:
- `.sharedaddy` (social share buttons)
- `.jp-relatedposts` (related posts widget)
- `nav`, `footer`, `aside`
- `script`, `style`, `noscript`
- `.comment-section` (if present)

Title selector:
- `h1.entry-title` — <fill in actual>
```

Fill in the `<...>` placeholders from the actual HTML inspection. Do not leave them blank.

- [ ] **Step 4: Commit the notes**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/SELECTORS.md
git commit -m "docs: record wordpress content selectors"
```

---

### Task 7: Implement the crawler module

**Files:**
- Create: `tools/migrate/src/crawler.ts`

- [ ] **Step 1: Write the crawler**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/crawler.ts`

```typescript
import axios from 'axios'
import * as cheerio from 'cheerio'
import pLimit from 'p-limit'
import { URL } from 'node:url'

export interface CrawlOptions {
  startUrl: string
  maxPages: number
  concurrency: number
  fetcher: (url: string) => Promise<string>
}

const SKIP_PATTERNS = [
  /\/wp-admin\//,
  /\/wp-content\//,
  /\/wp-json\//,
  /\?replytocom=/,
  /\/feed\/?$/,
  /\/page\/\d+\/?$/,
  /\/comments\/?$/,
  /\.(jpg|jpeg|png|gif|svg|pdf|zip|mp4)$/i,
]

const isInternal = (candidate: string, host: string): boolean => {
  try {
    const u = new URL(candidate)
    return u.host === host
  } catch {
    return false
  }
}

const normalizeUrl = (raw: string, base: string): string | null => {
  try {
    const u = new URL(raw, base)
    u.hash = ''
    u.search = ''
    return u.toString()
  } catch {
    return null
  }
}

const shouldSkip = (url: string): boolean =>
  SKIP_PATTERNS.some((pattern) => pattern.test(url))

export const crawl = async (options: CrawlOptions): Promise<string[]> => {
  const { startUrl, maxPages, concurrency, fetcher } = options
  const startHost = new URL(startUrl).host

  const seen = new Set<string>([startUrl])
  const queue: string[] = [startUrl]
  const visited: string[] = []
  const limit = pLimit(concurrency)

  while (queue.length > 0 && visited.length < maxPages) {
    const batch = queue.splice(0, concurrency)
    const results = await Promise.all(
      batch.map((url) =>
        limit(async () => {
          try {
            const html = await fetcher(url)
            return { url, html }
          } catch (err) {
            console.error(`crawl: failed ${url}: ${(err as Error).message}`)
            return null
          }
        }),
      ),
    )

    for (const result of results) {
      if (!result) {
        continue
      }
      visited.push(result.url)
      const $ = cheerio.load(result.html)
      $('a[href]').each((_, el) => {
        const href = $(el).attr('href')
        if (!href) {
          return
        }
        const normalized = normalizeUrl(href, result.url)
        if (
          normalized
          && !seen.has(normalized)
          && isInternal(normalized, startHost)
          && !shouldSkip(normalized)
        ) {
          seen.add(normalized)
          queue.push(normalized)
        }
      })
    }
  }

  return visited
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/crawler.ts
git commit -m "feat(migrate): add bfs crawler module"
```

---

### Task 8: Implement the HTTP fetcher with on-disk cache

**Files:**
- Create: `tools/migrate/src/fetcher.ts`

- [ ] **Step 1: Write the fetcher**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/fetcher.ts`

```typescript
import axios from 'axios'
import { createHash } from 'node:crypto'
import { promises as fs } from 'node:fs'
import path from 'node:path'

const CACHE_DIR = path.join(process.cwd(), '.cache')

const urlToCachePath = (url: string): string => {
  const hash = createHash('sha256').update(url).digest('hex').slice(0, 16)
  return path.join(CACHE_DIR, `${hash}.html`)
}

const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => { setTimeout(resolve, ms) })

const fetchWithRetry = async (url: string, attempt = 1): Promise<string> => {
  try {
    const response = await axios.get<string>(url, {
      timeout: 30000,
      responseType: 'text',
      headers: {
        'User-Agent': 'emarketeer-doc-migration/0.1 (+contact: magnus.baudin@emarketeer.com)',
      },
    })
    return response.data
  } catch (err) {
    const status = (err as { response?: { status?: number } }).response?.status ?? 0
    if (attempt < 4 && (status === 0 || status >= 500)) {
      const backoff = 1000 * 2 ** (attempt - 1)
      console.warn(`fetcher: ${url} attempt ${attempt} failed (${status}), retry in ${backoff}ms`)
      await sleep(backoff)
      return fetchWithRetry(url, attempt + 1)
    }
    throw err
  }
}

export const createFetcher = (throttleMs = 1000) => {
  let lastRequest = 0

  return async (url: string): Promise<string> => {
    await fs.mkdir(CACHE_DIR, { recursive: true })
    const cachePath = urlToCachePath(url)

    try {
      return await fs.readFile(cachePath, 'utf8')
    } catch {
      // Cache miss — fetch
    }

    const now = Date.now()
    const wait = Math.max(0, throttleMs - (now - lastRequest))
    if (wait > 0) {
      await sleep(wait)
    }
    lastRequest = Date.now()

    console.log(`fetch: ${url}`)
    const html = await fetchWithRetry(url)
    await fs.writeFile(cachePath, html, 'utf8')
    return html
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/fetcher.ts
git commit -m "feat(migrate): add http fetcher with disk cache"
```

---

### Task 9: Implement the content extractor

**Files:**
- Create: `tools/migrate/src/extractor.ts`

- [ ] **Step 1: Write the extractor**

Replace the placeholder selectors below with the ones recorded in `tools/migrate/SELECTORS.md` from Task 6.

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/extractor.ts`

```typescript
import * as cheerio from 'cheerio'

export interface ExtractedPage {
  url: string
  title: string
  contentHtml: string
}

// Selectors come from tools/migrate/SELECTORS.md (see Task 6).
// Update these to match the actual WordPress theme.
const CONTENT_SELECTORS = [
  'article.post',
  'article',
  'main.entry-content',
  '.entry-content',
  'main',
]

const TITLE_SELECTORS = [
  'h1.entry-title',
  'article h1',
  'h1',
]

const STRIP_SELECTORS = [
  '.sharedaddy',
  '.jp-relatedposts',
  'nav',
  'footer',
  'aside',
  'script',
  'style',
  'noscript',
  '.comment-section',
  '#comments',
  '.wp-block-buttons',
]

const findFirst = ($: cheerio.CheerioAPI, selectors: string[]): cheerio.Cheerio<any> | null => {
  for (const sel of selectors) {
    const el = $(sel).first()
    if (el.length > 0) {
      return el
    }
  }
  return null
}

export const extract = (url: string, html: string): ExtractedPage | null => {
  const $ = cheerio.load(html)

  const contentEl = findFirst($, CONTENT_SELECTORS)
  if (!contentEl) {
    return null
  }

  STRIP_SELECTORS.forEach((sel) => contentEl.find(sel).remove())

  const titleEl = findFirst($, TITLE_SELECTORS)
  const title = titleEl ? titleEl.text().trim() : url

  return {
    url,
    title,
    contentHtml: contentEl.html() ?? '',
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/extractor.ts
git commit -m "feat(migrate): add content extractor"
```

---

### Task 10: Implement the HTML → Markdown converter

**Files:**
- Create: `tools/migrate/src/converter.ts`

- [ ] **Step 1: Write the converter**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/converter.ts`

```typescript
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

export const createConverter = (): TurndownService => {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    fence: '```',
    bulletListMarker: '-',
    emDelimiter: '_',
    strongDelimiter: '**',
  })

  td.use(gfm)

  td.addRule('fencedCodeWithLang', {
    filter: (node) => (
      node.nodeName === 'PRE'
      && node.firstChild !== null
      && (node.firstChild as HTMLElement).nodeName === 'CODE'
    ),
    replacement: (_, node) => {
      const codeNode = (node as HTMLElement).firstChild as HTMLElement
      const className = codeNode.getAttribute?.('class') ?? ''
      const langMatch = className.match(/language-(\S+)/)
      const lang = langMatch ? langMatch[1] : ''
      const code = codeNode.textContent ?? ''
      return `\n\n\`\`\`${lang}\n${code.replace(/\n$/, '')}\n\`\`\`\n\n`
    },
  })

  return td
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/converter.ts
git commit -m "feat(migrate): add html-to-markdown converter"
```

---

### Task 11: Implement the image downloader

**Files:**
- Create: `tools/migrate/src/images.ts`

- [ ] **Step 1: Write the image downloader**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/images.ts`

```typescript
import axios from 'axios'
import * as cheerio from 'cheerio'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { URL } from 'node:url'

export interface ImageRewriteResult {
  contentHtml: string
  imagesDownloaded: string[]
  imagesFailed: string[]
}

const filenameFromUrl = (url: string): string => {
  const u = new URL(url)
  const base = path.basename(u.pathname) || 'image'
  return base.replace(/[^a-zA-Z0-9._-]/g, '_')
}

const downloadBinary = async (url: string, dest: string): Promise<void> => {
  const response = await axios.get<ArrayBuffer>(url, {
    responseType: 'arraybuffer',
    timeout: 30000,
  })
  await fs.writeFile(dest, Buffer.from(response.data))
}

export const downloadImages = async (
  contentHtml: string,
  pageUrl: string,
  articleSlug: string,
  assetsDir: string,
): Promise<ImageRewriteResult> => {
  const $ = cheerio.load(contentHtml, null, false)
  const imgEls = $('img').toArray()

  const articleAssetsDir = path.join(assetsDir, articleSlug)
  await fs.mkdir(articleAssetsDir, { recursive: true })

  const downloaded: string[] = []
  const failed: string[] = []

  for (const el of imgEls) {
    const src = $(el).attr('src')
    if (!src) {
      continue
    }
    let absolute: string
    try {
      absolute = new URL(src, pageUrl).toString()
    } catch {
      failed.push(src)
      continue
    }

    const filename = filenameFromUrl(absolute)
    const localPath = path.join(articleAssetsDir, filename)

    try {
      await fs.access(localPath)
    } catch {
      try {
        await downloadBinary(absolute, localPath)
      } catch (err) {
        console.error(`image: failed ${absolute}: ${(err as Error).message}`)
        failed.push(absolute)
        continue
      }
    }

    const relPath = `../assets/${articleSlug}/${filename}`
    $(el).attr('src', relPath)
    downloaded.push(absolute)
  }

  return {
    contentHtml: $.html(),
    imagesDownloaded: downloaded,
    imagesFailed: failed,
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/images.ts
git commit -m "feat(migrate): add image downloader and rewriter"
```

---

### Task 12: Implement the URL-to-folder router and the slug generator

**Files:**
- Create: `tools/migrate/src/router.ts`

- [ ] **Step 1: Write the router**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/router.ts`

```typescript
import slugifyLib from 'slugify'
import { URL } from 'node:url'

export interface RouteResult {
  folder: string
  slug: string
}

export const routeUrl = (url: string, title: string): RouteResult => {
  const u = new URL(url)
  const segments = u.pathname.split('/').filter(Boolean)

  let folder: string
  if (segments[0] === 'kb' && segments[1] === 'getting-started') {
    folder = 'getting-started'
  } else if (segments[0] === 'kb' || segments[0] === 'knowledgehome') {
    folder = 'knowledge-base'
  } else if (segments[0] === 'documentation' && segments[1] === 'legal') {
    folder = 'documentation/legal'
  } else if (segments[0] === 'documentation') {
    folder = 'documentation'
  } else if (segments[0] === 'change-log') {
    folder = 'change-log'
  } else {
    folder = 'unsorted'
  }

  const lastSegment = segments[segments.length - 1] ?? ''
  const slugSource = lastSegment || title || 'untitled'
  const slug = slugifyLib(slugSource, { lower: true, strict: true })

  return { folder, slug }
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/router.ts
git commit -m "feat(migrate): add url-to-folder router"
```

---

### Task 13: Implement the `SUMMARY.md` generator and migration report

**Files:**
- Create: `tools/migrate/src/summary.ts`
- Create: `tools/migrate/src/report.ts`

- [ ] **Step 1: Write the SUMMARY generator**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/summary.ts`

```typescript
import { promises as fs } from 'node:fs'
import path from 'node:path'

export interface ArticleEntry {
  folder: string
  slug: string
  title: string
}

const SECTION_ORDER = [
  { folder: 'getting-started', label: 'Getting Started' },
  { folder: 'knowledge-base', label: 'Knowledge Base' },
  { folder: 'documentation', label: 'Documentation' },
  { folder: 'documentation/legal', label: 'Legal' },
  { folder: 'change-log', label: 'Change Log' },
  { folder: 'unsorted', label: 'Unsorted (triage)' },
]

export const generateSummary = async (
  repoRoot: string,
  articles: ArticleEntry[],
): Promise<void> => {
  const lines: string[] = ['# Table of contents', '', '* [Welcome](README.md)', '']

  for (const section of SECTION_ORDER) {
    const inSection = articles.filter((a) => a.folder === section.folder)
    if (inSection.length === 0 && section.folder !== 'unsorted') {
      lines.push(`## ${section.label}`, '')
      lines.push(`* [Overview](${section.folder}/README.md)`, '')
      continue
    }
    if (inSection.length === 0) {
      continue
    }
    lines.push(`## ${section.label}`, '')
    if (section.folder !== 'unsorted') {
      lines.push(`* [Overview](${section.folder}/README.md)`)
    }
    for (const article of inSection) {
      lines.push(`* [${article.title}](${section.folder}/${article.slug}.md)`)
    }
    lines.push('')
  }

  await fs.writeFile(path.join(repoRoot, 'SUMMARY.md'), `${lines.join('\n')}\n`, 'utf8')
}
```

- [ ] **Step 2: Write the report generator**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/report.ts`

```typescript
import { promises as fs } from 'node:fs'
import path from 'node:path'

export interface ReportEntry {
  sourceUrl: string
  targetPath: string | null
  imagesDownloaded: number
  imagesFailed: string[]
  error?: string
}

export const writeReport = async (
  repoRoot: string,
  entries: ReportEntry[],
): Promise<void> => {
  const lines: string[] = [
    '# Migration Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    `Total pages processed: ${entries.length}`,
    '',
    '## Results',
    '',
    '| Source URL | Target | Images OK | Images Failed | Error |',
    '| --- | --- | --- | --- | --- |',
  ]

  for (const e of entries) {
    const target = e.targetPath ?? '(skipped)'
    const failed = e.imagesFailed.length > 0 ? e.imagesFailed.join('<br>') : '—'
    const error = e.error ?? '—'
    lines.push(`| ${e.sourceUrl} | ${target} | ${e.imagesDownloaded} | ${failed} | ${error} |`)
  }

  const unsorted = entries.filter((e) => e.targetPath?.startsWith('unsorted/'))
  if (unsorted.length > 0) {
    lines.push('', '## Unsorted bucket (triage these)', '')
    for (const e of unsorted) {
      lines.push(`- \`${e.targetPath}\` — from ${e.sourceUrl}`)
    }
  }

  await fs.writeFile(path.join(repoRoot, 'migration-report.md'), `${lines.join('\n')}\n`, 'utf8')
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/summary.ts tools/migrate/src/report.ts
git commit -m "feat(migrate): add summary generator and report writer"
```

---

### Task 14: Wire it all together in the CLI entrypoint

**Files:**
- Modify: `tools/migrate/src/index.ts` (replace placeholder)

- [ ] **Step 1: Replace the placeholder entrypoint**

Path: `/Users/mbaudin/dev/support-doc/tools/migrate/src/index.ts`

```typescript
import { Command } from 'commander'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { crawl } from './crawler.js'
import { createFetcher } from './fetcher.js'
import { extract } from './extractor.js'
import { createConverter } from './converter.js'
import { downloadImages } from './images.js'
import { routeUrl } from './router.js'
import { generateSummary, ArticleEntry } from './summary.js'
import { writeReport, ReportEntry } from './report.js'

interface CliOptions {
  start: string
  out: string
  maxPages: string
  concurrency: string
  dryRun?: boolean
}

const main = async (): Promise<void> => {
  const program = new Command()
  program
    .requiredOption('--start <url>', 'starting URL for crawl')
    .requiredOption('--out <path>', 'repo root (absolute)')
    .option('--max-pages <n>', 'max pages to crawl', '500')
    .option('--concurrency <n>', 'concurrent fetches', '2')
    .option('--dry-run', 'crawl and print URL list, write nothing')

  program.parse()
  const opts = program.opts<CliOptions>()

  const repoRoot = path.resolve(opts.out)
  const assetsDir = path.join(repoRoot, 'assets')
  const maxPages = Number.parseInt(opts.maxPages, 10)
  const concurrency = Number.parseInt(opts.concurrency, 10)

  const fetcher = createFetcher(1000)
  const converter = createConverter()

  console.log(`crawl: starting from ${opts.start} (max ${maxPages} pages)`)
  const urls = await crawl({
    startUrl: opts.start,
    maxPages,
    concurrency,
    fetcher,
  })
  console.log(`crawl: discovered ${urls.length} pages`)

  if (opts.dryRun) {
    console.log('--- URL list ---')
    urls.forEach((u) => console.log(u))
    return
  }

  const articles: ArticleEntry[] = []
  const entries: ReportEntry[] = []

  for (const url of urls) {
    const entry: ReportEntry = {
      sourceUrl: url,
      targetPath: null,
      imagesDownloaded: 0,
      imagesFailed: [],
    }
    try {
      const html = await fetcher(url)
      const extracted = extract(url, html)
      if (!extracted) {
        entry.error = 'no content container matched'
        entries.push(entry)
        continue
      }

      const { folder, slug } = routeUrl(url, extracted.title)
      const folderPath = path.join(repoRoot, folder)
      await fs.mkdir(folderPath, { recursive: true })

      const imageResult = await downloadImages(
        extracted.contentHtml,
        url,
        slug,
        assetsDir,
      )

      const markdown = converter.turndown(imageResult.contentHtml)
      const body = `# ${extracted.title}\n\n${markdown}\n`
      const targetFile = path.join(folderPath, `${slug}.md`)
      await fs.writeFile(targetFile, body, 'utf8')

      articles.push({ folder, slug, title: extracted.title })
      entry.targetPath = `${folder}/${slug}.md`
      entry.imagesDownloaded = imageResult.imagesDownloaded.length
      entry.imagesFailed = imageResult.imagesFailed
    } catch (err) {
      entry.error = (err as Error).message
    }
    entries.push(entry)
  }

  await generateSummary(repoRoot, articles)
  await writeReport(repoRoot, entries)

  console.log(`migrate: wrote ${articles.length} articles, see migration-report.md`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
```

- [ ] **Step 2: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/index.ts tools/migrate/yarn.lock
git commit -m "feat(migrate): wire cli entrypoint"
```

---

### Task 15: Smoke-test the script on a single page

**Files:** none (verification)

- [ ] **Step 1: Run a dry run first**

```bash
cd /Users/mbaudin/dev/support-doc/tools/migrate
yarn migrate --start https://support.emarketeer.com --out ../.. --max-pages 5 --dry-run
```

Expected: prints up to 5 discovered URLs. No files written.

- [ ] **Step 2: Run a tiny real migration (5 pages)**

```bash
yarn migrate --start https://support.emarketeer.com --out ../.. --max-pages 5
```

Expected:
- 5 Markdown files appear under section folders.
- `assets/<slug>/` directories contain images.
- `SUMMARY.md` is updated.
- `migration-report.md` is created in the repo root.

- [ ] **Step 3: Inspect one converted file manually**

Open one generated `.md` file. Check:
- H1 matches the source page title.
- Body is readable Markdown with no leftover HTML tags.
- Images render with relative `../assets/...` paths.
- Code blocks are fenced with language hints where the source had them.

- [ ] **Step 4: If extraction looks wrong**

The most likely cause is wrong selectors. Inspect the source HTML, update `tools/migrate/SELECTORS.md` AND `tools/migrate/src/extractor.ts`, delete the affected files under repo root, delete `.cache/` to force a re-fetch, and re-run Step 2.

- [ ] **Step 5: When the smoke test passes, commit**

If the script needed tuning, commit those changes:

```bash
cd /Users/mbaudin/dev/support-doc
git add tools/migrate/src/extractor.ts tools/migrate/SELECTORS.md
git commit -m "fix(migrate): tune content selectors after smoke test" || echo "no tuning changes"
```

Do NOT commit the generated `.md` files yet — those land in Task 17.

- [ ] **Step 6: Clean up smoke-test artifacts**

```bash
cd /Users/mbaudin/dev/support-doc
git clean -fd getting-started/ knowledge-base/ documentation/ change-log/ unsorted/ assets/ migration-report.md SUMMARY.md
git checkout SUMMARY.md   # restore the skeleton version
```

(`git clean -fd` deletes only untracked files in the named directories. The skeleton `getting-started/README.md` etc. are tracked so they survive. `SUMMARY.md` was modified, so we check it back out.)

---

## Phase C — Run Full Migration and Triage

### Task 16: Run the full migration

**Files:** generated by the script

- [ ] **Step 1: Dry-run at full scale**

```bash
cd /Users/mbaudin/dev/support-doc/tools/migrate
yarn migrate --start https://support.emarketeer.com --out ../.. --max-pages 1000 --dry-run > /tmp/url-list.txt
wc -l /tmp/url-list.txt
head -30 /tmp/url-list.txt
```

Show the user the count and the first 30 URLs. Confirm before proceeding.

- [ ] **Step 2: Full migration**

```bash
yarn migrate --start https://support.emarketeer.com --out ../.. --max-pages 1000
```

This may take several minutes (1 req/sec throttle × N pages). Watch for fetch errors in the output.

- [ ] **Step 3: Inspect the report**

```bash
cd /Users/mbaudin/dev/support-doc
cat migration-report.md | head -60
```

Look for:
- Pages with `error` set — these failed extraction.
- Pages in the `unsorted/` folder — these need manual classification.
- Failed image URLs — usually broken upstream, but check a few.

- [ ] **Step 4: Spot-check generated content**

Open 3-4 articles from different sections. Verify they look reasonable. Note any patterns of badness (e.g. all pages have leftover footer text — selector needs tuning).

- [ ] **Step 5: Commit the raw migration**

```bash
cd /Users/mbaudin/dev/support-doc
git add getting-started/ knowledge-base/ documentation/ change-log/ unsorted/ assets/ SUMMARY.md migration-report.md
git commit -m "feat: import raw migrated content from support.emarketeer.com"
```

- [ ] **Step 6: Do NOT push yet**

The content is raw and unrewrited. Pushing now publishes the unpolished migration to GitBook live. Hold off until after triage (Task 17) and confirm with the user before pushing.

---

### Task 17: Triage the `unsorted/` bucket

**Files:** files under `unsorted/`

- [ ] **Step 1: List unsorted pages**

```bash
cd /Users/mbaudin/dev/support-doc
ls unsorted/ 2>/dev/null || echo "(empty)"
```

- [ ] **Step 2: For each file in `unsorted/`, classify**

For each file, open it, decide its correct section, and move it:

```bash
# Example
git mv unsorted/some-article.md knowledge-base/some-article.md
```

If a file is junk (e.g. an author archive page, a tag page), delete it:

```bash
git rm unsorted/junk-page.md
```

- [ ] **Step 3: Update `SUMMARY.md`**

Regenerate `SUMMARY.md` by re-running the script in summary-only mode, OR manually edit it to reflect the moves. The script does not have a summary-only flag, so the practical move is: ask Claude to update `SUMMARY.md` to match the current file tree. This is exactly the kind of task `CLAUDE.md` covers.

- [ ] **Step 4: Verify `unsorted/` is empty**

```bash
ls unsorted/ 2>/dev/null && rmdir unsorted/ 2>/dev/null || echo "(removed or already empty)"
```

- [ ] **Step 5: Commit**

```bash
cd /Users/mbaudin/dev/support-doc
git add -A
git commit -m "restructure: triage unsorted articles into sections"
```

- [ ] **Step 6: Push to GitBook**

Confirm with the user once more before publishing the raw migrated content:

> "About to push the raw migrated content to GitBook live. The content is not yet rewritten for clarity — Stage 2 happens after this. Continue?"

If yes:

```bash
git push origin main
```

Wait ~60 seconds, then open GitBook and verify the new structure and content appear correctly.

---

## Stages 2 and 3 — Not Implementation Tasks

After Task 17, Phase B/C is complete and the migration is live on GitBook.

**Stage 2 (AI rewrite)** is now a usage activity, not implementation work. The user opens Claude Code in the repo and asks for rewrites article-by-article or section-by-section. The `CLAUDE.md` written in Task 3 governs Claude's behavior. No further plan tasks are needed.

**Stage 3 (ongoing authoring)** is steady-state. The user uses Claude Code in the repo to write new articles, edit existing ones, restructure, etc. Same `CLAUDE.md` contract.

If the rewrite or authoring experience reveals gaps in `CLAUDE.md` (e.g. Claude keeps doing something the user dislikes), update `CLAUDE.md` to encode the rule. That's a normal small commit, not a new plan.

---

## Self-review

- **Spec coverage:** Every spec section maps to tasks. Three-stage architecture → Phases A/B/C. Repo layout → Tasks 2 + 5. Migration script behaviors (1)–(8) → Tasks 7–14. CLAUDE.md contract → Task 3. Risks (selector, exclusions) → Tasks 4, 6, 15. Implementation order in spec matches phases here.
- **Placeholder scan:** No TBD/TODO outside the legitimate `SELECTORS.md` template fields, which Step 3 of Task 6 explicitly requires to be filled in before commit. No "implement later" anywhere. All code is shown in full.
- **Type/symbol consistency:** `ArticleEntry` defined in `summary.ts` and re-imported in `index.ts`. `ReportEntry` defined in `report.ts` and re-imported. `createFetcher`, `createConverter`, `crawl`, `extract`, `downloadImages`, `routeUrl`, `generateSummary`, `writeReport` — all defined where used.
- **Risk acknowledgements:** Selector tuning is an explicit task (6) and a follow-up step in 15. GitBook exclusion behavior is verified in Task 4 with a documented fallback.
