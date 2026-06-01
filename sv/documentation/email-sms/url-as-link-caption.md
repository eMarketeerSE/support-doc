---
description: Att använda en URL som länktext i ett e-post kan utlösa phishing-filter. Här förklaras varför det händer och vad du bör använda i stället.
---

# Varför du inte bör använda URL:er som länktext

Att använda en URL som synlig länktext — till exempel skriva `www.foretag.se` som caption — kan göra att ditt e-post flaggas som phishing av säkerhetsfilter.

## Hur länkspårning fungerar

eMarketeer ersätter varje länk i ditt e-post med en spårnings-URL innan e-postmeddelandet skickas. Det gör att eMarketeer kan registrera vilka kontakter som klickade på en länk och när. Mottagarens webbläsare omdirigeras via spårnings-URL:en till din avsedda destination.

Spårnings-URL:en finns på eMarketeers domän, inte din.

## Varför diskrepansen är ett problem

När du skriver en länk så här:

```
[www.foretag.se](https://www.foretag.se)
```

ser mottagaren `www.foretag.se` som länktext. Men den faktiska destinationen — efter att spårningen omsluter länken — finns på eMarketeers domän.

E-postklienter och säkerhetsverktyg granskar länkar efter exakt det här mönstret: en URL som visas som text men som inte matchar den verkliga destinationsdomänen. Det är ett av de vanligaste kännetecknen på ett phishing-e-post, där en angripare visar en betrodd URL men pekar på en skadlig sida.

Säkerhetsfilter kan inte avgöra om diskrepansen är avsiktlig eller oavsiktlig. När de är osäkra blockerar eller sätter de e-postmeddelandet i karantän.

## Vad du bör använda i stället

Använd beskrivande länktext som inte lovar något om destinationsdomänen:

| Undvik | Använd i stället |
|---|---|
| `[www.foretag.se](https://www.foretag.se)` | `[Besök vår webbplats](https://www.foretag.se)` |
| `[https://register.event.com/signup](https://register.event.com/signup)` | `[Anmäl dig till evenemanget](https://register.event.com/signup)` |
| `[support@foretag.se](mailto:support@foretag.se)` | `[Kontakta support](mailto:support@foretag.se)` |

Beskrivande text beskriver åtgärden, inte destinationsdomänen. Det finns ingen diskrepans för filter att flagga.
