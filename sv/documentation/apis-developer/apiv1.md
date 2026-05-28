# Legacy API 1.0-dokumentation (Föråldrad)

Referens för det äldre eMarketeer REST API. Nya integrationer bör använda det aktuella API:et; den här sidan behålls för befintliga implementationer.

Den äldre REST-tjänsten använder HTTP som meddelandebärare. GET används för läsoperationer; POST används för alla CRUD-operationer.

## URI-struktur

URI:n pekar på den önskade resursen med substantiv. eMarketeer-URI:n byggs av fyra delar:

- Tjänsten: _https://app.emarketeer.com/api/_
- Ditt API-ID för autentisering: _EXAMPLE/_
- Funktionen eller resursen: _contacts/_
- Parametrarna som behövs för att utföra uppgiften: _contacts\[0\]\[id\]=144784&response=json_

Glöm inte avslutande `/` på parameterlösa frågor.

Exempel-URI:
_https://app.emarketeer.com/api/AJ237S45D23F4T5/contacts/&response=json&campaign=345_

Om du har anpassat din domän och vill använda din nya URI får du inte använda HTTPS.
_https://marketing.company.co.uk/api/EXAMPLE/campaigns/&response=xml_

> TODO: verify — the requirement to not use HTTPS on customized domains looks unusual and may be outdated.

## Payload

### Typ

Content type för CRUD-anrop (POST) är `application/x-www-form-urlencoded`.

### Kodning

Systemet är Unicode (UTF-8)-kodat, så alla meddelanden som skickas till eMarketeer måste vara UTF-8-kodade. Data som postas som t.ex. ISO/IEC 8859-1 Latin-1 kan i bästa fall se konstig ut i eMarketeer och i värsta fall vara otillgänglig på grund av felaktig data.

Data som innehåller `&` (ampersand) måste URL-kodas för att inte korrumpera parametersträngen vid postning av data.

### E-post

För att förhindra misslyckade leveranser, validera e-postadresser innan du skickar dem till eMarketeer. I vissa fall används e-postadressen för att matcha kontakter. Om korrumperade adresser används kan dubbletter skapas.

eMarketeer stöder enkla e-postadresser. Tecknen `! # $ % * / ? ^ \` { | } ~` är inte tillåtna någonstans i e-postadressen.

### Telefonnummer

Telefonnumrets format är viktigt för mobiltelefonfältet om du tänker skicka textmeddelanden (SMS). eMarketeer kan skicka SMS/Text-meddelanden till de flesta länder i världen, så ett felaktigt formaterat nummer kan missa sin avsedda destination.

Formatera nummer med internationellt riktnummer (`+` eller `00`). Om regionkoden börjar med `0`, ta bort den eller omslut den med parenteser _(0)_.

Format: _int. riktnummer + landskod + regionskod + telefonnummer_
\+ 1 (234) 235 5678 (US)
00 46 730 898 345 (Swedish)
\+ 47 410 08 341 (Norwegian)
\+ 49 15221653225 (German)

URL-koda telefonnumret. Utan det går det internationella riktnumret (`+`) förlorat.

### Standardfält

Fälten som alltid är tillgängliga i eMarketeer listas nedan. Alla fält är strängar.

- **firstname** – Kontaktens förnamn
- **lastname** – Kontaktens efternamn
- **salutation** – Ex. Dr. Mr.
- **company** – Företagets namn
- **email** – Kontaktens e-post (Obligatoriskt)
- **title**
- **telephone** – telefonnummer i valfritt format
- **mobile** – Mobilnummer. Helst med landskod om SMS-utskick görs. +46 123 45 67
- **address1**
- **address2**
- **city**
- **zip**
- **external\_id** – Används för att referera till kontakt-ID i ett annat system. Om integrerat med SuperOffice, använd endast PersonID här.
- **note** – fält för att lagra längre text

### Anpassade fält

I eMarketeer kan du skapa anpassade, användardefinierade fält. Värdena är alltid strängar. Anpassade fältnamn börjar alltid med `c__`.

## GET-funktioner

De läsbara funktionerna i webbtjänsten kan enkelt felsökas med en webbläsare.

### Contacts

