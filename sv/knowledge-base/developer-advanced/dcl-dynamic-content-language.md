# DCL: Villkor

DCL erbjuder ett enkelt `if-elseif-else-endif`-villkor för att infoga olika innehåll baserat på ett värde.

Du kan testa om en sträng är lika med eller skild från en annan. Villkorsfunktioner använder den vanliga funktionssyntaxen och returnerar alltid en tom sträng, men de kan inte användas som argument till andra funktioner. Det finns inga booleska operatorer, men du kan simulera AND genom att nästa villkor.

Kontrollera om "foo" är lika med "foo" (sant):

```
<% if compare="foo" equal="foo" %>
```

Kontrollera om "foo" är lika med "bar" (falskt):

```
<% if compare="foo" equal="bar" %>
```

Kontrollera om "foo" inte är lika med "foo" (falskt):

```
<% if compare="foo" notequal="foo" %>
```

Kontrollera om "foo" inte är lika med "bar" (sant):

```
<% if compare="foo" notequal="bar" %>
```

Ett komplett villkorsblock:

```
<% if compare=<% contact field="firstname" %> equal="Bart" %>
	You're Homers son!
<% elseif compare=<% contact field="firstname" %> equal="Lisa" %>
	You're Homers elder daughter!
<% elseif compare=<% contact field="firstname" %> equal="Maggie" %>
	You're Homers younger daughter!
<% else %>
	Doh!
<% endif %>
```

Exemplet nedan använder det booleska `or` i ett uttryck. För att få en AND ersätter du `or` med `and`. Internt kontrollerar `if`-funktionen sitt `and`- eller `or`-argument efter `true`.

```
<% if compare=<% contact field="firstname" %> equal="Bart"
	or=<% if compare=<% contact field="firstname" %> equal="Lisa" %> %>
	You're my child
<% endif %>
```
