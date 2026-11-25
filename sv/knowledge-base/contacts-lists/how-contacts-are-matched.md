---
description: >-
  Hur eMarketeer matchar inkommande kontaktdata mot befintliga kontakter, vilken
  kontakt som används när flera har samma e-postadress och hur kontakter kopplas
  till ditt CRM.
---

# Hur eMarketeer matchar kontakter

Den här artikeln förklarar hur eMarketeer avgör om inkommande data hör till en kontakt som redan finns, och vilken kontakt som används när flera har samma e-postadress.

De flesta sätt att skapa kontakter uppdaterar också befintliga kontakter. Alla sätt finns i [Hur kontakter skapas](how-contacts-are-created.md).

## Så matchas inkommande data

| Källa | Matchar på | Om ingen kontakt matchar |
| --- | --- | --- |
| Formulär med ett **Contact field: Email** | E-postadress | Skapar en kontakt |
| Import från Excel eller textfil | E-postadress eller External ID, beroende på **Match by** | Skapar en kontakt |
| Import från SuperOffice eller Dynamics 365 | E-postadress | Skapar en kontakt |
| Quick Send | E-postadress | Skapar en kontakt |
| Contacts API | E-postadress | Skapar en kontakt |
| Signaler | E-postadress | Skapar en kontakt |
| CRM-panelen | External ID | Låter dig skapa en |

Du kan inte lägga till en kontakt manuellt med **Add Contact** om det redan finns en kontakt med samma e-postadress.

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

### Det här påverkar alla kontakter med adressen

| Åtgärd | Effekt |
| --- | --- |
| Avregistrering, studs | Tillämpas på alla kontakter med adressen |
| Import som matchar på e-postadress | Fältvärden uppdateras på alla kontakter |
| Formulärsvar eller signal | Fältvärden uppdateras på alla kontakter; själva svaret eller händelsen sparas bara på den enda kontakten ovan |
| Contacts API-anrop som identifierar en kontakt på e-postadress | Tillämpas på alla kontakter med adressen; API:et använder inte standardkontakten |

{% hint style="info" %}
En import som är inställd på att inte uppdatera befintliga kontakter ändrar ingen av dem. Den lägger bara till standardkontakten i importens lista och taggar, så listan har en kontakt per e-postadress.
{% endhint %}

## Matcha med ditt CRM

En kontakt kopplas till en person i ditt CRM via fältet **External ID**. Med SuperOffice innehåller det personens Contact ID. Med Dynamics 365 innehåller det kontakt-ID:t i Dynamics.

En import från SuperOffice eller Dynamics 365 matchar på e-postadress, inte på External ID:

* Varje kontakt i eMarketeer med CRM-personens e-postadress uppdateras, och CRM-ID:t skrivs till den. För en lead i Dynamics 365 sparas även lead-ID:t.
* En kontakt som bara hade en e-postadress uppdateras och kopplas till CRM:et. Ingen dubblett skapas.
* Om ingen kontakt har den adressen skapas en ny kontakt.
* CRM-personer utan e-postadress hoppas över och räknas som tomma.
* Om två CRM-personer har samma e-postadress importeras bara en av dem.

För hur SuperOffice använder kopplingen i automationer och Journeys, se [Hur kontakter matchas mellan eMarketeer och SuperOffice](../../documentation/superoffice/superoffice-contact-matching.md).
