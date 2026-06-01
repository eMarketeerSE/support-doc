# Ordlista

Termer som används i eMarketeers dokumentation, med definitioner som är specifika för hur eMarketeer använder dem.

<!--
FORMATERINGSGUIDE FÖR DENNA ORDLISTA
──────────────────────────────────────
Struktur per bokstavsgrupp:
  ## A              ← H2 bokstavsrubrik — visas i "On this page"-widgeten
                      Lägg till en per begynnelsebokstav. Hoppa över bokstäver utan poster.

  {% expand "Term" %}
  Definition här. 1–3 meningar, presens, aktiv form, du-tilltal.
  {% endexpand %}

Alla termer inom en bokstavsgrupp ska vara i strikt alfabetisk ordning.
Termen sorteras och grupperas efter hur den STAVAS i ordlistan (svenska termer
efter sin svenska stavning, engelska UI-etiketter efter sin engelska stavning).

Så här lägger du till en ny term:
  1. Hitta rätt bokstavsgrupp i den här filen och i glossary.md (engelska).
     Lägg till en ny ## rubrik om bokstaven inte finns än.
  2. Infoga termen i alfabetisk ordning inom gruppen.
  3. Använd den här mallen:

     {% expand "Termnamn" %}
     Definition här.
     {% endexpand %}

  4. Spegla posten i glossary.md med en engelsk definition.
     Använd den svenska termen som expand-titel där en svensk motsvarighet finns
     (se sv/CLAUDE.md:s ordlista). Behåll den engelska titeln för UI-etiketter,
     produktnamn och tekniska förkortningar.
-->

## A

{% expand "Adapter" %}
I Signals API är adapter namnet på signalkällan. Fältet identifierar vilket system som skickade signalen, till exempel "Sleeknote" eller "Salesforce". Det visas på kontaktens tidslinje tillsammans med signalens kategori och gör det möjligt att filtrera engagemang efter källa.
{% endexpand %}

## C

{% expand "Category (Signals)" %}
I Signals API är category ett fält som beskriver typen av engagemang som registreras. Exempel är "Newsletter signup" och "Sale closed". Kategorin visas på kontaktens tidslinje tillsammans med adapternamnet.
{% endexpand %}

{% expand "Component" %}
Ett enskilt e-post, SMS, formulär eller en webbsida i en kampanj. Varje komponent har egna inställningar, utskickskonfiguration och rapport. Termen används genomgående i eMarketeer för att beteckna dessa enskilda delar i en kampanj.
{% endexpand %}

## D

{% expand "DCL" %}
Dynamic Content Language. eMarketeers mallspråk för att lägga till villkorslogik och dynamiskt innehåll i e-post och formulär. DCL-uttryck skrivs inuti kodblock i e-postredigeraren.
{% endexpand %}

{% expand "DKIM" %}
DomainKeys Identified Mail. En e-postautentiseringsstandard som lägger till en digital signatur på utgående meddelanden. eMarketeer signerar utgående e-post med DKIM för att hjälpa mottagarservrar att verifiera att meddelandena kommer från din domän.
{% endexpand %}

{% expand "DMARC" %}
Domain-based Message Authentication, Reporting and Conformance. En policy som anger för mottagande e-postservrar vad de ska göra när SPF- eller DKIM-kontroller misslyckas. DMARC fungerar tillsammans med SPF och DKIM för att skydda din domän mot förfalskning.
{% endexpand %}

## E

{% expand "Engagement" %}
En registrerad interaktion mellan en kontakt och ett innehåll. Engagemang visas på kontaktens tidslinje och omfattar öppningar, klick, formulärinskickningar, webbbesök och anpassade signaler. I eMarketeer avser termen specifikt dessa tidslinjeposter.
{% endexpand %}

{% expand "Explicit poängsättning" %}
Regler för leadpoängsättning som baseras på profildata som företagsstorlek, befattning eller bransch. Explicit poängsättning återspeglar vem en kontakt är. Jämför med implicit poängsättning.
{% endexpand %}

## F

