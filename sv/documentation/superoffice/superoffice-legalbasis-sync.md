# SuperOffice Legal Basis Sync

eMarketeer och SuperOffice har var sin egen samtyckesdatabas. Legal basis-synken håller båda i takt automatiskt, så att en ändring i ett system speglas i det andra.

## Krav

Samtyckessynk fungerar med SuperOffice Online och on-site-installationer.

## Aktivera legal basis-synk

När du sätter upp SuperOffice-integrationen ser du alternativet att aktivera legal basis-synk. Bocka i rutan för legal basis innan du klickar på "Apply changes" för att aktivera synken.

Om din integration redan körs utan synk behöver du inaktivera den helt och aktivera den igen för att plocka upp synkfunktionerna. Välj "None" på inställningssidan för SuperOffice CRM i eMarketeer, klicka på "Apply changes" och aktivera sedan integrationen igen.

## Så fungerar synken

När samtyckessynk är aktiverad körs den var 30:e minut och varje gång du skickar ett e-postmeddelande eller SMS.

För en kampanj kontrollerar eMarketeer legal basis för varje kontakt i båda systemen i "Checklist"-steget. Det system med den senaste ändringen vinner, och det andra systemet uppdateras för att matcha.

Synken täcker både ändamålen "Store and process" och "Marketing sendouts".

## Inaktivera synken

För att inaktivera synken, inaktivera integrationen. Välj "None" i inställningarna för SuperOffice CRM, avmarkera "Legal basis sync" och klicka på "Apply changes".

## FAQ

**Med synk aktiverad, kommer eMarketeer och SuperOffice CRM alltid att vara 100 % synkade?**

Nej. eMarketeer synkar samtyckesdata var 30:e minut, och på de kontakter du skickar e-post eller SMS till vid själva sändningstillfället.

**Vad händer med dubbletter av e-postadresser i eMarketeer kontra SuperOffice?**

Om dubbletter av e-postadresser i SuperOffice har olika värden för legal basis används den äldsta kontakten för synkning.

**När synkas schemalagda utskick?**

Om du schemalägger ett utskick i framtiden körs en ny samtyckessynk vid själva sändningstillfället.
