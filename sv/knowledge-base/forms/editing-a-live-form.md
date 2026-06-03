---
description: >-
  Vilka redigeringar som är säkra på ett formulär som redan har svar och vilka
  ändringar som kan påverka befintliga rapporter.
tags:
  - legacy
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
    visible: true
  actions:
    visible: true
---

# Redigera ett aktivt formulär

{% hint style="warning" %}
Den här artikeln gäller **Formulär (Legacy)**. För den nuvarande formuläreditorn, se [Formulär](README.md).
{% endhint %}

Att redigera ett formulär som redan har svar kan ändra vad svaren betyder, så det lönar sig att veta vilka redigeringar som är säkra och vilka som inte är det.

Ett formulär är "aktivt" så snart svar registreras till det och rapporter är knutna till de svaren. Rapporter är kopplade till frågorna i formuläret, så varje ändring i formulärredigeraren återspeglas i rapporten.

## Så lagras svar

Ta en fråga som den här:

Vad är ditt favoritdjur?

- Hund
- Katt
- Fisk
- Råtta

Om någon svarar "Katt" lagrar eMarketeer inte texten "Katt". Det lagras som "alternativ nummer 2".

Det innebär att en redigering av en fråga på ett aktivt formulär kan ändra vad "alternativ nummer 2" betyder. Att ta bort en fråga tar bort den från rapporten tillsammans med tillhörande svar.

## Redigeringar som påverkar befintliga rapporter

- Redigering av texten på ett alternativ eller omordning av alternativ ändrar betydelsen av svar som redan registrerats.
- Att ta bort ett alternativ fungerar som omordning — det förskjuter alternativens nummer.
- Att radera en fråga tar också bort svaren på den.
- Att klippa ut och klistra in en fråga är samma sak som att radera den och skapa en ny.

## Redigeringar som inte påverkar rapporter

- Ändra ordningen på hela frågor (inte alternativ).
- Redigera objekt som inte är frågor, till exempel rich text.
- Redigera regler, tacksidor eller bekräftelsesidor.
- Redigera layout.
