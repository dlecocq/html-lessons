addUnit({
	title  : 'Lists and Tables',
	lessons: []
});

// Listing
addLesson(Object({
	title       : 'Let Me List The Ways',
	id          : 'lists',
	description : "\
Thus far, we've dealt mostly in text. Particularly, headers and    \
paragraphs. But the pallate becomes sophisticated rather quickly,  \
and we need something more. This brings us to lists. Lists come in \
both the ordered (each item has a number associated with it) and   \
unordered varieties (each item is a bullet point). Ordered lists   \
begin begin with the 'ol' tag, while their unordered counterparts  \
begin with the 'ul' tag. Items in the list are identified by the   \
'li' tag. Add an item to your grocery list and to-do list",

	input       : "\
<p>My Grocery List:\n\
	<ul>\n\
		<li>Mac-and-cheese</li>\n\
		<li>Mountain Dew</li>\n\
		<li>Marmelade</li>\n\
	</ul>\n\
</p>\n\
<p>My To-Do List:\n\
	<ol>\n\
		<li>Learn HTML</li>\n\
		<li>Become a programming wizard</li>\n\
		<li>?</li>\n\
		<li>Profit</li>\n\
	</ol>\n\
</p>",

	solution    : "\
<p>My Grocery List:\n\
	<ul>\n\
		<li>Mac-and-cheese</li>\n\
		<li>Mountain Dew</li>\n\
		<li>Marmelade</li>\n\
		<li>Meat Loaf</li>\n\
	</ul>\n\
</p>\n\
<p>My To-Do List:\n\
	<ol>\n\
		<li>Learn HTML</li>\n\
		<li>Become a programming wizard</li>\n\
		<li>?</li>\n\
		<li>Profit</li>\n\
		<li>World Domination</li>\n\
	</ol>\n\
</p>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.children('ul li').length > 3 && item.children('ol li').length > 4;
	}
}));