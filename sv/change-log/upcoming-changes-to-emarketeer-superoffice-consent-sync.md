# Kommande ändringar i eMarketeer/SuperOffice Consent Sync

En ny version av consent sync mellan eMarketeer och SuperOffice lanseras i mitten av november och fungerar annorlunda än den nuvarande.

Consent sync säkerställer att laglig grund för marknadsföringsutskick i eMarketeer och SuperOffice förblir synkroniserad. Den största fördelen är att du inte av misstag skickar till kontakter som har avregistrerat sig i SuperOffice när e-posten skickas från eMarketeer.

## Vad som ändras i version 2

### Synk körs vid utskick, med förbättrad noggrannhet

Den nuvarande consent sync (version 1) försöker hålla alla kontakter synkroniserade i realtid. På grund av tekniska begränsningar synkar den inte i 100 % av fallen — till exempel när du bulkuppdaterar kontakter i SuperOffice. Vissa ändringar kan missas.

Version 2 förlitar sig inte på samma tekniska lösning. Den synkar endast de kontakter som ingår i dina utskick. Innan utskick i eMarketeer synkas hela sändlistan och den senaste statusen mellan de två systemen används.

Kontakter är inte synkroniserade i realtid hela tiden. Synken ger dig 100 % korrekt status på de e-postmeddelanden som skickas, och den eliminerar många av de mer komplexa synkscenarier som orsakade felaktigheter i version 1.

### Consent sync för SuperOffice onPremise

Version 2 gör också consent sync tillgänglig för kunder som använder SuperOffice på sina egna servrar.

## Så fungerar synken i version 2

Logiken är enkel:

- Vid tidpunkten för utskick kontrollerar vi den senaste lagliga grunden för marknadsföringsutskick på alla kontakter i listan, i båda systemen.
- Vilket system som än har den senaste lagliga grunden skrivs till det andra systemet.

## Frågor

För frågor, kontakta [support@emarketeer.com](mailto:support@emarketeer.com).
