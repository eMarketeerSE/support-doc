# Ändringslogg

Detta är den löpande noteringen över eMarketeer-utgåvor. Varje post listar de större funktionerna, mindre funktionerna och korrigeringarna som levererats i den utgåvan.

## Utgåva 2026-04-14

### Formulär

Funktioner:

- Formulär kan nu skicka bekräftelse-e-post vid inskickning.
- Kampanjfält och personaliseringstoken kan nu användas i formulär.
- Fler språkalternativ har lagts till och standardöversättningarna har utökats.

Korrigeringar:

- Texten "I'm not a robot" i reCAPTCHA översätts nu med formulärets språkversioner.
- Åtgärdat ett serverfel vid tillägg av stora bakgrundsbilder i formulär.
- Löst visningsproblem med formulärteman.
- Åtgärdat ett fel med dubbletter av e-post i formulärredigeraren.
- Alternativ laddas nu korrekt i rullgardinslistor för anpassade kontaktkortsfält.

### Journeys

Funktioner:

- Journeys rapporterar nu status per enskilt steg.

Korrigeringar:

- Åtgärdat ett problem där journeys kunde fastna i en loop vid signal-triggers.
- Förbättrad villkorslogik i journeys för kontakter som har skickat in samma formulär flera gånger.
- Åtgärdat ett fel där if/else-steg inte gick att spara.

### Dynamics 365 / CRM-integration

Funktioner:

- Du kan nu välja en ägare när du skapar en lead i Dynamics.
- Lead-ID från Dynamics visas nu på kontaktkortet.
- Aktiviteter som skapas med journey-steg kan nu schemaläggas.
- Share to CRM — eMarketeer-kontakter kan nu delas eller skapas i Dynamics.
- Webbpaneler skapas nu automatiskt som Dynamics-vyer vid integration.

Korrigeringar:

- Åtgärdat ett problem där listningen av marknadsföringslistor ibland var tom.
- Åtgärdat ett problem där aktiviteter ibland inte skapades.

### Övriga korrigeringar och förbättringar

- Åtgärdat ett problem där export av kontakter från checklistan till SuperOffice misslyckades.
- Förbättrad hantering av SuperOffice-webhooks.
- Användare meddelas nu när en e-postdomänkontroll misslyckas.
- Förbättringar i widgeten Active Campaigns.
- Åtgärdat ett problem där kampanjfält inte kopierades vid duplicering av en kampanj.
- Den föråldrade gamla Zapier-API-slutpunkten har tagits bort.

## Utgåva 2026-03-10

Större funktion:

- **Ny Dashboard-rapport: Operational Report.** Få en heltäckande bild av vad som händer i dina kampanjer på kontonivå.
  - **Sendouts and Web Sessions.** En tidslinje över utskick du har gjort över tid (fungerar som en kontotidslinje) samt hur dina webbplatssessioner korrelerar med dessa utskick.
  - **Recent Sendouts.** Visar de fem senaste e-post- och SMS-utskicken med över 20 mottagare, samt kommande schemalagda utskick. Klicka på komponentnamnen för att gå in i rapporten.
  - **Latest Form Submits.** Visar de fem senaste formulärinskickningarna. Klicka på komponentnamn för att se rapporten. Klicka på kontaktnamn för att öppna kontaktkortet.
  - **Active Campaigns.** Listar de kampanjer som varit mest aktiva på senare tid (haft det senaste engagemanget). Inkluderar länkar för att öppna kampanjen.
  - **Recent Created work.** Listar de senast skapade komponenterna och inkluderar länken för att öppna dem.
  - **Active Journeys.** Listar de senast aktiva journeys och inkluderar länkar för att öppna dem, samt den senaste kontakten som triggade journeyn.

Mindre funktion:

- Formulär (inte legacy-formulär) är nu förenliga som standard med European Accessibility Act.

Korrigeringar och övriga förbättringar:

