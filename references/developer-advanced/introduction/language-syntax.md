# Language Syntax

DCL has a simple structure built on three terms: function, argument, and value. Every function returns a string and takes named arguments whose values are strings.

The example below prints the firstname from the contact card.

```
<% contact field="firstname" %>
```

| Token | Meaning |
| --- | --- |
| `<%` | Tells the page a DCL function is starting. |
| `contact` | The name of the function. |
| `field` | The argument name. |
| `"firstname"` | The argument value. |
| `%>` | Ends the DCL function. |

## Whitespace

Whitespace characters are not visible and can be used freely to keep your DCL code readable. You can write the same function like this:

```
<%
contact
field="firstname"
%>
```

This is more useful when DCL lines become long.

## Functions

A function starts with `<%` and ends with `%>`. It returns a string that is printed on the page or used as an argument to another function. The example below builds a link to your website using the user field `website` as an argument to the `link` function.

```
<% link url=<% user field="website" %> caption="Link to Website" %>
```

## Strings

A string is a sequence of zero or more characters. In DCL, a literal string is written with double quotes.

```
"This is a string"
```

Only one character needs to be escaped in a literal string: the double quote. Two double quotes in a row produce one double quote in the resulting string.

```
"There is only 1 "" in this string"
```

Concatenate strings with the `+` character.

```
"This is a string" + "We add this string"
```

Because functions return strings, you can pass a function as an argument to another function, and you can concatenate functions and literal strings. The example below takes firstname and lastname from the contact card, puts a space between them, and uppercases the result. Whitespace is used to keep the code readable.

```
<% upper string=
	<% contact field="firstname" %> +
	 " " +
	 <% contact field="lastname" %>
%>
```
