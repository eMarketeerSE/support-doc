# Ändra navigeringsikoner i mobilappen (Developer)

Den här guiden visar hur du byter ikoner i navigeringsmenyn i en mobilappskomponent.

Navigeringsmenyn använder ikoner från [Elusive Icons](https://elusiveicons.com/icons/). Du kan byta ut dem mot någon av de 300+ tillgängliga ikonerna genom att redigera appens HTML. Du behöver Developer-behörighet på ditt användarkonto för att göra dessa ändringar.

* * *

### 1. Välj vilka ikoner du vill använda

Bläddra i ikonlistan på [elusiveicons.com](https://elusiveicons.com/icons/) och välj de ikoner du vill ha.

[![Listsidan med Elusive Icons-ikoner](../../../assets/app-navigation-icons/app-elusiveicons-list.png)](https://downloads.intercomcdn.com/i/o/467403408/8cf83dfe3a6ecf908c2b9a64/app-elusiveicons-list.png)

Listsidan för Elusive Icons

### 2. Slå upp ikonens tagg

Klicka på den ikon du vill använda. Leta efter ikonens el-tag — ikonnamnet som börjar med "el-". Till exempel har kalenderikonen taggen `el-calendar`. Notera taggen — du klistrar in den i HTML i ett senare steg.

[![Sidan för kalenderikonen på Elusive Icons](../../../assets/app-navigation-icons/app-elusiveicons-iconcode.png)](https://downloads.intercomcdn.com/i/o/467404444/50ba922f497aa71733a15555/app-elusiveicons-iconcode.png)

Sidan för kalenderikonen på Elusive Icons

### 3. Kontrollera vilken stil på navigeringsmenyn som används

I eMarketeer kontrollerar du vilken stil din app använder för navigeringsmenyn. Inställningen heter **Navigation Menu** och finns högst upp på fliken Settings för Content-blocket.

![Plats för Navigation Menu-inställningen på fliken Content Settings](../../../assets/app-navigation-icons/app-4-1-navigation-menu-style-setting.png)

Plats för Navigation Menu-inställningen på fliken Content Settings

Det finns tre stilar för navigeringsmenyn: Icons, Icon List och List. Notera vilken du använder — du behöver bara ändra ikoner för den stilen.

![De tre alternativen för navigeringsmenystil](../../../assets/app-navigation-icons/app-4-5-navigation-menu-style-combined.png)

De tre alternativen för navigeringsmenystil

### 4. Öppna HTML-fliken

På mobilappskomponentens redigeringssida klickar du på **Enable Developer Mode** i verktygsmenyn till vänster, öppnar **Colors, Fonts & Head** och växlar till fliken **HTML** i menyn till höger.

Om du inte ser länken Developer Mode, be en kontoadministratör att ge ditt användarkonto Developer-behörighet.

[![Navigering till HTML-fliken i Developer Mode](../../../assets/app-navigation-icons/app-html-tab.png)](https://downloads.intercomcdn.com/i/o/467405809/2a5e2703535471d490640f41/app-html-tab.png)

Navigering till HTML-fliken i Developer Mode

### 5. Hitta ikonen i HTML-koden

HTML-fliken har två ställen där ikoner definieras. Ett styr navigeringsstilen **Icon List** och det andra styr stilen **Icons**.

Den översta delen av HTML-koden märker varje sektion som `iconlist` eller `icons`. Varje navigeringsikon har sin egen undersektion. Leta där efter el-taggen för ikonen som används just nu, till exempel `el-time` eller `el-bookmark`.

#### Iconlist HTML

[![Plats för iconlist-ikonkoden i HTML](../../../assets/app-navigation-icons/app-iconlist.png)](https://downloads.intercomcdn.com/i/o/467437532/3f94673815295cdcc491f545/app-iconlist.png)

Plats för iconlist-ikonkoden i HTML (vanligtvis nära rad 113)

#### Icons HTML

[![Plats för icons-ikonkoden i HTML](../../../assets/app-navigation-icons/app-icons.png)](https://downloads.intercomcdn.com/i/o/467437560/786013c0d589590cb65d0126/app-icons.png)

Plats för icons-ikonkoden i HTML (vanligtvis nära rad 237)

### 6. Byt ut ikontaggen och spara

Ändra den befintliga el-taggen till den nya för din valda ikon och spara HTML-koden. För att till exempel ändra "Company News" från en bokmärkesikon till en kalenderikon byter du ut `el-bookmark` mot `el-calendar`. Låt taggarna runt omkring vara — `el`, `el-inverse` och `el-fw` är desamma för alla ikoner i appkomponenten.
