# Legacy API 1.0 docs (Deprecated)

# Web Service (REST)

 Transfer

eMarketeer REST Service uses the HTTP protocol as message carrier.  
The HTTP verbs used is POST and GET.

-   GET is used for read only operations
-   POST is used for all CRUD operations

## URI Structure

The ReST cornerstone are the URI. The URI should point to the desired recourse by using nouns. We divert slightly from the rule by occasionally adding a verb into the URI. The eMarketeer URI is compiled by four parts.

-   First part points out the service. _https://app.emarketeer.com/api/_
-   Followed by your API ID for authentication. _EXAMPLE/_
-   The third part is the function or resource. _contacts/_
-   Last comes the parameters needed to fulfil the task. _contacts\[0\]\[id\]=144784&response=json_

Don’t forget the trailing / on parameter less queries.

Example URI  
_https://app.emarketeer.com/api/AJ237S45D23F4T5/contacts/&response=json&campaign=345_

If you’ve customized your domain and want to use your new URI, you must not use HTTPS.  
_https://marketing.company.co.uk/api/EXAMPLE/campaigns/&response=xml_

## Payload

### Type

Content type for CRUD calls (POST) are application/x-www-form-urlencoded

### Encoding

Our system is primarily Unicode (UTF-8) encoded which means that all messages sent to us must be UTF-8 encoded.  
Data posted as e.g. ISO/IEC 8859-1 Latin-1 might in best cases appear strange when viewed in eMarketeer and in worst case be inaccessible due to mismatching data.

Data containing ‘&’ (ampersand) needs to be url-encoded in order to not corrupt the parameter string when posting data.

### E-mail

To prevent failed deliveries it is strongly recommended to validate E-mail addresses before they are sent to eMarketeer. In some cases the e-mail address is used to match contacts. if corrupt addresses are used duplicates may be created.

eMarketeer support simple e-Mail addresses. The characters ! # $ % \* / ? ^ \` { | } ~ are not allowed anywhere in the e-mail address.

### Phone numbers

The format of the phone number is important for the mobile phone field if you intend to send text messages (SMS). eMarketeer has the ability to send SMS/Text messages to most countries in the world, so a incorrectly formatted number might miss its intended destination.

Format numbers with international call prefix (+ or 00)  
If regional code starts with a 0, remove it or encapsulate it with parentheses _(0)_.

Format: _int. call prefix + country code + region code + phone number_  
\+ 1 (234) 235 5678 (US)  
00 46 730 898 345 (Swedish)  
\+ 47 410 08 341 (Norwegian)  
\+ 49 15221653225 (German)

Don’t forget to URL-encode the phone number. If not the international call prefix (+) will get lost.

### Standard fields

The fields that are always available in eMarketeer are in the below list. All fields are strings.

-   **firstname** – First name of contact
-   **lastname** – Last name of contact
-   **salutation** – Ex. Dr. Mr.
-   **company** – Name of company
-   **email** – Contact email (Required)
-   **title**
-   **telephone** – phone number in any format
-   **mobile** – Mobile number. Preferably with country code if SMS sendouts are done. +46 123 45 67
-   **address1** 
-   **address2**
-   **city**
-   **zip**
-   **external\_id** – Used to reference contact ID in other system. If integrated to SuperOffice, use only PersonID here.
-   **note** – field to store any longer text

### Custom fields

In eMarketeer you can create custom, user defined fields. The values are always strings.  
The field names always starts with “c\_\_”.

## GET Functions

The read only functions of the web service is easily debugged using a web browser.

### Contacts

The contacts function will list your contacts with the max 300 contacts per API Call restriction. To get the remaining contacts you’ll need to iteratively call the function with a offset parameter.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/contacts/

Maximum number of contacts returned. Default and maximum value is 300.

&max=300

Offset is an integer indicating the distance from start of the result source.

&offset=300 

Lists is the id of your list.

&list=12

The search parameter will return contacts where the first name, last name, company or e-mail matches the search string. search parameter is ignored if it’s combined with the list parameter.

&search=Simpson

You can use the contacts parameter to pinpoint a contact. Contacts parameter can’t be used together with the list or search parameters. The function is only able to get one contact at the moment. It’s only possible to match on ‘id’ and ’email’ fields at the moment.

&contacts\[0\]\[id\]=547484

&contacts\[0\]\[email\]=ned@flanders.com

### Lists

Gives you all your lists.

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

XMLResponse

 <?xml version="1.0" encoding="utf-8" ?> 
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

The components (E-Mail, SMS, Web pages & Forms) are organized in campaigns. To list the components in a campaign use the components function.

“campaign” is a mandatory parameter, “type” is a filtering parameter.

&campaign=2312

#### E-Mail

&type=mail

