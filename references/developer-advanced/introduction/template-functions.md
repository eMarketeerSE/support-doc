# Template Functions

This article covers the template functions in DCL, the language behind eMarketeer's Dynamic Content Engine (DCE). DCE composes structured layouts from nested chunks of code called blocks.

DCE uses nested chunks of code (blocks) to obtain a structured layout. Child blocks can be inserted manually by their parent block, or they can be "flowed" out at a specific point in the parent block.

In eMarketeer these blocks are called Container Blocks. A Container Block can have HTML code and can have child blocks. There are also other blocks such as Text, Image, and Link Blocks, which do not include HTML but can still use parts of DCL. To create blocks in eMarketeer, open the HTML editor in developer mode and use the UI to add blocks. To change the order of flowed blocks, use drag and drop in the eMarketeer UI.

## Inserting blocks

To insert a child block, use the `insert_block` function.

```
<div id="child">
	<% insert_block name="child_block" [onlypos="first,middle,last"] %>
</div>
```

The optional `onlypos` parameter is a flow-control argument discussed in 5.3 and can be ignored for now. The child block starts rendering at the position in the code. The `<div>` tag is not required; it is shown for demonstration.

> TODO: verify reference to section "5.3"

## Insert code

There is a function for inserting HTML code into DCE. It may seem redundant since you can just write HTML in the editor, but this function gives you conditional control and the `onlypos` argument for flow control.

```
<% insert_code code="<b>Hello World</b>"
	[onlypos="first,middle,last"]
	[notempty=String]
	[empty=String]
%>
```

`onlypos` is discussed in 5.3 and not covered further here. `empty` and `notempty` are conditional arguments. They insert the code only if the string in the argument is empty or not empty.

> TODO: verify reference to section "5.3"

## Flow control

DCE has functions for flowing content into the resulting document. Flowing means you do not explicitly insert a block using `insert_block`. When the container is rendered and its child is not rendered, the block renders all its unrendered children after its own content.

In eMarketeer, open the settings on a container block and mark it as a flow block so the children flow automatically. This also makes the UI drag-and-drop aware in that block, so you can reorder the children.

You can change where the flow happens. By default it is after the block's own content, but you can move it. In the example below, the flow occurs in the `after-this` div.

```
<div id="after-this">
	<% insert_block flow="true" %>
</div>
```

A child is aware of its position in the flow and can change its content based on that. A child knows whether it is inserted first, middle, or last in the flow. Think of this as a flow from top to bottom.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Number of Blocks</td><td></td><td></td><td></td></tr><tr><td valign="top">1 Block</td><td valign="top">Only block, considers itself first and last</td><td></td><td></td></tr><tr><td valign="top">2 Blocks</td><td valign="top">Top block considers itself first</td><td valign="top">Bottom block considers itself last</td><td></td></tr><tr><td valign="top">3 Blocks or more</td><td valign="top">Top block considers itself first</td><td valign="top">All blocks but top and bottom considers themselves middle</td><td valign="top">Bottom block considers itself last</td></tr></tbody></table>

The `insert_block` and `insert_code` functions take the `onlypos` argument, which inserts code only if the position in the flow matches. If you use `onlypos`, rendering is off by default until a match is found. The positions in the `onlypos` argument are a comma-separated list of `first`, `middle`, or `last`. They are parsed from left to right, and a block renders if a block that considers itself first encounters a `first` in the argument. To suppress rendering, use `!` before the position. Consider this code:

```
<% insert_code code="<hr />" onlypos="middle,last,!first" %>
```

The table below explains what happens to blocks when they encounter this specific code.

<table cellspacing="0" cellpadding="0"><tbody><tr><td valign="top" width="130">Number of Blocks</td><td></td><td></td><td></td></tr><tr><td valign="top">1 Block</td><td valign="top">Only block, although "last" matches and would render, "!first" also matches and turns rendering off.</td><td></td><td></td></tr><tr><td valign="top">2 Blocks</td><td valign="top">First block matches on "first" and will turn off rendering.</td><td valign="top">Last block matches on "last" and will render the code.</td><td></td></tr><tr><td valign="top">3 Blocks or more</td><td valign="top">First block matches on "!first" and will never render the code.</td><td valign="top">All blocks but top and bottom matches on "middle" and will render the code.</td><td valign="top">Last block matches on "last" and will render the code.</td></tr></tbody></table>

It can be hard to see why you would need such a system. The code above can be inserted first in a block to draw a divider between blocks. The divider only renders before a block that has a sibling block directly before it. It never renders on the first block, and it never renders if there is only one block.

You can also reset the flow. After a reset, whatever block comes next is treated as first again. This is useful when you do not want a divider between specific blocks. For example, if an image block does not need a divider after it, put this code last in the image block:

```
<% flow command="reset" %>
```

With the `insert_code` above, the block that follows does not render a divider, because it is now first in the flow again.

## Case converting

DCL has three functions for converting the case of strings: uppercase, lowercase, and "title". Title means the first letter of the string becomes uppercase and the rest lowercase.

Convert the first name on the contact card to uppercase:

```
<% upper string=<% contact field="firstname" %> %>
```

Convert the first name on the contact card to lowercase:

```
<% lower string=<% contact field="firstname" %> %>
```

Convert the first name on the contact card to title case:

```
<% title string=<% contact field="firstname" %> %>
```
