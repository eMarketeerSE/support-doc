---
description: >-
  I den här guiden: hur du konfigurerar prenumerationskategorier, tilldelar dem
  till e-postutskick och låter kontakter hantera sina egna e-postpreferenser.
---

# Prenumerationer

Prenumerationer ger kontakter möjlighet att välja vilka typer av e-post de vill ta emot, så att de kan avsluta prenumerationen på specifika kategorier i stället för att avsluta alla utskick. Det minskar vanligtvis antalet fullständiga avprenumerationer.

Du organiserar dina utskick i kategorier — till exempel Nyhetsbrev, Eventinbjudningar eller Specialerbjudanden. När du skickar utesluter eMarketeer automatiskt kontakter som har avprenumererat från den kategorin. En e-post utan tilldelad kategori filtreras bara för kontakter som har återkallat sitt marknadsföringsmedgivande helt.

## Konfigurera prenumerationskategorier

Du behöver administratörsbehörighet för att skapa och hantera prenumerationskategorier.

1. Klicka på **Account** i den övre navigeringen.
2. Klicka på **Subscription and send outs**.

   <div data-with-frame="true" data-align="left"><img src="../../../assets/subscriptions/2018-05-22_08-52-07.png" alt="Kontomenyn med alternativet Subscription and send outs markerat"></div>

3. Skapa dina kategorier. Håll namnen korta och tydliga — kontakter ser dem i prenumerationscentret. Fokusera på breda kommunikationstyper snarare än mycket specifika.

   <div data-with-frame="true" data-align="left"><img src="../../../assets/subscriptions/2018-05-22_08-54-54.png" alt="Hanteringssidan för prenumerationskategorier med en lista över kategorinamn"></div>

## Dina kontakter

Alla kontakter — nya och befintliga — börjar med alla prenumerationskategorier aktiverade. Om du vill ändra prenumerationsinställningarna för en grupp kontakter på en gång, använd massuppdateringsåtgärden på en kontaktlista.

## Skapa en e-post

När du skapar en ny e-post visas en rullgardinsmeny för prenumerationskategori i e-postinställningarna. Välj den kategori som bäst matchar e-postens innehåll.

<div data-with-frame="true" data-align="left"><img src="../../../assets/subscriptions/2018-05-22_09-10-14.png" alt="Formuläret för att skapa e-post med rullgardinsmenyn för prenumerationskategori"></div>

Om e-posten inte tillhör någon kategori — till exempel ett engångsmeddelande — ställer du in den på **None**. E-post inställda på None filtreras bara för kontakter som har avprenumererat helt.

<div data-with-frame="true" data-align="left"><img src="../../../assets/subscriptions/2018-05-22_09-11-03.png" alt="E-postinställningspanelen med prenumerationskategorifältet inställt på None"></div>

## Prenumerationscenter

Prenumerationscentret är en offentlig sida där kontakter hanterar sina e-postpreferenser. Det listar alla aktiva kategorier, var och en med en växel. Kontakter kan också markera en ruta för att avsäga sig alla utskick och återkalla sitt marknadsföringsmedgivande.

<div data-with-frame="true" data-align="left"><img src="../../../assets/subscriptions/2018-05-22_09-05-44.png" alt="Prenumerationscentersidan med kategorireglage och en kryssruta för fullständig avprenumeration"></div>

Standardlänken för avprenumeration i e-postsidfötter länker automatiskt till prenumerationscentret.

## Automationer

Du kan ändra en kontakts prenumerationsstatus automatiskt med Journey-automationer. Lägg till ett steg som utlöses när en kontakt interagerar med en komponent — till exempel för att ta bort dem från en kategori efter att de klickat på en specifik länk.

---

**Relaterat:**

- [Exkludera inaktiva mottagare](../../../documentation/email-sms/exclude-inactive-recipients.md)
- [Transaktionella utskick](../../../documentation/email-sms/transactional-sendouts.md)
- [Vitlista e-postservrar](../../../documentation/email-sms/whitelisting-email-servers.md)
- [Automatisk avsändarpaus](../../../documentation/email-sms/automatic-send-pause.md)
