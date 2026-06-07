# Villkor

DCL stöder ett enkelt `if-elseif-else-endif`-villkor för att testa om en sträng är lika med en annan.

Villkorsfunktioner följer normal funktionssyntax och returnerar alltid en tom sträng. De kan inte användas som argument till andra funktioner. Du kan testa likhet eller olikhet. Det finns inget koncept för booleska operatorer, men du kan simulera AND genom att nästa villkor.

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

Fullständigt exempel på ett villkorsblock:

```
<% if compare=<% contact field="firstname" %> equal="Bart" %>
    You're Homer's son! 
<% elseif compare=<% contact field="firstname" %> equal="Lisa" %> 
    You're Homer's elder daughter! 
<% elseif compare=<% contact field="firstname" %> equal="Maggie" %>
    You're Homer's younger daughter! 
<% else %> 
    Doh! 
<% endif %>
```

Nedan använder vi den booleska `or` i ett uttryck. För att använda en `and`, byt bara ut `or` mot `and`. Internt kontrollerar `if`-funktionen sitt `and`- eller `or`-argument för `true`.

```
<% if compare=<% contact field="firstname" %> equal="Bart" or=<% if compare=<% contact field="firstname" %> equal="Lisa" %> %> 
    You're Homer's child
<% endif %>
```
