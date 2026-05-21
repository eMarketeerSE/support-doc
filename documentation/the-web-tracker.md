# The Web tracker

**The eMarketeer web tracker records your visitor sources and the behavior of individual contacts on your website.**

With the tracker installed you will

-   Populate the marketing overview dashboard
-   Track identified contacts on your website
-   Integration to your website consent banner
-   Origin tracking on your contacts

👉 Are you ready to install the script on your website? [Click here for instructions.](https://support.emarketeer.com/documentation/installing-the-web-tracker-script-on-your-website/)  
👉 Also note, you get the best results [installing eMarketeer forms](https://support.emarketeer.com/documentation/publish-a-form/) on your website for conversions.

## How the tracker works

With the eMarketeer tracker script on your website you will get data on where your visitors comes from from source down to campaign level. When a contact converts (using an eMarketeer Form) you will also get historic browsing data as well as future sessions for those contacts. Also when a contact visits your site by clicking a link in an eMarketeer email, the visit is immediately identified and logged in eMarketeer.

In the end you will know which campaigns and sources drives the most conversions on your website, get retroactive web visit data from converted leads and full browsing history on your contacts.

The tracker works together with the most common cookie consent services and only tracks visitors who give consent.

**What do we track?**

When an identified contact enters your site we will store

-   Sessions and page urls
-   UTM parameters for campaign tracking
-   Referring site
-   Time on site
-   Contact identity
-   Consent for tracking

**How is a contact identified on the website?**

There are two ways to identify a contact on your website.

-   Clicking a link in an eMarketeer email.  
    If the clicked link goes to your website (where the tracker is installed) the contact will be identified.
-   Answering an embedded [eMarketeer form](https://support.emarketeer.com/documentation/publish-a-form/) on your website.  
    When the form is submitted with contact details, an identifier will be stored in the browser of the visitor.

**Retrospective tracking**

We have two important events on your website.

1.  When the visitor gives marketing consent for tracking (usually when entering the website for the first time).
2.  When the contact is identified from an email or a form submit.

When identified eMarketeer will store **all the tracking data from the time consent was given**.

**Example:**  
A visitor first enters your website anonymously from a google search and gives consent in your cookie banner.  
After a few pages they leave the site. At this point we have stored the visit in the browsers local storage and nothing is sent to eMarketeer. The visitor then returns a few times and finally answers a form on your website.  
When the form is submitted and the visitor is identified we now store **all the visit data** from when the tracking consent was given.

This means that when a form is submitted we also get the original source and webvisits which led up to the conversion. This can be used to see which of your marketing efforts leads to the most conversions.

## Web tracker technical explanation

The tracking script does **not** use cookies. Instead it uses **local storage** in the visitors browser. This makes it much easier to stay GDPR compliant. This is why.

-   Local storage is not cross domain. This means data tracked on your site can not be read on other sites. (which is what many cookie blockers and policies wants to prevent).
-   Browsers increasingly block 3rd party cookies to prevent cross domain tracking. Thus our tracker is not affected.
-   Local storage data is not sent to the server on every page request. (Cookies does this)

## GDPR and Privacy Policy recommendations

Even if the eMarketeer Web Tracker does not use cookies, the purpose of the feature is to track visitors on your website where we can identify the contact. This behaviour requires consent from the visitor to comply with GDPR.

**Cookie banner**

The consent should be handled by your cookie consent banner under the Marketing category. Before the visitor gives this consent eMarketeer will receive no information from the web tracker.

**Privacy policy updates**

Below you will find a suggestion on amendment for your privacy policy when using the eMarketeer Web Tracker.

* * *

**_Website Tracking & Analytics_**  
_We use a tracking system provided by eMarketeer to understand how visitors interact with our website and to improve our communication with customers. This section explains how this tracking works and your choices regarding it._

**_How We Track Website Visitors_**  
_If you click a link in an email we send, we may identify your visit to our website and associate it with your existing contact profile in our system._

_If you visit our website anonymously, we may temporarily store visit history (such as pages viewed, UTM parameters, and referrer information) in your browser’s local storage. This data remains anonymous unless you later submit a form._

_When you submit a form, your past visit history may be linked to your submission to help us improve our service and communication._

**_What Data Do We Store?_**  
_We do not use cookies for this tracking. Instead, we use local storage, which saves information on your device without transmitting it to external servers unless you interact with our site._

_Stored data may include page visit history, referrer information, and email identifiers (if applicable)._

**_Your Privacy Choices_**  
_Website tracking only starts after you accept our tracking consent banner._

_You can clear your tracking data at any time by removing local storage data from your browser settings._

_If you wish to opt out of email tracking, you can unsubscribe from our emails or adjust your preferences via the link in our email footer._

* * *