{% expand "Feedback loop" %}
En mekanism där e-postklienter som Outlook eller Yahoo vidarebefordrar skräppostklagomål tillbaka till utskicksplattformen. eMarketeer bearbetar feedback loop-rapporter för att avprenumerera kontakter som markerar meddelanden som skräppost.
{% endexpand %}

{% expand "Filter" %}
En sparad uppsättning kontaktkriterier för att segmentera kontakter vid rapportering eller utskick. Filter är dynamiska — de utvärderas på nytt varje gång de används och återspeglar alltid det aktuella tillståndet i din kontaktdatabas.
{% endexpand %}

{% expand "Formulär" %}
En sida för att samla in kontaktdata, byggd med eMarketeers formulärredigerare. Ett formulär kan samla in nya kontakter, uppdatera befintliga kontaktfält och registrera samtycke. Formulär kan bäddas in på en webbplats eller länkas till från ett e-post.
{% endexpand %}

## H

{% expand "Händelsedata" %}
Den strukturerade data som skickas med en anpassad signal via Signals API. Händelsedata kan innehålla valfri information om händelsen, till exempel produktdetaljer eller CRM-värden. Den lagras på engagemangsposten och visas på kontaktens tidslinje.
{% endexpand %}

{% expand "Hårt studs" %}
Ett permanent e-postleveransfel, vanligtvis för att e-postadressen inte existerar eller att domänen är ogiltig. eMarketeer markerar kontakter med hårda studsar för att förhindra framtida utskick till dessa adresser.
{% endexpand %}

## I

{% expand "Implicit poängsättning" %}
Regler för leadpoängsättning som baseras på beteendedata som e-postöppningar, länkklick och webbbesök. Implicit poängsättning återspeglar hur engagerad en kontakt är. Jämför med explicit poängsättning.
{% endexpand %}

## J

{% expand "Journey" %}
eMarketeers term för en automatiserad sekvens som skickar meddelanden eller utför åtgärder baserat på utlösare och villkor. Journeys bearbetar kontakter löpande när de uppfyller inträdeskriteriet. Blanda inte ihop med Kampanj — en Journey är ett automatiserat arbetsflöde, inte en behållare för utskick.
{% endexpand %}

## K

{% expand "Kampanj" %}
En behållare i eMarketeer som grupperar relaterade e-postutskick, SMS, formulär och webbsidor. En kampanj är inte ett enskilt utskick — det är den organiserande enheten som håller komponenter och samlar in resultat från alla delar.
{% endexpand %}

{% expand "Kampanjkontakter" %}
Fliken i en kampanj som listar alla kontakter som har interagerat med den kampanjen. En kontakt visas här när de tar emot ett e-post eller SMS, skickar in ett formulär, besöker en webbsida inom kampanjen, eller importeras direkt. Använd fliken för att granska aktivitet eller ta bort testkontakter.
{% endexpand %}

{% expand "Kontakt" %}
En person lagrad i eMarketeers databas. eMarketeer använder "kontakt" konsekvent där andra verktyg kan säga prenumerant, lead, mottagare eller användare.
{% endexpand %}

{% expand "Kontaktens tidslinje" %}
Den kronologiska historiken över en kontakts interaktioner, synlig på kontaktkortet. Tidslinjen visar e-postöppningar, klick, formulärinskickningar, webbbesök och anpassade signaler, var och en som en tidsstämplad engagemangspost.
{% endexpand %}

{% expand "Kontaktfält" %}
En dataattribut på en kontaktpost, till exempel förnamn, e-postadress eller ett anpassat fält du definierar. Kontaktfält används i personalisering, filtrering och segmentering.
{% endexpand %}

{% expand "Konto" %}
Användarens eMarketeer-prenumeration. "Konto" avser den översta organisationen som innehåller alla kontakter, kampanjer och inställningar. Andra verktyg kan kalla detta för workspace, organisation eller tenant.
{% endexpand %}

## L

{% expand "Lead" %}
En kontakt som har nått ett kvalificeringsgränsvärde som definieras av din leadpoängsättning. Inte alla kontakter är leads — beteckningen gäller först när en kontakts poäng uppfyller de kriterier du har definierat.
{% endexpand %}

