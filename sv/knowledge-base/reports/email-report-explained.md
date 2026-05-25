# E-postrapporten förklarad

Den här artikeln förklarar händelsetaggarna i eMarketeers e-postrapport, siffrorna bredvid dem och hur procentvärdena i widgetarna beräknas.

![Exempel på en e-postrapportsida](../../../assets/email-report-explained/Email-Report-Page.png)

Exempel på en e-postrapportsida.

## E-posthändelser

Varje händelsetagg visar två siffror, som "Händelse **10 (20)**." Siffran före parentesen är antalet unika kontakter som räknats för händelsen. Siffran i parentesen är totalen, inklusive dubbletter. En dubblerad Sent-händelse räknas när samma e-post har skickats till en kontakt mer än en gång, och en dubblerad Click-händelse räknas när samma mottagare klickar på samma länk mer än en gång.

**Addressed:** antalet mottagaradresser som ingår i utskicket efter checklistesteget, som sedan skickas till e-postservrarna för adressering.

**Sent:** antalet mottagaradresser som e-postkomponenten skickades till efter e-postserverns sista kontroll av avsändar- och mottagaradresserna.

**Rejected:** e-posttjänsten hittade ett problem med avsändar- eller mottagaradressen under den sista kontrollen före utskicket. Ett avvisande pekar oftast på ett känt problem med just den mottagaradressen eller domänen, till exempel en domän som inte finns. Om varje mottagare avvisas är orsaken nästan alltid en ogiltig avsändar- eller svarsadress på e-postkomponenten.

**Bounced:** mottagarens e-posttjänst accepterade meddelandet men kunde inte leverera det. Vanliga orsaker är en adress som inte längre finns, en felstavad adress, ett skräppostfilter eller en säkerhetspolicy hos mottagaren. För mer om studsar och studsfrekvens, läs [Om e-poststudsar](https://support.emarketeer.com/knowledgebase/about-email-bounces/).

**Complaints:** mottagaren klickade på "Report this email and Unsubscribe" i sin e-postklient och klienten rapporterade det tillbaka till eMarketeer. Det avregistrerar också kontakten från framtida utskick genom att sätta den rättsliga grunden för Marketing Sendouts till *Withdrawn*, vilket syns på fliken Legal Basis på kontaktkortet. Ditt eMarketeer-konto tillåts en genomsnittlig klagomålsfrekvens på upp till 0,3 % innan vi måste pausa det för granskning.

**Delivered:** mottagarens e-posttjänst bekräftade att den tog emot e-posten, att adressen finns och att den kommer att leverera meddelandet till inkorgen. En levererad e-post kan fortfarande filtreras som skräppost innan den når inkorgen, och det rapporteras vanligtvis inte tillbaka.

**Opened / Not opened:** antalet mottagare som öppnade e-posten, eller inte öppnade den. För mer om hur en öppning registreras, läs [När registreras en e-post som öppnad?](https://support.emarketeer.com/knowledgebase/email-open/).

**Unsubscribed:** mottagaren klickade på avregistreringslänken i e-posten och slutförde sedan avregistreringen på eMarketeers Subscription Center-sida. En kontakt som klickar på länken men inte slutför avregistreringen räknas inte här.

**Clicked:** antalet mottagare som följde någon URL i e-posten. Det är vanligtvis ett länkklick, men att kopiera URL:en till en webbläsare manuellt räknas också.

## Procentberäkningar i widgetarna

Värdena i widgetarna baseras på hur många levererade kontakter som interagerade på ett visst sätt. I exemplet nedan skickades och levererades e-postkomponenten till 25 kontakter. 10 öppnade den, och 3 klickade på en länk.

![Exempel på e-postrapportens widgetar](../../../assets/email-report-explained/EmailReportWidgets.png)

Exempel på värden i e-postrapportens widgetar.

Beräkningarna använder unika kontakter, inte det totala antalet händelser. Om en enda kontakt fick samma e-post fyra gånger men bara öppnade en av dem räknas de som öppnad en gång för öppningsfrekvensen. De tre oöppnade kopiorna påverkar inte beräkningen.

**Open rate:** procentandelen levererad e-post som öppnades. I exemplet öppnade 10 av 25 levererade kontakter e-posten — 40 %.

**Click-through rate:** procentandelen levererad e-post där en länk klickades. I exemplet 3 av 25 — 12 %.

**Click-to-open rate:** procentandelen öppningar som också gav ett klick. I exemplet 3 av 10 — 30 %.

**Unsubscribed:** procentandelen levererad e-post där kontakten klickade på avregistreringslänken och avregistrerade sig i Subscription Center. I exemplet 0 av 25 — mindre än 1 %.

## Widget för utskickets hälsa

![Widget för utskickets hälsa](../../../assets/email-report-explained/Ska_CC_88rmavbild-2020-04-20-kl.-12.44.38.png)

Exempel på widget för utskickets hälsa.

Den här widgeten ger dig en snabb överblick av studsfrekvens och klagomålsfrekvens för e-postkomponenten. Gränserna anger hur stor andel studsar eller klagomål som tjänsteleverantörer kan acceptera innan de flaggar dina utskick som bedrägliga. För att upprätthålla våra säkerhetsstandarder kan ditt konto pausas för granskning om en gräns nås.

För mer om studsfrekvens, klagomålsfrekvens och hur du håller studsfrekvensen låg, läs [Om e-poststudsar](https://support.emarketeer.com/knowledgebase/about-email-bounces/).
