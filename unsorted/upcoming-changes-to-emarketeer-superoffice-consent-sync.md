# Upcoming changes to eMarketeer/SuperOffice Consent Sync – eMarketeer Support

The consent sync service in eMarketeer ensures that the legal basis for marketing sendounts in eMarketeer and SuperOffice are the same. The main benefit is that you do not accidentally send out emails to contacts that have unsubscribed using SuperOffice but the email is sent out from eMarketeer.

In mid November this service will launch in a new version that works a little different than today. These are the main changes.

-   **Syncs only on send outs from eMarketeer with improved accuracy.  
    **The current (version 1) consent sync tries to keep all contacts synced in real time which has a few problems. Due to technical limitations it does not sync in 100% of the cases. Ex. when bulk updating contacts in SuperOffice. This means some changes can be missed.  
    The new version 2, will not rely on the same technical solution and instead only sync the contacts that are in send outs. Prior to sending your emails in eMarketeer, we will sync the entire send list and use the very latest status between the two systems.  
    This means contacts will not be in real time sync all the time. Yet it will give you 100% accurate status on the emails that are sent.  
    It is also removing many of the more complex sync scenarios that can cause mismatch in version 1.
-   **Consent sync for SuperOffice onPremise!**  
    Version 2 will make consent sync available also for customers using SuperOffice on their own servers.

The logic of the sync is simple and easy to understand in version 2.

-   At the point of sending we check the latest legal basis for marketing send out on all contacts in the list, in both systems.
-   Which ever system that has the latest legal basis is written to the other system.

Should you have any question, please contact [support@emarketeer.com](mailto:support@emarketeer.com)
