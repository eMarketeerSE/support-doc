# Versionsinformation — 26 november: mallar, lead score-sammanfattning, kampanjfält och förbättringar av e-postrapporten

Denna utgåva lägger till nya e-postmallar, en lead score-sammanfattning på kontaktkortet, en rich text-redigerare i kampanjfält och förbättringar för att filtrera bort falska positiva e-postklick.

## Nya och uppdaterade funktioner

### Nya e-postmallar

De nya e-postmallarna inkluderar helgmallar och kommer med mer än bara ett fräscht utseende. De är byggda med ny grundkod, så de visas bättre i fler e-postklienter än de tidigare mallarna. Du får också fler innehållsblock, högre bildupplösning och en ny inställningsruta för e-post där du sätter preheader och väljer ett Google-typsnitt. Samma inställningsruta styr hur länkförhandsvisningen för e-posten ser ut om du delar e-postlänken på sociala medier.

Dessa mallar ersätter de gamla, men dina sparade mallar behålls som de är. Vi rekommenderar att du bygger om dem på någon av de nya mallarna för att dra nytta av de extra designalternativen och bättre visning i fler e-postklienter.

Se [artikeln om e-postmallar](https://support.emarketeer.com/knowledgebase/email-templates/).

### Lead score-sammanfattning

Med lead score-sammanfattningen kan du se hur varje kontakt fick sin nuvarande poäng. Sammanfattningen listar de lead score-regler som kontakten uppfyller. Det finns också en tidslinje som visar hur kontaktens poäng har sett ut över tid. Du hittar poängsammanfattningen när du öppnar ett kontaktkort och klickar på den nya fliken "Score summary".

- [Videohandledning: så fungerar lead scoring i eMarketeer](https://support.emarketeer.com/knowledgebase/how-lead-scoring-works-in-emarketeer/)
- [Video: så vet du vad du ska poängsätta och vanliga misstag i lead scoring](https://support.emarketeer.com/knowledgebase/how-to-set-up-your-lead-scoring-model-and-lead-scoring-mistakes/)

### Rich text-redigerare i kampanjfält

Kampanjfält låter dig sätta upp anpassade fält för din kampanj, inklusive bilder, rubriker och datum. En rich text-redigerare ansluter nu till kampanjfält-familjen. Du kan anpassa texten du använder som kampanjfält med typsnittsalternativ, hyperlänkar och annan formatering.

Se [så använder du kampanjfält](https://support.emarketeer.com/knowledgebase/how-to-use-campaign-fields-in-emarketeer/).

### Förbättringar av filtrering av falska positiva e-postklick

Falska positiva e-postklick är klick som görs av en e-posttjänst för att kontrollera om e-posten kan vara skräppost — ett testklick innan e-posten släpps in i en inkorg för att bekräfta att den inte leder till misstänkta sidor. Varje e-postmarknadsföringstjänst måste skilja dessa "bot-klick" från riktiga klick från dina mottagare. Annars dyker de upp som falska positiva klick i e-postrapporten.

eMarketeer undviker redan att visa falska positiva i e-postrapporten genom att titta på klickbeteende och timing. Om det ser ut som en bot visas det inte i rapporten. Denna uppdatering finjusterar algoritmen ytterligare för att filtrera bort fler falska klick.

### Filuppladdningar

Filer accepterar nu fler filändelser, inklusive ics och woff2.

## Integrationer

- Korrigering av SuperOffice CRM-kontaktimporter.
- Korrigeringar av hantering av tomma standardfält i SuperOffice CRM.
- API2-migrering.
- Uppdateringar av Zapier-integrationen.

## Allmänna buggfixar

- Åtgärdat formulär som resulterade i en blank tack-sida om fältet "Note" lämnades tomt.
- Mindre buggfixar i lead score-beräkningar.
- Användargränssnittets språk matchar nu webbläsarens språk.
