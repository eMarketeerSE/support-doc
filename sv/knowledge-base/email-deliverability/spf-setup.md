---
description: >-
  Vad du ska kontrollera när eMarketeer upptäcker ett SPF-problem för någon av
  dina domäner, och hur du sätter upp det korrekt.
---

# SPF-uppsättning

SPF (Sender Policy Framework) är ett protokoll för e-postautentisering som låter domänägare ange vilka e-postservrar som är auktoriserade att skicka e-post för domänens räkning. Det fungerar genom att en TXT-post publiceras i DNS som listar de auktoriserade avsändarhostarna eller tjänsterna.

När SPF saknas eller är felaktigt kan mottagande e-postservrar inte verifiera att ett e-postmeddelande kommer från en auktoriserad källa — vilket kan leda till att posten markeras som spam eller avvisas. Korrekt SPF-uppsättning förbättrar leveransbarheten och skyddar din domän från obehörig användning.

### Varför det är viktigt

* Hjälper mottagande e-postservrar att bekräfta att posten kommer från tillåtna avsändare.
* Minskar risken att din domän används för förfalskade e-postmeddelanden.
* Kan förbättra placering i inkorgen och leveransbarheten överlag.
* När SPF misslyckas eller saknas nedgraderar eller avvisar många mottagande servrar posten.

### Så felsöker du och sätter upp det

1. Gå till **Email Domain settings** i ditt eMarketeer-konto (administratörsbehörighet krävs).
2. Klicka på **Authorize** för den domän du undersöker.
3. Dialogen för domänuppsättning visar alla DNS-poster som krävs, inklusive SPF-posten som ska publiceras.
4. I din DNS-leverantörs kontrollpanel, bekräfta att en SPF TXT-post finns för din domän och matchar värdet som visas i eMarketeer.
   * En SPF-post börjar vanligtvis med `v=spf1` och inkluderar alla servrar och tjänster som är auktoriserade att skicka e-post för din domän.
   * Generiskt exempel: `v=spf1 include:spf.emarketeer.com ~all`
5. Spara DNS-ändringarna och vänta på spridning (upp till 48 timmar).
6. Använd ett SPF-kontrollverktyg om du vill bekräfta att den är publicerad och korrekt.

Om du inte hanterar DNS själv kan du använda e-postfunktionen i dialogen för att skicka all nödvändig DNS-info till den som gör det.

För hela uppsättningen av e-postdomän, [se den här guiden](/broken/pages/55KHLqA5szGB4OXFO9Ed).

Om du behöver hjälp, kontakta [support@emarketeer.com](mailto:support@emarketeer.com).
