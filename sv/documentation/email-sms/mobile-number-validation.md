---
description: >-
  Hur eMarketeer validerar mobilnummer inför SMS-utskick — krav på landskod,
  teckenrensning och exempel på giltiga och ogiltiga format.
---

# Mobilnummervalidering

Innan eMarketeer skickar ett SMS valideras mobilnumret i kontaktens Mobile-fält. Den här artikeln förklarar reglerna och visar vad som räknas som ett giltigt nummer.

## Hur nummer bearbetas

Innan validering tas alla tecken som inte är siffror (`0–9`) eller `+` bort. Mellanslag, bindestreck, parenteser och övriga tecken rensas automatiskt. Det nummer som återstår efter rensningen måste vara ett giltigt mobilnummer.

{% hint style="warning" %}
Undvik formatet `+46(0)`. Parenteserna tas bort, vilket lämnar en `0` mellan landskoden och abonnentnumret — det ogiltighetsförklarar numret. Använd `+46` eller `0046` i stället.
{% endhint %}

## Krav på landskod

Varje mobilnummer måste innehålla en landskod. eMarketeer accepterar två internationella format:

- Inledande `+` följt av landskoden — till exempel `+46733123123`
- Inledande `00` följt av landskoden — till exempel `0046733123123`

**Svenska nummer:** Nummer som börjar med `0` tolkas som svenska nummer och kräver ingen explicit landskod. Till exempel är `0733123123` giltigt.

## Giltiga format

| Inmatning | Efter rensning | Giltigt |
|---|---|---|
| `0046733123123` | `0046733123123` | Ja |
| `+46 733 123 123` | `+46733123123` | Ja |
| `0046 733-123 123` | `0046733123123` | Ja |
| `0733123123` | `0733123123` | Ja — svenskt prefixnummer |

## Ogiltiga format

| Inmatning | Efter rensning | Varför det misslyckas |
|---|---|---|
| `46733123123` | `46733123123` | Saknar `+` eller `00`-prefix |
| `+46(0)733123123` | `+460733123123` | Parenteserna lämnar en `0` efter landskoden |
| `733123123` | `733123123` | Ingen landskod och inget inledande `0` för svenska nummer |
