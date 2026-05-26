# SuperOffice-integrationen – funktioner och flöden

eMarketeer-integrationen för SuperOffice CRM kopplar marknadsaktivitet till CRM-systemet, så att sälj ser lead- och engagemangsdata utan manuell överlämning.

Den här artikeln förklarar de vanligaste användningsfallen, hur integrationsgränssnittet fungerar, hur kontakter rör sig mellan systemen, vad automationer kan göra, vilka webbpaneler som finns och hur laglig grund hanteras.

## Vanliga användningsfall

Integrationen används ur två perspektiv: marknad (eMarketeer-sidan) och sälj (SuperOffice CRM-sidan).

Ur ett marknadsperspektiv används integrationen oftast för att:

- Importera SuperOffice-segment (Selection) för att adressera e-postutskick.
- Använda automationer för att skicka händelser eller skapa objekt i SuperOffice CRM, till exempel:
  - Skapa en Sale.
  - Skapa Activity (öppna eller avslutade).
  - Lägga till eller ta bort kontakter från Selection eller projekt.
  - Lägga till eller ta bort intressen.

Ur ett säljperspektiv låter integrationen SuperOffice CRM-användare:

- Se information från eMarketeer om kontakterna. Automationerna ovan kan skapa en Sale, Activity eller uppgift i CRM-systemet.
- Använda Lead Report (en webbpanel) som listar alla nya leads i SuperOffice CRM.
- Få en fullständig historik över kontaktens interaktioner med innehåll online genom eMarketeers Timeline Report.

## Integrationsgränssnitt

eMarketeer kopplas mot SuperOffice CRM via de vanliga NetServer-tjänsterna. eMarketeer använder för närvarande version 7.5 av bakåtkompatibilitetsskäl.

## Import och export av kontakter

### Separata databaser

eMarketeer och SuperOffice CRM har separata databaser, och de förblir separata även med integrationen på plats. Det finns ingen bakgrundssynkronisering av kontakter. Kontakter skapas endast av integrationen i specifika scenarier:

- SuperOffice CRM: eMarketeer skapar nya kontakter (och företag) i SuperOffice CRM endast när en SuperOffice-användare godkänner det i webbpanelen Lead Report i eMarketeer. Sälj eller en controller bevakar normalt denna rapport för nya leads. Eftersom eMarketeer genererar leads från webben säkerställer detta screeningssteg att endast giltiga leads når SuperOffice CRM.
- eMarketeer: Nya kontakter skapas i eMarketeer endast när du kör importfunktionen. Detta görs vanligen vid utskick till en SuperOffice-Selection eller ett projekt.

### Mappade kontaktfält

Följande kontaktfält överförs vid import av kontakter till båda systemen:

- Förnamn
- Efternamn
- E-post
- Telefon
- Mobil
- Titel
- Person ID

I SuperOffice kan även företag skapas om du väljer det. Följande fält fylls i på företagskortet:

- Företagsnamn
- Land
- Kategori
- Bransch

Det finns ingen mappning för anpassade fält; standardfälten ovan används. Utöver dessa kan automationer lägga till eller ta bort intressen från kontakter.

## Automationer

När kontakter interagerar med eMarketeer via e-post, formulär, appar och så vidare kan automationer utföra uppgifter i både eMarketeer och SuperOffice CRM. De triggas av åtgärder som länkklick, formulärinskick och e-poståpningar.

När en automation körs kan eMarketeer utföra följande åtgärder i SuperOffice CRM:

- Skapa en ny Sale.
- Skapa en uppgift (öppen Activity).
- Notifiera en säljare (avslutad Activity).
- Lägga till eller ta bort en kontakt från en Selection eller ett projekt.
- Lägga till eller ta bort ett intresse från en kontakt.

<div data-with-frame="true"><img src="../../../assets/integration-features-and-flows/image-29.png" alt="SuperOffice Person-kort med Activity tillagda av eMarketeer-automationer"></div>

Dessa Activity har lagts till i SuperOffice av automationer från eMarketeer.

## Webbpaneler

Webbpaneler visar ytterligare information eller utökar eMarketeer-funktioner in i SuperOffice CRM. De kan visas eller döljas baserat på SuperOffice-användarens grupp. Följande webbpaneler används i SuperOffice för att interagera med eMarketeer.

- Lead Report. Navet för inkommande nya leads. Om en automation till exempel är inställd för att skapa en ny Sale kan den endast bearbetas om kontakten redan finns i SuperOffice. Om kontakten inte finns ännu behandlas den som ett nytt lead och listas i Lead Report. Sälj använder rapporten för att föra in nya data i SuperOffice.
- Timeline Report. En webbpanel på Person-kortet i SuperOffice CRM. Den visar alla interaktioner kontakten har haft med eMarketeers marknadsinnehåll, inklusive e-post, formulär, SMS och landningssidor.
- Event details. När eMarketeer skapar en Sale eller en Activity visar denna panel den händelse som triggade den.

<div data-with-frame="true"><img src="../../../assets/integration-features-and-flows/image-30-1024x530.png" alt="Timeline Report på ett SuperOffice Person-kort"></div>

Lär dig mer om dina kontakter och hur de har engagerat sig i ditt marknadsinnehåll.

<div data-with-frame="true"><img src="../../../assets/integration-features-and-flows/image-31.png" alt="Lead Report som listar kontakter som ännu inte finns i SuperOffice"></div>

Det är här alla kontakter som ännu inte finns i SuperOffice listas.

## Laglig grund (GDPR)

eMarketeer har ett eget system för att lagra laglig grund (kontaktsamtycken och så vidare). När integrationen körs mot SuperOffice Online synkroniseras laglig grund automatiskt mellan systemen. För on-premise-installationer av SuperOffice finns ingen synkroniseringstjänst, men du kan komma åt eMarketeers databas för laglig grund via API.
