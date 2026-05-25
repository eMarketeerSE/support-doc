# Prenumerationer

Prenumerationer låter kontakter finjustera vilka typer av e-post de tar emot från dig, istället för att behöva avregistrera sig från allt. Den här artikeln förklarar hur prenumerationer fungerar och hur du sätter upp dem.

Att erbjuda detaljerade val förbättrar kontaktens upplevelse och minskar fullständiga avregistreringar.

## Hur prenumerationer fungerar

En prenumerationsuppsättning är en lista med kategorier, en för varje typ av kommunikation du skickar.

Till exempel:

- Nyhetsbrev
- Eventinbjudningar
- Specialerbjudanden

Varje gång du skickar ett e-postmeddelande väljer du vilken prenumerationskategori det tillhör. När e-postmeddelandet skickas hoppar eMarketeer över alla kontakter som har avregistrerat sig från den kategorin. Samma kontakt kan fortfarande ta emot e-post i andra kategorier.

Prenumerationskategorierna visas i prenumerationscentret (den publika avregistreringssidan).

Du kan också skicka ett e-postmeddelande utan prenumerationskategori. I så fall exkluderas endast totala avregistreringar.

## Konfigurera prenumerationskategorier

Administratörsbehörighet krävs.

Om du inte konfigurerar prenumerationer fungerar eMarketeer som tidigare och erbjuder endast total avregistrering till kontakter.

1. I eMarketeer, gå till **Account** och hitta **Subscription and send outs**.

   ![Subscription and send outs-sektionen i kontoinställningarna](../../../assets/subscriptions/2018-05-22_08-52-07.png)

2. På prenumerationssidan, skapa eller hantera dina kategorier.

   ![Hantera prenumerationskategorier](../../../assets/subscriptions/2018-05-22_08-54-54.png)

När du skapar prenumerationer, tänk på dessa riktlinjer:

- Kategorinamnet visas för kontakter. Håll namn korta och tydliga.
- Håll listan kort och undvik att vara för specifik. Använd en kategori per typ av utskick som din målgrupp skulle vilja hantera.

När de väl är skapade är prenumerationer tillgängliga i eMarketeer och på det publika prenumerationscentret.

## Prenumerationer på dina kontakter

Prenumerationer visas på varje kontaktkort i eMarketeer. Alla prenumerationer är inställda på ON för befintliga och nya kontakter. Det är upp till kontakten att stänga av valfri prenumeration i prenumerationscentret.

Du kan också använda bulkuppdatering för att sätta prenumerationer på eller av för ett urval av kontakter.

## Välj en prenumeration när du skapar ett e-postmeddelande

När du skapar ett nytt e-postmeddelande från en mall ser du en ny inställning: prenumerationsdroplistan.

![Prenumerationsdroplista vid skapande av e-post](../../../assets/subscriptions/2018-05-22_09-10-14.png)

Välj den kategori som matchar typen av e-post du skickar.

Om du skickar ett e-postmeddelande som inte passar någon befintlig kategori, sätt kategorin till **none**. Varje kontakt som inte är helt avregistrerad (rättslig grund = återkallad) tar emot det.

När du kopierar ett befintligt e-postmeddelande ärver kopian originalets prenumeration. Du kan ändra den medan du redigerar.

![Prenumerationsinställning på ett kopierat e-postmeddelande](../../../assets/subscriptions/2018-05-22_09-11-03.png)

## Prenumerationscenter

Du behöver inte ändra något i dina mallar för att använda det nya prenumerationscentret. Det är den befintliga avregistreringssidan med tillagda alternativ för att hantera prenumerationer. För att avregistrera sig helt markerar kontakten **Unsubscribe from all future sendouts**, vilket återkallar marknadsföringssamtycke och stoppar all e-post.

![Prenumerationscenter med kategorialternativ](../../../assets/subscriptions/2018-05-22_09-05-44.png)

## Automationer

Nya automationer finns tillgängliga för att sätta och avsätta prenumerationer, och kan användas på vilken komponenthändelse som helst.
