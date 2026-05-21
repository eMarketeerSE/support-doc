# SuperOffice Legal Basis Sync

eMarketeer and SuperOffice are two separate systems which means that each one of them have their own separate database for consent. To make this consent management easier for you, eMarketeer keeps those consent databases in sync automatically. So in other words, if the consent of a contact changes in eMarketeer, the consent is also updated in SuperOffice and vice versa.

### **Requirements:**

Consent syncing works with SuperOffice online and onSite.

### Enabling legal basis sync

When integrating to SuperOffice you will see the option to enable Legal Basis sync. Check the checkbox for legal basis before you click “Apply changes” and the sync will be activated.

**Already have integration running without sync?** You will need to entirely disable the integration and re-enable it to get the sync features.  
To do this, select “None” on the SuperOffice CRM settings page in eMarketeer and click “Apply changes”. Then Enable it again.

### How does the sync work?

When the Consent Sync is enabled it will engage **every 30 minutes and every time you send an email or SMS**.  
If you address a list of recipients (from any source), on the “Checklist” page eMarketeer will look at the legal basis for all contacts in both eMarketeer and SuperOffice. The system with the latest change on legal basis will be used and updated in the other system.

The sync is made on both “Store and process” and “Marketing sendouts” purposes.

### Disabling the sync.

To disable the sync, you need to disable the integration. Select “None” in the SuperOffice CRM settings, uncheck the “Legal basis sync” and click “Apply changes”.

### FAQ

**With sync activated, will eMarketeer and SuperOffice CRM always be 100% in sync?  
**No, eMarketeer only sync consent data every 30 minutes and on those contacts you send emails or SMS to, at the point of sending.

**What happens to duplicate email addresses in eMarketeer vs SuperOffice?  
**If there are duplicate email addresses in SuperOffice, having different legal basis, the oldest contact will be used for syncing.

**When will scheduled emails be synced?  
**If you schedule a send out for the future, a new consent sync will be made at the point of sending.
