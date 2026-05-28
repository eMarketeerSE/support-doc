# Viktiga uppdateringar inför kommande e-postförändringar

Google och Yahoo har meddelat strängare regler för mottagande av e-post, som träder i kraft i februari 2024.

Den här artikeln förklarar vad du behöver göra för att dina utskick ska fortsätta landa i inkorgen efter att reglerna trätt i kraft. Den riktar sig till kunder som skickar från en anpassad domän.

## Nya avsändarkrav

Gmail och Yahoo Mail har meddelat en uppsättning nya krav för e-postavsändare, i syfte att förbättra inkorgsäkerheten och minska skräppost. Dessa ändringar träder i kraft från februari 2024.

## Vad du behöver göra för att vara compliant

För att säkerställa leverans och efterlevnad av de nya kraven rekommenderar vi följande.

### 1. Aktivera e-postautentisering

**Användare med anpassad domän.** Om du använder din företagsdomän för eMarketeer-utskick behöver du lägga till två DNS-poster för att uppfylla DMARC-efterlevnadsstandarder.

Om din domän till exempel är "domain.com" lägger du till följande poster:

```
feedback.domain.com
MX
10 feedback-smtp.eu-west-1.amazonses.com

feedback.domain.com
TXT
"v=spf1 include:amazonses.com ~all"
```

eMarketeer kommer att kräva dessa DNS-poster för att aktivera e-postsändning från anpassade domäner i vår nästa utgåva, planerad till början av februari.

**Användare av via-em.com-domänen.** Om du inte använder din egen domän för eMarketeer-e-post behövs ingen åtgärd.

### 2. Övervaka skräppostfrekvens

Övervaka din skräppostfrekvens regelbundet för att säkerställa att den ligger inom acceptabla gränser. Google och Yahoo tillämpar strikta skräppostfilter för avsändare med hög skräppostfrekvens.

Du kan övervaka detta i [e-postrapporten](../knowledge-base/reports/email-report-explained.md) i eMarketeer.

### 3. Aktivera one-click unsubscribe

Du kan fortsätta använda de befintliga avregistreringslänkarna längst ned i dina e-postmeddelanden.

Utöver det lägger vi till one-click-länkar i e-postmeddelandets header (ej synliga) som plockas upp av e-postklienten och möjliggör one-click unsubscribe direkt från klienten. Ingen åtgärd krävs från dig.

## Ytterligare resurser

För mer detaljer om de nya kraven:

- [Google Gmail Security](https://googleblog.blogspot.com/2011/02/advanced-sign-in-security-for-your.html)
- [Yahoo Mail Postmaster](https://blog.postmaster.yahooinc.com/post/730172167494483968/more-secure-less-spam)

Genom att följa dessa åtgärder kan du hålla din e-post leveransbar och bibehålla ett positivt anseende hos stora e-postleverantörer.
