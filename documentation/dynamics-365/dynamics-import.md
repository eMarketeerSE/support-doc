# Dynamics - Import

Import contacts directly from your Microsoft Dynamics 365 Sales Marketing Lists. You can do this as a standalone import to build your eMarketeer database, or on the fly right before sending a campaign.

## Integration scope

- **Supported lists:** the integration currently supports importing from Contact Marketing Lists in Dynamics 365 Sales. Importing from Lead Marketing Lists is planned for a future update.
- **Imported fields:** eMarketeer imports the following core fields from Dynamics:
  - First Name
  - Last Name
  - Email Address
  - Company Name
  - Mobile Phone Number

## Method 1: standard import

Use this method to bring a Dynamics segment into eMarketeer for general database building or to group contacts into a specific eMarketeer list.

1. In eMarketeer, go to the **Contacts** section.
2. Click **Import contacts**.
3. Select **Microsoft Dynamics** as the import source.
4. In the search box, start typing the name of the Dynamics Marketing List you want to import.
5. Select the correct list from the dropdown of matching results.
6. Optional: choose whether the imported contacts should be added to a specific eMarketeer contact list.
7. Click **Import** to bring the contacts into eMarketeer.

## Method 2: import on the fly while sending an email

This is the fastest method. It lets you import a Dynamics segment and send a campaign in one step, without creating a standalone eMarketeer contact list.

1. When setting up a send-out in the eMarketeer UI, choose the option to select recipients.
2. Select the option to import from **Microsoft Dynamics**.
3. Search for and select your Dynamics Marketing List, as you would in the standard import.
4. eMarketeer imports the contacts and queues the campaign to send to that segment immediately.