#### Forms

&type=form

#### Web pages

&type=www

#### SMS

&type=sms

### Counter

Shows your current API call counter status

XML response

<?xml version="1.0" encoding="utf-8" ?> 
<rest>
<counter>
<calls>83</calls> 
<limit>100000</limit> 
<since>2010-12-29 10:22:39</since> 
</counter>
</rest>

### Fields

Shows all your API accessible fields

XML example

<?xml version="1.0" encoding="utf-8" ?> 
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

## POST Functions

### Upsert Contacts

Use upsert Contacts when you want to update or insert contacts into eMarketeer. The contacts array must not include more than 30 contacts.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/upsert\_contacts/

Example of a parameters section of a HTTP POST

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

In the call above: ”Homer Simpson” will be updated if he exist and created if not. ”Apu Nahasapeemapetilon” will be updated if the post exist, if not it will fail.

Notice It is _highly recommended_ to store the returned eMarketeer ids for future upserts to make sure no contact matching issues occur.

#### Update or Insert

Flow

1.  If id is specified it will take precedent over all other values.
2.  If external\_id and email are specified …
    -   the API will try to find a contact with the external\_id and if contact email matches it will be updated, only if the external\_id is not in use by another email.
    -   otherwise a new contact will be created.
3.  If external\_id is specified …
    -   the API will try to find a contact with the external\_id and update that
    -   or if no contact is found, the API will look for a contact without external\_id based on email
    -   otherwise a new contact is created.
4.  If email but not external\_id is specified …
    -   the API will search for a contact based on email
    -   or create a new contact.
5.  If neither id, external\_id nor email is specified an error will be returned.

In all cases the API will use the first contact it finds (the contact with the lowest id) that matches the specified criteria.

#### Custom fields

There are four types of custom fields:

-   Text field
-   Checkbox
-   Radiobutton
-   Date

A custom textbox is modified like the standard fields:

&contacts\[1\]\[c\_\_degree\]=Ph.D Computer Science

A custom checkbox is modified by setting empty or 0 (zero) as “unchecked” while any other value is treated as “checked”:

&contacts\[1\]\[c\_\_vegan\]=true

A custom radiobutton is modified by the radiobutton label:

&contacts\[1\]\[c\_\_gender\]=Male

A custom date field is modified by adding a date formated as YYYY-MM-DD (ISO 8601):

&contacts\[1\]\[c\_\_renewal\_date\]=2014-05-01

### Delete Contacts

When deleting a contact or several contacts the same identifiers can be used as for upsert the only differences is that any other supplied data will be ignored and there is no particular hierarchy between the ids.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/delete\_contacts/

&response=json
&contacts\[0\]\[email\]=homer.j.simpson@emarketeer.com
&contacts\[1\]\[id\]=554784
&contacts\[2\]\[external\_id\]=AK\_34566

It is strongly recommended to not create contacts with identical e-mail address.

### Sending SMS or E-mail

The send function takes two required variables besides the contact array.

-   component type (mail|sms)
-   component id

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/enqueue/

Example: Send a prepared SMS to two known contacts

&type=sms
&id=4247
&contacts\[0\]\[id\]=255724
&contacts\[1\]\[id\]=254384
&contacts\[2\]\[email\]=homer.j.simpson@emarketeer.com
&list=2578
&send\_once=1

### Copy Component

Copy an E-mail, Webpage or SMS within a campaign.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/copy\_component/

&response=xml
&campaign=210
&id=7836
&type=sms
&name=Webinar reminder

### Update Content

It is now possible to update E-mail or web page content for most block types. Updates are made one call per property. e.g. One call for new image url, one call to update the image width and one call to update the image hyperlink. examples will be added.

You specify which block in a component you want to update with the path parameter. The path consist of all block names from root to the target delimited with dots.  
Example of path: root.main.article1.heading  
Example of path using default names: root.column2.imageright180px1.image1

The property you want to update is specified with the property parameter.

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

Remember to URL encode your data.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/update\_content/

&response=xml
&id=9822
&type=mail
&path=root.column2.imageright180px2.text1
&property=text
&text=Here goes the url encoded text that you want to add to the block

### Update Component

It is now possible to update some of the E-mail, Web page and SMS properties.

| Property list |
| --- |
| Property | Example | Email | Webpage | SMS | Note |
| Title | property=title, text=Welcome | No | Yes | No |  |
| Subject | property=subject, text=Welcome | Yes | No | No |  |
| permalink | property=permalink, text=Nicelink | No | Yes | No |  |
| message | property=message, text=Hi <% contact field=”firstname” %>Don’t forget the seminar at The Exhibition And Congress Centre tomorrow at 12:00… | No | No | Yes | URL encode data |
| Encoding | property=encoding, text=1 | No | No | Yes | 1 = UCS-4BE (Unicode)  
0 = ASCII (Plain text) |
| parts | property=parts, text=8 | No | No | Yes | 6 parts are default, |

