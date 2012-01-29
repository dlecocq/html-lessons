addUnit({
	title  : 'Lists and Tables',
	lessons: []
});

// Listing
addLesson(Object({
	title       : 'Let Me List The Ways',
	id          : 'lists',
	description : "\
<p>Thus far, we've dealt mostly in text. Particularly, headers and    \
paragraphs. But the pallate becomes sophisticated rather quickly,  \
and we need something more, which brings us to lists.</p>\
<p>Lists begin with either the <span class='cm-tag'>&lt;ul&gt;</span> \
tag, which makes an <span class='cm-tag'>u</span>nordered \
<span class='cm-tag'>l</span>list with bullet points, or the \
<span class='cm-tag'>&lt;ol&gt;</span> tag, which makes an \
<span class='cm-tag'>o</span>rdered <span class='cm-tag'>l</span>ist with \
numbers.</p>\
<p>HTML elements can be <span class='definition'>nested</span>, meaning \
that they can contain other HTML elements. In earlier lessons, you \
nested an <span class='cm-tag'>&lt;a&gt;</span> tag inside of a paragraph, \
for example. HTML lists contain many <span class='cm-tag'>&lt;li&gt;</span> \
or <span class='cm-tag'>l</span>ist <span class='cm-tag'>i</span>tem tags \
to represent each of the items in a list.</p>\
<p>Add an item to your grocery list, and to your to-do list.</p>",

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