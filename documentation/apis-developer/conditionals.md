# Conditionals

DCL supports a simple `if-elseif-else-endif` conditional for testing whether one string equals another.

Conditional functions follow normal function syntax and always return an empty string. They cannot be used as arguments to other functions. You can test for equality or inequality. There is no concept of boolean operators, but you can simulate AND by nesting conditionals.

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

Full example of a conditional block:

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

Below we use the boolean `or` in an expression. To use an `and`, just replace `or` with `and`. Internally, the `if` function checks its `and` or `or` argument for `true`.

```
<% if compare=<% contact field="firstname" %> equal="Bart" or=<% if compare=<% contact field="firstname" %> equal="Lisa" %> %> 
    You're Homer's child
<% endif %>
```
