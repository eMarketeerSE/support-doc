# Template Functions

DCL is used first and foremost with its template engine, Dynamic Content Engine (DCE). DCE uses nested chunks of code (blocks) to obtain a structured layout. Child blocks may be inserted manually by their parent block or they may be “flowed” out at a specific point in the parent block.

In Emarketeer these blocks are called Container Blocks, A Container Block may have HTML Code and may have child blocks. There are also other blocks like Text, Image and Link Blocks which does not include HTML but most may use parts of DCL. To create blocks in Emarketeer you enter the HTMLEditor in developer mode and use the GUI to add blocks. In order to change the order of the flowed blocks you may use Drag and Drop in the Emarketeer GUI.

### Inserting blocks

In order to insert a child block you use the insert\_block function.

<div id="child">
	<% insert\_block name="child\_block" \[onlypos="first,middle,last"\] %>
</div>

Notice the optional parameter “onlypos”, it is a flow control argument discussed in 5.3 and can be disregarded for now. The child block will start it’s render at the position in the code. You do not need any div tag around the code, it’s here for demonstrational purposes.

### Insert code

There is a function for inserting HTML code into DCE. It may seem superfluous as you may just write HTML code in the editor, but this offer you some conditional control and the onlypos argument for flow control.

<% insert\_code code="<b>Hello World</b>"
	\[onlypos="first,middle,last"\]
	\[notempty=String\]
	\[empty=String\]
%>

“onlypos” is discussed in 5.3 and not mention further here. “empty” and “notempty” is a conditional argument. It will only insert the code if the string in the argument in either empty or not empty.

### Flow Control

DCE has functions for flowing content into the resulting document. Flowing means you don’t explicity insert a block using insert\_block. When the container is rendered and its child is not rendered, the block will render all its unrendered childs after all its own content.

In Emarketeer you go into settings on a container block and mark it as flow block for the children to flow on automatic, this also makes the GUI drag and drop aware in this specific block so you may reorder the childs.

You may alter the position of where the flow happens, by default it is after the block own content but by isuing a function you may change this. In this example the flow will occur in the “after-this” div.

<div id="after-this">
	<% insert\_block flow="true" %>
</div>

A child is aware of its position in the flow and may alter the content based on that fact. A child knows it is inserted first, middle or last in the flow. There are some rule that apply here. think of this as a flow from top to bottom.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Number of Blocks</td><td></td><td></td><td></td></tr><tr><td valign="top">1 Block</td><td valign="top">Only block, considers itself first and last</td><td></td><td></td></tr><tr><td valign="top">2 Blocks</td><td valign="top">Top block considers itself first</td><td valign="top">Bottom block considers itself last</td><td></td></tr><tr><td valign="top">3 Blocks or more</td><td valign="top">Top block considers itself first</td><td valign="top">All blocks but top and bottom considers themselves middle</td><td valign="top">Bottom block considers itself last</td></tr></tbody></table>

The insert\_block and insert\_code functions have the onlypos argument which will insert code only if the position in the flow matches. If you use a onlypos argument the rendering will be turned of by default until at match is found. The positions in the onlypos arument is a commaseperated list of “first”, “middle” or “last”, They are parsed from left to right and the block is rendered if a block who consider itseld first encounter a first in the argument. Likewise you may want to not render a block, if thats the case you may use the “!” before the position to turn of rendering. Consider this code.

<% insert\_code code="<hr />" onlypos="middle,last,!first" %>

We use a table to explain in full what happens to blocks when they encounter this specific code.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Number of Blocks</td><td></td><td></td><td></td></tr><tr><td valign="top">1 Block</td><td valign="top">Only block, although “last” matches and would render, “!first” also matches and turns rendering off.</td><td></td><td></td></tr><tr><td valign="top">2 Blocks</td><td valign="top">First block matches on “first” and will turn off rendering.</td><td valign="top">Last block matches on “last” and will render the code.</td><td></td></tr><tr><td valign="top">3 Blocks or more</td><td valign="top">First block matches on “!first” and will never render the code.</td><td valign="top">All blocks but top and bottom matches on “middle” and will render the code.</td><td valign="top">Last block matches on “last” and will render the code.</td></tr></tbody></table>

It can be hard to grasp why you would need such a system. The specific code above can be inserted first in a block to make a divider beetween the blocks. The divider would only be rendered before a block that has a sibling block directly before it. It will never render on the first block, and it will never render if we only have one block.

There is a way to “reset” the flow. This means whatever block comes after the one who is reseting the flow will be first again. This can be used for example in some cases to not have a divider beetween specific blocks. Lets saty you have a image block that doesn’t need a divider after it you may put this code last in the image block.

<% flow command="reset" %>

Now, with the insert\_code presented above, the block below it will not render a divider because that block is now first in the flow again.

### Case converting

DCL has three specific functions for converting the case of strings. It can convert to uppercase, lowercase or “title”. Title means the first letter in the string will become uppercase and the rest lowercase.

Convert firstname on contact card to uppercase.

<% upper string=<% contact field="firstname" %> %>

Convert firstname on contact card to lowercase.

<% lower string=<% contact field="firstname" %> %>

Convert firstname on contact card to title.

<% title string=<% contact field="firstname" %> %>
