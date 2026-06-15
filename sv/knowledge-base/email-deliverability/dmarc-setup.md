---
description: >-
  Publicera en DMARC-post i din DNS så att mottagande servrar vet hur de ska
  hantera e-post som misslyckas med autentisering för din domän.
---

# Konfigurera DMARC

DMARC (Domain-based Message Authentication, Reporting & Conformance) bygger på SPF och DKIM och talar om för e-postmottagare hur de ska hantera oautentiserad e-post som påstås komma från din domän. Den låter dig också ta emot rapporter om autentiseringsresultat. En korrekt konfigurerad DMARC-post skyddar din domän mot spoofing och nätfiske och förbättrar leveransbarheten.

Om DMARC saknas i din DNS kan mottagande servrar inte utvärdera e-post som påstås komma från din domän på rätt sätt, vilket ökar risken för spoofing och kan skada leveransbarheten.

## Felsökning

1. Öppna **Email Domain settings** i ditt eMarketeer-konto. Administratörsbehörighet krävs.
2. Klicka på **Authorize** på den domän du undersöker.
3. Dialogen för domänkonfiguration listar varje nödvändig DNS-post, inklusive de DMARC-policyinställningar du bör publicera.
4. I kontrollpanelen hos din DNS-leverantör, verifiera att en DMARC TXT-post finns — vanligtvis på `_dmarc.yourdomain.com` — och att den matchar det värde eMarketeer rekommenderar.
   * En DMARC-post är en DNS TXT-post som talar om för e-postservrar hur de ska hantera meddelanden som misslyckas med autentisering.
   * Vanliga policyalternativ:
     * `p=none` — endast övervakning
     * `p=quarantine` — skicka misslyckad e-post till skräppost
     * `p=reject` — blockera misslyckad e-post helt
5. Spara ändringarna och vänta på att de sprids. Detta kan ta upp till 48 timmar.

## Tips

Om du inte hanterar DNS själv kan du använda e-postfunktionen i dialogen för att skicka nödvändig DNS-information till den som gör det.

För hela uppsättningen av e-postdomän, se [guiden för anpassad e-postdomän](/broken/pages/55KHLqA5szGB4OXFO9Ed).

Om du behöver hjälp, kontakta [support@emarketeer.com](mailto:support@emarketeer.com).
