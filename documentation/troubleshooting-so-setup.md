# SuperOffice Integration Setup Troubleshooting

This article covers common failures when setting up the SuperOffice integration, and how to resolve them.

## When the integration fails to finish

- **The SuperOffice user used for the integration does not have a "Sales" or "Complete" license, or access to this module.** A "Sales" or "Complete" version of SuperOffice is required for the integration.
- **The integration fails with an error related to panels.** Log in to SuperOffice admin and check the web panels. Make sure you do not have "deleted" panels with the same URL as the ones eMarketeer is trying to create. When you delete a web panel in SuperOffice, it is not actually deleted, only hidden. Click the checkbox to show deleted panels. If you find duplicates, edit them to use non-eMarketeer URLs and change the panel name. Then run the integration again.
- **Fields and panels created by the integration may not work instantly.** To make sure everything works:
  - Flush SuperOffice so the panels show in the clients immediately. See the instructions below.
  - Make sure the created fields are published and available for the user groups you want.

## Flush the cache in SuperOffice

If you expect to see changes in SuperOffice, such as new web panels, and they do not appear, you may need to flush the cache.

To flush the cache from your web browser:

1. Log in to SuperOffice CRM in your web browser.
2. In the URL, remove everything after the `?` and type `flush`. Then press Return.

Example: `https://online.superoffice.com/custXXXX/default.aspx?flush`