- Åtgärdat UI-problem med e-postchecklistan.
- Åtgärdat ett problem där journeys misslyckades att skicka e-post.

## Utgåva 2026-02-23

Större funktion:

- **Microsoft Dynamics-integration: journey-steg.** Använd journeys för att skapa leads eller kontakter i ditt Microsoft Dynamics-konto med sex nya journey-steg.
  - Create/Update Lead
  - Add Activity
  - Add Lead activity
  - Add Contact activity
  - Add Lead to Marketing List
  - Add Contact to Marketing List

Mindre funktioner:

- **Kontakt-drilldown för e-postchecklistan.** E-postchecklistan har nu en kontakt-drilldown, komplett med massåtgärder och export.
- **Kontakt-drilldown för Dashboard-rapporter.** Siffror i Dashboard-rapporter är nu klickbara och visar de identifierade kontakterna.
- **Export av Dashboard-rapporter.** Dashboards kan nu exporteras.

Korrigeringar och övriga förbättringar:

- Ytterligare förbättringar av e-postdomänens autentiseringsprocess.
- Åtgärdat ett problem där massåtgärder misslyckades med att uppdatera laglig grund.
- Förbättringar av Traffic Analyzer-drilldown-panelerna vid filtrering.
- Manage automations listar nu upp till 50 kontakter per sida.
- LinkedIn-integrationen kan nu kopplas till organisationens Brand-sidor.
- Åtgärdat ett problem där den ursprungliga trafikkällan ibland inte sattes korrekt.
- Åtgärdat ett problem där en pausad SuperOffice-automation inte återupptogs efter att kontakten skapats i SuperOffice.
- SuperOffice-integrationens Legal basis-sync uppdaterar nu laglig grund för alla SuperOffice-kontakter med matchande e-postadress.

## Utgåva 2026-01-26

Större funktion:

- **Drilldown-rapporter — The Traffic Analyzer.** Traffic Analyzer-rapporten har nu detaljerade drilldown-rapporter som förklarar detaljerna bakom siffrorna. Klicka på valfritt segment för att se mer information _eller_ filtrera hela rapporten baserat på segmentet.

Mindre funktion:

- **Email Reputation.** Email Health-rapporten har nu widgeten "Reputation findings", som rapporterar problem med din avsändardomän som kan påverka din leveransbarhet.

Korrigeringar och övriga förbättringar:

- Förbättringar av autentisering och validering av e-postdomäner. Den validerar nu fler scenarier, har ytterligare och mer rigorösa kontroller och är enklare att starta om.
- Åtgärdat ett problem där loggade händelser visades med olika tidszoner på kontaktens tidslinje och i den detaljerade händelsebeskrivningen.
- Åtgärdat ett problem där "Original Traffic Source" kunde skrivas över när kontakten fick en "Created Source".

## Utgåva 2025-12-18

Vi avrundar året med vår senaste Dashboard-rapport: Email Health.

Större funktion:

- **Email health-rapport.** Email Health-dashboarden ger dig en tydlig, åtgärdbar översikt över leveransbarhet och avsändaranseende för din e-post. Den hjälper dig att upptäcka problem tidigt och skydda ditt avsändaranseende över tid.

Mindre funktion:

- **Notifikationer om problem med e-postdomäner.** Notifikationer skickas nu om ett problem upptäcks med dina autentiserade e-postdomäner.

Korrigeringar och övriga förbättringar:

- Journeys kan inte längre sparas om de innehåller ogiltiga filterdefinitioner. Det förhindrar att journeys med fel skapas.
- Åtgärdat ett problem där länkar till formulär i kopierade kampanjer refererade tillbaka till den ursprungliga kampanjen. Nya länkar som skapas refererar korrekt när kampanjen kopieras.
- UI-förbättringar i Traffic Analyzer Dashboard-rapporten på små skärmar.

## Utgåva 2025-12-04

