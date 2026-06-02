# Mallfunktioner

Den här artikeln täcker mallfunktionerna i DCL, språket bakom eMarketeers Dynamic Content Engine (DCE). DCE komponerar strukturerade layouter från nästlade kodbitar som kallas block.

DCE använder nästlade kodbitar (block) för att uppnå en strukturerad layout. Underordnade block kan infogas manuellt av sitt överordnade block, eller de kan "flödas" ut vid en specifik punkt i det överordnade blocket.

I eMarketeer kallas dessa block för Container Blocks. Ett Container Block kan ha HTML-kod och kan ha underordnade block. Det finns också andra block som Text, Image och Link Blocks, som inte inkluderar HTML men fortfarande kan använda delar av DCL. För att skapa block i eMarketeer, öppna HTML-editorn i utvecklarläge och använd gränssnittet för att lägga till block. För att ändra ordningen på flödade block, använd dra och släpp i eMarketeer-gränssnittet.

## Infoga block

För att infoga ett underordnat block, använd funktionen `insert_block`.

```
<div id="child">
	<% insert_block name="child_block" [onlypos="first,middle,last"] %>
</div>
```

Den valfria parametern `onlypos` är ett flödeskontrollargument och kan ignoreras tills vidare. Det underordnade blocket börjar rendera vid positionen i koden. Taggen `<div>` är inte obligatorisk; den visas för demonstration.

## Infoga kod

Det finns en funktion för att infoga HTML-kod i DCE. Det kan verka överflödigt eftersom du kan skriva HTML direkt i editorn, men den här funktionen ger dig villkorlig kontroll och argumentet `onlypos` för flödeskontroll.

```
<% insert_code code="<b>Hello World</b>"
	[onlypos="first,middle,last"]
	[notempty=String]
	[empty=String]
%>
```

`onlypos` täcks inte vidare här. `empty` och `notempty` är villkorliga argument. De infogar koden endast om strängen i argumentet är tom eller inte tom.

## Flödeskontroll

DCE har funktioner för att flöda innehåll in i det resulterande dokumentet. Att flöda betyder att du inte explicit infogar ett block med `insert_block`. När containern renderas och dess barn inte är renderat, renderar blocket alla sina orenderade barn efter sitt eget innehåll.

I eMarketeer öppnar du inställningarna på ett containerblock och markerar det som ett flow-block så att barnen flödar automatiskt. Detta gör också gränssnittet drag-och-släpp-medvetet i det blocket, så att du kan omordna barnen.

Du kan ändra var flödet sker. Som standard är det efter blockets eget innehåll, men du kan flytta det. I exemplet nedan sker flödet i `after-this`-div:en.

```
<div id="after-this">
	<% insert_block flow="true" %>
</div>
```

Ett barn är medvetet om sin position i flödet och kan ändra sitt innehåll baserat på det. Ett barn vet om det är infogat först, mitt eller sist i flödet. Tänk på detta som ett flöde uppifrån och ner.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Number of Blocks</td><td></td><td></td><td></td></tr><tr><td valign="top">1 Block</td><td valign="top">Only block, considers itself first and last</td><td></td><td></td></tr><tr><td valign="top">2 Blocks</td><td valign="top">Top block considers itself first</td><td valign="top">Bottom block considers itself last</td><td></td></tr><tr><td valign="top">3 Blocks or more</td><td valign="top">Top block considers itself first</td><td valign="top">All blocks but top and bottom considers themselves middle</td><td valign="top">Bottom block considers itself last</td></tr></tbody></table>

Funktionerna `insert_block` och `insert_code` tar argumentet `onlypos`, som infogar kod endast om positionen i flödet matchar. Om du använder `onlypos` är rendering avstängd som standard tills en matchning hittas. Positionerna i argumentet `onlypos` är en kommaseparerad lista av `first`, `middle` eller `last`. De tolkas från vänster till höger, och ett block renderar om ett block som anser sig vara först stöter på ett `first` i argumentet. För att undertrycka rendering, använd `!` före positionen. Betrakta denna kod:

```
<% insert_code code="<hr />" onlypos="middle,last,!first" %>
```

Tabellen nedan förklarar vad som händer med block när de stöter på denna specifika kod.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Number of Blocks</td><td></td><td></td><td></td></tr><tr><td valign="top">1 Block</td><td valign="top">Only block, although "last" matches and would render, "!first" also matches and turns rendering off.</td><td></td><td></td></tr><tr><td valign="top">2 Blocks</td><td valign="top">First block matches on "first" and will turn off rendering.</td><td valign="top">Last block matches on "last" and will render the code.</td><td></td></tr><tr><td valign="top">3 Blocks or more</td><td valign="top">First block matches on "!first" and will never render the code.</td><td valign="top">All blocks but top and bottom matches on "middle" and will render the code.</td><td valign="top">Last block matches on "last" and will render the code.</td></tr></tbody></table>

Det kan vara svårt att se varför du skulle behöva ett sådant system. Koden ovan kan infogas först i ett block för att rita en avgränsare mellan block. Avgränsaren renderas endast före ett block som har ett syskonblock direkt före sig. Den renderas aldrig på det första blocket, och den renderas aldrig om det bara finns ett block.

Du kan också nollställa flödet. Efter en nollställning behandlas vilket block som än kommer härnäst som först igen. Detta är användbart när du inte vill ha en avgränsare mellan specifika block. Till exempel, om ett bildblock inte behöver en avgränsare efter sig, lägg den här koden sist i bildblocket:

```
<% flow command="reset" %>
```

Med `insert_code` ovan renderar blocket som följer ingen avgränsare, eftersom det nu är först i flödet igen.

## Konvertera skiftläge

DCL har tre funktioner för att konvertera skiftläge på strängar: uppercase, lowercase och "title". Title betyder att den första bokstaven i strängen blir versal och resten gemener.

Konvertera förnamnet på kontaktkortet till versaler:

```
<% upper string=<% contact field="firstname" %> %>
```

Konvertera förnamnet på kontaktkortet till gemener:

```
<% lower string=<% contact field="firstname" %> %>
```

Konvertera förnamnet på kontaktkortet till title case:

```
<% title string=<% contact field="firstname" %> %>
```
