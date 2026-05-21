# Upcoming changes to eMarketeer/SuperOffice Consent Sync

A new version of the consent sync between eMarketeer and SuperOffice launches in mid-November and works differently than the current one.

The consent sync ensures that the legal basis for marketing sendouts in eMarketeer and SuperOffice stays aligned. The main benefit is that you do not accidentally send to contacts who have unsubscribed in SuperOffice when the email is sent from eMarketeer.

## What changes in version 2

### Sync runs at sendout, with improved accuracy

The current consent sync (version 1) tries to keep all contacts synced in real time. Due to technical limitations, it does not sync in 100% of cases — for example, when you bulk-update contacts in SuperOffice. Some changes can be missed.

Version 2 does not rely on the same technical solution. It only syncs the contacts that are in your sendouts. Before sending in eMarketeer, the entire send list is synced and the most recent status between the two systems is used.

Contacts will not be in real-time sync at all times. The sync gives you 100% accurate status on the emails that are sent, and it removes many of the more complex sync scenarios that caused mismatches in version 1.

### Consent sync for SuperOffice onPremise

Version 2 also makes consent sync available for customers using SuperOffice on their own servers.

## How the sync works in version 2

The logic is simple:

- At the point of sending, we check the latest legal basis for marketing sendouts on all contacts in the list, in both systems.
- Whichever system has the latest legal basis is written to the other system.

## Questions

For questions, contact [support@emarketeer.com](mailto:support@emarketeer.com).
