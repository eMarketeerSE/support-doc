# Swedish translation contract for eMarketeer support docs

This file applies ONLY to translation work inside the `sv/` folder. The English voice contract is at the repo root in `/CLAUDE.md`.

## What this folder is

`sv/` is the Swedish variant of the eMarketeer support docs. GitBook treats it as a separate Space that publishes alongside the English Space. Commits to `main` publish both languages.

## Source of truth

Every Swedish file is a translation of an English file at the equivalent path one level shallower. For example:

- English: `knowledge-base/email-deliverability/feedback-loop.md`
- Swedish: `sv/knowledge-base/email-deliverability/feedback-loop.md`

If the English file changes meaningfully, the Swedish file is re-translated. Don't drift apart.

## Folder structure

Mirrors the English structure exactly **except** `documentation/legal/` is NOT translated. Legal documents stay English-only — they're legally binding and machine translation introduces meaning shifts in clauses. The Swedish home page links back to the English legal section with a note.

## Image references

Swedish articles live one level deeper than their English counterparts, so image paths need one extra `../`:

- English at `knowledge-base/<group>/article.md`: `![alt](../../assets/<slug>/img.png)`
- Swedish at `sv/knowledge-base/<group>/article.md`: `![alt](../../../assets/<slug>/img.png)`

The `assets/` folder is shared — never duplicate images into `sv/assets/`.

## Terminology (Swedish glossary)

**Translate these generic terms:**

| English | Swedish |
| --- | --- |
| Contact | Kontakt |
| Contacts | Kontakter |
| Campaign | Kampanj |
| Campaigns | Kampanjer |
| Form | Formulär |
| Forms | Formulär |
| Account | Konto |
| Email (in prose) | E-post |
| Subscriber | Prenumerant |
| List | Lista |
| Tag | Tagg |
| Recipient | Mottagare |
| Sender | Avsändare |
| Domain | Domän |
| Bounce (noun) | Studs |
| Bounce rate | Studsfrekvens |
| Complaint | Klagomål |
| Send-out | Utskick |
| Send (verb) | Skicka |
| Open (email open) | Öppning |
| Click | Klick |
| Settings | Inställningar |
| Step | Steg |
| Step-by-step | Steg-för-steg |
| Template | Mall |
| Selection / audience | Urval |
| Report | Rapport |
| Landing page | Landningssida |
| Dashboard | Översikt |
| Lead stream | Leadström |
| Converted (lead metric) | Konverterad |

**Keep in English (product UI labels, technical acronyms, brand):**

- Journey, Journeys — but add a hyphen-compound where Swedish grammar needs it: "Journey-inställningar", "Journey-steg", "Journey-utlösare".
- Lead Board
- Web Tracker
- Signals
- Dynamics, Microsoft Dynamics 365
- SuperOffice
- reCAPTCHA, Zapier, Webhook
- eMarketeer (always, case-exactly)
- SPF, DKIM, DMARC, ARC
- ESP, ISP, CRM, API, REST, JSON, XML, CSV
- HTML, CSS, JS, URL, SQL
- GDPR, KPI, CTR, CTOR
- SMS, MMS
- HAR (file)
- UTM (parameter)
- MFA, 2FA
- GMT, iOS, Android
- Code Block names from the email/form editor (Add Activity, Add Contact, etc.) — keep verbatim as they appear in the UI

When in doubt about a UI label, leave it in English with the Swedish translation in parentheses on first mention if useful, e.g. "Use the **Bulk Actions** tool (Massåtgärder)".

### Dashboard names (the product UI is localized to Swedish)

The eMarketeer product UI is fully translated to Swedish, so the dashboards and their tiles have official Swedish labels. Match the live UI, not the English source. Filenames and folder paths stay unchanged (URL stability) — only the visible name changes.

| English | Swedish (live UI) |
| --- | --- |
| Dashboards (section/group) | Översikt |
| Marketing Performance | Marknadsföringsresultat |
| Traffic Analyzer | Trafikanalysator |
| Operational Report | Operativ rapport |
| Email Health Dashboard | E-posthälsa |

Marketing Performance KPI tiles:

| English | Swedish (live UI) |
| --- | --- |
| Outbound | Utgående |
| Engaged | Engagerad |
| Converted (was "Captured") | Konverterad |
| Enriched | Berikad |
| Nurtured | Vårdad |
| Qualified Leads | Kvalificerade leads |

The tile previously labelled **Captured** is rendered as **Converted** / **Konverterad** — the metric counts leads that converted, so the literal "captured / fångad / infångad" wording is wrong. Do not translate it back.

> TODO: verify — widget titles, Traffic Analyzer stage/control labels, and the Email Health metric/table labels inside these articles are still in English but the live UI shows them in Swedish. They need a localization pass, and the "screenshots stay English" note below needs revisiting now that the product UI is Swedish.

### Aligning with the product UI

The glossary rows above (from **Template** down) and these acronyms are extracted from the eMarketeer product's own translation contract (`/translation.md`), so the support docs use the same Swedish words a reader sees in the live interface. When a term isn't in the glossary, check how the product UI translates it and follow that for consistency. `/translation.md` also covers the product codebase (gettext `.po`, React `i18n`, the four Nordic languages, CI checks) — none of which applies to these Markdown docs.

## Style

- **Tilltal**: du-tilltal throughout. Never "ni".
- Tense: present, active.
- Sentence length: short. 12–18 words average. Break long ones.
- One idea per paragraph.
- No emoji.
- No exclamation marks unless the source had one (it shouldn't have any after the rewrite pass).
- Headings: sentence case (capitalize first word and proper nouns only). E.g. `### Så här gör du` not `### Så Här Gör Du`.

## What to translate

- Article body prose.
- H1 (article title).
- H2/H3/H4 section headings.
- Image alt text — write Swedish alt text describing what the screenshot shows. Screenshots themselves stay English (they show the eMarketeer English UI).
- Card titles and descriptions in `<table data-view="cards">` blocks.

## What to preserve verbatim

- Code blocks of every language (no translation of code, code comments stay as-is unless they're documentation prose).
- Code-fence language hints (` ```bash `, ` ```json ` etc.).
- Inline `` `code` `` spans.
- Image filenames and paths (image alt text is translated, the path is not).
- Link URLs (the visible link text is translated, the URL is not).
- `> TODO: verify` callouts — keep the marker in English so it's still grep-able.
- GitBook syntax: `<table data-view="cards">`, `data-card-target`, `data-type="content-ref"`.
- Numbers, dates, version numbers, hostnames, port numbers.
- Currency amounts.

## Translator-subagent constraints

When translating a batch:
- Read this file at the start of every batch.
- Translate the listed files only. Never touch files outside the batch.
- Use ONLY `git add` and `git commit`. Never `git push`, `git fetch`, or any remote-mutating command.
- Sanity-check before commit: every translated file still has exactly one H1 on line 1, no `../../assets/` paths remain (all should be `../../../assets/`), no English headings linger.
