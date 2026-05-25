# Andra releasen i GDPR-färdplanen

Med den andra och sista releasen av samtyckesfunktionerna är eMarketeer redo att hantera dina kontakter på ett GDPR-kompatibelt sätt.

Du använder eMarketeer för att lagra kontakter och skicka e-post till dem. Båda ändamålen behöver en rättslig grund, rätten genom vilken du lagrar kontakter och skickar till dem. Den här releasen ger dig verktygen för att sätta dessa rättsliga grunder och hålla dem aktuella.

Det finns tre tillstånd av rättslig grund att överväga för både datalagring och e-postutskick:

1. "none" — inget är satt. Informationen saknas; uppdatera den så att det finns en giltig rättslig grund.
2. "withdrawn" — kontakten har uttryckligen återkallat samtycket. Du får inte skicka marknadsförings-e-post till denna person. Detta är det nya "avregistrerad".
3. Alla andra rättsliga grunder är positiva: det är okej att mejla dem.

Du kan uppdatera rättsliga grunder för dina kontakter i din egen takt innan GDPR träder i kraft den 25 maj 2018. En massuppdatering är det snabbaste sättet.

Releasen lägger till dessa verktyg för att sätta samtycke och rättsliga grunder:

- Filter efter datum
- Automationer för att sätta och ta bort samtycke
- Nytt block: samtycke i formulär
- Samtyckesflik på kontaktkortet
- Nya avregistreringar
- Utskick som respekterar varje kontakts samtycke

## Nya funktioner och rekommenderade åtgärder

### Rekommenderade åtgärder

- Om du har publicerade formulär som tillåter besökare att opt-in till utskick, sätt dessa samtycken automatiskt från och med nu. Lägg till det nya samtyckesblocket till dina formulär.
- Uppdatera dina nuvarande webbformulär så att de alla har samtyckes-kryssrutan. Om du redan har en kryssruta för detta, byt ut den mot den nya samtyckes-kryssrutan.
- Uppdatera samtycke för alla dina befintliga kontakter med en massuppdatering. Välj ändamålet "Store" och samtyckestypen "Legitimate interest."
- Sätt marknadsföringssamtycke till "Legitimate interest" för alla kontakter som har tagit emot e-post de senaste 1–2 åren.
- Sätt marknadsföringssamtycke till "Consent" för kontakter som opt-in genom formulär eller andra uttryckliga sätt. Detta gäller formulär där kontakter opt-in, inte enkäter eller utvärderingar.
- Överväg att kassera kontakter som inte har varit aktiva på länge eller där du inte har något samtycke registrerat.

Dessa rekommendationer är inte juridisk rådgivning och eMarketeer ansvarar inte för utfallet. Kontrollera med din juridiska rådgivare.

### Avregistreringar

Att avregistrera sig från utskick räknas nu som att återkalla samtycke för marknadsförings-e-post.

Vad ändrades? I stället för den tidigare länken på kontaktkortet (bild 1 och 2 nedan) ser du en reglage som visar samtycke för marknadsföringsutskick. Grön betyder att samtycke har getts (bild 3); avstängd betyder att samtycket har återkallats.

Tänk på följande:

- Kontakter som var globalt "avregistrerade" före denna release sätts automatiskt till "samtycke återkallat" från alla marknadsföringsutskick.
- Kontakter som avregistrerades från en specifik kampanj förblir avregistrerade från den kampanjen. Om de avregistrerar sig igen efter denna release återkallas samtycket från alla marknadsföringsutskick.
- Från och med nu sätter varje avregistreringsåtgärd kontaktens samtycke till återkallat från alla marknadsföringsutskick, och e-post skickas inte till den kontakten.

[![Tidigare avregistreringslänk på kontaktkortet](../../../assets/gdpr-release/Screen-Shot-2018-03-27-at-14.24.34.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-27-at-14.24.34.png)

[![Tidigare avregistrerat tillstånd visat på kontaktkortet](../../../assets/gdpr-release/Screen-Shot-2018-03-27-at-14.24.17.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-27-at-14.24.17.png)

[![Nytt samtyckesreglage i grönt som visar att samtycke har getts](../../../assets/gdpr-release/Screen-Shot-2018-03-27-at-14.48.19.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-27-at-14.48.19.png)

### Massuppdatering av samtycke och avregistreringar

Beroende på antalet kontakter du uppdaterar kan åtgärden ta några minuter. Dialogen för massåtgärder visar uppskattad tid.

[![Dialog för massuppdatering av samtycke](../../../assets/gdpr-release/gdpr_consent2.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/gdpr_consent2.png)

[![Förlopp för massuppdatering med uppskattad tid](../../../assets/gdpr-release/gdpr_consent3.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/gdpr_consent3.png)

### Utskick och massuppdatering

Utskick kontrollerar nu varje kontakts samtycke vid den tidpunkt då utskicket körs. Om du massuppdaterar samtycke och startar ett utskick omedelbart kan massprocessen vara ofullbordad och utskicket kanske inte återspeglar dina ändringar. Utskicksalternativen varnar dig om detta. Vänta tills massuppdateringen är klar innan du skickar.

[![Utskickvarning som visas när en massuppdatering av samtycke pågår](../../../assets/gdpr-release/gdpr_sendout_bulkupdate.png)](https://support.emarketeer.com/wp-content/uploads/2018/03/gdpr_sendout_bulkupdate.png)

För mer om kommande funktioner, se [GDPR-färdplanen](https://support.emarketeer.com/knowledgebase/gdpr-and-what-it-means-for-emarketeer-users/) eller besök [GDPR-centret](https://support.emarketeer.com/knowledgebase/gdpr-general-data-protection-regulation/). För andra frågor, mejla support@emarketeer.com.
