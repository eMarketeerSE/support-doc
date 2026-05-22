# SuperOffice Legal Basis Sync

eMarketeer and SuperOffice each maintain their own consent database. The legal basis sync keeps both in step automatically, so a change in one system is reflected in the other.

## Requirements

Consent syncing works with SuperOffice Online and on-site installations.

## Enabling legal basis sync

When you set up the SuperOffice integration, you see the option to enable legal basis sync. Check the box for legal basis before you click "Apply changes" to activate the sync.

If your integration is already running without sync, you need to disable it entirely and re-enable it to pick up the sync features. Select "None" on the SuperOffice CRM settings page in eMarketeer, click "Apply changes", then enable the integration again.

## How the sync works

When consent sync is enabled, it runs every 30 minutes and every time you send an email or SMS.

For a campaign, eMarketeer checks the legal basis for each contact in both systems at the "Checklist" stage. The system with the most recent change wins, and the other system is updated to match.

The sync covers both the "Store and process" and "Marketing sendouts" purposes.

## Disabling the sync

To disable the sync, disable the integration. Select "None" in the SuperOffice CRM settings, uncheck "Legal basis sync", and click "Apply changes".

## FAQ

**With sync activated, will eMarketeer and SuperOffice CRM always be 100% in sync?**

No. eMarketeer syncs consent data every 30 minutes, and on the contacts you send emails or SMS to at the point of sending.

**What happens to duplicate email addresses in eMarketeer vs SuperOffice?**

If duplicate email addresses in SuperOffice have different legal basis values, the oldest contact is used for syncing.

**When will scheduled emails be synced?**

If you schedule a send-out for the future, a new consent sync runs at the point of sending.