Funktionen contacts listar dina kontakter med maximalt 300 kontakter per API-anrop. För att hämta de återstående kontakterna, anropa funktionen iterativt med en offset-parameter.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/contacts/

Maximalt antal kontakter som returneras. Standard- och maxvärde är 300.

&max=300

Offset är ett heltal som indikerar avståndet från början av resultatuppsättningen.

&offset=300

List är ID:t för din lista.

&list=12

Sökparametern returnerar kontakter där förnamn, efternamn, företag eller e-post matchar söksträngen. Sökparametern ignoreras om den kombineras med list-parametern.

&search=Simpson

Använd contacts-parametern för att precisera en kontakt. Contacts-parametern kan inte användas tillsammans med list- eller search-parametrarna. Funktionen returnerar bara en kontakt åt gången och endast `id`- och `email`-fält kan matchas på.

&contacts\[0\]\[id\]=547484

&contacts\[0\]\[email\]=ned@flanders.com

### Lists

Returnerar alla dina listor.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/lists/response=json

JSON Response

{"rest":
{"lists":\[
{"id":"176","name":"Spring campaign leads"},
{"id":"182","name":"New customers"},
{"id":"214","name":"Staff"},...
...

### Campaigns

Listar alla dina kampanjer.

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

Komponenterna (Email, SMS, Web pages och Forms) är organiserade i kampanjer. För att lista komponenterna i en kampanj, använd components-funktionen.

`campaign` är en obligatorisk parameter; `type` är en filtreringsparameter.

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

Visar status för din nuvarande API-anropsräknare.

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

Visar alla dina API-tillgängliga fält.

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

## POST-funktioner

### Upsert contacts

Använd upsert contacts när du vill uppdatera eller infoga kontakter i eMarketeer. Contacts-arrayen får inte innehålla mer än 30 kontakter.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/upsert\_contacts/

Exempel på en parametersektion av en HTTP POST:

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

I anropet ovan uppdateras "Homer Simpson" om han finns och skapas om inte. "Apu Nahasapeemapetilon" uppdateras om posten finns; om inte, misslyckas det.

Lagra de returnerade eMarketeer-id:n för framtida upserts för att undvika kontaktmatchningsproblem.

#### Update eller insert

Flöde:

1. Om `id` anges har det företräde framför alla andra värden.
2. Om `external_id` och `email` anges:
   - API:et försöker hitta en kontakt med `external_id`. Om kontaktens e-post matchar uppdateras den, men endast om `external_id` inte används av en annan e-post.
   - Annars skapas en ny kontakt.
3. Om `external_id` anges:
   - API:et försöker hitta en kontakt med `external_id` och uppdatera den.
   - Om ingen kontakt hittas letar API:et efter en kontakt utan `external_id` baserat på e-post.
   - Annars skapas en ny kontakt.
4. Om `email` men inte `external_id` anges:
   - API:et söker efter en kontakt baserat på e-post.
   - Eller skapar en ny kontakt.
5. Om varken `id`, `external_id` eller `email` anges returneras ett fel.

I alla fall använder API:et den första kontakten det hittar (kontakten med lägst id) som matchar de angivna kriterierna.

#### Anpassade fält

Det finns fyra typer av anpassade fält:

- Textfält
- Kryssruta
- Radioknapp
- Datum

En anpassad textruta ändras som standardfälten:

&contacts\[1\]\[c\_\_degree\]=Ph.D Computer Science

En anpassad kryssruta ändras genom att sätta tom eller `0` som "omarkerad" medan vilket annat värde som helst behandlas som "markerad":

&contacts\[1\]\[c\_\_vegan\]=true

En anpassad radioknapp ändras med radioknappens etikett:

&contacts\[1\]\[c\_\_gender\]=Male

Ett anpassat datumfält ändras genom att lägga till ett datum formaterat som YYYY-MM-DD (ISO 8601):

&contacts\[1\]\[c\_\_renewal\_date\]=2014-05-01

### Delete contacts

När du tar bort en eller flera kontakter kan samma identifierare användas som för upsert. Skillnaderna är att all annan medskickad data ignoreras och att det inte finns någon särskild hierarki mellan id:n.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/delete\_contacts/

&response=json
&contacts\[0\]\[email\]=homer.j.simpson@emarketeer.com
&contacts\[1\]\[id\]=554784
&contacts\[2\]\[external\_id\]=AK\_34566

Undvik att skapa kontakter med identiska e-postadresser.

### Skicka SMS eller e-post

Send-funktionen tar två obligatoriska variabler förutom contacts-arrayen:

- Komponenttyp (`mail` | `sms`)
- Komponent-id

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/enqueue/

Exempel — skicka ett förberett SMS till två kända kontakter:

&type=sms
&id=4247
&contacts\[0\]\[id\]=255724
&contacts\[1\]\[id\]=254384
&contacts\[2\]\[email\]=homer.j.simpson@emarketeer.com
&list=2578
&send\_once=1

### Copy component

Kopiera en Email, Webpage eller SMS inom en kampanj.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/copy\_component/

&response=xml
&campaign=210
&id=7836
&type=sms
&name=Webinar reminder

### Update content

Du kan uppdatera Email- eller webbsidesinnehåll för de flesta blocktyperna. Uppdateringar görs ett anrop per egenskap — till exempel ett anrop för en ny bild-URL, ett anrop för att uppdatera bildens bredd och ett anrop för att uppdatera bildens hyperlänk.

Specificera vilket block i en komponent du vill uppdatera med `path`-parametern. Sökvägen består av alla blocknamn från rot till mål, avgränsade med punkter.
Exempel-sökväg: `root.main.article1.heading`
Exempel-sökväg med standardnamn: `root.column2.imageright180px1.image1`

Egenskapen du vill uppdatera anges med `property`-parametern.

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

Kom ihåg att URL-koda din data.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/update\_content/

&response=xml
&id=9822
&type=mail
&path=root.column2.imageright180px2.text1
&property=text
&text=Here goes the url encoded text that you want to add to the block

### Update component

Du kan uppdatera vissa av Email-, Web page- och SMS-egenskaperna.

| Property list |
| --- |
| Property | Example | Email | Webpage | SMS | Note |
| Title | property=title, text=Welcome | No | Yes | No |  |
| Subject | property=subject, text=Welcome | Yes | No | No |  |
| permalink | property=permalink, text=Nicelink | No | Yes | No |  |
| message | property=message, text=Hi <% contact field="firstname" %>Don't forget the seminar at The Exhibition And Congress Centre tomorrow at 12:00… | No | No | Yes | URL encode data |
| Encoding | property=encoding, text=1 | No | No | Yes | 1 = UCS-4BE (Unicode), 0 = ASCII (Plain text) |
| parts | property=parts, text=8 | No | No | Yes | 6 parts are default |

Kom ihåg att URL-koda din data.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/update\_component/

&response=xml
&id=9822
&type=mail
&property=text
&text=Here goes the url encoded text that you want to add to the block

### Create list

Organisera kontakter genom att lägga till dem i listor (grupper). Skapa en lista med funktionen `create_list` och ange ett namn.

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

Ta bort en lista med funktionen `delete_list`.

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

### Lägg till kontakter i lista

För att lägga till kontakter, använd funktionen `add_to_list` och skicka `list` som ett heltal och en `contacts`-array med lämplig unik identifierare.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/add\_to\_list/

&response=xml
&list=74
&contacts\[0\]\[id\]=23234
&contacts\[1\]\[email\]=noreply@duff.com

Trunkera listan om du vill ta bort alla kontakter i listan innan du lägger till de nya.

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

### Ta bort kontakter från lista

Ta bort kontakter från en lista.

https://app.emarketeer.com/api/API\_ID\_GOES\_HERE/remove\_from\_list/

&response=xml
&list=74874
&contacts\[0\]\[id\]=232344
&contacts\[0\]\[id\]=626773

För att ta bort alla kontakter:

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

### Avregistrera kontakter från kampanj

eMarketeer erbjuder inte längre avregistrering på kampanjnivå. Använd [avregistrering på kategorinivå](../../../knowledge-base/account-admin/subscriptions.md) istället. Automationer för att ta bort kontakter från listor och kampanjer kan också användas från formulär för att uppnå samma resultat.

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

## Parametrar

Kontaktdata skickas till webbtjänsten som en tvådimensionell array.

## Response

REST-tjänsten är inte XML-baserad på samma sätt som en SOAP-webbtjänst, men standardsvaret är i XML-format. JSON är också tillgängligt.

Obs: WADL-filen är inte tillgänglig i JSON.

### JSON

JSON är ett lättviktigt format för datautbyte baserat på objektnotationen i JavaScript-språket. Tack vare sitt enkla textformat är JSON ett bra alternativ till standard-XML-svaret. Svarsdata är alltid UTF-8-kodad.

För att få ditt svar i JSON, specificera det i ditt anrop.

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

Obs: WADL-dokumentet är inte tillgängligt i JSON.

### XML

XML är standardsvarsformatet för REST-webbtjänsten.

Vissa tecken i XML-svaret är kodade:
`&` (ampersand) blir `&amp;`
`<` (mindre än) blir `&lt;`
`>` (större än) blir `&gt;`

Även om standardsvaret är XML är det god praxis att specificera returformatet i ditt anrop. Anledningen är att undvika överraskningar om standardsvarformatet ändras i framtiden.

&response=xml

Ett typiskt svar från en GET-fråga är en rotnod med namnet `rest`, med barnnoder med namnet `status` som innehåller ett `message`-element. Ytterligare element som `id`, `email`, `name` och andra kan förekomma.

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

### Meddelanden

Returmeddelandet returnerar i de flesta fall statusen för varje operation som tjänsten utför. Varningar och fel kan också innehålla en ledtråd om vad som orsakade händelsen.

#### Status

Statusmeddelandet returnerar i de flesta fall statusen för operationens objekt efter att den har utförts. Om en uppsättning kontakter har upsertats returnerar returmeddelandet `OK` för alla lyckade uppdateringar. Om något har raderats returnerar det `deleted`, och så vidare.

#### Varning

Om något gick fel men det finns en chans att slutföra uppgiften utfärdas en varning.

#### Fel

Om uppgiften är omöjlig att utföra visas ett fel i meddelandet.

## Scenarier

### Scenario 1

Ett företag vill skicka ett bekräftelse-/välkomstmejl till nya kunder när de läggs in i dess CRM-system. Antag att ett eMarketeer-mejl redan finns och att dess ID är känt.

Två API-anrop behövs:

1. Upserta kontakt(er) till eMarketeer med funktionen `upsert_contacts` och hämta kontakt-id:n i svaret.
2. Adressera meddelandet med de upsertade kontakt-id:n genom att använda funktionen `enqueue`.

Bästa praxis:

- Lagra alla nya kontakter lokalt och skicka mejlet i en batch för att minimera anropen.
- Verifiera e-postadresser och mobilnummer före upsert för att förhindra misslyckade leveranser.

### Scenario 2

Ditt företag har tidigare skapat formulär, e-postmeddelanden och webbsidor och använder automation för att fylla listor beroende på svar och länkklick. Säljavdelningen kan importera listorna via API:et med funktionen `contacts` och `$list`-parametern.

## Exempel

Följande exempel fungerar men är inte avsedda att användas som de är, på grund av brist på säkerhet (API-nyckel exponerad) och brist på indataverifiering (giltiga e-postadresser, URL-kodning och så vidare).

### JavaScript

Följande exempel visar hur man fyller en lista med AJAX från Prototype JavaScript Framework.

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

Denna metod skickar parametrarna till URI:n via HTTP och returnerar svaret som en sträng.

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

I det här [PHP](https://web.archive.org/web/20170418201645/https://www.php.net/)-exemplet är cURL-objektet inställt på att hämta alla kampanjer, returnera dem som en JSON-sträng och avkoda den till en PHP-array.

#### cURL, HTTP GET-exempel

$api = curl\_init();
curl\_setopt($api, CURLOPT\_URL,'https://app.emarketeer.com/api/YOURAPIKEY/campaigns/response=json');
curl\_setopt($api, CURLOPT\_RETURNTRANSFER, true);

$response\_json = curl\_exec ($api);
curl\_close ($api);

$response\_array = json\_decode($response\_json, true);

#### cURL, HTTP POST-exempel

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