Denna utgåva fokuserade på vår senaste tillökning i sviten av Dashboard-rapporter: Traffic Analyzer.

Större funktioner:

- **Traffic Analyzer.** Denna rapport är ett interaktivt Sankey-diagram som visar flödet av webbplatstrafik från källan och hela vägen till konverteringspunkten. Diagrammet visar i större detalj var din trafik kommer ifrån och vad som fungerar för tillfället.

Mindre funktioner:

- **Omarbetad SuperOffice-exportfunktion.** Den är nu snabbare och utförs i bakgrunden, så du kan fortsätta arbeta med eMarketeer under tiden. Du får en notifikation under klockikonen när den är klar. Den är också mindre beroende av formateringen av kontaktdata, vilket tidigare var en vanlig orsak till misslyckade exporter.

Övriga förbättringar och korrigeringar:

- Spökklick filtreras nu bort korrekt från e-postengagemangshändelser på kontaktens tidslinje.
- Åtgärdat ett problem där Leadboard inte laddades korrekt och sidan måste uppdateras.
- Formulärets JSON-redigerare är nu tillgänglig för användare utan Developer-rollen.
- Förbättrad Website script-sida för att göra det enklare att kopiera kontots Tracker ID.
- Justeringar av standarduppsättningarna för lead score. De använder nu den nya webbspåraren.
- Åtgärdat ett problem där kampanjfält med rich text formaterades felaktigt i läs-på-webben-versionen av e-post.

## Utgåva 2025-11-05

Denna utgåva är en mindre uppdatering med fokus på förbättringar av Dashboard och Formulär.

### Funktioner i uppdateringen 5 november

- **Standard-Sales team och Lead stream.** Om ditt eMarketeer-konto inte hade definierade Sales teams eller Lead streams har standard-Sales teams och Lead streams skapats.
- **Dashboard-korrigeringar och förbättringar**
  - AI-hänvisningar
  - Allmänna dataförbättringar
  - Webbspårare installerad på alla hostade formulär
- **Formulärförbättringar**
  - Formulärspråk visas i kalkylbladsrapporten
  - Tidsstämpel visas i kalkylbladsrapporten
  - Ta bort valt formulärsvar i kalkylbladsrapporten
  - Dela formulärrapport
  - Formulärkalkylbladet visar nu fler rader

## Utgåva oktober 2025

Denna utgåva fokuserade på att kalibrera Marketing Performance Dashboard. Förbättringar har också gjorts av formulärkomponenten.

Dashboard / Tracker:

- Dashboard-widgeten "What's driving performance" har omarbetats.
- Lagt till spårning på eMarketeer-hostade formulär och webbsidor.

Formulär:

- Stöder nu flera integrerade formulär som renderas på samma sida.
- Captcha kan inte längre döljas.
- Captcha räknas inte längre som en fråga för formulärnavigeringens förloppsindikator.

Övriga korrigeringar:

- Åtgärdat ett problem med Facebook-anslutningen som gjorde att den anslutna kontots token upphörde efter tre månader.

## Utgåva augusti 2025

Denna utgåva fokuserade främst på att utveckla Marketing-dashboarden för att presentera och analysera data från den nya webbspåraren. Funktionen är i tidig åtkomst för vissa konton. Parallellt arbete har lagt till fler funktioner och åtgärdat buggar relaterade till den nya formulärkomponenten.

Större funktion:

- **Marketing Performance Dashboard.** Denna dashboard är utformad för att ge dig klarhet i vad som fungerar i din marknadsföring. Istället för att jonglera olika rapporter har du nu ett enda ställe att se:
  - Utgående aktivitet och nurturing (e-post, engagemang, fångade leads, nurturing, kvalificerade leads)
  - Webbplatstrafik över tid och per källa (annonser, SEO, sociala medier, e-post och mer)
  - Konverteringar och MQL jämfört med tidigare perioder
  - Vilka kampanjer, annonser och formulär som driver prestanda
  - Den fullständiga trattvyn från MQL → SQL → Opportunities → Won
  - Vilka nya MQL som läggs till på din Lead Board

