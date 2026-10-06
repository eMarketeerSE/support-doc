---
description: >-
  Journey-steg som flyttar kontaktens lead till ett annat steg på Lead Board.
---

# Change Lead Stage

Steget Change Lead Stage flyttar kontaktens lead till ett annat steg.

Det är användbart i Journeys för lead nurturing, för att flytta en lead från MQL till ett mer betydelsefullt steg, till exempel SQL eller Opportunity, när den är redo.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/journey-step-change-lead-stage-settings.png" alt="Dialogen Change Stage med ett fält för att välja leadsteg"></div>

## Inställningar

* **Choose Lead Stage to place the lead** — välj det steg som leaden flyttas till. Stegen är:
  * MQL
  * SQL
  * Opportunity
  * Won
  * Lost

Klicka på **Apply** för att spara steget.

Steget påverkar bara kontakter som finns på Lead Board. Om kontakten finns på flera Lead Boards ändras steget på alla. Se [Lead Board](../../knowledge-base/lead-board-scoring/the-lead-board.md).

## Använd med försäljningar i SuperOffice

Om du använder SuperOffice kan du kombinera steget med signalerna [Sale Sold](../superoffice/superoffice-signals.md#sale-sold) och [Sale Lost](../superoffice/superoffice-signals.md#sale-lost). När en försäljning stängs i SuperOffice kan en Journey som startas av signalen automatiskt flytta leaden till **Won** eller **Lost** i eMarketeer.
