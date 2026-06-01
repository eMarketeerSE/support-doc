---
icon: bookmark
---

# Ordlista

Termer som används i eMarketeers dokumentation, med definitioner som är specifika för hur eMarketeer använder dem.

## A

<details>

<summary>Adapter</summary>

I Signals API är adapter namnet på signalkällan. Fältet identifierar vilket system som skickade signalen, till exempel "Sleeknote" eller "Salesforce". Det visas på kontaktens tidslinje tillsammans med signalens kategori och gör det möjligt att filtrera engagemang efter källa.

</details>

## C

<details>

<summary>Category (Signals)</summary>

I Signals API är category ett fält som beskriver typen av engagemang som registreras. Exempel är "Newsletter signup" och "Sale closed". Kategorin visas på kontaktens tidslinje tillsammans med adapternamnet.

</details>

<details>

<summary>Component</summary>

Ett enskilt e-post, SMS, formulär eller en webbsida i en kampanj. Varje komponent har egna inställningar, utskickskonfiguration och rapport. Termen används genomgående i eMarketeer för att beteckna dessa enskilda delar i en kampanj.

</details>

## D

<details>

<summary>DCL</summary>

Dynamic Content Language. eMarketeers mallspråk för att lägga till villkorslogik och dynamiskt innehåll i e-post och formulär. DCL-uttryck skrivs inuti kodblock i e-postredigeraren.

</details>

<details>

<summary>DKIM</summary>

DomainKeys Identified Mail. En e-postautentiseringsstandard som lägger till en digital signatur på utgående meddelanden. eMarketeer signerar utgående e-post med DKIM för att hjälpa mottagarservrar att verifiera att meddelandena kommer från din domän.

</details>

<details>

<summary>DMARC</summary>

Domain-based Message Authentication, Reporting and Conformance. En policy som anger för mottagande e-postservrar vad de ska göra när SPF- eller DKIM-kontroller misslyckas. DMARC fungerar tillsammans med SPF och DKIM för att skydda din domän mot förfalskning.

</details>

## E

<details>

<summary>Engagement</summary>

En registrerad interaktion mellan en kontakt och ett innehåll. Engagemang visas på kontaktens tidslinje och omfattar öppningar, klick, formulärinskickningar, webbbesök och anpassade signaler. I eMarketeer avser termen specifikt dessa tidslinjeposter.

</details>

## F

<details>

<summary>Feedback loop</summary>

En mekanism där e-postklienter som Outlook eller Yahoo vidarebefordrar skräppostklagomål tillbaka till utskicksplattformen. eMarketeer bearbetar feedback loop-rapporter för att avprenumerera kontakter som markerar meddelanden som skräppost.

</details>

<details>

<summary>Filter</summary>

En sparad uppsättning kontaktkriterier för att segmentera kontakter vid rapportering eller utskick. Filter är dynamiska — de utvärderas på nytt varje gång de används och återspeglar alltid det aktuella tillståndet i din kontaktdatabas.

</details>

<details>

<summary>Formulär</summary>

En sida för att samla in kontaktdata, byggd med eMarketeers formulärredigerare. Ett formulär kan samla in nya kontakter, uppdatera befintliga kontaktfält och registrera samtycke. Formulär kan bäddas in på en webbplats eller länkas till från ett e-post.

</details>

## H

<details>

<summary>Händelsedata</summary>

Den strukturerade data som skickas med en anpassad signal via Signals API. Händelsedata kan innehålla valfri information om händelsen, till exempel produktdetaljer eller CRM-värden. Den lagras på engagemangsposten och visas på kontaktens tidslinje.

</details>

<details>

<summary>Hårt studs</summary>

Ett permanent e-postleveransfel, vanligtvis för att e-postadressen inte existerar eller att domänen är ogiltig. eMarketeer markerar kontakter med hårda studsar för att förhindra framtida utskick till dessa adresser.

</details>

## J

<details>

<summary>Journey</summary>

eMarketeers term för en automatiserad sekvens som skickar meddelanden eller utför åtgärder baserat på utlösare och villkor. Journeys bearbetar kontakter löpande när de uppfyller inträdeskriteriet. Blanda inte ihop med Kampanj — en Journey är ett automatiserat arbetsflöde, inte en behållare för utskick.

</details>

## K

<details>

<summary>Kampanj</summary>

En behållare i eMarketeer som grupperar relaterade e-postutskick, SMS, formulär och webbsidor. En kampanj är inte ett enskilt utskick — det är den organiserande enheten som håller komponenter och samlar in resultat från alla delar.

</details>

<details>

<summary>Kampanjkontakter</summary>