{% expand "Lead Board" %}
Det gränssnitt där kvalificerade leads visas och hanteras. Leads dyker upp på Lead Board när de uppfyller kriterierna för en Lead Stream. Säljteam använder Lead Board för att följa upp kontakter med höga poäng.
{% endexpand %}

{% expand "Lead Score" %}
Ett numeriskt värde som tilldelas en kontakt baserat på profildata och beteende. Lead Scores beräknas av Score Sets och deras Score Rules. Ett högre poäng indikerar vanligtvis större köpintention eller profilmatchning.
{% endexpand %}

{% expand "Lead Stream" %}
En automatiserad regeluppsättning som övervakar kontakter och levererar kvalificerade kontakter till Lead Board. En Lead Stream definierar de kriterier en kontakt måste uppfylla för att visas som ett lead. Trots namnet är det inte en lista eller ett filter — det är en löpande kvalificeringsmotor.
{% endexpand %}

{% expand "Leverans" %}
Att ett e-post accepteras av mottagarens e-postserver. Ett levererat e-post är inte nödvändigtvis öppnat eller sett — leverans bekräftar bara att servern inte studsade det.
{% endexpand %}

{% expand "Lokal lagring" %}
Webbläsarbaserad lagring som används av eMarketeers Web Tracker för att känna igen återkommande besökare mellan sessioner. eMarketeer använder lokal lagring i stället för cookies för spårning, vilket påverkar hur spårning ska deklareras i cookiepolicys.
{% endexpand %}

## M

{% expand "Mall" %}
En sparad e-post- eller formulärdesign som kan återanvändas som utgångspunkt för nya utskick eller formulär. Mallar lagrar layout, stilar och platshållare. Ändringar i en mall påverkar inte komponenter som redan använder den.
{% endexpand %}

{% expand "Mjukt studs" %}
Ett tillfälligt e-postleveransfel, vanligtvis för att mottagarens inkorg är full eller att e-postservern tillfälligt är otillgänglig. eMarketeer spårar antalet mjuka studsar och kan undertrycka adresser som upprepade gånger ger mjuka studsar.
{% endexpand %}

{% expand "MQL" %}
Marketing Qualified Lead. En branschstandardterm för en kontakt som marknadsavdelningen har bedömt är redo att lämnas över till säljavdelningen. I eMarketeer blir en kontakt vanligtvis ett MQL när de når ett leadpoängsgränsvärde och visas på Lead Board.
{% endexpand %}

## P

{% expand "Personuppgifter" %}
Enligt GDPR är personuppgifter all information som kan användas för att identifiera en fysisk person. I eMarketeer inkluderar personuppgifter kontaktfält som namn, e-postadress, telefonnummer och IP-adress. Du ansvarar för att hantera personuppgifter i enlighet med tillämplig lag.
{% endexpand %}

{% expand "Personuppgiftsbiträde" %}
Enligt GDPR är ett personuppgiftsbiträde en organisation som behandlar personuppgifter på uppdrag av en personuppgiftsansvarig. eMarketeer agerar som personuppgiftsbiträde åt sina kunder, som är personuppgiftsansvariga.
{% endexpand %}

{% expand "Preheader" %}
Den korta text som visas efter ämnesraden i många e-postklienter och mobila inkorgsförhandsgranskningar. Kallas även förhandsgranskningstext. Om ingen preheader anges visar en del klienter den första synliga texten i e-postmeddelandets brödtext i stället.
{% endexpand %}

{% expand "Prenumerationskategori" %}
En gruppering av samtyckes- eller kommunikationspreferenser i eMarketeer. Kontakter kan prenumerera på eller avprenumerera från enskilda prenumerationskategorier, vilket möjliggör detaljerad samtyckeshantering för olika innehållstyper som nyhetsbrev, produktuppdateringar och evenemangs­inbjudningar.
{% endexpand %}

## R

{% expand "Recipient Source" %}
Det alternativ du väljer när du adresserar ett e-post- eller SMS-utskick. Vanliga alternativ är ett kontaktfilter, en lista, ett specifikt segment eller "All contacts in this campaign." Recipient source avgör vilka kontakter som tar emot utskicket.
{% endexpand %}

