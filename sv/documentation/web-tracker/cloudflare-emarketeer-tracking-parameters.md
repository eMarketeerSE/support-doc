---
description: >-
  Konfigurera Cloudflare så att eMarketeers spårningsparametrar per mottagare
  inte orsakar cachemissar på dina landningssidor.
---

# Cloudflare och eMarketeers spårningsparametrar

När eMarketeer skickar e-post läggs två spårningsparametrar till på varje länk:

- **utm\_em\_source** — identifierar e-postmeddelandet som trafikkälla
- **emtidv2** — ett unikt spårnings-ID per mottagare och per utskick

Eftersom dessa parametrar har olika värden för varje mottagare och varje utskick behandlar Cloudflares standardbeteende för cachning varje klick som en begäran till en unik URL. Varje klick i ett e-postmeddelande kringgår cachen och träffar din ursprungsserver direkt, vilket gör att prestandafördelarna med Cloudflare uteblir.

Den här artikeln förklarar hur du konfigurerar Cloudflare så att dessa parametrar ignoreras när det avgörs om ett cachat svar kan levereras.

## Varför detta händer

Cloudflare använder hela URL:en — inklusive alla query-parametrar — som cachenyckel som standard. Så dessa två URL:er behandlas som helt olika resurser:

`https://example.com/page?utm_em_source=abc123&emtidv2=xyz789`
`https://example.com/page?utm_em_source=def456&emtidv2=uvw000`

Även om båda URL:erna returnerar identiskt innehåll hämtar Cloudflare varje URL från din ursprungsserver separat. Lösningen är att be Cloudflare ignorera dessa specifika parametrar när cachenyckeln byggs, eller att helt ta bort dem från URL:en innan cachning.

## Lösningar per prisplan

Det finns två tillvägagångssätt beroende på din Cloudflare-prisplan. Båda är verifierade att fungera på domänen emarketeer-test.com.

### Free plan — URL Rewrite Rule (Transform Rules)

Free plan stöder inte anpassade cachenycklar för specifika query-parametrar. Du kan använda en Transform Rule för att skriva om URL:en och ta bort spårningsparametrarna innan Cloudflare utvärderar cachenyckeln. Det här är den mest effektiva lösningen för Free plan, och den fungerar även på Pro-, Business- och Enterprise-planerna.

Så fungerar det: Cloudflare bearbetar Transform Rules före cachning. Genom att ta bort `utm_em_source` och `emtidv2` från URL:en vid kanten kommer varje klick på en e-postlänk fram till cacheuppslagningen med en ren URL — identisk med ett direktbesök. Parametrarna syns aldrig heller på din ursprungsserver, vilket håller serverloggarna rena.

Steg-för-steg-konfiguration:

1. Logga in på Cloudflare-dashboarden och välj din domän.
2. I vänstermenyn, gå till Rules → Transform Rules.
3. Klicka på **+ Create rule** och välj **URL Rewrite Rule**.
4. Ge den ett namn, till exempel: **eMarketeer — Strip tracking params**
5. Under **If incoming requests match**, välj **All incoming requests**.
6. Under **Then**, sätt **Path** till **Preserve**.
7. Under **Query**, välj **Rewrite to…** och välj **Dynamic** i listrutan.
8. Klistra in följande uttryck i uttrycksfältet:

```
regex_replace(http.request.uri.query, "(&?(utm_em_source|emtidv2)=[^&]*)", "")
```

9. Sätt **Place at** till **First**.
10. Klicka på **Save**. Regeln aktiveras automatiskt.

Denna regel gäller alla inkommande förfrågningar. Regex hanterar säkert fall där `utm_em_source` eller `emtidv2` förekommer i början, mitten eller slutet av query-strängen, och lämnar alla andra parametrar orörda.

### Pro plan och högre — Cache Rule med anpassad cachenyckel

På Pro plan och högre kan du konfigurera Cloudflare att utesluta specifika query-parametrar från cachenyckeln samtidigt som alla andra parametrar behålls. Detta är den renaste och mest precisa lösningen.

Steg-för-steg-konfiguration:

1. Logga in på Cloudflare-dashboarden och välj din domän.
2. I vänstermenyn, gå till Caching → Cache Rules.
3. Klicka på **+ Create rule**.
4. Ge den ett namn, till exempel: **eMarketeer — Ignore tracking params**
5. Sätt villkoret att matcha din webbplats. För att tillämpa på alla sidor, välj **All incoming requests**. För att begränsa till specifika sökvägar, använd ett villkor för URL-sökväg.
6. Under **Cache eligibility**, välj **Eligible for cache**.
7. Expandera **Cache key settings**.
8. Under **Query string**, välj **Exclude specific parameters** och ange:

