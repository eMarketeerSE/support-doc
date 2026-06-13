---
description: >-
  Så stylar du ditt formulär i Themes-fliken — applicera ett tema, justera färger
  och typsnitt, utforma sidhuvudet och ange en bakgrund, helt utan kod.
---

# Styla ditt formulär

Styla ditt formulär så att det matchar ditt varumärke via **Themes**-fliken i formuläreditorn. Du ändrar färger, typsnitt, storlekar, hörnavrundning, skuggor med mera — utan att skriva någon kod.

Den här guiden går igenom alternativen för tema, från att applicera ett färdigt tema till att finjustera sidhuvudet och bakgrunden. För en rundtur i hela editorn, se [Formuläreditor: UI-översikt](ui-overview.md).

{% hint style="info" %}
Du kan inte lägga till egen CSS via Themes-fliken, så du är begränsad till de alternativ som finns där. Ett formulär som är inbäddat på din webbplats kan dock få styling injicerad när det anropas. Läs mer i [Bädda in formulär på din webbplats](publish-a-form.md#styla-formuläret).
{% endhint %}

## Om formulärteman

Ett tema är en samling visuella inställningar som gäller för hela ditt formulär — färger, typsnitt, mellanrum och form. Themes-fliken ger dig ett kodfritt gränssnitt för att justera de inställningarna, utgå från en förinställning och spara resultatet.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/themes-tab.png" alt="Themes-fliken öppen i formuläreditorn, med temainställningarna synliga."></div>

{% hint style="info" %}
Du kan exportera ett anpassat tema som en JSON-fil och importera det till ett annat formulär för att återanvända samma stil, så att utseendet hålls konsekvent över alla formulär du bygger.

Du kan också göra ett färdigt formulär till en mall från vyn Campaign Components. Mallar fungerar som utgångspunkter när du skapar nya formulär. Möjligheten att skapa mallar finns för användare med Developer-rollen.
{% endhint %}

## Välj och applicera ett tema

Det snabbaste sättet att ge formuläret ny stil är att välja ett annat tema.

Öppna listan **Theme** under kategorin **General** och välj en av förinställningarna. Varje förinställning finns i flera varianter, inklusive kompakta och mörka versioner, så du har en bred uppsättning utgångspunkter.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/theme-dropdown.png" alt="Listan Theme under kategorin General med de tillgängliga temaförinställningarna."></div>

Att applicera ett tema är en utgångspunkt, inte ett slutgiltigt val — du kan justera varje enskild inställning efteråt.

## Aktivera mörkt läge

Mörkt läge passar för visning i svagt ljus och fungerar bra ihop med mörkare varumärkesfärger.

Ställ in reglaget **Light / Dark** på **Dark** för att växla formuläret till ett mörkt färgschema.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/dark-theme.png" alt="Reglaget Light och Dark inställt på Dark."></div>

## Visa frågor utan rutor

Som standard ligger varje fråga i sin egen ruta. Du kan ta bort rutorna för ett lättare och mer öppet utseende.

Under kategorin **General**, ställ in **Question appearance** på **Without Panels**. Rutorna runt enskilda frågor försvinner.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/panels-with.png" alt="Formulärfrågor som var och en visas i sin egen ruta."></div>

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/panels-without.png" alt="Samma formulärfrågor visade utan enskilda rutor."></div>

Paneler (grupper av frågor) behåller sina egna kanter, så grupperade frågor hålls visuellt samman även när enskilda rutor är avstängda.

## Styla formulärets sidhuvud

Sidhuvudet är området högst upp i formuläret som rymmer din logotyp, titel och beskrivning. Du kan styla varje del.

### Lägg till en logotyp

Så lägger du till din logotyp i sidhuvudet:

1. Växla till fliken **Designer**.
2. Öppna **Logo** i kategorin **Survey Header**.
3. Klistra in en bildlänk i fältet **Survey logo**, eller klicka på mappikonen för att ladda upp en fil.
4. Ange eventuellt **Logo width** och **Logo height** (i CSS-enheter) för att ändra storlek.
5. Välj ett alternativ för **Logo fit**: None, [Contain](#contain), [Cover](#cover) eller [Fill](#fill).

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/add-logo1.png" alt="Fältet för logotypuppladdning och storleksalternativen i kategorin Survey Header."></div>

För att placera logotypen, växla till **Themes**-fliken, öppna kategorin **Header** och ställ in egenskapen **Logo alignment**.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/add-logo2.png" alt="Egenskapen Logo alignment i kategorin Header."></div>

### Titel och beskrivning

Titeln och beskrivningen ligger bredvid logotypen i sidhuvudet. Följande inställningar finns under kategorin **Header** i **Themes**-fliken.

#### Justera textbredd

Använd egenskapen **Text width** för att ange hur stor del av sidhuvudet som titeln och beskrivningen upptar.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/title-description.png" alt="Egenskapen Text width som styr textområdet i sidhuvudet."></div>

#### Anpassa typsnitt

Hitta sektionerna **Survey title font** och **Survey description font**. För var och en kan du ange:

* **Font family** — välj i listan.
* **Font weight** — Regular, Semi-bold, Bold eller Heavy.
* **Color** — välj en färg eller ange ett RGB-, HEX- eller HSL-värde.
* **Opacity** — ange procentvärdet bredvid färgen.
* **Font size** — ange storleken i pixlar.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/customize-fonts.png" alt="Kontroller för typsnitt, vikt, färg, opacitet och storlek för titel och beskrivning."></div>

#### Justera textjustering

Använd egenskaperna **Survey title alignment** och **Survey description alignment** för att ange den horisontella och vertikala positionen för var och en.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/align-text.png" alt="Justeringskontrollerna för formulärets titel och beskrivning."></div>

### Anpassa sidhuvudsområdet

Växla reglaget **View** till **Advanced** för att visa hela uppsättningen inställningar för sidhuvudsområdet.

* **Height** — ange sidhuvudets höjd på dator.
* **Height on smartphones** — ange sidhuvudets höjd på mobil.
* **Background color** — välj None, [Accent](#accent) eller Custom (med en färgväljare).
* **Background image** — klistra in en länk eller ladda upp en fil, och ange sedan visningsstil (Cover, [Stretch](#stretch), Contain eller [Tile](#tile)), opacitet och om sidhuvudets innehåll ska överlappa bilden.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/customize-header-area1.png" alt="Egenskaperna Height och Height on smartphones för sidhuvudet."></div>

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/customize-header-area2.png" alt="Alternativen för sidhuvudets Background color: None, Accent och Custom."></div>

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/customize-header-area3.png" alt="Inställningarna för sidhuvudets Background image med kontroller för visning, opacitet och överlappning."></div>

### Justera sidhuvudets innehållsområde

Med reglaget **View** inställt på **Advanced**, använd egenskapen **Content area width** för att välja om sidhuvudets innehåll ska matcha formulärets bredd eller behållarens bredd.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/customize-header-area4.png" alt="Egenskapen Content area width i de avancerade sidhuvudsinställningarna."></div>

## Bakgrundsalternativ

Du kan styla bakgrunden bakom hela formuläret, inte bara sidhuvudet.

Under kategorin **Background**:

* **Background color** — välj en färg, eller ange ett RGB-, HEX- eller HSL-värde.
* **Background image** — klistra in en länk eller klicka på mappikonen för att ladda upp en fil.
* **Image display** — välj [Auto](#auto), Contain eller Cover.
* **Image position** — växla mellan Fixed och Scroll.
* **Opacity** — ange hur genomskinlig bakgrunden ska visas.

<div data-with-frame="true" align="left"><img src="../../../assets/styling-your-form/background-options.png" alt="Bakgrundsinställningarna för formuläret: färg, bild, visningsstil, position och opacitet."></div>

## Nästa steg

För en rundtur i de andra editorflikarna, se [Formuläreditor: UI-översikt](ui-overview.md).

För att styla ett formulär som är inbäddat på din webbplats med din egen CSS, se **Styla formuläret** i [Bädda in formulär på din webbplats](publish-a-form.md#styla-formuläret).

## Referens

De här alternativen förekommer på flera ställen i Themes-fliken. Så här fungerar de.

<details>

<summary>Accent</summary>

En färg som definieras i temats appearance-inställningar. Den används på accentuerade element i hela formuläret, till exempel knappfärger och kanten på ett fält som är i fokus.

</details>

<details>

<summary>Auto</summary>

Visar bilden i dess naturliga storlek, utan att skala den för att fylla ytan.

</details>

<details>

<summary>Contain</summary>

Skalar bilden så att den ryms helt inom ytan med bibehållna proportioner. Kan lämna tomt utrymme runt den.

</details>

<details>

<summary>Cover</summary>

Skalar bilden så att den fyller ytan med bibehållna proportioner. Kan beskära kanterna.

</details>

<details>

<summary>Fill</summary>

Sträcker ut bilden så att den fyller ytan, utan hänsyn till proportionerna. Kan förvränga bilden.

</details>

<details>

<summary>Stretch</summary>

Sträcker ut bilden så att den fyller ytan, utan hänsyn till proportionerna. Har samma effekt som Fill.

</details>

<details>

<summary>Tile</summary>

Upprepar bilden över ytan tills utrymmet är fyllt.

</details>
