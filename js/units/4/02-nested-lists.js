// Listing
addLesson(Object({
	title       : 'List-ception: Lists Within Lists',
	id          : 'list-ception',
	description : "\
<p>As the last lesson noted, HTML elements can contain other elements. \
We'll explore this idea a little more with \
<span class='definition'>nested lists</span>. In a table of contents, you \
might list out the acts of a play, and then the scenes in each act. \
To do this, you first make a list, with list items for each of the acts. \
Then in each of these list items, you begin a new list with its own list items \
for the scenes in that act.</p>\
<p>For both ordered and unordered lists, the second list appears indented \
to one more level. For ordered lists, the numbering can be styled to change \
to use roman numerals at one level, or letters at another. Unordered lists \
typically use different bullet points at the various levels.</p>\
<p>Follow the example to add the scenes for the second act.</p>",

	input       : "\
<h2>The Life and Death of Julius Caesar</h2>\n\
<ol>\n\
  <li>Act\n\
    <ol>\n\
      <li>Scene: A street in Rome</li>\n\
      <li>Scene: A public place</li>\n\
      <li>Scene: The same street in Rome</li>\n\
    </ol>\n\
  </li>\n\
  \n\
  <li>Act\n\
    <!-- Scene: Brutus' orchard -->\n\
    <!-- Scene: Caesar's house -->\n\
    <!-- Scene: A street near the Capitol -->\n\
    <!-- Scene: Another part of the same street -->\n\
  </li>\n\
</ol>",

	solution    : "\
<h2>The Life and Death of Julius Caesar</h2>\n\
<ol>\n\
  <li>Act\n\
    <ol>\n\
      <li>Scene: A street in Rome</li>\n\
      <li>Scene: A public place</li>\n\
      <li>Scene: The same street in Rome</li>\n\
    </ol>\n\
  </li>\n\
  \n\
  <li>Act\n\
	<ol>\n\
	  <li>Scene: Brutus' orchard</li>\n\
	  <li>Scene: Caesar's house</li>\n\
	  <li>Scene: A street near the Capitol</li>\n\
	  <li>Scene: Another part of the same street</li>\n\
	</ol>\n\
  </li>\n\
</ol>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.filter('ol').find('li ol li').length == 7;
	}
}));