```
utm_em_source
emtidv2
```

9. Klicka på **Save and deploy** för regeln.

Detta säger till Cloudflare: när du kontrollerar om det finns en cachad version av en sida, ignorera värdena för `utm_em_source` och `emtidv2`. Förfrågningar från olika e-postmottagare träffar alla samma cacheinmatning.

### Också nödvändigt: cacha HTML-sidor

Som standard cachar Cloudflare endast statiska filer (bilder, CSS, JS och så vidare). HTML-sidor cachas inte om du inte uttryckligen konfigurerar det. Om dina e-postlänkar pekar på HTML-sidor behöver du också en Cache Rule för att aktivera cachning för dessa sidor.

Så här cachar du HTML-sidor:

1. Gå till Caching → Cache Rules.
2. Skapa en ny regel.
3. Sätt villkoret att matcha dina landningssidor (eller använd **All incoming requests** för att cacha allt).
4. Under **Cache eligibility**, välj **Eligible for cache**.
5. Spara och publicera.

Var försiktig med att aktivera "Cache everything" om din webbplats levererar personaliserat eller dynamiskt innehåll. Aktivera detta endast för sidor som returnerar samma innehåll till alla besökare.

## Verifiera konfigurationen

När du har satt upp reglerna, verifiera att cachningen fungerar genom att kontrollera response-headern `CF-Cache-Status`.

Med curl:

```
curl -I "https://yourdomain.com/your-page?utm_em_source=test123&emtidv2=abc456"
```

Leta efter headern `CF-Cache-Status` i svaret:

- **HIT** — levererad från Cloudflares cache
- **MISS** — hämtad från din ursprungsserver (förväntat vid första förfrågan till en URL)
- **BYPASS** — cachningen kringgicks (kontrollera om det finns motstridiga regler eller cookies)
- **DYNAMIC** — Cloudflare bedömde att svaret inte ska cachas

Efter den första MISS, gör en ny förfrågan med andra värden för `utm_em_source` och `emtidv2`. Om konfigurationen är korrekt ska du se HIT eftersom Cloudflare ignorerar dessa parametervärden vid uppslagning i cachen.

Med webbläsarens utvecklingsverktyg: öppna DevTools → fliken Network, klicka på sidans förfrågan och leta efter `CF-Cache-Status` i avsnittet Response Headers.

## Sammanfattning

| Prisplan | Rekommenderad lösning | Specificitet | Anteckningar |
| --- | --- | --- | --- |
| Free | URL Rewrite Rule (Transform Rules) | Tar bara bort `utm_em_source` och `emtidv2` | Tillgänglig på alla prisplaner |
| Pro | Cache Rule med anpassad cachenyckel | Utesluter specifika parametrar från cachenyckeln | Renaste tillvägagångssättet |
| Business | Cache Rule + Workers för avancerad logik | Full kontroll |  |
| Enterprise | Cache Rule + Workers för avancerad logik | Full kontroll |  |

Lösningen med URL Rewrite Rule (Free plan) fungerar på alla prisplaner och har den extra fördelen att den tar bort spårningsparametrarna innan de når din ursprungsserver, vilket håller serverloggarna rena.

## Felsökning

### Cachestatusen är alltid MISS

- Kontrollera att Cache Rule för HTML-sidor är aktiverad (Caching → Cache Rules).
- Kontrollera om svaret har `Set-Cookie`-headers — Cloudflare cachar inte svar som sätter cookies som standard.
- Kontrollera om din ursprungsserver skickar `Cache-Control: no-store` eller `no-cache`.
- Verifiera att Transform Rule är **Active** (inte Disabled) under Rules → Transform Rules.

### Andra query-parametrar tas bort

Regex som används i URL Rewrite Rule riktar sig endast mot `utm_em_source` och `emtidv2`. Alla andra query-parametrar bevaras. Om du misstänker att andra parametrar påverkas, testa med en URL som bara har dessa parametrar och inspektera förfrågan som når din ursprungsserver i serverloggarna.

### Regeln gäller även för API-förfrågningar

Om du vill begränsa Transform Rule så att den endast gäller specifika sökvägar (till exempel dina landningssidor), ändra villkoret från **All incoming requests** till ett filter för URL-sökväg. Till exempel: **URI path starts with /campaigns/**.
