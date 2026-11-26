# Support site

An Astro static site. It builds the eMarketeer support docs from the Markdown files and SUMMARY.md files in this repo.

## Commands

- `yarn test` runs the unit tests.
- `SITE_STAGE=dev yarn build` builds the site into `dist/`. `SITE_STAGE` must be `dev` or `prod`; it sets `robots.txt`.
- `yarn check-build` checks that every URL in `sitemap-snapshot.txt` is still a page or a redirect.

## Rule

Pages and endpoints read page data from the content collection (`getCollection('pages')`). They never call `readAllPages()` or read the disk: inside Astro's prerender bundle the repo root resolves one level off.

## Dev site

`.github/workflows/deploy.yml` deploys to https://support.dev-emarketeer.io on every pull request from this repo and on every push to `main`. All runs share one queue, and GitHub keeps only one waiting run: a newer run cancels the waiting one. So dev shows the last run that finished, which can be a pull request, not `main`. A waiting `main` run that is cancelled posts nothing; the next push to `main` deploys it again. A failed or cancelled `main` run that has started posts to #support-site.
