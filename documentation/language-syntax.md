# Language Syntax

The inner workings of DCL is very simple. The most fundamental terms are function, argument and value. All functions returns a string and takes named arguments in the form of a string. Here is a small example to show how it works. The code in this example will print the firstname from the contact card.

<% contact field="firstname" %>

<table><tbody><tr><td>&lt;%</td><td>– Tell the page we are about to run a DCL function</td></tr><tr><td>Contact</td><td>– What is the name of the function</td></tr><tr><td>Field</td><td>– The argument name</td></tr><tr><td>“firstname”</td><td>– The argument value</td></tr><tr><td>&nbsp;%&gt;</td><td>– End DCL function</td></tr></tbody></table>

### Whitespace

Whitespace are non visible characters and may be used at will to make your DCL code cleaner and more readable. If you like you may code DCL like this.

<table><tbody><tr><td>&lt;%</td></tr><tr><td>contact</td></tr><tr><td>field=”firstname”</td></tr><tr><td>%&gt;</td></tr></tbody></table>

It is however used more if your DCL code lines becomes excessively long.

### Functions

Function starts with “<%” and end with “%>”, a function returns a string which will be printed out in the page or used as an argument to another function. Here we make a link to our website using the user field “website” as an argument to the link function.

<% link url=<% user field="website" %> caption="Link to Website" %>

### Strings

A string is a sequence of zero or more characters, in DCL a literal string is written with doublequotes.

"This is a string"

There is exactly one character thats needs to be escaped in a literal string, the doublequote. If you put 2 doublequotes in a row there will be 1 in the resulting string.

"There is only 1 "" in this string"

To concatenate strings we use the “+” character.

"This is a string" + "We add this string"

As functions returns a string you may use a function as an argument to another function (See 3.2), you may even concatenate functions and literal strings. The code below takes firstname and lastname from the contact card, put a space in between them and uppercase it all. Notice how we use whitespace to clean up this code.

<% upper string=
	<% contact field="firstname" %> +
	 " " +
	 <% contact field="lastname" %>
%>