Mindre funktion:

- Stöd för SSO — Entra.

Övriga funktioner och förbättringar:

- Anpassade kontaktfält för formulär.
- Skrev om hur automationer hanterar kontakter med felaktigt External ID.
- Filteralternativen Occurrence och timeframe för segmentering har lagts till i Signals.
- Lead Explorer har tagits bort.
- Hemskärmen har tagits bort för att ge plats åt de nya dashboards.

## Utgåva juni 2025

Formulär och webbspåraren släpps i produktion. Se [Produktlansering juni 2025](product-launch-june-2025.md).

Större funktioner:

- **Ny formulärkomponent.** En ny kampanjkomponent lanseras. Den gamla formulärkomponenten döps om till "Form (Legacy)". Nyckelfunktioner:
  - Snygga, flexibla designer som matchar ditt varumärke
  - Ett användarvänligt gränssnitt för smidig formulärbyggnad
  - Nya frågetyper (20+ inmatningstyper)
  - Quiz, poängsatta enkäter, timers och kalkylatorer
  - Förbättrad respondentupplevelse
  - Mobilvänligt (autoifyllning, responsivt)
  - Enkel webbplatsintegration med automatisk uppdatering
  - Flerspråkiga formulär med översättningar
  - GDPR-vänlig reCAPTCHA
  - Inbyggd UTM-spårning för konverteringsprestanda

- **Ny webbspårare.** Vi har byggt om vår webbplatsspårning från grunden med många förbättringar. Allra viktigast: den nya spårningen är helt cookielös, så du spårar mycket mer trafik än tidigare eftersom fler webbläsare blockerar cookiebaserad spårning. Den nya spårningen startar så snart en besökare kommer in på din sida för första gången. Varje gång besökaren kommer tillbaka fortsätter spårningen. När besökaren konverterar till en lead via ditt webbformulär lagras hela spårningshistoriken på den nya leaden. Detta talar om för dig var leaden kom ifrån ursprungligen och hjälper dig att förstå vilka av dina trafikgenereringsinitiativ som presterar bäst. Se [The web tracker](../documentation/web-tracker/the-web-tracker.md).

## Utgåva april 2025

Det mesta utvecklingsarbetet sker i bakgrunden på Formulär och webbspåraren.

Större funktioner:

- **UTM-parametrar.** Alla länkar från eMarketeer-innehåll innehåller nu automatiskt UTM-parametrar. Google Analytics-integration har tagits bort från sidan Plugins & Integrations.

Mindre förbättringar och korrigeringar:

- Ändringar i inloggningsprocessen som snabbar upp den.
- Lagt till ett nytt filtreringsalternativ under kontaktlistesegmentet: "Any list".

## Utgåva mars 2025

Denna utgåva fokuserade på att fortsätta lägga till funktionalitet i den ännu inte släppta formulärredigeraren och på att lägga grunden för den nya webbspåraren, som är tänkt att släppas samtidigt.

Större funktioner:

- **Contact Sources.** Created, Original och Latest trafikkällor på kontaktnivå. UI-element på kontaktkortet och filtreringsmöjligheter har lagts till.

Övriga förbättringar och korrigeringar:

- Åtgärdat ett problem med LinkedIn-integrationen.

> TODO: verify — original entry reads "Fixed an issue where the LinkedIn integration." with no further detail.

- Lagt till övervakningssystem för LinkedIn-integrationen.
- Fortsatt förbättring av den nya matchningslogiken för SuperOffice journey-steg.

## Utgåva februari 2025

Denna utgåva fokuserade på att lägga till funktionalitet i den ännu inte släppta formulärredigeraren, för att säkerställa att den fungerar med befintliga system.

Övriga förbättringar:

- Lagt till en ny matchningslogik för SuperOffice journey-steg.

