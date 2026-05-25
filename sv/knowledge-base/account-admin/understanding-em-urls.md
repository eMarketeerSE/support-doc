# Förstå eMarketeer-URL:er

eMarketeer använder flera typer av URL:er, och om du känner till dem kan du välja rätt länk i varje situation. Den här artikeln fokuserar på de URL:er du stöter på när du arbetar med formulärkomponenter.

### Publishing URL

Det här är den URL eMarketeer ger dig när du publicerar ett formulär. Alla med länken kan nå formuläret när som helst, så länge formulärkomponenten är aktiv och öppen för svar. Du känner vanligtvis igen den på parametern `&Origin`, som har standardvärdet `&Origin=Direct`.

![Exempel på en direkt publishing URL](../../../assets/understanding-em-urls/direct-URL.png)

Använd Publishing URL i nästan alla situationer — till exempel en länk i ett inlägg i sociala medier eller på din webbplats — där många olika personer ska kunna öppna formuläret.

När någon öppnar ett formulär via en Publishing URL omdirigeras de till en unik Session URL.

### Session URL

En Session URL är tillfällig och unik för varje besökare. Den skapas när någon öppnar ett formulär och fungerar som en anonym identifierare om de skickar in det. URL:en accepterar ett enda svar och löper ut efter 24 timmar, vad som än sker först. Du känner igen den på parametern `&sessid=`.

![Exempel på en session URL](../../../assets/understanding-em-urls/Session-URL.png)

Dela inte en Session URL som länk till formuläret — 24-timmarsgränsen och svarsbegränsningen gör den olämplig.

### Internal URL

Interna URL:er är dynamiska länkar mellan komponenter och filer inuti eMarketeer. De använder ID-nummer i stället för filsökvägar eller permanenta URL:er. Det gör att du kan flytta komponenter utan att länkar går sönder, och när du kopierar en kampanj uppdateras de duplicerade komponenternas URL:er så att de pekar på de nya kopiorna.

![En intern eMarketeer-URL](../../../assets/understanding-em-urls/2021-04-01-09_40_14-Window.png)

### Personalised URL

Personalised URLs används när du skickar en formulärlänk till kända kontakter via en eMarketeer Email-komponent. Svar från en Personalised URL kopplas automatiskt till kontakten, så besökaren behöver inte identifiera sig i formuläret. Personalised URLs ser ut ungefär som andra länkar i eMarketeer-mejl, så de är inte alltid lätta att se med blotta ögat.

![Exempel på en Personalised URL](../../../assets/understanding-em-urls/scramble-URL.png)

Använd en Personalised URL när formuläret är avsett för kända mottagare och du vill att svaren ska identifieras automatiskt — till exempel en inbjudan till ett möte eller event. Tänk på att alla svar som lämnas via länken registreras under den ursprungliga mottagarens namn, så vidarebefordrade mejl kan ge oväntade resultat.

### Anonymous URL

Anonymous URLs är ett alternativ till Personalised URLs i mejl. De låter flera personer svara på samma formulär, där varje svar registreras separat. En Anonymous URL fungerar som en Publishing URL men är specifik för mejl och är "forward-friendly". Anonymous och Personalised URLs ser likadana ut, så de är svåra att skilja åt med blotta ögat.
