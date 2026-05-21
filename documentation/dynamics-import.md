# Dynamics - Import

The eMarketeer integration allows you to easily import contacts directly from your Microsoft Dynamics 365 Sales Marketing Lists. You can do this as a standalone import to build your eMarketeer database, or you can import contacts on the fly right before sending an email campaign.

### Important Notes on the Integration Scope

-   **Supported Lists:** Currently, the integration only supports importing from **Contact** Marketing Lists in Dynamics 365 Sales. Importing from Lead Marketing Lists is planned for a future update.
    
-   **Imported Data Fields:** To keep your data clean and relevant, eMarketeer will import the following core fields from Dynamics:
    
    -   First Name
        
    -   Last Name
        
    -   Email Address
        
    -   Company Name
        
    -   Mobile Phone Number
        

### Method 1: The Standard Import

Use this method if you want to bring a Dynamics segment into eMarketeer for general database building or to group them into a specific eMarketeer list.

1.  In eMarketeer, navigate to the **Contacts** section.
    
2.  Click on **Import contacts**.
    
3.  Select **Microsoft Dynamics** as your import source.
    
4.  A search box will appear. Start typing the name of the Dynamics Marketing List you want to import.
    
5.  eMarketeer will present a dropdown of matching search results. Select the correct list.
    
6.  **Optional:** Before finalizing, you can choose whether the imported contacts should be added to a specific eMarketeer contact list.
    
7.  Click **Import** to bring the contacts into eMarketeer.
    

### Method 2: Import On the Fly (While Sending an Email)

This is the fastest method. It allows you to import a Dynamics segment and send them an email in one seamless process, minimizing the need to create standalone eMarketeer contact lists just for grouping.

1.  When you are setting up an email send-out in the eMarketeer UI, choose the option to select your recipients.
    
2.  Select the option to import from **Microsoft Dynamics**.
    
3.  Search for and select your Dynamics Marketing List, just as you would in the standard import.
    
4.  eMarketeer will import the contacts and queue the email to send to that exact segment immediately.
