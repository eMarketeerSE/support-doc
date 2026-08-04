---
description: >-
  Vilka språk eMarketeers formulär finns på och de locale-koder som används för
  att visa varje språk.
---

# Formulärspråk

En referenslista över de språk som eMarketeers formulär stöder, med den locale-kod (kortkod) som väljer varje språk.

## Vad en locale är

En locale anger vilket språk ett formulär visas på. Varje locale har en kort kod — till exempel `en` för engelska eller `sv` för svenska — som du skickar med till formuläret för att välja språk.

## Ange locale

Det finns två sätt att ange ett formulärs locale:

* **Hostad formulär-URL** — lägg till parametern `locale` i formulärets URL, till exempel `&locale=en`.
* **Inbäddat formulär** — ange alternativet `locale` i formulärets render-skript. Se [Bädda in formulär på din webbplats](../../documentation/forms/publish-a-form.md) för hur du konfigurerar det.

## Tillgängliga locales

| Språk | Locale-kod |
| --- | --- |
| Engelska | `en` |
| Norska | `no` |
| Franska | `fr` |
| Finska | `fi` |
| Svenska | `sv` |
| Danska | `da` |
| Tyska | `de` |
| Nederländska | `nl` |
| Polska | `pl` |
| Spanska | `es` |
| Italienska | `it` |

{% hint style="info" %}
En locale fungerar bara om den språkversionen finns för formuläret. Skapa varje språk du vill erbjuda i formulärets översättningsalternativ först — annars har localen inget att visa.
{% endhint %}