Fliken i en kampanj som listar alla kontakter som har interagerat med den kampanjen. En kontakt visas här när de tar emot ett e-post eller SMS, skickar in ett formulär, besöker en webbsida inom kampanjen, eller importeras direkt. Använd fliken för att granska aktivitet eller ta bort testkontakter.

</details>

<details>

<summary>Kontakt</summary>

En person lagrad i eMarketeers databas. eMarketeer använder "kontakt" konsekvent där andra verktyg kan säga prenumerant, lead, mottagare eller användare.

</details>

<details>

<summary>Kontaktens tidslinje</summary>

Den kronologiska historiken över en kontakts interaktioner, synlig på kontaktkortet. Tidslinjen visar e-postöppningar, klick, formulärinskickningar, webbbesök och anpassade signaler, var och en som en tidsstämplad engagemangspost.

</details>

<details>

<summary>Kontaktfält</summary>

En dataattribut på en kontaktpost, till exempel förnamn, e-postadress eller ett anpassat fält du definierar. Kontaktfält används i personalisering, filtrering och segmentering.

</details>

<details>

<summary>Konto</summary>

Användarens eMarketeer-prenumeration. "Konto" avser den översta organisationen som innehåller alla kontakter, kampanjer och inställningar. Andra verktyg kan kalla detta för workspace, organisation eller tenant.

</details>

## L

<details>

<summary>Lead</summary>

En kontakt som uppfyller de kvalificeringskriterier du definierar. Leadkvalificering är inte begränsad till leadpoängsättning — alla kontaktfilterkriterier kan användas. Kontakter som kvalificerar sig visas på Lead Board via en Lead Stream.

</details>

<details>

<summary>Lead Board</summary>

Det gränssnitt där kvalificerade leads visas och hanteras. Leads dyker upp på Lead Board när de uppfyller kriterierna för en Lead Stream. Säljteam använder Lead Board för att följa upp kontakter med höga poäng.

</details>

<details>

<summary>Lead Score</summary>

Ett numeriskt värde som tilldelas en kontakt baserat på profildata och beteende. Lead Scores beräknas av Score Sets och deras Score Rules. Ett högre poäng indikerar vanligtvis större köpintention eller profilmatchning.

</details>

<details>

<summary>Lead Stream</summary>

En automatiserad regeluppsättning som övervakar kontakter och levererar kvalificerade kontakter till Lead Board. Kontakter kan också läggas till i en Lead Stream direkt från en Journey via steget Create Lead.

</details>

<details>

<summary>Leverans</summary>

Att ett e-post accepteras av mottagarens e-postserver. Ett levererat e-post är inte nödvändigtvis öppnat eller sett — leverans bekräftar bara att servern inte studsade det.

</details>

<details>

<summary>Lokal lagring</summary>

Webbläsarbaserad lagring som används av eMarketeers Web Tracker för att känna igen återkommande besökare mellan sessioner. eMarketeer använder lokal lagring i stället för cookies för spårning, vilket påverkar hur spårning ska deklareras i cookiepolicys.

</details>

## M

<details>

<summary>Mall</summary>

En sparad komponentdesign som kan återanvändas som utgångspunkt för nya utskick eller formulär. Mallar lagrar layout, stilar och platshållare. Ändringar i en mall påverkar inte komponenter som redan använder den.

</details>

<details>

<summary>Mjukt studs</summary>

Ett tillfälligt e-postleveransfel, vanligtvis för att mottagarens inkorg är full eller att e-postservern tillfälligt är otillgänglig. eMarketeer spårar antalet mjuka studsar och undertrycker kontakter som upprepade gånger ger mjuka studsar.

</details>

<details>

<summary>MQL</summary>

Marketing Qualified Lead. En branschstandardterm för en kontakt som marknadsavdelningen har bedömt är redo att lämnas över till säljavdelningen. I eMarketeer blir en kontakt vanligtvis ett MQL när de når ett leadpoängsgränsvärde och visas på Lead Board.

</details>

## P

<details>

<summary>Personuppgifter</summary>

Enligt GDPR är personuppgifter all information som kan användas för att identifiera en fysisk person. I eMarketeer inkluderar personuppgifter kontaktfält som namn, e-postadress, telefonnummer och IP-adress. Du ansvarar för att hantera personuppgifter i enlighet med tillämplig lag.

</details>

<details>

<summary>Personuppgiftsbiträde</summary>

Enligt GDPR är ett personuppgiftsbiträde en organisation som behandlar personuppgifter på uppdrag av en personuppgiftsansvarig. eMarketeer agerar som personuppgiftsbiträde åt sina kunder, som är personuppgiftsansvariga.

</details>

<details>

<summary>Preheader</summary>

