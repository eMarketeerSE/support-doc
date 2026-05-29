---
description: >-
  Hur du skapar och konfigurerar ett anpassat SMS Sender ID så att ditt företagsnamn visas som avsändare av dina SMS.
---

# SMS Sender ID

Sender ID är den text eller det nummer som visas för mottagaren som avsändare av ett SMS.

När du tar emot ett SMS från en annan mobiltelefon ser du avsändarens nummer. När SMS:et kommer från en tjänst som eMarketeer kan avsändaren vara en valfri text — vanligtvis ditt företagsnamn.

<div data-with-frame="true" data-align="left"><img src="../../../assets/sms/Sms_sender_id.png" alt="Exempel på SMS Sender ID"></div>

## Skapa ett eget Sender ID

Kontakta supporten för att få ditt företagsnamn visat som avsändare, så ställer vi in det åt dig.

- Sender ID måste vara 3–11 tecken långt, endast innehålla A–Z, a–z eller 0–9, och får inte börja med en siffra eller vara ett telefonnummer.
- Förfrågningar hanteras manuellt. Under kontorstid hinner vi vanligtvis bli klara samma dag, om vi inte behöver mer information.
- Skicka det Sender ID du vill ha och namnet på kontot där det ska användas till support@emarketeer.com.

## Varför måste jag ansöka om ett Sender ID?

Möjligheten att anpassa ett Sender ID kan missbrukas för skräppost och spoofing. Spoofing innebär att någon utger sig för att vara en annan part genom att förfalska data och få en oäkta identitet.

Ett Sender ID skulle till exempel kunna sättas till någon annans nummer för att bedra, trakassera eller utge sig för att vara en annan person. För att förhindra missbruk men samtidigt erbjuda funktionen måste varje anpassat Sender ID registreras och autentiseras innan det används.

## Begränsningar

De flesta belgiska, amerikanska och mexikanska mobiloperatörer stöder inte alfanumerisk avsändarinformation. Om du skickar ett SMS till en mottagare hos någon av dessa operatörer ersätts Sender ID med ett slumpmässigt utseende nummer. Samma sak gäller vissa andra funktioner, till exempel SMS i flera delar och Unicode. Se [Whitelist of countries supporting SMS Sender ID](../../documentation/email-sms/whitelist-of-countries-supporting-sms-sender-id.md) för en fullständig lista.

Vår SMS-leverantör (46elks) kan inte alltid garantera att Sender ID visas.

46elks stänger av funktionen på vissa rutter, och deras leverantör i nästa led gör likadant. Mobiloperatörer filtrerar ofta textmeddelanden, vilket kan leda till utebliven leverans — och högsta prioritet är att meddelandet levereras, inte funktionerna. Många operatörer tillåter inte att SMS-aggregatorer använder Sender ID-funktionen.

Om mottagarna måste veta vem meddelandet kommer från, ta med ditt företag, produkt eller systemnamn på meddelandets första rad. De flesta mobiler visar de första tecknen i ett SMS i aviseringen innan det öppnas.
