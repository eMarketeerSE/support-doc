# DKIM saknas eller är felaktigt konfigurerad

DKIM är en central del av e-postautentisering och leveransbarhet, och den bör finnas på plats i din DNS varje gång du autentiserar en avsändardomän i eMarketeer.

Om eMarketeer rapporterar att DKIM inte fungerar för din domän kan de obligatoriska posterna ha tagits bort från din DNS.

## Felsökning

1. Öppna [Email Domain settings](https://app.emarketeer.com/corporate/gui/account/customize/domain/new.php) i ditt eMarketeer-konto. Administratörsbehörighet krävs.
2. Klicka på "Authorize" på den domän du vill undersöka.
3. Dialogen visar varje post som din DNS måste innehålla för domänen.
4. I din DNS, bekräfta att samma poster finns på plats.

## Tips

Om du inte hanterar DNS själv kan du använda e-postfunktionen i dialogen för att skicka nödvändig DNS-information till den som gör det.

För hela uppsättningen av e-postdomän, se [guiden för anpassad e-postdomän](https://support.emarketeer.com/documentation/custom-email-domain/).

Om du behöver hjälp, kontakta [support@emarketeer.com](mailto:support@emarketeer.com).
