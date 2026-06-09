---
description: >-
  Den kompletta referensen för att skriva uttryck i eMarketeers formuläreditor —
  värdereferenser, operatorer och funktioner.
---

# Uttryckssyntax i formulär

Ett uttryck är en formel eller ett logiskt påstående som eMarketeer utvärderar medan någon fyller i ditt formulär. Uttryck driver de villkorsregler som ligger bakom förgreningslogik, och de kan även beräkna värden, validera svar och styra om ett fält är skrivskyddat.

Du kan bygga ett uttryck med den visuella editorn (trollstavsikonen) eller skriva det direkt i fältet **Expression**. Den här artikeln beskriver syntaxen för att skriva uttryck för hand.

## Var du använder uttryck

* **Förgreningslogik** — visa eller dölj en fråga, hoppa framåt eller avsluta formuläret tidigt. Se [Förgreningslogik i formulär](form-branching-logic.md).
* **Beräknade värden** — härled ett värde från andra svar.
* **Validering** — upprätthåll ett villkor, till exempel ett startdatum som måste infalla före ett slutdatum.
* **Skrivskyddade fält** — gör ett fält redigerbart endast när ett villkor är uppfyllt.

## Referera till värden

Uttryck läser värden från formuläret via namn, omslutna av klammerparenteser.

### Frågevärden

| Det du refererar till | Syntax | Exempel |
| --- | --- | --- |
| De flesta frågetyper | `{questionName}` | `{email}` |
| Kryssrutor, bildväljare, rankning (efter position, nollbaserat) | `{questionName[index]}` | `{q1[0]}` |
| Flera textrutor | `{questionName.itemName}` | `{q1.item1}` |

### Matriscellvärden

| Det du refererar till | Syntax | Exempel |
| --- | --- | --- |
| Cell i samma rad | `{row.columnName}` | `{row.column1}` |
| Cell i föregående rad | `{prevRow.columnName}` | `{prevRow.column1}` |
| Cell i nästa rad | `{nextRow.columnName}` | `{nextRow.column1}` |
| Radindex, alla rader (börjar på 1) | `{rowIndex}` | `{rowIndex}` |
| Radindex, synliga rader (börjar på 1) | `{visibleRowIndex}` | `{visibleRowIndex}` |
| Radnamn eller radvärde | `{rowName}` | `iif({rowName} = 'test', 'Yes', 'No')` |
| Radtitel | `{rowTitle}` | `Title: {rowTitle}` |
| Cell i en enkelvalsmatris | `{matrixName.rowName}` | `{matrix1.row1}` |
| Cell i en flervalsmatris | `{matrixName.rowName.columnName}` | `{matrix1.row1.column1}` |
| Cell i en dynamisk matris (efter radindex) | `{matrixName[rowIndex].columnName}` | `{dmatrix1[0].column1}` |
| Cell i en föregående rad (förskjutning) | `{matrixName[-1].columnName}` | `{matrix1[-1].column1}` |
| Cell i totalrad, samma matris | `{totalRow.columnName}` | `{totalRow.column1}` |
| Cell i totalrad, från en annan fråga | `{matrixName-total.columnName}` | `{matrix1-total.column1}` |

### Värden i dynamiska paneler

| Det du refererar till | Syntax | Exempel |
| --- | --- | --- |
| Fråga i samma panel | `{panel.questionName}` | `{panel.q1}` |
| Fråga i föregående panel | `{prevPanel.questionName}` | `{prevPanel.q1}` |
| Fråga i nästa panel | `{nextPanel.questionName}` | `{nextPanel.q1}` |
| Fråga i den överordnade panelen | `{parentPanel.questionName}` | `{parentPanel.q1}` |
| Fråga i en specifik panel (efter index) | `{panelName[index].questionName}` | `{dpanel1[0].q1}` |
| Fråga i den sista panelen | `{panelName[-1].questionName}` | `{dpanel1[-1].q1}` |

### Anpassade variabler

Anpassade variabler lagrar dynamiskt beräknade värden. Referera till dem precis som till frågor, med namn inom klammerparenteser: `{variableName}`.

### Funktionsresultat

Funktioner returnerar värden som du kan använda som operander. Till exempel returnerar `dateDiff()` ett tal som du kan jämföra i en valideringsregel.

## Operatorer

### Jämförelseoperatorer

Jämförelser är skiftlägeskänsliga.

