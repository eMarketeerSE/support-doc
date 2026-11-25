# Support site

An Astro static site. It builds the eMarketeer support docs from the Markdown files and SUMMARY.md files in this repo.

## Commands

- `yarn test` runs the unit tests.
- `yarn build` builds the site into `dist/`.
- `yarn check-build` checks that every URL in `sitemap-snapshot.txt` is still a page or a redirect.

## Rule

Pages and endpoints read page data from the content collection (`getCollection('pages')`). They never call `readAllPages()` or read the disk: inside Astro's prerender bundle the repo root resolves one level off.
