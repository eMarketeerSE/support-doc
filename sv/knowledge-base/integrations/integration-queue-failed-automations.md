---
description: >-
  Kända orsaker till att en SuperOffice-automatiseringshändelse misslyckas, och
  hur du löser var och en innan du köar om den i Integration Queue.
---

# Varför misslyckades SuperOffice-automatiseringen?

Misslyckade SuperOffice-automatiseringshändelser listas i Integration Queue på [https://app.emarketeer.com/corporate/gui/account/integrations/integration_queue.php](https://app.emarketeer.com/corporate/gui/account/integrations/integration_queue.php) (kräver inloggning).

Därifrån kan du granska misslyckade händelser och köa dem på nytt för ett nytt försök. Nedan följer kända orsaker till att en SuperOffice-automatiseringshändelse misslyckas, tillsammans med föreslagen lösning för varje.

## Obligatorisk information saknas

Om kontakten saknar obligatorisk kontaktinformation misslyckas automatiseringen och en gul varningstriangel visas. De obligatoriska fälten är:

- E-post
- Förnamn
- Efternamn
- Företag (gäller endast i äldre SuperOffice-installationer)

Lägg till informationen som saknas på kontakten och köa sedan på nytt.

## Felaktigt External ID

När en kontakt triggar en SuperOffice-automatisering kontrollerar eMarketeer kontaktens External ID-fält. Om fältet har ett värde försöker eMarketeer utföra SuperOffice-uppgiften med det värdet som SuperOffice-kontakt-id. Om ingen SuperOffice-kontakt matchar värdet misslyckas automatiseringen.

Ta bort det felaktiga External ID:t från kontakten och köa sedan på nytt.

## Automatiseringen refererar till gamla SuperOffice-resurser

Äldre automatiseringar kan referera till SuperOffice-resurser som sedan har tagits bort, till exempel projekt, urval eller intressekoder. Om den refererade resursen inte längre finns misslyckas automatiseringen.

Redigera automatiseringen så att den refererar till befintliga SuperOffice-resurser och köa sedan på nytt.

## Ingen anslutning till servern eller strypt nätverk

Om du använder en egen SuperOffice-server och servern är nere, nätverket är nere eller något annat hindrar eMarketeer från att kommunicera med servern, misslyckas automatiseringen. När en stor mängd automatiseringar eller feed-aktiviteter genereras kan SuperOffice-servern också strypa kommunikationen och förhindra att uppgiften körs.

Vänta tills SuperOffice kan nås och köa sedan på nytt.

## SuperOffice Online-tjänsten överbelastad

I sällsynta fall är SuperOffice Online under hög belastning och tjänsten störs. Automatiseringar misslyckas medan tjänsten inte går att nå.

Vänta tills SuperOffice kan nås och köa sedan på nytt.
