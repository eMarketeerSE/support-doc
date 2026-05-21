# SuperOffice Integration Setup Troubleshooting

## When starting the integration, it fails to finish.

-   **The SuperOffice user (used for the integration) does not have a “Sales” or “Complete” license, or access to this module.**  
    “Sales” or “Complete” version of SuperOffice is required for the integration.
-   **Integration fails due to some error related to panels.**  
    Log in to SuperOffice admin and check the web panels. Make sure you don’t have “deleted” panels with the same url as eMarketeer is trying to create.  
    When deleting a web panel in SuperOffice, they are not deleted (only hidden). Click the checkbox to “show deleted panels”. If you find duplicates here, edit them to have non-eMarketeer urls, also make sure that you change the name for the panel. Then run the integration again.
-   **Once the fields and panels are created they may not work instantly. To make sure it all works, do the following.**
    -   Flush SuperOffice to make the panels show in the clients instantly. (see instructions below)
    -   Make sure the created fields are in a published state and available for the user groups you want.

### Flush the cache in SuperOffice

If you expect to see changes in SuperOffice such as new web panels etc and they do not appear, you may need to flush the cache in SuperOffice.

To flush the cache using you web browser:

1.  Log in to SuperOffice CRM with your web browser
2.  In the URL, remove everything after the ?-character and type “flush”. Then press Return.

Ex. https://online.superoffice.com/custXXXX/default.aspx?flush
