---
description: >-
  Den enklaste vägen att skicka en e-post i eMarketeer, från ett färdigt
  e-postkomponent till ett genomfört utskick.
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: false
  actions:
    visible: true
tags:
  - email
---

# Så här skickar du en e-post

Den här artikeln går igenom den enklaste vägen för att skicka en e-post i eMarketeer — från en färdig e-postkomponent till en lista med kontakter.

Vi hoppar över de mer avancerade funktionerna här och fokuserar på ett rakt utskick.

{% hint style="info" %}
Innan du börjar behöver du en färdig e-postkomponent. Se [Skapa din första e-post](basics-creating-email.md) om du inte har en än.
{% endhint %}

{% stepper %}
{% step %}
### Starta utskicket

Gå till kampanjen som innehåller e-posten och klicka på **Send**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-campaign-send-icon.png" alt="Kampanjens komponenter med ikonen Send på e-posten Event invitation markerad"></div>
{% endstep %}

{% step %}
### Välj Send Now

Den här guiden går igenom hur du skickar direkt. Du har också möjlighet att schemalägga e-posten till en senare tidpunkt.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-send-start-options.png" alt="Sidan Send E-mail med alternativen Send Now!, Scheduled Send och Automate Send"></div>
{% endstep %}

{% step %}
### Skicka ett testmejl eller skicka till dina kontakter

**Alternativ A — Skicka ett testmejl till dig själv (valfritt)**

För att förhandsgranska e-posten i din egen e-postklient skickar du ett snabbt test till dig själv. Skriv in din e-postadress i fältet **Quick send** och klicka på **Send now**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-quick-send-field.png" alt="Panelen Quick send med en e-postadress ifylld och knappen Send now"></div>

**Alternativ B — Skicka e-posten till din kontaktlista**

Om du inte har en kontaktlista än, se:

* [Så här skapar du en ny kontaktlista](new-contact-list.md)
* [Importera kontakter från Excel eller ett kalkylark](../contacts-lists/import-contacts-from-excel.md)

Välj först **eMarketeer Contact Database**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-recipient-source-database.png" alt="Steget Recipient Source med eMarketeer Contact Database markerat"></div>

Välj sedan **Contact List**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-recipient-source-contact-list.png" alt="Urvalstyper med Contact List markerat"></div>

Välj till sist din kontaktlista i rullgardinsmenyn och klicka på **Add this List**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-contact-list-dropdown-add.png" alt="Rullgardinsmeny för kontaktlista med en vald lista och knappen Add this List"></div>

Listan visas nu som tillagd i utskicket. Vill du skicka till fler listor väljer du en till lista och klickar på **Add this List** igen. När du har lagt till alla listor du vill ha klickar du på **Next**.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-contact-list-add-more.png" alt="En lista markerad som redan tillagd i utskicket, med rullgardinsmenyn redo för en till lista"></div>
{% endstep %}

{% step %}
### Fortsätt till checklistan

Nästa sida, **2. Send Options**, visar den valda mottagarlistan och erbjuder alternativ för mer komplexa utskick. För ett enkelt utskick kan du hoppa över detaljerna här.

Klicka på **Next** för att fortsätta.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-send-options.png" alt="Steget Send Options med den valda listan, exkluderingar, samtyckesval och knappen Next"></div>
{% endstep %}

{% step %}
### Granska checklistan och starta utskicket

Checklistan visar om några kontakter från din lista kommer att exkluderas från utskicket. eMarketeer blockerar automatiskt kontakter som har avregistrerat sig eller av andra skäl inte ska få e-posten. Du behöver oftast inte oroa dig för siffrorna här — de hanteras åt dig.

Om du vill se detaljerna, se [Förstå e-postchecklistan](../reports/checklist-explained.md).

Klicka på **Launch E-mail** för att adressera och skicka e-posten till kontakterna i listan.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-checklist-launch-email.png" alt="Steget Checklist med panelen Recipients och knappen Launch E-mail"></div>
{% endstep %}

{% step %}
### Utskicket är klart

Efter starten lämnas e-posten över till e-postservrarna, som vanligtvis hinner adressera och skicka inom några minuter.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/basics-send-email-send-confirmation.png" alt="Bekräftelsen Email launched med knappen Back to Campaign"></div>
{% endstep %}
{% endstepper %}

### Vad du gör härnäst

Du kan följa utskicket och se detaljerad statistik i e-postrapporten. Se [E-postrapporten förklarad](../reports/email-report-explained.md).
