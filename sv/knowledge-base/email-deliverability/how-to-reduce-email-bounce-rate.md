---
description: >-
  Praktiska sätt att hålla studsfrekvensen låg: hur du samlar in, kontrollerar
  och underhåller adresser, och vilka verktyg i eMarketeer som hjälper dig.
---

# Så minskar du studsfrekvensen för e-post

Den här guiden tar upp praktiska sätt att hålla studsfrekvensen låg, både generellt och med verktygen i eMarketeer.

En låg studsfrekvens skyddar ditt avsändarrykte, så att fler av dina e-postmeddelanden når inkorgen. Om din genomsnittliga studsfrekvens går över 5 % pausar eMarketeer dina utskick för granskning. Läs [Om studsar och klagomål i e-post](about-email-bounces.md) för att lära dig vad en studs är.

## Var studsar kommer ifrån

De flesta studsar har någon av de här orsakerna:

* **Adresser som aldrig fungerat.** Stavfel vid registrering, påhittade adresser och adresser som botar har fyllt i.
* **Adresser som slutat fungera.** Folk byter jobb, företag byter domän och gamla brevlådor stängs. En B2B-lista blir inaktuell snabbare än de flesta tror.
* **Tillfälliga problem.** En full brevlåda eller en e-postserver som inte svarar. Sådana mjuka studsar går ofta över av sig själva.
* **E-post som mottagarservern vägrar ta emot.** En server kan avvisa e-post från en avsändare den inte litar på, till exempel när avsändardomänen inte är autentiserad.

## Det här gör eMarketeer redan åt dig

eMarketeer utesluter adresser som den vet är dåliga. En adress markeras som ej levererbar efter en hård studs eller tre mjuka studsar, och eMarketeer skickar inte till den igen. Adresser med ogiltig syntax blockeras när du importerar från en fil eller ett CRM.

Det eMarketeer inte kan veta är om en ny adress fungerar. Alla metoder nedan handlar om att hindra dåliga adresser från att hamna i dina utskick från början.

## Samla in adresser med samtycke, via dina egna formulär

De säkraste adresserna är de som folk själva ger dig. Samla in dem med ett eMarketeer-formulär på din webbplats, och be om samtycke till att skicka e-post.

Köp eller hyr aldrig en kontaktlista. Köpta listor är fulla av inaktuella adresser och spamfällor, det vill säga gamla adresser som e-postleverantörer använder för att avslöja slarviga avsändare. Ett enda utskick till en köpt lista kan räcka för att du ska passera gränsen för paus.

## Bekräfta nya adresser med double opt-in

Med [double opt-in](../gdpr-consent/double-opt-in.md) bekräftar en ny kontakt sin adress genom att klicka på en länk i ett bekräftelsemejl. Stavfel och falska adresser kommer aldrig in på din lista, eftersom ingen klickar på länken.

## Skicka ett välkomstmejl direkt

Skicka ett välkomstmejl så snart någon registrerar sig. Om adressen är fel studsar mejlet direkt, och eMarketeer markerar adressen som ej levererbar före din nästa kampanj. En kontakt som just registrerat sig öppnar dessutom oftare mejlet, vilket hjälper ditt rykte.

## Kontrollera gamla listor innan du importerar dem

En lista som inte fått e-post på ett år eller mer är den vanligaste orsaken till en plötslig ökning av studsar.

Innan du importerar kontakter från ett annat verktyg eller ett gammalt kalkylark:

* Utelämna adresser som studsat eller avregistrerat sig i det gamla verktyget. eMarketeer känner inte till dem.
* Om du inte vet var listan kommer ifrån eller hur gammal den är, kör den genom en tjänst för e-postverifiering först.
* Skicka först till de kontakter som varit aktiva senast. Kontrollera studsfrekvensen innan du skickar till resten.

## Håll dina CRM-data uppdaterade

Om du synkar kontakter från ett CRM är det CRM:et som avgör vilka som hamnar i dina utskick. När en person lämnar ett företag uppdaterar eller tar du bort personen i CRM:et, så att den gamla adressen inte fortsätter att dyka upp.

## Sluta skicka till kontakter som inte engagerar sig

Adresser som aldrig öppnar dina mejl är ofta övergivna brevlådor. Med tiden blir de hårda studsar eller spamfällor.

* I steg 2 av utskicket använder du [Exkludera inaktiva mottagare](../../documentation/email-sms/exclude-inactive-recipients.md) för att utesluta kontakter som inte öppnat eller klickat på 12 månader.
* Bygg en Journey som skickar ett återengageringsmejl till inaktiva kontakter. Om de fortfarande inte svarar flyttar du dem till en annan lista eller avregistrerar dem.

## Autentisera din avsändardomän

Mottagarservrar litar på e-post från en autentiserad domän. [Lägg till din e-postdomän](authorize-email-domain.md) och konfigurera [SPF](spf-setup.md), [DKIM](dkim-setup.md) och [DMARC](dmarc-setup.md), så att dina mejl inte avvisas som opålitliga.

## Följ upp efter varje utskick

Gör det till en vana att kontrollera studsarna efter varje utskick, medan orsaken fortfarande är lätt att hitta.

1. Öppna e-postrapporten och kontrollera studsfrekvensen.
2. Klicka på antalet **Bounced** för att se vilka kontakter som studsade. Klicka på en kontakt för att läsa studsmeddelandet på kontaktkortet. Se [Identifiera varför ett e-postmeddelande inte togs emot](identify-email-not-recieved.md).
3. Leta efter mönster: många studsar på en domän, en företagsdomän som inte längre finns eller felstavade domäner som `gmial.com`. Rätta de adresser du vet är fel.

Följ utvecklingen över tid i domäntabellen i [E-posthälsa](emailhealthdashboard.md). Läs [Så här rensar du dina kontakter](../contacts-lists/clean-up-contacts.md) för att ta bort kontakter som inte är levererbara.
