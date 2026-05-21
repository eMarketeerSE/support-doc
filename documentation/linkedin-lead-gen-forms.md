# LinkedIn Lead Gen Forms

**When advertizing on LinkedIn you have the option to add a Call to Action to your ads. This is a great way to collect registrations, leads, sign ups and more directly from LinkedIn.**

[Read more about Lead Gen Forms on Linked in here](https://business.linkedin.com/marketing-solutions/native-advertising/lead-gen-ads).

By default LinkedIn offers you to download the submitted leads as a CSV-file which you need to manually process.

With the eMarketeer LinkedIn connector however, you can automatically send all Lead Gen Form submissions directly to eMarketeer to

-   Create and update contacts
-   Set Lead Score
-   Trigger Journeys
-   Send leads to Sales

### Get started with LinkedIn Lead Gen Forms

**Connect eMarketeer to LinkedIn**

As an admin in eMarketeer, click “Settings”, “Plugins and integrations” and “Linked In”.  
Click “Connect to LinkedIn” to initiate the connection.

_Note:_ You will connect with your personal LinkedIn profile which will give eMarketeer access to the Ad Accounts that your profile has access to. Make sure to connect to LinkedIn with a profile that has access to the Ad Accounts that you want to receive Lead Gen Form submissions from.

Once connected you will see the list of Ad Accounts available to receive leads from.

![](../assets/linkedin-lead-gen-forms/Skarmavbild-2023-08-04-kl.-10.39.12.png)

Check the Ad Accounts you want to receive leads from.  
By checking an Ad Account it will automatically send incoming leads from any Lead Gen Form submitted on that Ad Account to eMarketeer.

**What is sent to eMarketeer when a LinkedIn Lead Gen Form is submitted?**

When creating a Lead Gen form on LinkedIn you decide up to 12 profile data fields that can be sent with the lead. Additionally you can create custom questions in the lead form that you want the visitor to answer such as checkboxes, droplists and text fields.

All the data that is submitted in the LinkedIn form will be sent to eMarketeer to be viewed in the timeline event.

**New contacts created from LinkedIn**

When eMarketeer receives the lead from LinkedIn we will match the contact on email address. If the same email already exist, it will be updated with the new information. Otherwise a new contact will be created.  
_Note_: Make sure not to reach your accounts contact limit. If reached no new contacts can be created.

These are the fields we use from LinkedIn (if submitted) to create or update contacts in eMarketeer.

-   Email
-   FirstName
-   LastName
-   Phone
-   City
-   ZipCode
-   Country
-   State
-   Title
-   Company

Any other submitted information will be shown on the timeline event on the contact card.

**How to test a lead form on LinkedIn**

Forms on LinkedIn can only be used in a paid and published ad but there is a way to test leads before you publish.  
First create the form and the ad in LinkedIn. Then click “Preview” on the ad you created.  
In the preview you can test the Lead Gen Form, and if you submit it the test lead will be sent to eMarketeer. This way you can prepare and test scores, Journeys and lead qualification eMarketeer before launching the ad on LinkedIn.  
[You can read more about testing leads on LinkedIn here.](https://www.linkedin.com/help/lms/answer/a420737)

**Processing the incoming leads**

Once the leads are sent to eMarketeer you will be able to access them using the Contact Filter as Engagement.

![](../assets/linkedin-lead-gen-forms/Skarmavbild-2023-08-04-kl.-11.52.17-300x233.png)

Using this filter you can retrieve all contacts who

-   Submitted any LinkedIn Lead Gen Form
-   A specific Lead Gen Form
-   or answered the form in a specific way

Since this engagement is part of the Contact Filter, you will be able to use the same selections in

-   Contact Lead Score
-   Journeys as a starting point or as an if/else condition
-   Qualifying leads for the Lead Board.
