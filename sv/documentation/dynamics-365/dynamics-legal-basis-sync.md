# Dynamics - Synkronisering av rättslig grund och prenumerationer

eMarketeer-integrationen för Microsoft Dynamics 365 Sales håller kontaktpreferenser och regelefterlevnad uppdaterade automatiskt. Den här artikeln förklarar hur eMarketeer broar samman sina verktyg för marknadsföringsefterlevnad med Dynamics så att sälj och marknad delar en enda källa till sanning.

## 1. Så synkroniseras rättslig grund (samtycke)

eMarketeer använder en nyanserad lista över rättslig grund — till exempel Samtycke, Berättigat intresse, Krav enligt lag, Återkallat. Dynamics 365 använder en enkel "Bulk Email"-växel med Allow eller Do not allow.

Integrationen översätter mellan dessa statusar så att båda systemen håller sig synkroniserade:

- **Återkallat** i eMarketeer synkroniseras till **Do not allow** i Dynamics 365 Sales.
- **Samtycke** i eMarketeer synkroniseras till **Allow** i Dynamics 365 Sales.
- Andra positiva rättsliga grunder (som Berättigat intresse) i eMarketeer synkroniseras till **Allow** i Dynamics 365 Sales.

Om en användare sätter Dynamics Bulk Email-växeln till "Do not allow" uppdaterar eMarketeer kontaktens rättsliga grund till "Återkallat". Om den ändras till "Allow" sätter eMarketeer den till "Samtycke".

## 2. Så synkroniseras prenumerationer

Dynamics har inget inbyggt prenumerationscenter för marknadsföring, så eMarketeer-integrationen bygger ett för att hantera specifika kategorier som Nyhetsbrev, Eventinbjudningar eller Erbjudanden. [Läs mer om eMarketeer-prenumerationer](../../../knowledge-base/account-admin/subscriptions.md).

- **Var de finns i Dynamics:** prenumerationer visas på Details-fliken på en Contact-post som Yes/No-växlar.
- **Skapa prenumerationer:** prenumerationskategorier kan endast skapas i eMarketeer. När de väl är skapade lägger integrationen automatiskt till den nya kategorin i din Dynamics-tabell.
- **Bidirektionella uppdateringar:** om en kontakt uppdaterar sina preferenser via ett eMarketeer-formulär, eller om en säljare växlar en inställning till Yes eller No i Dynamics, synkroniseras ändringen till det andra systemet.
- **Standardinställningar:** alla nya kontakter som skapas i eMarketeer har alla tillgängliga prenumerationer aktiverade (Yes) som standard. Även med prenumerationer aktiverade kan inga e-postmeddelanden skickas utan en positiv rättslig grund.

## 3. När data synkroniseras

Integrationen använder en flerskiktad synkroniseringsmotor för att säkerställa dataparitet utan att överbelasta något av systemen.

- **Initial inställning (engångskörning):** när du först ansluter Dynamics körs ett automatiserat jobb i cirka 10 minuter för att skapa de anpassade prenumerationstabellerna, formulären och vyerna. Om du har anpassat eller döpt om standardformulär och vyer i Dynamics kan installationen pausas. eMarketeer Support kan se denna status och åsidosätta den för att hjälpa dig slutföra installationen.
- **Synkronisering nära realtid (webhooks):** när en ny kontakt med en e-postadress skapas, eller när en befintlig kontakts e-post uppdateras, skickar synkroniseringen dessa ändringar mellan systemen, vanligtvis inom sekunder.
- **Bakgrundssvep (var 30:e minut):** varje halvtimme kontrollerar systemet det senast synkroniserade läget och kör i kapp eventuella rutinmässiga preferens- eller samtyckesändringar som webhooks inte fångade upp.
- **Säkerhetskontroll före utskick:** precis innan eMarketeer skickar en kampanj kör det en tvångssynkronisering av alla riktade kontakter. Om en kontakt avregistrerade sig i Dynamics bara minuter innan utskicket utesluts de säkert från mottagarlistan.
