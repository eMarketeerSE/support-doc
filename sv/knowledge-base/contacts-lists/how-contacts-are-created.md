---
description: En komplett referens över alla sätt som kontakter kan skapas i eMarketeer — manuellt, via import, webbformulär, API och engagemangssignaler.
---

# Hur kontakter skapas

Kontakter kan komma in i eMarketeer på flera sätt. Vissa skapas manuellt av användare, andra genereras automatiskt när någon skickar in ett formulär, interagerar med en signalkälla eller skickas in via API:et.

## Användarskapade kontakter

### Kontaktimport

Det snabbaste sättet att få in ett stort antal kontakter i eMarketeer är via en import.

**Excel**
Ladda upp ett kalkylblad med kontaktdata. Kolumnrubriker mappas till kontaktfält i eMarketeer. Se [Importera kontakter från Excel](import-contacts-from-excel.md) för en steg-för-steg-genomgång.

**Textfil**
Fungerar på samma sätt som en Excel-import, men du laddar upp en tabbavgränsad eller kommaseparerad textfil i stället för ett kalkylblad.

**CRM**
Om du har SuperOffice eller Microsoft Dynamics 365 integrerat kan du söka i ditt CRM och importera listor med kontakter direkt. Det är användbart för att fylla eMarketeer med befintlig CRM-data.

### Skapa en kontakt manuellt

Gå till **Contacts** och klicka på **Add Contact**. Ange en e-postadress så försöker eMarketeer berika profilen automatiskt. Övriga fält kan fyllas i manuellt.

### CRM-webbpanel

Kontaktsammanfattningspanelen som är inbäddad i ditt CRM kan skapa kontakter på eMarketeer-sidan. Om en CRM-kontakt inte har en matchande eMarketeer-kontaktpost ger panelen dig möjligheten att skapa en.

### Snabbskicka e-post

Om du skickar ett Quick Send-e-postmeddelande till en adress som inte finns i eMarketeer skapas en ny kontakt för den adressen vid tidpunkten för utskicket.

## Webbformulär

Ett formulär som innehåller ett **Contact field: Email** skapar en ny kontakt eller matchar mot en befintlig när formuläret skickas in. Övriga Contact fields på formuläret uppdaterar den matchade kontaktposten samtidigt.

Se [Formuläreditor: UI-översikt](../../documentation/forms/ui-overview.md#contact-fields) för mer om Contact fields.

## API

Endpoint:et `/v1/contacts` accepterar en POST-förfrågan för att skapa en ny kontakt programmatiskt. Det är standardmetoden för att synkronisera kontakter från externa system eller automatisera kontaktskapande.

Fullständig endpoint-referens: [api-doc.emarketeer.com](https://api-doc.emarketeer.com/#/Contact/postContact)

## Signaler

Signaler är engagemangshändelser som skickas till eMarketeer från externa källor. När en signal anländer för en e-postadress som inte matchar en befintlig kontakt skapar eMarketeer automatiskt en ny kontakt.

Signalkällor som kan generera kontakter:

**[Facebook Lead Forms](../../documentation/lead-forms/facebook-lead-forms.md)**
Leads som samlas in via Facebook Lead Ad-formulär skickas till eMarketeer och skapar eller uppdaterar kontakter.

**[LinkedIn Lead Gen Forms](../../documentation/lead-forms/linkedin-lead-gen-forms.md)**
Leads som samlas in via LinkedIn Lead Gen Forms fungerar på samma sätt.

**[SuperOffice Signals](../../documentation/superoffice/superoffice-signals.md)**
Engagemangshändelser från SuperOffice kan vidarebefordras till eMarketeer som signaler och skapar kontakter när ingen matchning hittas.

**[Custom Signals API](../../documentation/apis-developer/custom-signals-api.md)**
Du kan skicka anpassade engagemangshändelser från valfritt externt system via Signals API:et. Varje händelse skapar eller matchar en kontakt baserat på e-postadress.

## När flera kontakter har samma e-postadress

eMarketeer tillåter flera kontakter med samma e-postadress. Ett formulär kan till exempel skapa en kontakt, och en import från ditt CRM kan skapa en till.

När eMarketeer behöver en enda kontakt för en e-postadress väljer det samma kontakt överallt. eMarketeer använder den första regeln som gäller:

1. Kontakten som länken eller panelen redan pekar ut. Det är en personlig länk i ett e-postmeddelande, en kontakt som du öppnade från kontaktkortet eller CRM-personen som visas i SuperOffice- eller Dynamics 365-panelen.
2. En kontakt som är kopplad till en person i SuperOffice eller Dynamics 365. Kontakten har ett **External ID** som är ett Contact ID i SuperOffice eller ett ID i Dynamics. Om flera kontakter är kopplade använder eMarketeer den äldsta av dem.
3. Den äldsta kontakten med den e-postadressen.

Det gäller på följande ställen:

* SuperOffice- och Dynamics 365-panelerna.
* Quick Send.
* Formulärlänkar som identifierar kontakten på e-postadress.
* Formulärsvar som matchar en befintlig kontakt. Svaret sparas på den här kontakten.
* Signaler, till exempel Facebook Lead Forms och LinkedIn Lead Gen Forms. Händelsen sparas på den här kontakten.

### Exempel

Två kontakter har e-postadressen anna@acme.com:

| Kontakt | Skapad | External ID |
| --- | --- | --- |
| Kontakt A | Av ett formulär, i går | Inget |
| Kontakt B | Av en import från SuperOffice, förra året | Contact ID i SuperOffice |

eMarketeer använder kontakt B, eftersom den är kopplad till en person i SuperOffice.

### Det här uppdaterar fortfarande alla kontakter

Avregistreringar, studsar och importer uppdaterar fortfarande alla kontakter med e-postadressen. Formulärsvar och signaler uppdaterar också fälten på alla kontakter med e-postadressen.

En import som är inställd på att inte uppdatera befintliga kontakter ändrar ingen av dem. Den lägger bara till kontakten som eMarketeer väljer i importens lista och taggar, så listan har en kontakt per e-postadress.

### CRM-märket på kontaktkortet

Kontaktkortet visar CRM-märket bara när External ID är ett Contact ID i SuperOffice eller ett ID i Dynamics. Ett Contact ID i SuperOffice är ett heltal större än 0. Andra importerade värden, till exempel `007` eller `12.5`, visar inte längre märket.
