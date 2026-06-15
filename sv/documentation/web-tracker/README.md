---
description: >-
  eMarketeers Web Tracker registrerar besökarnas källor och beteendet hos
  enskilda kontakter på din webbplats.
---

# Web Tracker

Med trackern installerad kan du:

- Fylla på marknadsföringsöversiktens dashboard
- Spåra identifierade kontakter på din webbplats
- Integrera med din webbplats samtyckesbanner
- Spåra varifrån dina kontakter kommer

Redo att installera skriptet på din webbplats? [Se installationsanvisningarna](installing-the-web-tracker-script-on-your-website.md). Du får bäst resultat när du också [installerar eMarketeers Formulär](../forms/publish-a-form.md) på din webbplats för konverteringar.

## Så fungerar trackern

Med eMarketeers tracker-skript på din webbplats får du data om var dina besökare kommer ifrån, från källa ner till kampanjnivå. När en kontakt konverterar via ett eMarketeer-formulär får du även historiska besöksdata och framtida sessioner för den kontakten. När en kontakt besöker din webbplats genom att klicka på en länk i ett eMarketeer-e-postmeddelande identifieras besöket omedelbart och loggas i eMarketeer.

Du får veta vilka kampanjer och källor som driver flest konverteringar på din webbplats, med retroaktiva webbesöksdata från konverterade leads och fullständig besökshistorik på dina kontakter.

Trackern fungerar med de vanligaste tjänsterna för cookie-samtycke och spårar endast besökare som ger samtycke.

### Vad vi spårar

När en identifierad kontakt besöker din webbplats lagrar vi:

- Sessioner och sid-URL:er
- UTM-parametrar för kampanjspårning
- Hänvisande webbplats
- Tid på webbplatsen
- Kontaktens identitet
- Samtycke för spårning

### Så identifieras en kontakt på webbplatsen

Det finns två sätt att identifiera en kontakt på din webbplats.

- Klick på en länk i ett eMarketeer-e-postmeddelande. Om länken går till din webbplats där trackern är installerad identifieras kontakten.
- Inskick av ett inbäddat [eMarketeer-formulär](../forms/publish-a-form.md) på din webbplats. När formuläret skickas in med kontaktuppgifter lagras en identifierare i besökarens webbläsare.

### Retroaktiv spårning

Det finns två viktiga händelser på din webbplats:

1. Besökaren ger marknadsföringssamtycke för spårning, vanligtvis vid första besöket.
2. Kontakten identifieras via ett e-postmeddelande eller ett formulärsinskick.

När kontakten är identifierad lagrar eMarketeer all spårningsdata från och med tidpunkten då samtycket gavs.

**Exempel:**

En besökare kommer först anonymt in på din webbplats via en Google-sökning och ger samtycke i din cookie-banner. Efter några sidor lämnar besökaren webbplatsen. Vid denna tidpunkt lagras besöket i webbläsarens lokala lagring och inget skickas till eMarketeer. Besökaren återvänder några gånger och skickar till slut in ett formulär på din webbplats. När formuläret skickas in och besökaren identifieras lagras all besöksdata från och med tidpunkten då spårningssamtycket gavs.

Det innebär att när ett formulär skickas in får du också den ursprungliga källan och de webbesök som ledde fram till konverteringen. Använd detta för att se vilka av dina marknadsföringsinsatser som driver flest konverteringar.

## Teknisk förklaring av Web Tracker

Spårningsskriptet använder inte cookies. Istället använder det lokal lagring i besökarens webbläsare. Detta gör det enklare att vara GDPR-kompatibel, av dessa skäl:

- Lokal lagring är inte tvärdomänad. Data som spåras på din webbplats kan inte läsas på andra webbplatser, vilket är vad många cookie-blockerare och policyer syftar till att förhindra.
- Webbläsare blockerar allt mer tredjepartscookies för att förhindra spårning över domäner. Trackern påverkas inte av detta.
- Data i lokal lagring skickas inte till servern vid varje sidförfrågan, till skillnad från cookies.

## Rekommendationer för GDPR och integritetspolicy

Även om eMarketeers Web Tracker inte använder cookies är funktionens syfte att spåra besökare på din webbplats där kontakten kan identifieras. Detta kräver samtycke från besökaren för att följa GDPR.

### Cookie-banner

Samtycke ska hanteras av din cookie-samtyckesbanner under kategorin Marknadsföring. Innan besökaren ger detta samtycke får eMarketeer ingen information från Web Tracker.

### Uppdateringar av integritetspolicy

Nedan finns ett föreslaget tillägg till din integritetspolicy när du använder eMarketeers Web Tracker.

* * *

**_Webbspårning och analys_**
_Vi använder ett spårningssystem från eMarketeer för att förstå hur besökare interagerar med vår webbplats och för att förbättra vår kommunikation med kunder. Detta avsnitt förklarar hur denna spårning fungerar och dina valmöjligheter rörande den._

**_Så spårar vi webbplatsbesökare_**
_Om du klickar på en länk i ett e-postmeddelande vi skickar kan vi identifiera ditt besök på vår webbplats och koppla det till din befintliga kontaktprofil i vårt system._

_Om du besöker vår webbplats anonymt kan vi tillfälligt lagra besökshistorik (som visade sidor, UTM-parametrar och hänvisningsinformation) i din webbläsares lokala lagring. Denna data förblir anonym tills du senare skickar in ett formulär._

_När du skickar in ett formulär kan din tidigare besökshistorik kopplas till ditt inskick för att hjälpa oss förbättra vår tjänst och kommunikation._

**_Vilken data lagrar vi?_**
_Vi använder inte cookies för denna spårning. Istället använder vi lokal lagring, som sparar information på din enhet utan att överföra den till externa servrar om du inte interagerar med vår webbplats._

_Lagrad data kan inkludera sidbesökshistorik, hänvisningsinformation och e-postidentifierare (där tillämpligt)._

**_Dina integritetsval_**
_Webbspårning startar först efter att du accepterar vår banner för spårningssamtycke._

_Du kan rensa dina spårningsdata när som helst genom att ta bort lokal lagring i webbläsarens inställningar._

_Om du vill välja bort e-postspårning kan du avregistrera dig från våra utskick eller justera dina preferenser via länken i e-postsidfoten._

* * *
