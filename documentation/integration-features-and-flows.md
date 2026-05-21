# The SuperOffice Integration - features and flows

By integrating eMarketeer with SuperOffice CRM, important information about leads and marketing activities are automatically sent to the CRM. That means that you no longer have to share excel lists between marketing and sales ever again!

The integration between eMarketeer and SuperOffice CRM consists of many different bits and pieces. In this article, you learn more about the following:

-   **Common use cases**
-   **Integration interface**
-   **Import/export of contacts –** Transferring contacts between the systems.
-   **Automations –** Triggered by events, creating objects (like notifications, tasks, etc) in SuperOffice CRM related to the contacts
-   **Web panels –** Get eMarketeer insights directly in SuperOffice CRM through web panels.
-   **Legal Basis (GDPR)**

### **Common use cases**

The integration is used from two perspectives; marketing (the eMarketeer side) and sales (the SuperOffice CRM side).

From a marketing perspective, the integration to SuperOffice CRM is most commonly used to:

-   Import SuperOffice segments (selections) for addressing emails
-   Use automations to send events or create objects in SuperOffice CRM when triggered, such as
    -   create a sale
    -   create activities (pending or completed)
    -   add/remove contacts from selections or projects
    -   add/remove interests

From a sales perspective, the integration allows SuperOffice CRM users to

-   See information sent from eMarketeer about the contacts. It’s the above-mentioned automations that can create a sale, activities, tasks, etc in the CRM. (We’ll talk more about the automations a bit further down.)
-   Use the Lead Report (in a web panel) which lists all new leads in SuperOffice CRM.
-   Get a full history of contact interactions with an online presence (through eMarketeer’s Timeline Report)

### **Integration interface**

eMarketeer connects to SuperOffice CRM using the standard NetServer services. eMarketeer currently uses version 7.5 for backward compatibility.

### **Import/export of contacts**

**Separate databases**

eMarketeer and SuperOffice CRM has separate databases and they will stay separated even if the integration is in place. No background synchronization of contacts will take place. Contacts are only created by the integration in some specific scenarios:

-   SuperOffice CRM  
    eMarketeer only creates new contacts (and companies) in SuperOffice CRM when a SuperOffice user approves it on the “eMarketeer Lead report” which is a web panel in SuperOffice CRM. Sales or a controller are normally monitoring this report for new leads to be created in SuperOffice. Note that eMarketeer generate leads from the web which is why a screening process will make sure only valid leads are imported to SuperOffice CRM.
-   eMarketeer  
    New contacts will be created in eMarketeer only when using the import feature. This is commonly done at the point of sending an email when addressing a selection or project in SO.

**Mapped contact fields**

The following contact fields are transferred when importing contacts to either system.

-   First name
-   Last name
-   Email
-   Telephone
-   Mobile
-   Title
-   Person ID

In the case of SuperOffice, companies can also be created if opted. These fields will be filled out on the company card.

-   Company name
-   Country
-   Category
-   Industry

There is no custom mapping of fields which is why the above standard fields are used. On top of these fields, automations can be used to add/remove interests from contacts.

### Automations

When the contacts interact with eMarketeer through emails, forms, apps, etc, automations can be set up to perform tasks in both eMarketeer and SuperOffice CRM. The automations are triggered by certain actions, such as link clicks, form submissions, email opens, etc.

When an automation is triggered, eMarketeer can perform the following actions in SuperOffice CRM:

-   Create a new sale
-   Create a task (pending activity)
-   Notify sales representative (completed activity)
-   Add/remove a contact from selection or project
-   Add/remove interest from contact

![](../assets/integration-features-and-flows/image-29.png)

These activities have been added to SuperOffice via automations from eMarketeer.

### Web panels

Web panels are used to show more information or extend features from eMarketeer into SuperOffice CRM. The panels can be shown or hidden based on the user group of the SuperOffice user. The following web panels are used in SuperOffice to interact with eMarketeer.

-   **The Lead Report**  
    The SuperOffice user’s favorite report! The Lead Report is “the hub” for incoming new leads. For example, if an automation is set up to create a new sale, it can only be processed if the contact already exists in the SuperOffice database. If the contact related to the sale doesn’t exist yet, it’s treated as a new lead and is listed on the Lead Report. Sales will frequently use this report to introduce new data to SuperOffice.
-   **The Timeline Report  
    **The timeline report is a web panel on the contact card in SuperOffice CRM. It shows in detail all interactions the contact made with the eMarketeer marketing content, such as emails, forms, SMSs, landing pages etc.
-   **Event details  
    **When eMarketeer creates a sale or an activity, the details panel will show you information about the event which triggered the object to be created

![](../assets/integration-features-and-flows/image-30-1024x530.png)

Learn more about your contacts and how they engaged in your marketing content.

![](../assets/integration-features-and-flows/image-31.png)

This is where all contacts that are not yet in SuperOffice are listed.

### Legal Basis (GDPR)

eMarketeer has its own system to store legal basis (contacts’ consents etc). If integrated with SuperOffice Online, the legal basis will automatically be synced between the systems. For on-premise installations of SuperOffice, we do not have a sync service, but we offer access to the eMarketeer legal basis database via API.