## Utgåva 2025-01-15

Sedan förra utgåvan har merparten av utvecklingen lagts på kommande nya funktioner för Q1 2025.

### Huvudfunktioner

- **Kontaktanrikning.** När en ny kontakt skapas kontrollerar vi CRM för saknade detaljer och fyller på kontakten. Om FullContact är aktiverat berikas data därifrån efter CRM.
- **Permission pass-system** (double opt-in) för specifika mottagardomäner. (För kunder som har fått för många klagomål från vissa e-postleverantörer.)

Övriga förbättringar och korrigeringar:

- Justerade algoritmen för icke-engagerade kontakter.
- Implementation och korrigeringar för det nya faktureringssystemet.
- Förbättrad HTML-design för e-postmeddelandet från journey-notifieraren.
- Lagt till fler fält som lagras från Facebook (Meta) lead forms (jobbtelefon, jobb-e-post, jobbtitel).
- Datum för skapande och uppdateringar av kontakter visas nu korrekt.
- Journey-steget "Wait for trigger" låter inte längre kontakter komma in flera gånger.
- E-postklagomål avregistrerar nu kontakten i alla scenarier.
- Facebook lead forms triggar nu journeys korrekt.

## Tidigare utgåvor

### Utgåva 2024-07-31

Huvudfunktioner:

- **SuperOffice-larmflagga.** Partiell release som aktiverar notifikationsklockan på vissa aktiviteter skapade av eMarketeer.
- **SuperOffice "new contact created"-signal.** Under SuperOffice-integrationsinställningarna i eMarketeer kan du nu välja att aktivera signalen "New contact created". När detta är aktiverat skapas alla nya kontakter som skapas i SuperOffice automatiskt i eMarketeer och kan trigga journeys. Detta är användbart till exempel för att skicka välkomstmejl till nya kontakter.
- **Journey: Delete lead-steg.** När en kontakt når detta steg tas den bort från alla lead boards.
- **Export direkt till Excel.** Exporter av kontakter i eMarketeer har nu alternativet att exportera direkt till en Excel-fil.
- **Kontaktlistor visar namn i UI.** När du klickar för att visa en kontaktlista syns nu listans namn i UI.

Diverse underhåll och buggfixar:

- Stabiliserat SMS-sändning ytterligare.
- Små förbättringar av Dynamics 365-integrationen.
- Åtgärdat en bugg vid kopiering av vissa komponenter i en kampanj.
- Åtgärdat en bugg i formulär där dolda obligatoriska frågor förhindrade inskickning.

### Utgåva 2024-07-04

Huvudfunktioner:

- Journey-startpunkt: nya filter tillgängliga på "Dates", till exempel "Last email sent".
- Journeys: personalisera beskrivningar av försäljning och aktiviteter med kontaktkortsfält.
- Journeys: se steginställningar på aktiva journeys (redigering är inaktiverad när aktiv).
- Lead board: filtrera lead board per sales user.
- Lead board: filtrera på otilldelade leads.
- Applikation: språk ställs nu in under Settings → My Account.
- Applikation: filter för kontaktengagemang, lagt till 6 månader i datumintervallet.
- API: lista kontaktlistor.
- API: ta bort kontakt.
- SuperOffice sidopanel: visa aktiva prenumerationer.
- SuperOffice consent sync: sker nu schemalagt var 30:e minut. (Tidigare endast vid utskick.)
- Microsoft Dynamics consent sync: sker nu schemalagt var 30:e minut.

Lösta buggar:

- Kunde inte ta bort leads från lead board.
- Automation Push to URL gav success även om den misslyckades.
- Journey-steg: add subscription misslyckades ibland.
- Avregistreringssidan såg dålig ut på mobil.
- "Tell a friend" i e-post fungerade inte alltid.
- Att generera leads på lead board tog ibland för lång tid.
- SuperOffice sidopanel saknade sociala ikoner.
- Läs-på-webben-länken fungerade inte om e-postinnehållet hade kampanjfält.

