# LinkedIn Lead Gen Forms

Anslut LinkedIn Lead Gen Forms till eMarketeer så att annonsinskick skapar kontakter, sätter lead scores och triggar Journeys automatiskt.

När du annonserar på LinkedIn kan du koppla en Call to Action till dina annonser för att samla in registreringar, leads och anmälningar. [Läs mer om Lead Gen Forms på LinkedIn här](https://business.linkedin.com/marketing-solutions/native-advertising/lead-gen-ads).

Som standard låter LinkedIn dig ladda ner inskickade leads som en CSV-fil som du bearbetar manuellt. Med eMarketeers LinkedIn-kopplare skickas varje inskick från Lead Gen Forms direkt in i eMarketeer där det kan:

- Skapa och uppdatera kontakter.
- Sätta lead score.
- Trigga Journeys.
- Skicka leads till sälj.

## Kom igång med LinkedIn Lead Gen Forms

### Anslut eMarketeer till LinkedIn

Som administratör i eMarketeer, klicka på "Settings", "Plugins and integrations" och "LinkedIn". Klicka på "Connect to LinkedIn" för att starta anslutningen.

Obs: du ansluter med din personliga LinkedIn-profil, vilket ger eMarketeer åtkomst till de Ad Accounts som profilen har åtkomst till. Anslut med en profil som har åtkomst till de Ad Accounts du vill ta emot inskick från Lead Gen Forms från.

När anslutningen är klar ser du listan över Ad Accounts som är tillgängliga för att ta emot leads från.

<div data-with-frame="true" data-align="left"><img src="../../../assets/linkedin-lead-gen-forms/Skarmavbild-2023-08-04-kl.-10.39.12.png" alt="Lista över LinkedIn Ad Accounts i eMarketeer-kopplingen"></div>

Kryssa i de Ad Accounts du vill ta emot leads från. När du kryssar i ett Ad Account skickas inkommande leads från alla Lead Gen Forms på det Ad Account automatiskt till eMarketeer.

## Vad skickas till eMarketeer när en LinkedIn Lead Gen Form skickas in?

När du bygger en Lead Gen Form på LinkedIn väljer du upp till 12 profildatafält som kan skickas med leadet. Du kan också lägga till anpassade frågor i formuläret, inklusive kryssrutor, listrutor och textfält.

All data som skickas in i LinkedIn-formuläret skickas till eMarketeer och visas i tidslinjehändelsen.

## Nya kontakter skapade från LinkedIn

När eMarketeer tar emot ett lead från LinkedIn matchas kontakten på e-postadress. Om e-postadressen redan finns uppdateras kontakten med den nya informationen. Annars skapas en ny kontakt.

Obs: se till att du inte når kontogränsen för antal kontakter. Om gränsen är nådd kan inga nya kontakter skapas.

Detta är de fält eMarketeer använder från LinkedIn (när de skickas in) för att skapa eller uppdatera kontakter:

- Email
- FirstName
- LastName
- Phone
- City
- ZipCode
- Country
- State
- Title
- Company

All annan inskickad information visas i tidslinjehändelsen på kontaktkortet.

## Så testar du ett leadformulär på LinkedIn

LinkedIn-formulär kan bara användas i en betald, publicerad annons, men det finns ett sätt att testa leads innan du publicerar.

Skapa först formuläret och annonsen i LinkedIn. Klicka sedan på "Preview" på annonsen. Från förhandsgranskningen kan du skicka in Lead Gen Form, och test-leadet skickas till eMarketeer. Detta låter dig förbereda och testa scores, Journeys och leadkvalificering innan du lanserar annonsen på LinkedIn.

[Läs mer om att testa leads på LinkedIn här.](https://www.linkedin.com/help/lms/answer/a420737)

## Bearbeta de inkommande leadsen

När leads kommer in i eMarketeer kommer du åt dem via Contact Filter som Engagement.

<div data-with-frame="true" data-align="left"><img src="../../../assets/linkedin-lead-gen-forms/Skarmavbild-2023-08-04-kl.-11.52.17-300x233.png" alt="Contact Filter som visar LinkedIn-engagemangsalternativ"></div>

Med det här filtret kan du hämta alla kontakter som:

- Skickat in någon LinkedIn Lead Gen Form.
- Skickat in en specifik Lead Gen Form.
- Svarat på formuläret på ett specifikt sätt.

Eftersom detta engagemang är en del av Contact Filter kan du använda samma urval i:

- Contact Lead Score.
- Journeys, som startpunkt eller som if/else-villkor.
- Kvalificering av leads för Lead Board.