Remember to URL encode your data.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/update\_component/

&response=xml
&id=9822
&type=mail
&property=text
&text=Here goes the url encoded text that you want to add to the block

### Create list

Organize users by adding them to lists (groups). Create a list with the create\_list function and specify a name.

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

Delete a list with the delete\_list function.

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

To add contacts use the add\_to\_list function and pass list as integer and a contacts array with the appropriate unique identifier

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/add\_to\_list/

&response=xml
&list=74
&contacts\[0\]\[id\]=23234
&contacts\[1\]\[email\]=noreply@duff.com

Truncate the list if you what to remove all contacts in the list before adding the new ones.

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

Organize users by adding removing them from lists.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/remove\_from\_list/

&response=xml
&list=74874
&contacts\[0\]\[id\]=232344
&contacts\[0\]\[id\]=626773

If you want to remove all contacts

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

Update: eMarketeer does no longer offer unsubscribe on campaign level.  
Instead we have [unsubscribe on category level.](https://support.emarketeer.com/documentation/subscriptions/) Also automations to remove contacts from lists and campaigns can be used from forms to achieve the same result.

~Contacts can be flagged as unsubscribed per campaign or globally for all emails and SMSs.~

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

Contacts data is passed to the web service as an double dimensioned array.

## Response

The REST service is not XML based as a SOAP Web Service but the default response from it is in XML format. An other response formats is the JSON format.

Note: the WADL file is not available in JSON.

### JSON

JSON is a lightweight data-interchange format that is based on the object notation of the JavaScript language. Because of it’s simple text format, JSON provides a good alternative to other data interchange formats such as our default response format XML. The response data is always UTF-8 encoded.

To get your response in JSON specify it in your call.  
Call

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

XML is the default response format of the REST Web Service.

Some characters in the XML response data will be encoded  
‘&’ (ampersand) becomes ‘&amp;’  
‘<‘ (less than) becomes ‘&lt;’  
‘>’ (greater than) becomes ‘&gt;’

Even dough the default response is XML it is good practice to specify the return format in your call. The obvious reason for that is to avoid unnecessary surprises if the default response format were to be changed in the future.

&response=xml

A typical response from a GET query is a root node named “rest”, child nodes named “status” containing a “message” element. Additional elements like “id”, “email”, “name” etc. might occur.  
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

The return message will inmost cases return status for each operation the service performs.  
Warnings and errors might also contain a hint to what caused the event.

#### Status

The status message will in most cases return the status of operation object after it has been performed. If a set of contacts has been upserted the return message will return ‘OK’ for all successful updates. If anything has been deleted it will return ‘deleted’ and so on.

#### Warning

If something went wrong but there is a chance of completing the task, a warning will be issued.

#### Error

If the task is impossible to perform, an error will occur in the message.

## Scenarios

### Scenario 1

Let’s assume that a company wants to send a confirmation/welcoming e-mail to new customers as they are entered into the company’s CRM system. We also assume that an eMarketeer e-mail already is created and that we know its ID.

Two API calls is needs to perform the task:  
1\. Upsert Contact(‘s) to eMarketeer using the upsert\_contacts function and retrieve the contact id(‘s) in the response from the server.  
2\. Address the message with the upserted contact id(‘s) by using the enqueue function.

Best practice:

-   locally store all new contacts and send the mail in one batch to minimize calls.
-   Verify e-mail addresses and mobile numbers before upsert to prevent failed deliveries.

### Scenario 2

Your company has previously created forms, e-mails and web pages and uses automation to populate lists depending on answers and link clicks. The sales department can import the lists via the API using the contacts function and add the parameter $list.

## Examples

The following examples do work but is not intended be used as is, due to lack of security (api\_key exposed) or verification of input. (valid emails, URL-encoding etc.).

### JavaScript

The following example shows how to populate a list by using AJAX from the Prototype JavaScript Framework.

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
                if (outStream != null)
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

In this[PHP](https://web.archive.org/web/20170418201645/https://www.php.net/) example the cURL object is set to get all campaigns, return them as a JSON string and last decode it into a PHP array.

#### cURL, HTTP GET Example

$api = curl\_init();
curl\_setopt($api, CURLOPT\_URL,'https://app.emarketeer.com/api/YOURAPIKEY/campaigns/response=json');
curl\_setopt($api, CURLOPT\_RETURNTRANSFER, true);

$response\_json = curl\_exec ($api);
curl\_close ($api);

$response\_array = json\_decode($response\_json, true); 

#### cURL, HTTP POST Example

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
