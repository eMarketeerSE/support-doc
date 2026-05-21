# Conditionals

DCL features a simple “if-eliseif-else-endif” Conditional. You may test one string as equal or not equal with another string. The conditional functions are normal functions with normal syntax and always return an empty string. The conditional functions may however not be used as arguments to other functions. You may test for equality or non equality. There is no concept of boolean operators, but you may simulate AND by nesting conditionals.

Check if “foo” is equal to “foo” (true)

<% if compare="foo" equal="foo" %>

Check if “foo” is equal to “bar” (false)

<% if compare="foo" equal="bar" %>

Check if “foo” is not equal to “foo” (false)

<% if compare="foo" notequal="foo" %>

Check if “foo” is not equal to “bar” (true)

<% if compare="foo" notequal="bar" %>

Below we have a full example of a conditional block.

<% if compare=<% contact field="firstname" %> equal="Bart" %>
	You're Homers son!
<% elseif compare=<% contact field="firstname" %> equal="Lisa" %>
	You're Homers elder daughter!
<% elseif compare=<% contact field="firstname" %> equal="Maggie" %>
	You're Homers younger daughter!
<% else %>
	Doh!
<% endif %>

Below we use the boolean or in an expression. To use an “and” just replace “or” with “and”. Internaly the if function checks its “and”, “or” argument for “true”.

<% if compare=<% contact field="firstname" %> equal="Bart"
	or=<% if compare=<% contact field="firstname" %> equal="Lisa" %> %>
	You're my child
<% endif %>
