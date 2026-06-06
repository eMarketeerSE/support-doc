# SMS Sender ID

Sender ID är namnet eller numret som en kontakt ser när de tar emot ditt SMS. Den här artikeln förklarar vad Sender ID är, hur du begär ett eget och var funktionen har begränsningar.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/Sms_sender_id.png" alt="SMS Sender ID visat på en mobiltelefon"></div>

När du tar emot ett SMS från en annan mobiltelefon ser du avsändarens nummer. När du skickar SMS via en tjänst som eMarketeer kan avsändarinformationen istället vara en text — vanligtvis ditt företagsnamn.

## Begär ett eget Sender ID

För att använda ditt företagsnamn som avsändare måste Sender ID uppfylla dessa krav:

* Mellan 3 och 11 tecken långt.
* Endast tecken `A-Z`, `a-z` och `0-9`.
* Får inte börja med en siffra eller vara ett telefonnummer.

Förfrågningar hanteras manuellt. Om vi tar emot din förfrågan under kontorstid är den vanligtvis klar samma dag, såvida vi inte behöver mer information.

För att begära ett Sender ID, skicka e-post till `support@emarketeer.com` med det Sender ID du vill ha och namnet på kontot där det ska tillämpas.

## Varför Sender ID måste godkännas

Anpassade Sender ID kan missbrukas för spam och spoofing. Spoofing är när någon förfalskar avsändardata för att utge sig för att vara en annan person eller företag.

Till exempel skulle någon kunna ställa in Sender ID till en annan persons nummer för att bedra eller trakassera — locka barn till en plats, eller skicka skadligt innehåll som ser ut att komma från en känd avsändare.

För att förhindra missbruk samtidigt som vi erbjuder anpassning måste varje Sender ID registreras och autentiseras innan användning.

## Begränsningar

De flesta belgiska, amerikanska och mexikanska mobiloperatörer stödjer inte alfanumerisk avsändarinformation. Om du skickar till en mottagare i ett av dessa nät ersätts ditt Sender ID med ett slumpmässigt genererat nummer. Samma begränsning gäller för vissa andra funktioner som flerdelade SMS och Unicode. Se [whitelist över länder som stödjer SMS Sender ID](whitelist-of-countries-supporting-sms-sender-id.md) för hela listan.

Vår SMS-leverantör (46elks) kan inte alltid garantera att Sender ID visas. 46elks och deras uppströmsleverantör inaktiverar funktionen på vissa rutter eftersom vissa mobiloperatörer filtrerar meddelanden, vilket annars skulle orsaka utebliven leverans. Leverans prioriteras framför presentation.

Om mottagaren måste veta vem meddelandet kommer från, inkludera ditt företags-, produkt- eller systemnamn på första raden i meddelandet. De flesta mobiltelefoner visar de första tecknen i ett SMS innan det öppnas.