### Utgåva 2024-04-18

Förbättringar för att hjälpa kunder att följa bättre e-postpraxis. Läs mer om [best practices här](../knowledge-base/reports/maximizing-email-marketing-success-best-practices-and-pitfalls-to-avoid.md).

- E-postdomäner via-em.com har tagits bort för nya kunder som använder en anpassad domän.
  - Att använda din egen företagsdomän ökar leveranskvaliteten.
- Standardinställningar för sändning är nu den mest GDPR-vänliga metoden, som endast skickar till kontakter med positivt samtycke. (Saknad samtyckesregistrering blockerar sändning.) Detta påverkar endast nya kunder.
- Förbättrad validering före utskick för att minska studsar.
- Redundans för e-posttjänsten implementerad.
- Ny status för kontakt-e-post "Inactive email".
  - Nytt utskicksalternativ — "Exclude inactive contacts". [Läs mer](../documentation/email-sms/exclude-inactive-recipients.md).
  - Nytt kontaktfilter på "Deliverable but unengaged" i leveransfiltret.

Övriga nya funktioner och ändringar:

- Microsoft Dynamics CRM-integration fas ett. ([Dokumentation](../documentation/dynamics-365/microsoft-dynamics-integration.md))
  - Koppla, importera från CRM och consent sync tillgängligt.

### Utgåva 2024-03-23

- Denna utgåva var underhållsrelaterad.
  - Uppgradering av PHP och omskrivning av flera funktioner.
  - Omskrivning av SMS-sändningsmodulen för prestanda och stabilitet.
- Övriga små korrigeringar och justeringar av systemet och UI.

### Utgåva 2024-02-12

- Journeys
  - **Trigga journey från kontaktkort**, lead card och sidopanel i SuperOffice. Skapa journeys och låt användare i eMarketeer eller CRM trigga dem från kontaktkortet på valda kontakter.
  - **Efterlevnad av Googles/Yahoos e-postkrav.** Inställningssidan för "Authenticate email domain" innehåller och kontrollerar nu alla DNS-poster som krävs för att skicka e-post som följer Googles och Yahoos nya krav. Detta förbättrar leveransen och möjliggör bättre DMARC-alignment.
  - **Journeys: skapa med manuell startpunkt** (utan filter). Om du skapar journeys som endast ska triggas från kontaktkort kan du nu välja "Manual trigger" när du skapar journeys.
  - **Villkor för journey-steg** (hoppa över om villkor inte uppfylls). Vissa steg kan du vilja hoppa över om vissa kriterier inte uppfylls (utan att skapa en ny gren). Du kan nu göra detta genom att sätta villkor på stegen.
  - **Journey: dynamisk mottagare på Notifier-steget.** Använd @-tecknet för att infoga kontaktkortsfält som mottagaradress. Användbart om du har en säljkontakts e-post som ett anpassat fält på dina kontakter.
- SuperOffice sidopanel
  - **Skapa kontakt.** Om kontakten du vill visa sidopanelen för saknas i eMarketeer får du nu alternativet att skapa den.
    - Obs: för att detta ska fungera måste du starta om din integration så att webbpanelerna uppdateras.
  - **Sidopanel i SO kräver ingen betald användare.** Den nya sidopanelen för kontakt- och företagssammanfattning kräver en eMarketeer-användare. Du kan nu skapa användare som är gratis och endast har åtkomst till dessa sidopaneler.

### Utgåva 2024-01-15

- Journey Templates
  - Du kan välja bland ett antal kategoriserade, färdigbyggda journeys att anpassa efter dina behov.
- Journey-steg: Wait for trigger
  - Detta steg väntar tills en kontakt utför en definierad uppgift innan journeyn fortsätter.
