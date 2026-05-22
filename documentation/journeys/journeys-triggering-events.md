# Journeys Triggering Events

Journey starting points are evaluated only when specific events happen to a contact. Knowing which events trigger evaluation helps you start a journey at the right moment.

## Events that evaluate journey starting points

When any of the events below happens for a contact, eMarketeer checks whether a journey should start for that contact.

### All engagement

- Email engagement
- Form engagement
- SMS engagement
- Landing page engagement
- Web monitor engagement
- SuperOffice engagement
- Facebook engagement
- LinkedIn engagement
- Custom signals engagement

### Contact card

- Contact card update
- Legal basis update
- Added to a contact list

### Lead Board

- Lead state change

## What this means for starting points

For a starting point to fire immediately, it must either be one of the events listed above or be paired with a criterion based on one of these events. Otherwise, the journey waits until one of these events occurs for the contact, even if the contact already matches the journey condition.

## Example: a contact-list starting point

A common misconception: if you base a starting point on a contact list, the journey will start for every contact in that list when the journey is activated.

That is not the case. Because no triggering event has occurred, the journey stays idle. It waits for any triggering event to happen for each individual contact in the list. The event does not have to be "Added to contact list" — any event that evaluates starting points works.

The result is that contacts do not start the journey at the same moment. To avoid this, populate the contact list only after the journey is activated.
