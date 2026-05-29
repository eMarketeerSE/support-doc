# SuperOffice Signals

SuperOffice can send certain events to eMarketeer as Signals, so you can listen for those events and act on them in eMarketeer.

Any Signal sent to eMarketeer can be used to:

* Find contacts in a contact filter, including filtering on specific values in the Signal
* Trigger Journeys when the Signal arrives
* Generate leads on the lead board
* Set Lead Score for the Signal

## Subscribe to SuperOffice events

To subscribe to SuperOffice events, open the SuperOffice integration page in eMarketeer. At the bottom of the settings page you find the events you can subscribe to.

<div data-with-frame="true" data-align="left"><img src="../../.gitbook/assets/Skarmavbild-2024-01-16-kl.-10.15.13.png" alt="SuperOffice event subscription toggles in eMarketeer"></div>

Enable the toggle switches for the events you want SuperOffice to send to eMarketeer.

If the contact email address in a received event does not exist in eMarketeer, the contact is created.

## Sale Sold

This event is sent to eMarketeer when a sale is closed as "Sold" in SuperOffice. The data sent to eMarketeer is:

* Email address (of the related contact in the sale)
* Sale ID
* Sale name
* Sale Type
* Sale value

Example use cases:

* Move a lead on the lead board to "Won" when a sale closes in SuperOffice
* Send a thank-you email to a new customer
* Set the contact status to customer

## Sale Lost

This event is sent to eMarketeer when a sale is closed as "Lost" in SuperOffice. The data sent to eMarketeer is:

* Email address (of the related contact in the sale)
* Sale ID
* Sale name
* Sale Type
* Sale value

Example use cases:

* Move the lead to "Lost" on the lead board
* Tag the contact as a lost sale for future win-back campaigns
