# DCL: Conditionals

DCL provides a simple `if-elseif-else-endif` conditional for inserting different content based on a value.

You can test one string for equality or non-equality against another. Conditional functions use the normal function syntax and always return an empty string, but they cannot be used as arguments to other functions. There are no boolean operators, but you can simulate AND by nesting conditionals.

Check if "foo" is equal to "foo" (true):

```
<% if compare="foo" equal="foo" %>
```

Check if "foo" is equal to "bar" (false):

```
<% if compare="foo" equal="bar" %>
```

Check if "foo" is not equal to "foo" (false):

```
<% if compare="foo" notequal="foo" %>
```

Check if "foo" is not equal to "bar" (true):

```
<% if compare="foo" notequal="bar" %>
```

A full conditional block:

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

The example below uses the boolean `or` in an expression. To get an AND, replace `or` with `and`. Internally, the `if` function checks its `and` or `or` argument for `true`.

```
<% if compare=<% contact field="firstname" %> equal="Bart"
	or=<% if compare=<% contact field="firstname" %> equal="Lisa" %> %>
	You're my child
<% endif %>
```