| Operator | Alias | Beskrivning | Exempel |
| --- | --- | --- | --- |
| `empty` | | Värdet är tomt (undefined eller null) | `{q1} empty` |
| `notempty` | | Värdet är inte tomt | `{q1} notempty` |
| `=` | `==`, `equal` | Lika med (ignorerar typ) | `{q1} = 10` |
| `!=` | `<>`, `notequal` | Inte lika med | `{q1} != 10` |
| `<` | `less` | Mindre än | `{q1} < 10` |
| `>` | `greater` | Större än | `{q1} > 10` |
| `<=` | `lessorequal` | Mindre än eller lika med | `{q1} <= 10` |
| `>=` | `greaterorequal` | Större än eller lika med | `{q1} >= 10` |
| `contains` | `*=`, `contain` | Värdet eller arrayen innehåller operanden | `{q1} contains 'abc'` |
| `notcontains` | `notcontain` | Värdet eller arrayen innehåller inte operanden | `{q1} notcontains 'abc'` |
| `anyof` | | Värdet är något av de angivna värdena | `{q1} anyof ['a', 'b']` |
| `noneof` | | Värdet är inget av de angivna värdena | `{q1} noneof ['a', 'b']` |
| `allof` | | Värdet inkluderar alla de angivna värdena | `{q1} allof ['a', 'b']` |

### Logiska operatorer

| Operator | Alias | Beskrivning | Exempel |
| --- | --- | --- | --- |
| `!` | `negate` | Inverterar ett booleskt resultat | `!{q1}` |
| `&&` | `and` | Sant när alla villkor är sanna | `{q1} empty and {q2} empty` |
| `\|\|` | `or` | Sant när något villkor är sant | `{q1} empty or {q2} empty` |

### Aritmetiska operatorer

| Operator | Beskrivning | Exempel |
| --- | --- | --- |
| `+` | Addition | `{q1} + {q2}` |
| `-` | Subtraktion | `{q1} - {q2}` |
| `*` | Multiplikation | `{q1} * {q2}` |
| `/` | Division | `{q1} / {q2}` |
| `%` | Rest (modulo) | `{q1} % {q2}` |
| `^` | Exponentiering (alias `power`) | `{q1} ^ {q2}` |

## Funktioner

### Logiska funktioner

`iif(condition, valueIfTrue, valueIfFalse)` returnerar ett av två värden beroende på om villkoret är sant.

```
iif({q1} > 20, 'High', 'Low')
```

### Datumfunktioner

| Funktion | Returnerar | Exempel |
| --- | --- | --- |
| `age(date)` | Ålder i år utifrån ett födelsedatum | `age('2000-01-01')` |
| `currentDate()` | Aktuellt datum och tid | `currentDate()` |
| `today(offset)` | Dagens datum, valfritt förskjutet med ett antal dagar | `today(-1)` (igår) |
| `year(date)` | År | `year('2000-01-01')` returnerar `2000` |
| `month(date)` | Månad, 1–12 | `month('2000-01-01')` returnerar `1` |
| `day(date)` | Dag i månaden, 1–31 | `day('2000-01-30')` returnerar `30` |
| `weekday(date)` | Veckodag, 0 (söndag) till 6 (lördag) | `weekday('2000-01-01')` returnerar `6` |
| `dateDiff(date1, date2, unit)` | Skillnaden mellan två datum i `days`, `hours`, `minutes`, `seconds`, `months` eller `years` | `dateDiff('2000-01-01', '2000-02-01', 'days')` returnerar `31` |
| `dateAdd(date, amount, unit)` | Datum med tid adderad eller subtraherad, i samma enheter som `dateDiff` | `dateAdd('2000-01-01', 10, 'days')` |

### Aggregeringsfunktioner

| Funktion | Returnerar | Exempel |
| --- | --- | --- |
| `sum(...)` | Summan av värdena | `sum(10, 20, 30, 40)` returnerar `100` |
| `min(...)` | Minsta värdet | `min(10, 20, 30, 40)` returnerar `10` |
| `max(...)` | Största värdet | `max(10, 20, 30, 40)` returnerar `40` |
| `avg(...)` | Medelvärdet av värdena | `avg(10, 20, 30, 40)` returnerar `25` |
| `sumInArray(matrix, column, condition)` | Summan av en matriskolumn, med ett valfritt filter | `sumInArray({matrix}, 'total', {categoryId} = 1)` |
| `minInArray(matrix, column, condition)` | Minsta värdet i en matriskolumn, med ett valfritt filter | `minInArray({matrix}, 'quantity', {quantity} > 0)` |
| `maxInArray(matrix, column, condition)` | Största värdet i en matriskolumn, med ett valfritt filter | `maxInArray({matrix}, 'quantity', {quantity} < 100)` |
| `avgInArray(matrix, column, condition)` | Medelvärdet av en matriskolumn, med ett valfritt filter | `avgInArray({matrix}, 'quantity', {quantity} > 0)` |
| `countInArray(matrix, column, condition)` | Antalet icke-tomma celler i en matriskolumn, med ett valfritt filter | `countInArray({matrix}, 'quantity', {quantity} > 0)` |

## Nästa steg

Sätt uttryck i arbete i [Förgreningslogik i formulär](form-branching-logic.md) för att visa, dölja, hoppa över eller avsluta ett formulär baserat på vad respondenterna svarar.
