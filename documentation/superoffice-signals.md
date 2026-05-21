# SuperOffice Signals

When certain events occur in SuperOffice, these can be sent as Signals to eMarketeer. This means you in eMarketeer can listen for these events and act on them.

Any Signal that is sent to eMarketeer can be used to

-   Use contact filter to find contacts that has the signal and even on specific values in the Signal
-   Trigger Journeys when the Signal arrives
-   Generate leads on the lead board
-   Set Lead Score for the Signal

### Subscribe to SuperOffice events

To enable subscription on SuperOffice events you navigate to the SuperOffice integration page in eMarketeer.

At the bottom of the settings page you will find the events you can subscribe to.

![](../assets/superoffice-signals/Skarmavbild-2024-01-16-kl.-10.15.13.png)

Enable the toggle switches for those events you want SuperOffice to send to eMarketeer.

**Creation of contacts:** Please note that if the contact (email address) if the received event does not exist in eMarketeer, it will be created.

Find the details of the different events below.

### Sale Sold

This event is sent to eMarketeer when a sale is closed as “Sold” in SuperOffice.  
The data that is sent to eMarketeer is:

-   email address (of the related contact in the sale)
-   Sale ID
-   Sale name
-   Sale Type
-   Sale value

Example use cases for Signal

-   Move lead on lead board to “Won” when sale closes in SuperOffice
-   Send thank you email to new customer
-   Set contact to customer status

### Sale Lost

This event is sent to eMarketeer when a sale is closed as “Lost” in SuperOffice.  
The data that is sent to eMarketeer is:

-   email address (of the related contact in the sale)
-   Sale ID
-   Sale name
-   Sale Type
-   Sale value

Example use cases for Signal

-   Move lead to “Lost” on the lead board
-   Tag contact as lost sale for future win-back campaigns
