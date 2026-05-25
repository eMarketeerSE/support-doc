# Varför eMarketeer inte stöder SRI för embed-skript

eMarketeer har inte stöd för Subresource Integrity (SRI) på sina embed-skript, och den här artikeln förklarar varför.

SRI kan ge ökat förtroende för externa tillgångar, men det medför också avvägningar — särskilt för en plattform som levererar skript till många kunder. Den här artikeln går igenom resonemanget och vad det innebär för dig.

## Vad är SRI?

Subresource Integrity (SRI) låter webbläsare verifiera att en hämtad resurs, till exempel en JavaScript-fil, matchar en förväntad kryptografisk hash. Om innehållet har ändrats eller skadats vägrar webbläsaren att köra det.

## Vårt resonemang

Efter noggrann utvärdering är detta de främsta skälen till att vi för närvarande inte stöder SRI för våra embed-skript:

1. Frekventa uppdateringar och versionsflexibilitet. Vi släpper kontinuerligt förbättringar, säkerhetspatchar, optimeringar och funktionsutökningar. Att låsa varje kund till en specifik hash skulle tvinga fram en manuell integrationsuppdatering vid varje release, oavsett hur liten. Det är ohållbart i stor skala.
2. Risk för inlåsning och börda för kunderna. SRI låser i praktiken skriptet till en fast version. Kunderna måste spåra och uppdatera integritetsvärdet vid varje release, vilket ökar underhållsbördan och risken för trasig integration när klienterna släpar efter.
3. Skriptblockering och funktionell risk. Om en klients integritets-hash inte matchar — även på grund av en mindre versionsskillnad — blockerar webbläsaren skriptet helt. Det kan slå ut viktiga funktioner som spårning eller analys och leda till stora störningar och supportkostnader.
4. SRI skyddar bara mot vissa hot. SRI hjälper till att skydda mot manipulation under överföring eller via ett komprometterat CDN, men skyddar inte mot hot tidigare i leveranskedjan, som en komprometterad bygg- eller deployment-pipeline. Det är inget heltäckande skydd.
5. Robusta alternativa säkerhetsåtgärder finns redan på plats. Vi förlitar oss på flera säkerhetslager för att säkerställa säker distribution av våra skript:
    - HTTPS/TLS för säker överföring.
    - Säkra och granskade bygg- och deployment-flöden.
    - Kodgranskning, åtkomstkontroll och interna säkerhetspolicyer.
    - Stöd för Content Security Policy (CSP).
    - Övervakning, loggning och larm vid avvikande aktivitet.

    Med dessa lager på plats ser vi för närvarande SRI som en underhållsbörda med begränsad ytterligare nytta i vår arkitektur.
6. Branschpraxis. De flesta etablerade plattformar uttalar uttryckligen att de inte stöder SRI för sina skript. Deras dokumentation noterar att många tjänster (till exempel Facebook, Stripe, PayPal) på liknande sätt har undvikit fasta versioner eller SRI för sina publika skript.

## Vad det innebär för dig

- Du kan fortsätta använda våra skript utan att hantera eller rotera integritets-hashar.
- Vi kan driftsätta uppdateringar fritt, så att du får buggfixar, prestandaförbättringar och nya funktioner i god tid.
- Vi upprätthåller strikt säkerhet i hela vår utvecklings- och distributionsprocess, så att skripten som levereras till dig är så säkra som möjligt.
