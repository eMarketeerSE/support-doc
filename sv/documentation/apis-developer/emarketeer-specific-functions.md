# eMarketeer-specifika funktioner

eMarketeer har flera DCL-funktioner som inte är en del av "core" DCL. De hämtar data från kontaktkortet, ditt användarkonto och andra produktspecifika källor.

## Link

För att spåra en länk i eMarketeer, använd `link`-funktionen. En vanlig `<a href="url">Link</a>` renderas fortfarande, men den spåras inte. Kommandot `link` ser ut så här:

```
<% link url="url-to-link" caption="Label to link" [attrib="htmlattributes"] [html="true"] %>
```

- `url`: URL:n att länka till. Den måste vara URL-kodad; eMarketeer kodar den inte åt dig.
- `caption`: länkens etikett, som vanlig text eller HTML. Om det är HTML, skicka `html="true"`.
- `attrib`: attribut som läggs till i den resulterande `<a>`-taggen i den renderade HTML-koden.

## Contact

`contact`-funktionen hämtar eller skriver ut värden från kontaktkortet som formuläret är kopplat till.

```
<% contact field="fieldname" %>
```

`fieldname` är ett av dessa:

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td valign="top">firstname</td><td valign="top">Firstname of contact</td></tr><tr><td valign="top">lastname</td><td valign="top">Lastname of contact</td></tr><tr><td valign="top">salutation</td><td valign="top">How to salute this contact. For example "Mr", "Mrs"</td></tr><tr><td valign="top">company</td><td valign="top">This contacts work company</td></tr><tr><td valign="top">email</td><td valign="top">Email address of contact</td></tr><tr><td valign="top">title</td><td valign="top">Work title</td></tr><tr><td valign="top">telephone</td><td valign="top">Contacts telephone number</td></tr><tr><td valign="top">fax</td><td valign="top">Contacts fax number</td></tr><tr><td valign="top">mobile</td><td valign="top">Contact mobile telephone number</td></tr><tr><td valign="top">address1</td><td valign="top">First line in contacts address</td></tr><tr><td valign="top">address2</td><td valign="top">Second line in contacts address</td></tr><tr><td valign="top">city</td><td valign="top">City of contact</td></tr><tr><td valign="top">state</td><td valign="top">State of contact</td></tr><tr><td valign="top">zip</td><td valign="top">Zip or postal code of contact</td></tr><tr><td valign="top">country</td><td valign="top">Country of contact</td></tr><tr><td valign="top">external_id</td><td valign="top">Id in users CMS</td></tr><tr><td valign="top">note</td><td valign="top">Your note of this contact</td></tr></tbody></table>

Anpassade kontaktfält använder denna syntax:

```
<% contact field="fieldname" type="custom" %>
```

Om du är osäker på rätt fältkod, öppna ett e-postmeddelande och använd den inbyggda personaliseringsknappen i valfri text. Den visar rätt kod för varje fält.

## User

`user`-funktionen hämtar eller skriver ut information om ditt användarkonto.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td valign="top">logo</td><td valign="top">The url to your companys logo in emarketeer takes a second argument "version" which can be "light" or "dark". The light background logo is the default</td></tr><tr><td valign="top">company</td><td valign="top">Company name</td></tr><tr><td valign="top">address1</td><td valign="top">First address line of company</td></tr><tr><td valign="top">address2</td><td valign="top">Second address line of company</td></tr><tr><td valign="top">city</td><td valign="top">City of company</td></tr><tr><td valign="top">zip</td><td valign="top">Zip or postal code of company</td></tr><tr><td valign="top">state</td><td valign="top">State of company</td></tr><tr><td valign="top">country</td><td valign="top">Country of company</td></tr><tr><td valign="top">webpage</td><td valign="top">Homepage of company, optional argument "protocol" may be set to true to include protocol in adress (Normaly <a class="external free" href="http:" rel="nofollow">https://</a>)</td></tr><tr><td valign="top">url</td><td valign="top">Url this user uses to access emarkeeter.</td></tr><tr><td valign="top">telephone</td><td valign="top">Tehephone number of company</td></tr></tbody></table>

## Scramble

Scramble-koden är en unik identifierare som genereras när ett e-postmeddelande skickas. eMarketeer använder den internt för att identifiera vilken kontakt som klickar på en länk i e-postmeddelandet.

## Block

`block`-funktionen hämtar specifik data från ett block i eMarketeer. Olika blocktyper exponerar olika fält. Funktionen returnerar den bokstavliga strängen som skrivits in i blocket, inte utvärderad kod.

```
<% block name="text1" field="text" %>
```

Argumentet `name` är en relativ sökväg till blocket du vill ha, med start i den aktuella noden i trädet. Noder separeras med `.`. Nyckelordet `parent` är reserverat och flyttar upp en nivå. Till exempel:

```
<% block name="parent.block1.text2" field="text" %>
```

Den här sökvägen går från den aktuella noden upp till det överordnade containerblocket, sedan in i `block1` och sedan in i textblocket `text2`.

Om argumentet `name` börjar med `.`, börjar uppslagningen från roten. Till exempel:

```
<% block name=".block1.text2" field="text" %>
```

Den här sökvägen löser alltid från roten, oavsett var du börjar.

**Text Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>text</td><td>The text entered into the text block</td></tr></tbody></table>

**Image Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>url</td><td>the url of the image</td></tr></tbody></table>

**Link Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>url</td><td>the url of the link</td></tr><tr><td>caption</td><td>the link caption</td></tr></tbody></table>

**Container Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>text</td><td>Returns the HTML source code of the block</td></tr></tbody></table>

**Option Block**

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Fieldname</td><td>Explaination</td></tr><tr><td>value</td><td>Current value of the option block</td></tr></tbody></table>