{% expand "Retrospektiv spårning" %}
En funktion i Web Tracker som kopplar tidigare anonyma webbbesök till en kontakt som identifieras senare i samma session eller webbläsare. Om en besökare skickar in ett formulär efter att ha bläddrat på flera sidor kan eMarketeer retroaktivt länka de tidigare sidbesöken till den nu identifierade kontakten.
{% endexpand %}

{% expand "Rättslig grund" %}
Den GDPR-definierade anledningen till att behandla en kontakts personuppgifter. eMarketeer lagrar en rättslig grund per kontakt och per datatyp. Vanliga rättsliga grunder är samtycke och berättigat intresse.
{% endexpand %}

## S

{% expand "Samtycke" %}
En kontakts uttryckliga medgivande att ta emot kommunikation från dig. eMarketeer lagrar en samtyckespost per kontakt, inklusive den samtyckestext som visades och tidsstämpeln. Krävs enligt GDPR för marknadsföringskommunikation.
{% endexpand %}

{% expand "Score rule" %}
Ett enskilt kriterium i ett Score Set som lägger till eller drar ifrån poäng från en kontakts leadspoäng. Varje regel riktar sig mot ett specifikt beteende eller profilattribut, till exempel "e-post öppnat: +5 poäng."
{% endexpand %}

{% expand "Score set" %}
En behållare som grupperar relaterade Score Rules och producerar ett enda leadspoängsvärde för en kontakt. En kontakt kan ha poäng från flera Score Sets. Score Set definierar vad som mäts och Score Rules definierar hur poäng tjänas.
{% endexpand %}

{% expand "Sender ID" %}
Det namn eller nummer som visas som avsändare av ett SMS-meddelande. Ett alfanumeriskt Sender ID visar ett textnamn som ditt företagsnamn; ett numeriskt Sender ID är ett telefonnummer. Stöd för Sender ID och teckenbegränsningar varierar per land.
{% endexpand %}

{% expand "Signals" %}
eMarketeers system för engagemangshändelser. En signal är en strukturerad interaktionshändelse som skickas till en kontakts tidslinje via Signals API och representerar aktivitet som skett i ett externt system. Signaler kan innehålla anpassad händelsedata och utlösa Journeys. Se även: Adapter, Category (Signals).
{% endexpand %}

{% expand "Studs" %}
Ett e-post som inte kunde levereras till mottagarens adress. Studsar delas in i hårda studsar (permanenta fel) och mjuka studsar (tillfälliga fel). Se även: Hårt studs, Mjukt studs.
{% endexpand %}

## T

{% expand "Tagg" %}
En etikett som appliceras på en kontakt för segmenteringsändamål. Taggar är friforma och kan läggas till eller tas bort utan att ändra strukturerade kontaktfält. Flera taggar kan appliceras på samma kontakt.
{% endexpand %}

## U

{% expand "UTM-parameter" %}
En frågesträngs­tagg som läggs till i en URL för att spåra trafik i analysverktyg som Google Analytics. eMarketeer kan automatiskt lägga till UTM-parametrar på e-postlänkar. Standardparametrar är utm_source, utm_medium, utm_campaign, utm_content och utm_term.
{% endexpand %}

## W

{% expand "Web Tracker" %}
Ett JavaScript-kodstycke från eMarketeer för installation på din webbplats. När det väl är installerat registrerar det sidbesök som engagemangshändelser på identifierade kontakters tidslinjer och stödjer retrospektiv spårning för besökare som identifieras senare.
{% endexpand %}

{% expand "Webhook" %}
En HTTP-callback som skickar data från ett system till ett annat när en händelse inträffar. Du kan använda en webhook för att skicka kontaktdata eller engagemangshändelser till eMarketeer — till exempel från ett formulärverktyg eller CRM. Se guiden för Zapier-integrationen för ett genomarbetat exempel.
{% endexpand %}

## Ö

{% expand "Öppning" %}
En registrerad instans av att en kontakt laddar ett e-post. Öppningar spåras via en 1×1 pixel-bild inbäddad i e-postmeddelandet och registreras när mottagarens e-postklient laddar bilder. Förhämtning eller bildblockering hos vissa e-postklienter kan påverka öppningsspårningens noggrannhet.
{% endexpand %}
