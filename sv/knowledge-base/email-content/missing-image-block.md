---
description: >-
  Hur du hittar och tar bort dolda tomma bildblock som orsakar brutna bildfält
  i Outlook (kräver Developer-behörighet).
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

# Saknat bildblock i e-postkomponent

{% hint style="warning" %}
Den här åtgärden kräver Developer-behörighet på ditt användarkonto.
{% endhint %}

Om en röd-x-ruta eller en blå frågetecken-ruta visas i dina skickade e-postmeddelanden när de visas i Outlook, gömmer sig sannolikt ett saknat bildblock i e-postkomponenten eller mallen.

<div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/outlook.png" alt="Röd-x-ruta som visas i Outlook på Windows där en bild borde renderas"></div>

Outlook (Windows)

<div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/outlook-mac.png" alt="Blå frågetecken-ruta som visas i Outlook på Mac där en bild borde renderas"></div>

Outlook (Mac)

Det här händer när den underliggande bilden togs bort från ditt konto eller flyttades till en annan mapp, vilket skapar en ny filsökväg. Antingen åtgärden ogiltigförklarar bildlänken i alla e-postkomponenter som använder den, och de flesta e-postklienter svarar med att dölja blocket.

<div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/1.-Before.png" alt="E-postinnehåll med bilden synlig innan sökvägen är bruten"></div>

Innan bildens sökväg är bruten.

<div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/2.-No-Block.png" alt="E-postinnehåll med bildblocket dolt efter att sökvägen är bruten"></div>

Efter att bildblocket är brutet och dolt.

## Så här fixar du det

En eMarketeer-användare med developer-behörighet kan ta bort eller fixa blocket från komponenten genom att gå in i developer mode.

<div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/3.-User.png" alt="Användarkonto som visar att developer-behörigheten är aktiverad"></div>

Kontoanvändare med developer-behörighet.

1. Öppna redigeraren för mallen eller komponenten.
2. Gå in i developer mode.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/4.-dev-mode.png" alt="Knappen Enable Developer Mode i redigerarens verktygsfält"></div>

   Knappen Enable Developer Mode.

3. Kontrollera namnen på alla synliga bildblock genom att välja varje och öppna fliken settings.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/5.-check-other-image-names.png" alt="Fliken settings som visar namnet på ett valt bildblock"></div>

   Kontrollera namnet på ett synligt bildblock.

4. Gå in i Tree View.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/6.-tree-view.png" alt="Knappen Tree View i developer mode-verktygsfältet"></div>

   Knappen Tree View.

5. Hitta alla Image Full Width-block i listan och matcha deras containernamn med de synliga tills du hittar ett som inte matchar. I det här exemplet matchar inte _container1 (1 Column: Image Full Width)_ ett synligt bildblock.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/7.-tree-view-image-full-w.png" alt="Tree View som listar Image Full Width containerblock"></div>

   Image Full Width-block i Tree View.

6. Välj bilddelen av blocket och ändra bildens URL genom att klicka på knappen Choose Image, välj sedan en ny bildfil i filvalsfönstret.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/7.-select-image-and-change-url.png" alt="Bildblock valt i Tree View med bild-URL-fältet markerat"></div>

   Hitta bildens URL.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/8.-select-new-image.png" alt="Filvalspopup med en ny bild vald"></div>

   Välj en ny bildfil.

7. Spara ändringen, återgå sedan till Page View för att fortsätta redigera komponenten.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/9.-save-your-change.png" alt="Knappen Save markerad i redigerarens verktygsfält"></div>

   Knappen Save.

   <div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/10.-Result.png" alt="E-postkomponentens redigerare som nu visar den återställda bilden"></div>

   Resultatet efter att du följt den här guiden.

## Så här redigerar du en mall

1. Klicka på Add E-Mail från en kampanjsida för att visa dina mallar.
2. Klicka på More Actions på mallen du vill redigera.
3. Klicka på Edit Template i rullgardinsmenyn.
4. Mallen öppnas i komponentredigeraren. Varje ändring som sparas här uppdaterar mallen.

<div data-with-frame="true" align="left"><img src="../../../assets/missing-image-block/Edit-Template.png" alt="Sekvens som visar Add E-Mail, More Actions, sedan Edit Template"></div>

Visuell guide till att redigera en mall.
