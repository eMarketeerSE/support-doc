# GitBook theme setup (manual)

This is a one-time setup the maintainer applies in the GitBook web UI.
None of these settings live in Git — GitBook stores them in your space
config. Re-do them only if the space is migrated to a new GitBook
account or the colors change.

## Steps

1. Open the eMarketeer GitBook space:
   https://app.gitbook.com → eMarketeer support space.
2. Open **Customization** → **Themes** (or **Colors** depending on
   GitBook plan tier).
3. Set the brand colors:
   - **Primary color:** `#38C5B5` (eMarketeer teal — used for links,
     buttons, active nav items).
   - **Accent color** (if a separate field exists): `#045089`
     (deep blue — used for secondary CTAs and hover states).
4. Set the theme mode:
   - **Auto** is recommended (follows reader's OS preference).
   - **Dark only** matches emarketeer.com's main site feel.
5. Upload the logo:
   - **For dark theme:** use
     https://emarketeer.com/wp-content/uploads/2022/07/emlogo_ondark_2000_white-1-314x80.png
   - **For light theme:** look up the on-light variant on emarketeer.com
     and upload it. (If only one logo can be set on your plan, the
     on-dark white logo works on the teal primary background.)
6. Upload the favicon. Use the favicon currently served by
   emarketeer.com (right-click the tab icon in a browser → save image).
7. Click **Save** / **Publish**.
8. Verify in a fresh browser window at
   https://emarketeer.gitbook.io/support/ that the colors and logo
   appear.

## Tier limitations

Some settings (custom CSS, multiple logos for light/dark, custom
domain) may require a paid GitBook tier. If a setting in this doc is
locked, the doc records the intent — apply what you can, document
gaps in https://github.com/eMarketeerSE/support-doc/issues so they
aren't lost.

## Brand palette reference

| Token              | Hex      | Where used                           |
| ------------------ | -------- | ------------------------------------ |
| Primary teal       | #38C5B5  | Links, primary buttons, active nav   |
| Teal hover (dark)  | #2DA194  | Hover state for primary teal         |
| Teal hover (light) | #49E2D1  | Hover state for primary teal         |
| Deep blue          | #045089  | Accent, secondary CTAs               |
| Coral red          | #F96D64  | Reserved for future warning state    |
| Near-black bg      | #0F0F11  | Dark-mode background                 |
| Text on light      | #333333  | Body text on light background        |
| Text on dark       | #FFFFFF  | Body text on dark background         |

Source: emarketeer.com CSS inspection, 2026-05-21.
