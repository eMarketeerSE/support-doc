# Lead Board and SuperOffice

**eMarketeer Lead Board can be used completely through SuperOffice. It allows Sales to manage leads from within SuperOffice and also get insights on contacts and companies through the eMarketeer web panels. Additionally, new leads are automatically matched with SuperOffice contacts and auto-assigned to the responsible sales user.**

When integrating to SuperOffice Online, you will get four main panels to use.

-   The Lead Board – As a main web panel where all leads are delivered and managed.
-   Company Summary – Side panel on company that shows a summary of the company from eMarketeer
-   Contact Summary – Side panel on contact view, showing data on the contact from eMarketeer
-   Automation Queue – Showing all automations waiting for the corresponding contact to be matched or created in SuperOffice.

### Integration

When the integration is initialized in eMarketeer, the new panels will be set up by the integration script.

### Loggin in to the web panels (Automatically)

When viewing a side panel or the Lead Board you need to exist as a user in eMarketeer. When a SuperOffice user loads the eMarketeer web panel a check is made to see if the SuperOffice username (email address) is a user un eMarketeer. If there is a match in email address, the user is automatically logged in to eMarketeer and the web panel.

If the SuperOffice user email is not found as a user in eMarketeer, the SuperOffice user will see an option to request access to eMarketeer. This will generate an email to the admin users of your eMarketeer account.

### The Lead Board

![](../assets/lead-board-and-superoffice/soboard-1024x517.png)

You will find the Lead Board on the main Web Panel found under the SuperOffice logo. There is also a shortcut in the navigation.

### SuperOffice matching and Auto Assign

When a contact in eMarketeer becomes a MQL and ends up on the Lead Board, it will automatically be checked against SuperOffice to see if the contact already exists in SuperOffice. The search will be done using the contact email address.  
If a match is found eMarketeer will pick the first contact in the result and save the ContactID to eMarketeer. A match is visualized by the SuperOffice (owl) icon on the lead card.

When a match is successful it will also release any waiting automations on the contact.

eMarketeer will also assign the new lead to the correct Sales User in eMarketeer. The assign is done only if the responsible SuperOffice user also is a member of the Sales Team in eMarketeer.

### The contact summary web panel

![](../assets/lead-board-and-superoffice/socontact-1024x646.png)

On the contact view in SuperOffice you can show the eMarketeer contact summary panel. This will show all relevant and enriched data from eMarketeer on the contact. The matching is made on email address of the contact and shows data only if the contact exists in eMarketeer.

### The company summary web panel

![](../assets/lead-board-and-superoffice/socompany-1024x646.png)

On the company view in SuperOffice you have available the eMarketeer Company Summary which shows enriched data and an overview of all known contacts and their interactions in eMarketeer. The company is identified on domain from their web

### Automation Queue

The Automation Queue show all contacts in eMarketeer that have pending automations waiting to get in to SuperOffice. The reason they are pending is that there is no ContactID defined on the eMarketeer Contact (External ID). The contact first needs to be created in SuperOffice using the “Share to CRM” button.
