# Legacy API 1.0 docs (Deprecated)

Reference for the legacy eMarketeer REST API. New integrations should use the current API; this page is kept for existing implementations.

The legacy REST service uses HTTP as the message carrier. GET is used for read-only operations; POST is used for all CRUD operations.

## URI structure

The URI points to the desired resource using nouns. The eMarketeer URI is built from four parts:

- The service: _https://app.emarketeer.com/api/_
- Your API ID for authentication: _EXAMPLE/_
- The function or resource: _contacts/_
- The parameters needed to fulfil the task: _contacts\[0\]\[id\]=144784&response=json_

Do not forget the trailing `/` on parameterless queries.

Example URI:
_https://app.emarketeer.com/api/AJ237S45D23F4T5/contacts/&response=json&campaign=345_

If you have customized your domain and want to use your new URI, you must not use HTTPS.
_https://marketing.company.co.uk/api/EXAMPLE/campaigns/&response=xml_

> TODO: verify — the requirement to not use HTTPS on customized domains looks unusual and may be outdated.

## Payload

### Type

Content type for CRUD calls (POST) is `application/x-www-form-urlencoded`.

### Encoding

The system is Unicode (UTF-8) encoded, so all messages sent to eMarketeer must be UTF-8 encoded. Data posted as e.g. ISO/IEC 8859-1 Latin-1 may appear strange in eMarketeer at best, and may be inaccessible at worst due to mismatched data.

Data containing `&` (ampersand) must be URL-encoded to avoid corrupting the parameter string when posting data.

### Email

To prevent failed deliveries, validate email addresses before sending them to eMarketeer. In some cases the email address is used to match contacts. If corrupt addresses are used, duplicates may be created.

eMarketeer supports simple email addresses. The characters `! # $ % * / ? ^ \` { | } ~` are not allowed anywhere in the email address.

### Phone numbers

The format of the phone number is important for the mobile phone field if you intend to send text messages (SMS). eMarketeer can send SMS/Text messages to most countries in the world, so an incorrectly formatted number may miss its intended destination.

Format numbers with international call prefix (`+` or `00`). If the regional code starts with `0`, remove it or wrap it in parentheses _(0)_.

Format: _int. call prefix + country code + region code + phone number_
\+ 1 (234) 235 5678 (US)
00 46 730 898 345 (Swedish)
\+ 47 410 08 341 (Norwegian)
\+ 49 15221653225 (German)

URL-encode the phone number. Without that, the international call prefix (`+`) will be lost.

### Standard fields

The fields that are always available in eMarketeer are listed below. All fields are strings.

- **firstname** – First name of contact
- **lastname** – Last name of contact
- **salutation** – Ex. Dr. Mr.
- **company** – Name of company
- **email** – Contact email (Required)
- **title**
- **telephone** – phone number in any format
- **mobile** – Mobile number. Preferably with country code if SMS sendouts are done. +46 123 45 67
- **address1**
- **address2**
- **city**
- **zip**
- **external\_id** – Used to reference contact ID in another system. If integrated to SuperOffice, use only PersonID here.
- **note** – field to store any longer text

### Custom fields

In eMarketeer you can create custom, user-defined fields. The values are always strings. Custom field names always start with `c__`.

## GET functions

The read-only functions of the web service are easily debugged using a web browser.

### Contacts

The contacts function lists your contacts with a maximum of 300 contacts per API call. To get the remaining contacts, call the function iteratively with an offset parameter.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/contacts/

Maximum number of contacts returned. Default and maximum value is 300.

&max=300

Offset is an integer indicating the distance from the start of the result set.

&offset=300

List is the id of your list.

&list=12

The search parameter returns contacts where the first name, last name, company, or email matches the search string. The search parameter is ignored if combined with the list parameter.

&search=Simpson

Use the contacts parameter to pinpoint a contact. The contacts parameter cannot be used together with the list or search parameters. The function returns only one contact at a time, and only `id` and `email` fields can be matched on.

&contacts\[0\]\[id\]=547484

&contacts\[0\]\[email\]=ned@flanders.com

### Lists

Returns all your lists.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/lists/response=json

JSON Response

