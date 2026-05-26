# SMS Sender ID

The Sender ID is the name or number a contact sees when they receive your SMS. This article explains what Sender ID is, how to request your own, and where the feature has limitations.

![SMS Sender ID shown on a mobile device](<../../.gitbook/assets/Sms_sender_id (1).png>)

When you receive an SMS from another mobile phone, you see the sender's number. When you send SMS through a service like eMarketeer, the sender information can instead be a text — typically your company name.

## Request your own Sender ID

To use your company name as the sender, the Sender ID must meet these requirements:

* Between 3 and 11 characters long.
* Only `A-Z`, `a-z`, and `0-9` characters.
* Cannot start with a number or be a phone number.

Requests are processed manually. If we receive your request during office hours, it is usually ready the same day unless we need more information.

To request a Sender ID, email `support@emarketeer.com` with the Sender ID you want and the name of the account where it should be applied.

## Why Sender IDs need to be approved

Custom Sender IDs can be abused for spam and spoofing. Spoofing is when someone falsifies sender data to masquerade as another person or company.

For example, someone could set the Sender ID to another person's number to defraud or harass — luring children to a location, or sending malicious content that appears to come from a known sender.

To prevent abuse while still offering customisation, every Sender ID must be registered and authenticated before use.

## Limitations

Most Belgian, US, and Mexican mobile operators do not support alphanumeric sender information. If you send to a recipient on one of those networks, your Sender ID is replaced with a randomly generated number. The same constraint applies to some other features such as multi-part SMS and Unicode. See the [whitelist of countries supporting SMS Sender ID](https://support.emarketeer.com/documentation/sender-id/whitelist-of-countries-supporting-sms-sender-id/) for the full list.

Our SMS service provider (46elks) cannot always guarantee that the Sender ID is displayed. 46elks and their upstream supplier disable the feature on certain routes because some mobile operators filter messages, which would otherwise cause non-delivery. Delivery is prioritised over presentation.

If the recipient must know who the message is from, include your company, product, or system name in the first line of the message. Most handsets show the first few characters of an SMS before it is opened.
