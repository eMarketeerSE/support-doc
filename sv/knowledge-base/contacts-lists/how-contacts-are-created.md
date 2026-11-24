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

eMarketeer tillåter att fler än en kontakt har samma e-postadress. Ett formulär skapar till exempel en kontakt. Senare skapar en import där **Match by** är inställt på **External ID** en andra kontakt med samma e-postadress, eftersom den importen bara matchar på External ID.

När det händer behöver många åtgärder ändå arbeta med en enda kontakt — att öppna en kontakt i en CRM-panel, en Quick Send, ett formulärsvar och så vidare. eMarketeer väljer alltid samma kontakt, **standardkontakten**. Tabellerna nedan visar vilken kontakt en åtgärd använder, och vilka åtgärder som i stället påverkar alla kontakter med adressen.

### Vilken kontakt en åtgärd använder

| Situation | Kontakt som används |
| --- | --- |
| Du visar en person i CRM-panelen | Kontakten vars External ID matchar den CRM-personen |
| Du gör en Quick Send till adressen | Den CRM-kopplade kontakten; om ingen finns, den äldsta |
| En kontakt klickar på en personlig länk i ett kampanjmejl | Exakt den kontakten |
| Ett formulär skickas in och webbläsaren är spårad som en av kontakterna | Den spårade kontakten |
| Ett formulär skickas in via en personlig länk, med länkens e-postadress | Länkens kontakt |
| En kollega skickar in formuläret från ett vidarebefordrat mejl, med sin egen adress | Kollegans kontakt, inte den ursprungliga mottagaren |
| Inget sammanhang gäller, till exempel en vanlig formulärlänk som identifierar kontakten på e-postadress | Den CRM-kopplade kontakten; om ingen finns, den äldsta |

Svaret från ett formulär, och en signalhändelse som en Facebook Lead Form eller LinkedIn Lead Gen Form, sparas på den enda kontakt som den här tabellen väljer.

### Det här påverkar alla kontakter med adressen

| Åtgärd | Effekt |
| --- | --- |
| Avregistrering, studs | Tillämpas på alla kontakter med adressen |
| Import som matchar på e-postadress | Fältvärden uppdateras på alla kontakter |
| Formulärsvar eller signal | Fältvärden uppdateras på alla kontakter; själva svaret eller händelsen sparas bara på den enda kontakten ovan |

En import som är inställd på att inte uppdatera befintliga kontakter ändrar ingen av dem. Den lägger bara till standardkontakten i importens lista och taggar, så listan har en kontakt per e-postadress.

### Så väljs standardkontakten

När inget tidigare sammanhang pekar ut en viss kontakt använder eMarketeer den första regel som gäller:

1. **En kontakt som sammanhanget redan pekar ut.** Till exempel en personlig länk i ett e-postmeddelande, en kontakt som du öppnade från företagskortet i en panel, CRM-personen som visas i SuperOffice- eller Dynamics 365-panelen, eller, i ett formulär, den besökare som webbläsaren är spårad som.
2. **En kontakt som är kopplad till en CRM-person.** Kontaktens **External ID** är ett Contact ID i SuperOffice eller ett ID i Dynamics, eller så är kontakten kopplad till en lead i Dynamics 365. Om flera kontakter uppfyller detta använder eMarketeer den äldsta.
3. **Den äldsta kontakten** med den e-postadressen.

### Exempel

Två kontakter har e-postadressen anna@acme.com:

| Kontakt | Skapad | External ID |
| --- | --- | --- |
| Kontakt A | Av ett formulär, förra året | Inget |
| Kontakt B | Av en import där **Match by** är inställt på **External ID**, förra veckan | Contact ID i SuperOffice |

eMarketeer använder kontakt B, eftersom den är kopplad till en person i SuperOffice, trots att kontakt A är äldre.