{"rest":
{"lists":\[
{"id":"176","name":"Spring campaign leads"},
{"id":"182","name":"New customers"},
{"id":"214","name":"Staff"},...
...

### Campaigns

Lists all your campaigns.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/campaigns/response=xml

XML Response

 <?xml version="1.0" encoding="utf-8" ?>
 <rest>
 <campaigns>
 <campaign>
  <id>1764</id>
  <name>Corporate Newsletter</name>
  <created>2011-05-21 08:52:42</created>
  <creator>Montgomery Burns</creator>
  </campaign>
  <campaign>
  <id>1241</id>
  <name>Kaizen</name>
  <created>2011-02-19 16:01:34</created>
  <creator>Homer Simpson</creator>
...

### Components

The components (Email, SMS, Web pages, and Forms) are organized in campaigns. To list the components in a campaign, use the components function.

`campaign` is a mandatory parameter; `type` is a filtering parameter.

&campaign=2312

#### Email

&type=mail

#### Forms

&type=form

#### Web pages

&type=www

#### SMS

&type=sms

### Counter

Shows your current API call counter status.

XML response

<?xml version="1.0" encoding="utf-8" ?>
<rest>
<counter>
<calls>83</calls>
<limit>100000</limit>
<since>2010-12-29 10:22:39</since>
</counter>
</rest>

### Fields

Shows all your API-accessible fields.

XML example

<?xml version="1.0" encoding="utf-8" ?>
<rest>
 <fields>
  <field>
   <name>title</name>
   <label>Title</label>
  </field>
  <field>
   <name>email</name>
   <label>E-mail Address</label>
  </field>
  <field>
...
  <field>
   <name>c\_\_is\_vegetarian</name>
   <label>Vegetarian</label>
  </field>
  <field>
   <name>c\_\_plays\_golf</name>
   <label>Golf player</label>
  </field>
 </fields>
</rest>

## POST functions

### Upsert contacts

Use upsert contacts when you want to update or insert contacts into eMarketeer. The contacts array must not include more than 30 contacts.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/upsert\_contacts/

Example of a parameters section of an HTTP POST:

&response=json
&contacts\[0\]\[email\]=homer.j.simpson@emarketeer.com
&contacts\[0\]\[firstname\]=Homer
&contacts\[0\]\[lastname\]=Simpson
&contacts\[0\]\[company\]=Burs Energy Inc.
&contacts\[0\]\[c\_\_miniature\_golf\_score\]=58
&contacts\[0\]\[mobile\]=+1 646 8435
&contacts\[0\]\[address1\]=742 Evergreen Terrace
&contacts\[0\]\[city\]=Springfield
&contacts\[1\]\[id\]=554784
&contacts\[1\]\[email\]=nahasapeemapetilon\_12548@hotmail.com
&contacts\[1\]\[firstname\]=Apu
&contacts\[1\]\[lastname\]=Nahasapeemapetilon
&contacts\[1\]\[company\]=Kwik-E-Mart
&contacts\[1\]\[c\_\_degree\]=Ph.D Computer Science
&contacts\[1\]\[telephone\]=+1 344 2144
&contacts\[1\]\[city\]=Springfield

In the call above, "Homer Simpson" is updated if he exists and created if not. "Apu Nahasapeemapetilon" is updated if the record exists; if not, it fails.

Store the returned eMarketeer ids for future upserts to avoid contact-matching issues.

#### Update or insert

Flow:

1. If `id` is specified it takes precedence over all other values.
2. If `external_id` and `email` are specified:
   - The API tries to find a contact with the `external_id`. If the contact's email matches, it is updated, but only if the `external_id` is not in use by another email.
   - Otherwise a new contact is created.
3. If `external_id` is specified:
   - The API tries to find a contact with the `external_id` and update it.
   - If no contact is found, the API looks for a contact without an `external_id` based on email.
   - Otherwise a new contact is created.
4. If `email` but not `external_id` is specified:
   - The API searches for a contact based on email.
   - Or it creates a new contact.
5. If neither `id`, `external_id`, nor `email` is specified, an error is returned.

In all cases the API uses the first contact it finds (the contact with the lowest id) that matches the specified criteria.

#### Custom fields

There are four types of custom fields:

- Text field
- Checkbox
- Radio button
- Date

A custom textbox is modified like the standard fields:

&contacts\[1\]\[c\_\_degree\]=Ph.D Computer Science

A custom checkbox is modified by setting empty or `0` as "unchecked" while any other value is treated as "checked":

&contacts\[1\]\[c\_\_vegan\]=true

A custom radio button is modified by the radio button label:

&contacts\[1\]\[c\_\_gender\]=Male

A custom date field is modified by adding a date formatted as YYYY-MM-DD (ISO 8601):

&contacts\[1\]\[c\_\_renewal\_date\]=2014-05-01

### Delete contacts

When deleting one or more contacts, the same identifiers can be used as for upsert. The differences are that any other supplied data is ignored and there is no particular hierarchy between the ids.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/delete\_contacts/

&response=json
&contacts\[0\]\[email\]=homer.j.simpson@emarketeer.com
&contacts\[1\]\[id\]=554784
&contacts\[2\]\[external\_id\]=AK\_34566

Avoid creating contacts with identical email addresses.

### Sending SMS or email

The send function takes two required variables besides the contact array:

- Component type (`mail` | `sms`)
- Component id

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/enqueue/

Example — send a prepared SMS to two known contacts:

&type=sms
&id=4247
&contacts\[0\]\[id\]=255724
&contacts\[1\]\[id\]=254384
&contacts\[2\]\[email\]=homer.j.simpson@emarketeer.com
&list=2578
&send\_once=1

### Copy component

Copy an Email, Webpage, or SMS within a campaign.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/copy\_component/

&response=xml
&campaign=210
&id=7836
&type=sms
&name=Webinar reminder

### Update content

You can update Email or web page content for most block types. Updates are made one call per property — for example, one call for a new image URL, one call to update the image width, and one call to update the image hyperlink.

Specify which block in a component you want to update with the `path` parameter. The path consists of all block names from root to the target, delimited with dots.
Example path: `root.main.article1.heading`
Example path using default names: `root.column2.imageright180px1.image1`

The property you want to update is specified with the `property` parameter.

| Property list |
| --- |
| Block | Property | mail | webpage |
| Image | url | Yes | Yes |
| clickurl | Yes | Yes |
| width | Yes | Yes |
| height | Yes | Yes |
| Container | html | Yes | Yes |
| indexname | Yes | Yes |
| Link | url | Yes | Yes |
| caption | Yes | Yes |
| Text | text | Yes | Yes |
| Barcode | code | Yes | Yes |

Remember to URL-encode your data.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/update\_content/

&response=xml
&id=9822
&type=mail
&path=root.column2.imageright180px2.text1
&property=text
&text=Here goes the url encoded text that you want to add to the block

### Update component

You can update some of the Email, Web page, and SMS properties.

| Property list |
| --- |
| Property | Example | Email | Webpage | SMS | Note |
| Title | property=title, text=Welcome | No | Yes | No |  |
| Subject | property=subject, text=Welcome | Yes | No | No |  |
| permalink | property=permalink, text=Nicelink | No | Yes | No |  |
| message | property=message, text=Hi <% contact field="firstname" %>Don't forget the seminar at The Exhibition And Congress Centre tomorrow at 12:00… | No | No | Yes | URL encode data |
| Encoding | property=encoding, text=1 | No | No | Yes | 1 = UCS-4BE (Unicode), 0 = ASCII (Plain text) |
| parts | property=parts, text=8 | No | No | Yes | 6 parts are default |

Remember to URL-encode your data.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/update\_component/

&response=xml
&id=9822
&type=mail
&property=text
&text=Here goes the url encoded text that you want to add to the block

### Create list

Organize contacts by adding them to lists (groups). Create a list with the `create_list` function and specify a name.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/create\_list/

&response=xml
&name=Summer Expo 2010

Response:

<?xml version="1.0" encoding="utf-8"?>
<rest>
	<status>
		<id>588</id>
		<name>Summer Expo 2010</name>
		<message>Created list successfully</message>
	</status>
</rest>

### Delete list

Delete a list with the `delete_list` function.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/delete\_list/

&response=xml
&list=588

Response:

<?xml version="1.0" encoding="utf-8"?>
<rest>
	<status>
		<message>Deleted list 'Summer Expo 2010' successfully</message>
	</status>
</rest>

### Add contacts to list

To add contacts, use the `add_to_list` function and pass `list` as an integer and a `contacts` array with the appropriate unique identifier.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/add\_to\_list/

&response=xml
&list=74
&contacts\[0\]\[id\]=23234
&contacts\[1\]\[email\]=noreply@duff.com

Truncate the list if you want to remove all contacts in the list before adding the new ones.

&truncate=1

Response:

<?xml version="1.0" encoding="utf-8"?>
<rest>
	<status>
		<id>23234</id>
		<message>Added Homer Simpson to list 'Duff'</message>
	</status>
	<status>
		<id>6679</id>
		<message>contact not found</message>
	</status>
</rest>

### Remove contacts from list

Remove contacts from a list.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/remove\_from\_list/

&response=xml
&list=74874
&contacts\[0\]\[id\]=232344
&contacts\[0\]\[id\]=626773

To remove all contacts:

&response=xml
&list=74874
&truncate=1

Response:

<?xml version="1.0" encoding="utf-8"?>
<rest>
	<status>
		<list>23234</list>
		<message>Removed Homer Simpson from list 'Duff'</message>
	</status>
</rest>

### Unsubscribe contacts from campaign

eMarketeer no longer offers unsubscribe on the campaign level. Use [unsubscribe on category level](https://support.emarketeer.com/documentation/subscriptions/) instead. Automations to remove contacts from lists and campaigns can also be used from forms to achieve the same result.

~Contacts can be flagged as unsubscribed per campaign or globally for all emails and SMSs.~

~If campaign is given, unsubscription will be made on campaign level.~

~If campaign is set to -1 the unsubscription will be made on global level.~

~https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/unsubscribe/~

~&campaign=1708
&contacts\[0\]\[id\]=394548~

~Response:~

~<?xml version="1.0" encoding="utf-8"?>
<rest>
	<status>
		<campaign>394548</campaign>
		<message>Homer Simpson unsubscribed from campaign 1708</message>
	</status>
</rest>~

## Parameters

Contacts data is passed to the web service as a two-dimensional array.

## Response

The REST service is not XML-based the way a SOAP web service is, but the default response is in XML format. JSON is also available.

Note: the WADL file is not available in JSON.

### JSON

JSON is a lightweight data-interchange format based on the object notation of the JavaScript language. Because of its simple text format, JSON is a good alternative to the default XML response. Response data is always UTF-8 encoded.

To get your response in JSON, specify it in your call.

Call:

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/delete\_contacts/response=json

&response=json
&contacts\[0\]\[id\]=3948
&contacts\[1\]\[id\]=3949
&contacts\[2\]\[email\]=address@emarketeer.com
&contacts\[3\]\[firstname\]=Homer

Response:

{"rest":\[
{"id":"3948","message":"deleted"},
{"id":"3949","message":"not found"},
{"email":"address@emarketeer.com","message":"deleted"},
{"error":"No Unique identifier!"}\]}

Note: the WADL document is not available in JSON.

### XML

XML is the default response format of the REST web service.

Some characters in the XML response are encoded:
`&` (ampersand) becomes `&amp;`
`<` (less than) becomes `&lt;`
`>` (greater than) becomes `&gt;`

Even though the default response is XML, it is good practice to specify the return format in your call. The reason is to avoid surprises if the default response format changes in the future.

&response=xml

A typical response from a GET query is a root node named `rest`, with child nodes named `status` containing a `message` element. Additional elements like `id`, `email`, `name`, and others may occur.

Call:

delete\_contacts
&response=xml
&contacts\[0\]\[id\]=5040
&contacts\[1\]\[id\]=4040
&contacts\[2\]\[email\]=address@emarketeer.com
&contacts\[3\]\[firstname\]=Homer

Response:

<?xml version="1.0" encoding="utf-8"?>
<rest>
	<status>
		<id>5040</id>
		<message>deleted</message>
	</status>
	<status>
		<id>4040</id>
		<message>not found</message>
	</status>
	<status>
		<email>address@emarketeer.com</email>
		<message>not found</message>
	</status>
	<status>
		<error>No Unique identifier!</error>
	</status>
</rest>

### Messages

The return message in most cases returns the status of each operation the service performs. Warnings and errors may also contain a hint to what caused the event.

#### Status

The status message in most cases returns the status of the operation's object after it has been performed. If a set of contacts has been upserted, the return message returns `OK` for all successful updates. If anything has been deleted it returns `deleted`, and so on.

#### Warning

If something went wrong but there is a chance of completing the task, a warning is issued.

#### Error

If the task is impossible to perform, an error appears in the message.

## Scenarios

### Scenario 1

A company wants to send a confirmation/welcoming email to new customers as they are entered into its CRM system. Assume an eMarketeer email already exists and its ID is known.

Two API calls are needed:

1. Upsert contact(s) to eMarketeer using the `upsert_contacts` function and retrieve the contact id(s) in the response.
2. Address the message with the upserted contact id(s) by using the `enqueue` function.

Best practice:

- Locally store all new contacts and send the email in one batch to minimize calls.
- Verify email addresses and mobile numbers before upsert to prevent failed deliveries.

### Scenario 2

Your company has previously created forms, emails, and web pages and uses automation to populate lists depending on answers and link clicks. The sales department can import the lists via the API using the `contacts` function and the `$list` parameter.

## Examples

The following examples work but are not intended to be used as-is, due to lack of security (API key exposed) and lack of input verification (valid emails, URL-encoding, and so on).

### JavaScript

The following example shows how to populate a list using AJAX from the Prototype JavaScript Framework.

<script>
populate\_list = function() {

	new Ajax.Request('https://emarketeer.com/api/YOURAPIKEY/campaigns/response=json',{
	method:'get',
	onSuccess: function(transport) {

		var html = '';
		var api = transport.responseText.evalJSON();

		for ( var i in api.rest.campaigns ) {
			html += '<option value="' + i + '">' +
				api.rest.campaigns\[i\].name + '</option>';
		}
		$('lists').update(html);
	},
	onFailure: function(){ alert('Something went wrong...') }
	});
}
</script>

### C# .Net

This method posts the parameters to the URI via HTTP and returns the response as a string.

        public string HttpPost(string uri, string parameters)
        {

            WebRequest theRequest = WebRequest.Create(uri);
            theRequest.ContentType = "application/x-www-form-urlencoded";

            theRequest.Method = "POST";
            byte\[\] byteArray = Encoding.UTF8.GetBytes(parameters);
            Stream outStream = null;

            try
            {
                theRequest.ContentLength = byteArray.Length;
                outStream = theRequest.GetRequestStream();
                outStream.Write(byteArray, 0, byteArray.Length);
            }
            catch (WebException ex)
            {
                MessageBox.Show(ex.Message, "HttpPost: Request error",
                   MessageBoxButtons.OK, MessageBoxIcon.Error);
                return "";
            }
            finally
            {
                if (outStream != null)
                    outStream.Close();
            }

            try
            {
                WebResponse theResponse = theRequest.GetResponse();
                if (theResponse == null)
                { return "\\n\[No response object\]"; }
                StreamReader inStream = new StreamReader(theResponse.GetResponseStream());
                return inStream.ReadToEnd().Trim();
            }
            catch (WebException ex)
            {
                MessageBox.Show(ex.Message, "HttpPost: Response error",
                   MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
            return "\[No response\]";
        }

### PHP

In this [PHP](https://web.archive.org/web/20170418201645/https://www.php.net/) example the cURL object is set to get all campaigns, return them as a JSON string, and decode it into a PHP array.

#### cURL, HTTP GET example

$api = curl\_init();
curl\_setopt($api, CURLOPT\_URL,'https://app.emarketeer.com/api/YOURAPIKEY/campaigns/response=json');
curl\_setopt($api, CURLOPT\_RETURNTRANSFER, true);

$response\_json = curl\_exec ($api);
curl\_close ($api);

$response\_array = json\_decode($response\_json, true);

#### cURL, HTTP POST example

$parameters = '&response=json&contacts\[0\]\[email\]=homer.j.simpson@emarketeer.com
		&contacts\[0\]\[firstname\]=Homer&contacts\[0\]\[lastname\]=Simpson
		&contacts\[0\]\[company\]=Burs Energy Inc.';
$api = curl\_init();

curl\_setopt($api, CURLOPT\_URL,'https://app.emarketeer.com/api/YOURAPIKEY/upsert\_contacts/');
curl\_setopt($api, CURLOPT\_RETURNTRANSFER, true);
curl\_setopt($api, CURLOPT\_POST, true);
curl\_setopt($api, CURLOPT\_POSTFIELDS, $parameters );

$response\_json = curl\_exec ($api);
curl\_close ($api);

$response\_array = json\_decode($response\_json, true);
