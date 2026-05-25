# Språksyntax

DCL har en enkel struktur byggd på tre termer: funktion, argument och värde. Varje funktion returnerar en sträng och tar namngivna argument vars värden är strängar.

Exemplet nedan skriver ut förnamnet från kontaktkortet.

```
<% contact field="firstname" %>
```

| Token | Betydelse |
| --- | --- |
| `<%` | Säger till sidan att en DCL-funktion startar. |
| `contact` | Funktionens namn. |
| `field` | Argumentets namn. |
| `"firstname"` | Argumentets värde. |
| `%>` | Avslutar DCL-funktionen. |

## Blanktecken

Blanktecken är inte synliga och kan användas fritt för att hålla din DCL-kod läsbar. Du kan skriva samma funktion så här:

```
<%
contact
field="firstname"
%>
```

Detta är mer användbart när DCL-rader blir långa.

## Funktioner

En funktion börjar med `<%` och slutar med `%>`. Den returnerar en sträng som skrivs ut på sidan eller används som argument till en annan funktion. Exemplet nedan bygger en länk till din webbplats med hjälp av användarfältet `website` som argument till `link`-funktionen.

```
<% link url=<% user field="website" %> caption="Link to Website" %>
```

## Strängar

En sträng är en sekvens av noll eller flera tecken. I DCL skrivs en literal sträng med dubbla citattecken.

```
"This is a string"
```

Endast ett tecken behöver escapas i en literal sträng: dubbelt citattecken. Två dubbla citattecken i rad producerar ett dubbelt citattecken i den resulterande strängen.

```
"There is only 1 "" in this string"
```

Konkatenera strängar med tecknet `+`.

```
"This is a string" + "We add this string"
```

Eftersom funktioner returnerar strängar kan du skicka en funktion som argument till en annan funktion, och du kan konkatenera funktioner och literala strängar. Exemplet nedan tar förnamn och efternamn från kontaktkortet, sätter ett mellanslag mellan dem och gör resultatet versalt. Blanktecken används för att hålla koden läsbar.

```
<% upper string=
	<% contact field="firstname" %> +
	 " " +
	 <% contact field="lastname" %>
%>
```
