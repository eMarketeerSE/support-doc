---
description: >-
  Avancerad guide för att begränsa antalet valbara alternativ i en checkbox-fråga i ett formulär med ett anpassat JavaScript-kodavsnitt.
tags:
  - legacy
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
    visible: true
  actions:
    visible: true
---

# Sätt maxantal svar för en checkbox-fråga i ett formulär (legacy, avancerat)

Den här avancerade guiden visar hur du begränsar hur många alternativ en respondent kan välja för en checkbox-fråga i ett formulär.

För att sätta gränsen lägger du till ett skript i HTML Head-sektionen för formuläret, som hittas under Edit Fonts & Colors-alternativen.

Exemplet nedan täcker två checkbox-frågor. Frågan query_2004686 tillåter upp till 3 valda svar, och frågan query_2005423 tillåter upp till 2.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
var jq = $.noConflict();

jq(document).on('change', 'input[name^="query_2004686"]', function (e) {
    if (jq('input[name^="query_2004686"]:checked').length > 3) {
        jq(this).prop('checked', false);
        alert("Only 3 Checked Answers Allowed");
    }
});

jq(document).on('change', 'input[name^="query_2005423"]', function (e) {
    if (jq('input[name^="query_2005423"]:checked').length > 2) {
        jq(this).prop('checked', false);
        alert("Only 2 Checked Answers Allowed");
    }
});

</script>
```

## Steg för steg

1. Kopiera koden ovan och justera den så att det finns ett `jq(document).on('change')`-block per fråga som du vill begränsa. Exemplet täcker två frågor.
2. Öppna formulärets Publish-sida och Website Integration-kodsidan så att du kan se de fråge-Names som används i koden.
3. Hämta Name-selektorn för varje checkbox-fråga från integrationskoden (till exempel "query_2004686" från "query_2004686_2_0_0[]"). Ersätt namnen i exemplet så att varje block använder rätt namn.
4. Ändra length-numret i varje block till det maximala antal val som är tillåtna för den frågan. Uppdatera alert-texten för samma fråga så att den speglar det nya antalet.
5. Lägg till koden i HTML Head-sektionen i formuläret under Edit Fonts & Colors-alternativen.