Den korta text som visas efter ämnesraden i många e-postklienter och mobila inkorgsförhandsgranskningar. Kallas även förhandsgranskningstext. Om ingen preheader anges visar en del klienter den första synliga texten i e-postmeddelandets brödtext i stället.

</details>

<details>

<summary>Prenumerationskategori</summary>

En gruppering av samtyckes- eller kommunikationspreferenser i eMarketeer. Kontakter kan prenumerera på eller avprenumerera från enskilda prenumerationskategorier, vilket möjliggör detaljerad samtyckeshantering för olika innehållstyper som nyhetsbrev, produktuppdateringar och evenemangs­inbjudningar.

</details>

## R

<details>

<summary>Recipient Source</summary>

Det alternativ du väljer när du adresserar ett e-post- eller SMS-utskick. Vanliga alternativ är ett kontaktfilter, en lista, ett specifikt segment eller "All contacts in this campaign." Recipient source avgör vilka kontakter som tar emot utskicket.

</details>

<details>

<summary>Rättslig grund</summary>

Den GDPR-definierade anledningen till att behandla en kontakts personuppgifter. eMarketeer lagrar en rättslig grund per kontakt och per datatyp. Vanliga rättsliga grunder är samtycke och berättigat intresse.

</details>

## S

<details>

<summary>Samtycke</summary>

En kontakts uttryckliga medgivande att ta emot kommunikation från dig. eMarketeer lagrar en samtyckespost per kontakt, inklusive den samtyckestext som visades och tidsstämpeln. Krävs enligt GDPR för marknadsföringskommunikation.

</details>

<details>

<summary>Score rule</summary>

Ett enskilt kriterium i ett Score Set som lägger till eller drar ifrån poäng från en kontakts leadspoäng. Varje regel riktar sig mot ett specifikt beteende eller profilattribut, till exempel "e-post öppnat: +5 poäng."

</details>

<details>

<summary>Score set</summary>

En behållare som grupperar relaterade Score Rules och producerar ett enda leadspoängsvärde för en kontakt. En kontakt kan ha poäng från flera Score Sets. Score Set definierar vad som mäts och Score Rules definierar hur poäng tjänas.

</details>

<details>

<summary>Sender ID</summary>

Det namn eller nummer som visas som avsändare av ett SMS-meddelande. Ett alfanumeriskt Sender ID visar ett textnamn som ditt företagsnamn; ett numeriskt Sender ID är ett telefonnummer. Stöd för Sender ID och teckenbegränsningar varierar per land.

</details>

<details>

<summary>Signals</summary>

eMarketeers system för engagemangshändelser. En signal är en strukturerad interaktionshändelse som skickas till en kontakts tidslinje via Signals API och representerar aktivitet som skett i ett externt system. Signaler kan innehålla anpassad händelsedata och utlösa Journeys. Se även: Adapter, Category (Signals).

</details>

<details>

<summary>Studs</summary>

Ett e-post som inte kunde levereras till mottagarens adress. Studsar delas in i hårda studsar (permanenta fel) och mjuka studsar (tillfälliga fel). Se även: Hårt studs, Mjukt studs.

</details>

## T

<details>

<summary>Tagg</summary>

En etikett som appliceras på en kontakt eller kampanj för segmenterings- och organisationsändamål. Taggar är friforma och kan läggas till eller tas bort när som helst. Flera taggar kan appliceras på samma kontakt eller kampanj.

</details>

## U

<details>

<summary>UTM-parameter</summary>

En frågesträngs­tagg som läggs till i en URL för att spåra trafik i analysverktyg som Google Analytics. eMarketeer kan automatiskt lägga till UTM-parametrar på e-postlänkar. Standardparametrar är utm\_source, utm\_medium, utm\_campaign, utm\_content och utm\_term.

</details>

## W

<details>

<summary>Web Tracker</summary>

Ett JavaScript-kodstycke från eMarketeer för installation på din webbplats. När det väl är installerat registrerar det sidbesök som engagemangshändelser på identifierade kontakters tidslinjer och stödjer retrospektiv spårning för besökare som identifieras senare.

</details>

<details>

<summary>Webhook</summary>

En HTTP-callback som skickar data från ett system till ett annat när en händelse inträffar. Du kan använda en webhook för att skicka kontaktdata eller engagemangshändelser till eMarketeer — till exempel från ett formulärverktyg eller CRM. Se guiden för Zapier-integrationen för ett genomarbetat exempel.

</details>

## Ö

<details>

<summary>Öppning</summary>

En registrerad instans av att en kontakt laddar ett e-post. Öppningar spåras via en 1×1 pixel-bild inbäddad i e-postmeddelandet och registreras när mottagarens e-postklient laddar bilder. Förhämtning eller bildblockering hos vissa e-postklienter kan påverka öppningsspårningens noggrannhet.

</details>
