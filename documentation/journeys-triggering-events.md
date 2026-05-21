# Journeys Triggering Events

## Triggering events for Journeys

To set a good starting point it is important to understand exactly when a Journey starting point criteria is evaluated as this is key to start the Journey at the right time. For now criteria are evaluated only when specific events happen (triggering events). Below follows a list of events that will evaluate journey starting points:

### All engagement

-   Email engagement
-   Form engagement
-   SMS engagement
-   Landing page engagement
-   Web monitor engagement
-   SuperOffice engagement
-   Facebook engagement
-   LinkedIn engagement
-   Custom signals engagement

### Contact card

-   Contact card update
-   Legal basis update
-   Added to a contact list

### Leadboard

-   Lead state change

Anytime any of the above events occur for a specific contact, eMarketeer will check if a Journey should start. This does mean that for a starting point to be effective it needs to either be of the type listed or be paired with a criteria that is based on any of these events, else it will not trigger immediately but will instead need to wait for a triggering event even though it matches the Journey condition.

Example: A common misconception is that if you make a Journey starting point based on a Contact List, the journey will trigger and start the Journey for all contacts in this contact list when the Journey is activated. However, since no triggering event has occurred the Journey will not start. Instead it will be idle until any of the triggering events happen for each individual contact in the list. Do note that the event does not necessarily need to be related to the “Added to contact list” event, but can be any event that evaluates if a Journey should start. This will lead to contacts not starting the Journey at the same moment. To avoid this, make sure to populate the contact list only after the Journey has been activated.
