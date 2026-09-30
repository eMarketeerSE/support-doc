---
description: >-
  Hur du riktar in dig på kontakter som inte öppnade eller svarade på ett
  tidigare utskick med ett uppföljningsmejl.
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
---

# Så skickar du påminnelsemejl

Skapa en uppföljningskampanj som automatiskt hoppar över kontakter som redan engagerat sig i det ursprungliga utskicket.

eMarketeers påminnelsemönster använder ett dynamiskt urval av kontakter baserat på engagemang i en tidigare komponent, exempelvis ett e-postmeddelande eller ett formulär. Urvalet uppdateras över tid, så du kan bygga påminnelsen innan den ursprungliga kampanjen går ut och lita på att den bara når de kontakter som fortfarande behöver en knuff.

Den här guiden täcker två vanliga scenarier: påminna kontakter att läsa ett e-postmeddelande de inte öppnat, och påminna kontakter att registrera sig via ett formulär de inte skickat in.

{% stepper %}
{% step %}
### Skapa en e-postkomponent att använda som påminnelse

Om du inte har byggt påminnelse-mejlet ännu, se guiden om att [skapa ett e-postmeddelande](../getting-started/basics-send-email.md).
{% endstep %}

{% step %}
### Starta skickaprocessen och lägg till de ursprungliga mottagarna

Välj samma kontaktgrupp som du använde för den ursprungliga kampanjen som din första Recipient Source. Om du vill skicka påminnelsen senare, välj **Scheduled Send** som utskickstyp i första steget.
{% endstep %}

{% step %}
### På Steg 2, Send Options, klicka på + Add recipients

Använd den här knappen för att lägga till det urval av kontakter du vill blockera från påminnelsen.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-send-options-add-recipients.png" alt="Steget Send Options med länken + Add recipients markerad"></div>

Länken + Add recipients på sidan Send Options
{% endstep %}

{% step %}
### Välj "Selection" som andra Recipient Source

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-recipient-source-selection.png" alt="Steget Recipient Source med Selection markerat"></div>

Selection är ett av alternativen på första Recipient Source-sidan
{% endstep %}

{% step %}
### Välj det urval som matchar din påminnelse

Vilket urval du väljer beror på vad påminnelsen handlar om. De två exemplen nedan täcker en e-postöppning och ett formulärsvar, men fler händelsetyper finns tillgängliga.

* För att påminna kontakter att läsa ett tidigare e-postmeddelande, bygg ett urval av kontakter som har öppnat det e-postmeddelandet. Det är de kontakterna du kommer att blockera.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-selection-email-opened.png" alt="Urval med kampanjen, en e-postkomponent och händelsen Opened E-mail valda"></div>

Välj kontakter som har öppnat det tidigare e-postmeddelandet som en Recipient Source att blockera i nästa steg

* För att påminna kontakter att registrera sig via ett formulär, bygg ett urval av kontakter som har skickat in det formuläret. Det är de kontakterna du kommer att blockera.

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-selection-form-submitted.png" alt="Urval med kampanjen, en formulärkomponent och händelsen Submitted valda"></div>

Välj formulärregistrerade som en Recipient Source att blockera i nästa steg
{% endstep %}

{% step %}
### Sätt urvalets Type till "Block"

Listan Recipients visar nu både din ursprungliga grupp och det nya urvalet. Ändra Type-rullgardinen för urvalet från "Send to" till "Block".

<div align="left" data-with-frame="true"><img src="../../.gitbook/assets/configuring-reminder-email-send-options-type-block.png" alt="Send Options med två mottagarkällor, där den andra är satt till Block"></div>

Blockera utskicket genom att sätta Recipient Source till Block

En kontakt i en blockerad mottagarlista exkluderas från utskicket, även om en annan mottagarlista skulle ha inkluderat dem.

För ett schemalagt e-postmeddelande omvärderas urvalet över tid. Även om det innehåller noll kontakter när du sätter upp utskicket, kommer det att blockera rätt personer i det ögonblick e-postmeddelandet går ut.
{% endstep %}

{% step %}
### Fortsätt till Checklist och skicka eller schemalägg

Avsluta utskicksflödet för att skicka påminnelsen nu eller schemalägga den för senare.
{% endstep %}
{% endstepper %}

Om du fortfarande har frågor, kontakta supporten via kanalerna som listas på [kontaktsidan](https://app.emarketeer.com/corporate/gui/help/contact.php) när du är inloggad på ditt konto.
