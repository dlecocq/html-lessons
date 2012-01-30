// CSS
addLesson(Object({
	title       : 'The Style Tag',
	id          : 'style-tag',
	description : "\
<p>As the last lesson demonstrated, it can be extremely tedious to \
specify the <span class='cm-atom'>style</span> attribute for every \
element you'd like to change. And, it makes it difficult to change that \
styling (if you decide you'd prefer a different font, or size, etc.). \
Fortunately, CSS (<span class='definition'>cascading style sheets</span>) \
and the <span class='cm-tag'>&lt;style&gt;</span> tag solve this problem.</p>\
<p>When you use the <span class='cm-atom'>style</span> attribute, you're \
actually already using CSS syntax. Style definitions are often included \
as a separate file so that they can be used to style several pages on \
a website in the same way. If every page on a site can reference the \
same style definitions, it helps with continuity and to make all pages \
have the same look and feel.</p>\
<p>Alternatively, you can use the <span class='cm-tag'>&lt;style&gt;</span> \
tag to specify the style in the same HTMl document. We'll talk more about \
<span class='definition'>selectors</span> in a moment, but they're a \
way to describe to what elements a styling should apply. They can get \
very complex and very specific, but for now we'll use their simplist form, \
which is just to name a tag. At right, we have the same list from the \
last lesson, along with a style tag describing how \
<span class='cm-tag'>&lt;li&gt;</span> tags should be styled. Modify \
that styling to make the font blue, 15 pixels, and Verdana.</p>",
	
	input       : "<style>\n\
li {\n\
  color: red;\n\
}\n\
</style>\n\
\n\
<ol>\n\
  <li>One fish</li>\n\
  <li>Two fish</li>\n\
  <li>Red fish</li>\n\
  <li>Blue fish</li>\n\
</ol>",

	solution    : "<style>\n\
li {\n\
  color: blue;\n\
  font-size: 15px;\n\
  font-family: Verdana;\n\
}\n\
</style>\n\
\n\
<ol>\n\
  <li>One fish</li>\n\
  <li>Two fish</li>\n\
  <li>Red fish</li>\n\
  <li>Blue fish</li>\n\
</ol>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var styles = [
			/\W*color\W*:\W*blue/,
			/\W*font-size\W*:\W*15/,
			/\W*font-family\W*:\W*verdana/i
		];
		var result = true;
		item.filter('style').each(function(index, el) {
			for (var i in styles) {
				if (!($(el).text() || '').match(styles[i])) {
					console.log('Failed for ' + styles[i]);
					result = false;
					return false;
				}
			}
		});
		return result;
	}
}));