- [SuperOffice Signals: Sale Closed](../documentation/superoffice/superoffice-signals.md)
  - SuperOffice kan tala om när en försäljning är avslutad (såld eller förlorad) och skicka försäljningsdatan till eMarketeer. Detta kan användas till att:
    - Flytta en lead till sold/lost automatiskt.
    - Skicka ett välkomstmejl till nya kunder.
    - Trigga valfri journey för att reagera på en avslutad försäljning.

### Utgåva 2023-12-04

- [Facebook-connector](../documentation/lead-forms/facebook-lead-forms.md)
  - Du kan nu ta emot Lead Form-inskickningar från Facebook Ads direkt in i eMarketeer för poängsättning, nurturing och leadgenerering. Anslut från din inställningssida.
- [Transaktionella e-postutskick](../documentation/email-sms/transactional-sendouts.md)
  - När du skickar ett e-postmeddelande kan du nu välja att åsidosätta samtycke och skicka till hela listan. Använd med försiktighet, endast för icke-marknadsförings-e-post.
- [Custom Signals](../documentation/apis-developer/custom-signals-api.md)
  - Med hjälp av API:et kan du nu skicka anpassade signaler från andra system, vilka visas på dina kontakters tidslinje. Dessa kan poängsättas, trigga journeys och trigga leads.

### Utgåva 2023-11-08

- [SuperOffice Consent Sync helt ombyggd](upcoming-changes-to-emarketeer-superoffice-consent-sync.md)
  - Fungerar nu på Online och onPremise.
  - Synkar samtycke vid sändning av e-post och SMS. [Läs mer](upcoming-changes-to-emarketeer-superoffice-consent-sync.md).
- Journey-förbättringar
  - Send email: transaktionellt alternativ (ignorera samtycke).
  - IF/Else-logik
    - Använder nu endast det senaste svaret i ett formulär vid kontroll av if/else.
    - Obs: detta träder i kraft först efter det schemalagda underhållet 11 nov 2023.
  - SuperOffice create activity och sale — nya alternativ
    - Lägg till i projekt (lägger till kontakt och försäljning/aktivitet i projektet).
    - Välj tilldelad SO sales user (använd automatisk eller specifik tilldelning).
  - Legal basis: valfri beskrivningstext vid inställning av laglig grund.
  - Nya triggers för att starta en journey
    - Ändring av laglig grund.
    - Ändring av lead-stadium.
- Kontakter
  - Visa taggar i kontaktlista.
- SuperOffice sidopanel (Contact summary)
  - Visa information om laglig grund.
  - Visa kontakttaggar.
- Inställningar för öppna/stänga formulär
  - Ny redigerare för stängningsmeddelande (formatering och länkar).
- Buggfixar
  - När ett formulärsvar tas bort raderas nu även tidslinjehändelsen.

### Utgåva 2023-10-16

- Journey-steg: Start new journey — starta en ny journey som ett steg i flödet.
- Journey-steg: Send notifier email.
- API för taggar.
- Visa Taggar i kampanjlistan.
- SuperOffice Sidepanel visar vad som svarades i ett eMarketeer-formulär eller LinkedIn Lead Gen Form.
- Lead Board: Quick share till CRM (hittar bästa match).
- Snabbare e-postsändning från journeys och Quick send.

Plus diverse buggfixar:

- JavaScript i formulärdesignens HTML gick inte att spara.
- Journey-statistik och dubblettmejl.
- Diverse små korrigeringar.

### Utgåva 2023-09-12

- Nytt API släppt för:
  - Kontakter
  - Engagement (historik/statistik)
  - Taggar
- Åtkomst till API-nyckel och Swagger-dokumentation från ditt konto under Settings.

### Utgåva 2023-08-03

- LinkedIn-connector för Lead Gen Forms. Skicka automatiskt inskickade lead-formulär på LinkedIn till eMarketeer.
- Signals API — gör det möjligt för externa system att skicka kontakter och händelser till eMarketeer.
