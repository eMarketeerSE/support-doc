---
description: >-
  A reference listing the contact events that cause eMarketeer to evaluate
  whether a journey's starting point is matched.
---

# Journey triggering events

A journey's starting point is not evaluated continuously. It is only evaluated when a specific event occurs for a contact. This page lists every event that triggers evaluation.

## Triggering events

When any of the events below occurs for a contact, eMarketeer checks whether that contact matches a journey's starting point and should enter the journey.

### Engagement

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

## How evaluation works

eMarketeer evaluates starting points only when a triggering event fires — not on a schedule, and not when a journey is first activated. A contact that already matches the starting point condition when you activate the journey will not enter it until a triggering event occurs for them.

## Example: contact list starting point

If your starting point filters on a contact list, contacts already in that list when you activate the journey will not enter immediately. eMarketeer waits for a triggering event to fire for each contact individually. It does not have to be "Added to contact list" — any of the events listed above will do.

To get contacts into the journey as soon as possible, populate the list after you activate the journey rather than before.
