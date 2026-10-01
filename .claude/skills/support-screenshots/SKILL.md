---
name: support-screenshots
description: House style and workflow for screenshots on the eMarketeer support site. Use whenever you add, replace or annotate a screenshot in any article (EN or SV), or when someone asks how screenshots should look, be annotated, cropped, named, or where image files go.
---

# Support-site screenshots

Every screenshot on the support site follows one style, so articles look consistent no matter who updated them.

## When to annotate

- **Annotate only if the image you are replacing was annotated**, and keep the same intent. An old red box becomes a selection box, old numbers become step badges, an old arrow becomes an arrow, and old callout text becomes a label.
- A new screenshot for a new article: annotate only when the text refers to specific elements ("click 1, then 2").
- At most about five annotations per image. If more are needed, split the image.
- Step badge numbers must match the numbered steps in the article text.

## Annotation style

Font: **Poppins**. Colours: navy `#182a3f`, gold `#EAB46F`, white `#ffffff`.

| Element | Look | Use for |
|---|---|---|
| Step badge | 28 px circle, navy fill, 2 px white ring, white Poppins SemiBold 15 px number, soft shadow | Numbered steps |
| Selection box | 3 px gold outline, 6 px corner radius, no fill, about 4 px outside the element | "Click this", "this area" |
| Arrow | Navy shaft (4 px) and head with a white halo | Pointing at something small or easy to miss |
| Callout label | Gold pill, navy Poppins SemiBold 14 px text | A short explanation next to an element |

Arrows are navy and labels are gold, not the other way round: navy filled pills look like the app's own buttons.

## Capture rules

- The eMarketeer UI is in **English**. Swedish articles use the same image files.
- Viewport 1440×900, captured at 2× pixel density, left sidebar **open**.
- Crop to what the text is about (a dialog, a panel, a menu) with about 16 px padding. Use full-page shots only when the article is about the page layout.
- **No real people and no test data.** Replace names, emails, phone numbers, company names and campaign or component names with realistic fake data before capturing. Nothing like "test", "asdf", "Copy of …", or random numbers may be visible. The fake logged-in user is Emma Lindqvist (avatar "EL").
- **No photos of people.** Replace contact photos with illustrated avatars from DiceBear's CC0 "notionists" set (`https://api.dicebear.com/9.x/notionists/svg?seed=<name>&backgroundColor=<pastel>`), picking faces that fit the names. Leave about a third of contacts with the plain placeholder so the list looks natural. Give fake companies simple drawn logos (a coloured rounded square with a white shape), never real brand logos.
- Save as optimised PNG. Never use screenshots from the old UI (before the October 2026 redesign).

## Files and markup

The file and path rules are in the root `CLAUDE.md` under **Images**, and they win over anything here. In short:
- Name each file `<article-slug>-<what-it-shows>.png`, for example `create-new-campaign-new-campaign-dialog.png`.
- Save the same file in both `.gitbook/assets/` (English) and `sv/.gitbook/assets/` (Swedish). The Swedish space cannot see the root folder.
- The EN and SV articles use the identical path text, for example `../../.gitbook/assets/<file>` from `<section>/<group>/article.md`.
- To replace a screenshot, add a new file and repoint both articles in the same commit. Never overwrite or delete an old image.
- Framed image markup: `<div data-with-frame="true" align="left"><img src="…" alt="…"></div>`. Alt text describes what the image shows.

## Capture tool

Sebastian keeps a local capture tool in `tools/screenshots/` (git-ignored on purpose, because it holds a login session). It applies this style, the fake-data rules and the crop settings automatically from one YAML spec per article:

- `python login.py`: log in to develop.emarketeer.com once. The session is stored locally and never committed.
- `python shoot.py specs/<slug>.yaml`: preview shots in `out/explore/<slug>/`.
- `python shoot.py --final specs/<slug>.yaml`: write final 2× images to both `.gitbook/assets/` folders.

If you don't have the tool, you can still follow this style by hand: use Poppins and the three colours exactly as in the table above.
