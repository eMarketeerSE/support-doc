---
description: >-
  Journey-steg som pausar kontakten en viss tid före nästa steg.
---

# Wait

Steget Wait pausar kontakten en viss tid. När tiden har gått går kontakten vidare till nästa steg.

<div data-with-frame="true" align="left"><img src="../../.gitbook/assets/journey-step-wait-settings.png" alt="Dialogen Wait med Delay for inställt på 3 dagar"></div>

## Inställningar

* **Delay for** — ange ett tal och välj en enhet, till exempel dagar.

Klicka på **Apply** för att spara steget.

Ett Wait-steg placeras ofta före ett [If / Else](journey-step-if-else.md)-steg, så att kontakten hinner agera innan villkoret kontrolleras.

{% hint style="info" %}
Lägg alltid till ett väntesteg före ett If / Else-steg, annars utvärderas det omedelbart. Det är särskilt viktigt när du utvärderar interaktioner från ett tidigare steg, till exempel att ett e-postmeddelande öppnats.
{% endhint %}
