# URL Migration Reference

Internal reference for developers updating in-app documentation links.

## How to use this document

Replace all occurrences of each **Old URL** with the corresponding **New URL** in the application code.

**Base URLs:**
- Main support space: `https://emarketeer.gitbook.io/support` — replace with the custom domain once live
- Legal space: `https://emarketeer.gitbook.io/legal` — replace with the legal custom domain once live

**Trailing slashes:** treat URLs with and without a trailing slash as identical (e.g. `.../website-integration-requirements` and `.../website-integration-requirements/` map to the same new URL).

**Duplicates:** the original list contained duplicate entries. Each unique URL is listed once below.

---

## URL mapping (29 unique redirects)

| Old URL | New URL |
|---------|---------|
| `https://support.emarketeer.com/documentation/apiv1/` | `https://emarketeer.gitbook.io/support/references/apis-developer` |
| `https://support.emarketeer.com/documentation/custom-domain/` | `https://emarketeer.gitbook.io/support/guides/account-admin/domains` |
| `https://support.emarketeer.com/documentation/exclude-inactive-recipients/` | `https://emarketeer.gitbook.io/support/references/references/email/exclude-inactive-recipients` |
| `https://support.emarketeer.com/documentation/import-contacts-from-superoffice-crm/` | `https://emarketeer.gitbook.io/support/integrations/superoffice/import-contacts-from-superoffice-crm` |
| `https://support.emarketeer.com/documentation/installing-the-web-tracker-script-on-your-website/` | `https://emarketeer.gitbook.io/support/references/references/web-tracker/installing-the-web-tracker-script-on-your-website` |
| `https://support.emarketeer.com/documentation/journeys/` | `https://emarketeer.gitbook.io/support/guides/journeys` |
| `https://support.emarketeer.com/documentation/legal/end-user-license-agreement-eula/` | `https://emarketeer.gitbook.io/legal/end-user-license-agreement-eula` |
| `https://support.emarketeer.com/documentation/legal/terms-of-service/` | `https://emarketeer.gitbook.io/legal/terms-of-service` |
| `https://support.emarketeer.com/documentation/microsoft-dynamics-integration/` | `https://emarketeer.gitbook.io/support/integrations/dynamics/microsoft-dynamics-integration` |
| `https://support.emarketeer.com/documentation/multi-factor-authentication/` | `https://emarketeer.gitbook.io/support/references/references/accounts-auth/multi-factor-authentication` |
| `https://support.emarketeer.com/documentation/old_api/` | `https://emarketeer.gitbook.io/support/references/apis-developer` |
| `https://support.emarketeer.com/documentation/publish-a-form/` | `https://emarketeer.gitbook.io/support/guides/guides/forms/publish-a-form` |
| `https://support.emarketeer.com/documentation/sender-id/` | `https://emarketeer.gitbook.io/support/references/references/sms/sender-id` |
| `https://support.emarketeer.com/documentation/superoffice-legalbasis-sync/` | `https://emarketeer.gitbook.io/support/integrations/superoffice/superoffice-legalbasis-sync` |
| `https://support.emarketeer.com/documentation/tags/` | `https://emarketeer.gitbook.io/support/guides/contacts-lists/tags` |
| `https://support.emarketeer.com/documentation/transactional-sendouts/` | `https://emarketeer.gitbook.io/support/references/references/email/transactional-sendouts` |
| `https://support.emarketeer.com/knowledgebase/about-email-bounces/` | `https://emarketeer.gitbook.io/support/references/references/email/deliverability/about-email-bounces` |
| `https://support.emarketeer.com/knowledgebase/authorize-email-domain/` | `https://emarketeer.gitbook.io/support/getting-started/account-setup/authorize-email-domain` |
| `https://support.emarketeer.com/knowledgebase/barcodes/` | `https://emarketeer.gitbook.io/support/references/developer-advanced/barcodes` |
| `https://support.emarketeer.com/knowledgebase/editing-a-live-form/` | `https://emarketeer.gitbook.io/support/guides/guides/forms/editing-a-live-form` |
| `https://support.emarketeer.com/knowledgebase/emarketeer-sender-policy/` | `https://emarketeer.gitbook.io/support/references/references/email/emarketeer-sender-policy` |
| `https://support.emarketeer.com/knowledgebase/embed-videomedia/` | `https://emarketeer.gitbook.io/support/guides/guides/email-content/embed-videomedia` |
| `https://support.emarketeer.com/knowledgebase/how-lead-scoring-works-in-emarketeer/` | `https://emarketeer.gitbook.io/support/guides/lead-board-scoring/how-lead-scoring-works-in-emarketeer` |
| `https://support.emarketeer.com/knowledgebase/how-to-use-campaign-fields-in-emarketeer/` | `https://emarketeer.gitbook.io/support/guides/guides/campaigns/how-to-use-campaign-fields-in-emarketeer` |
| `https://support.emarketeer.com/knowledgebase/sales-users/` | `https://emarketeer.gitbook.io/support/guides/lead-board-scoring/sales-users` |
| `https://support.emarketeer.com/knowledgebase/superoffice-automations-pro/` | `https://emarketeer.gitbook.io/support/integrations/superoffice/superoffice-automations-pro` |
| `https://support.emarketeer.com/knowledgebase/web-monitor/` | `https://emarketeer.gitbook.io/support/references/references/web-tracker` |
| `https://support.emarketeer.com/knowledgebase/website-integration-requirements/` | `https://emarketeer.gitbook.io/support/guides/guides/forms/website-integration-requirements` |
| `https://support.emarketeer.com/knowledgebase/why-authorize-email-domain/` | `https://emarketeer.gitbook.io/support/getting-started/account-setup/authorize-email-domain` |

---

## Notes on specific redirects

**`/documentation/apiv1/` and `/documentation/old_api/`**
Both pages were removed. Legacy API 1.0 content has been retired. Both redirect to the current API overview page.

**`/documentation/legal/end-user-license-agreement-eula/` and `/documentation/legal/terms-of-service/`**
Legal documents have moved to a dedicated Legal space at a separate GitBook URL (`emarketeer.gitbook.io/legal`). The new URLs point to a different subdomain/space than the main support docs.

**`/knowledgebase/superoffice-automations-pro/#Current_Lead_Age`**
The anchor (`#Current_Lead_Age`) from the old URL is dropped. Verify whether an equivalent anchor heading exists in the new page if a deep link to that specific section is required.

**`/knowledgebase/web-monitor/`**
The old "web-monitor" page has been merged into the Web Tracker documentation. The redirect points to the Web Tracker overview.

**`/knowledgebase/why-authorize-email-domain/`**
This page exists in the repository but is not published in the new docs site navigation. The redirect points to the "Add Email domain" article, which covers the same subject.
