---
description: >-
  Hur du byter ikoner i navigeringsmenyn i en mobilappskomponent genom att
  redigera appens HTML i Developer Mode.
layout:
  width: default
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: false
  actions:
    visible: true
---

# Ändra navigeringsikoner i mobilappen (Developer)

Den här guiden visar hur du byter ikoner i navigeringsmenyn i en mobilappskomponent.

Navigeringsmenyn använder ikoner från [Elusive Icons](https://elusiveicons.com/icons/). Du kan byta ut dem mot någon av de 300+ tillgängliga ikonerna genom att redigera appens HTML. Du behöver Developer-behörighet på ditt användarkonto för att göra dessa ändringar.

{% stepper %}
{% step %}
### Välj vilka ikoner du vill använda

Bläddra i ikonlistan på [elusiveicons.com](https://elusiveicons.com/icons/) och välj de ikoner du vill ha.

[<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-elusiveicons-list.png" alt="Listsidan med Elusive Icons-ikoner"></div>](https://downloads.intercomcdn.com/i/o/467403408/8cf83dfe3a6ecf908c2b9a64/app-elusiveicons-list.png)

Listsidan för Elusive Icons
{% endstep %}

{% step %}
### Slå upp ikonens tagg

Klicka på den ikon du vill använda. Leta efter ikonens el-tag — ikonnamnet som börjar med "el-". Till exempel har kalenderikonen taggen `el-calendar`. Notera taggen — du klistrar in den i HTML i ett senare steg.

[<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-elusiveicons-iconcode.png" alt="Sidan för kalenderikonen på Elusive Icons"></div>](https://downloads.intercomcdn.com/i/o/467404444/50ba922f497aa71733a15555/app-elusiveicons-iconcode.png)

Sidan för kalenderikonen på Elusive Icons
{% endstep %}

{% step %}
### Kontrollera vilken stil på navigeringsmenyn som används

I eMarketeer kontrollerar du vilken stil din app använder för navigeringsmenyn. Inställningen heter **Navigation Menu** och finns högst upp på fliken Settings för Content-blocket.

<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-4-1-navigation-menu-style-setting.png" alt="Plats för Navigation Menu-inställningen på fliken Content Settings"></div>

Plats för Navigation Menu-inställningen på fliken Content Settings

Det finns tre stilar för navigeringsmenyn: Icons, Icon List och List. Notera vilken du använder — du behöver bara ändra ikoner för den stilen.

<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-4-5-navigation-menu-style-combined.png" alt="De tre alternativen för navigeringsmenystil"></div>

De tre alternativen för navigeringsmenystil
{% endstep %}

{% step %}
### Öppna HTML-fliken

På mobilappskomponentens redigeringssida klickar du på **Enable Developer Mode** i verktygsmenyn till vänster, öppnar **Colors, Fonts & Head** och växlar till fliken **HTML** i menyn till höger.

Om du inte ser länken Developer Mode, be en kontoadministratör att ge ditt användarkonto Developer-behörighet.

[<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-html-tab.png" alt="Navigering till HTML-fliken i Developer Mode"></div>](https://downloads.intercomcdn.com/i/o/467405809/2a5e2703535471d490640f41/app-html-tab.png)

Navigering till HTML-fliken i Developer Mode
{% endstep %}

{% step %}
### Hitta ikonen i HTML-koden

HTML-fliken har två ställen där ikoner definieras. Ett styr navigeringsstilen **Icon List** och det andra styr stilen **Icons**.

Den översta delen av HTML-koden märker varje sektion som `iconlist` eller `icons`. Varje navigeringsikon har sin egen undersektion. Leta där efter el-taggen för ikonen som används just nu, till exempel `el-time` eller `el-bookmark`.

#### Iconlist HTML

[<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-iconlist.png" alt="Plats för iconlist-ikonkoden i HTML"></div>](https://downloads.intercomcdn.com/i/o/467437532/3f94673815295cdcc491f545/app-iconlist.png)

Plats för iconlist-ikonkoden i HTML (vanligtvis nära rad 113)

#### Icons HTML

[<div data-with-frame="true" align="left"><img src="../../../assets/app-navigation-icons/app-icons.png" alt="Plats för icons-ikonkoden i HTML"></div>](https://downloads.intercomcdn.com/i/o/467437560/786013c0d589590cb65d0126/app-icons.png)

Plats för icons-ikonkoden i HTML (vanligtvis nära rad 237)
{% endstep %}

{% step %}
### Byt ut ikontaggen och spara

Ändra den befintliga el-taggen till den nya för din valda ikon och spara HTML-koden. För att till exempel ändra "Company News" från en bokmärkesikon till en kalenderikon byter du ut `el-bookmark` mot `el-calendar`. Låt taggarna runt omkring vara — `el`, `el-inverse` och `el-fw` är desamma för alla ikoner i appkomponenten.
{% endstep %}
{% endstepper %}
