// CSS
addLesson(Object({
	title       : 'The Style Tag',
	id          : 'style-tag',
	description : "\
<p>As the last lesson demonstrated, it can be extremely tedious to \
specify the <span class='cm-atom'>style</span> attribute for every \
element you'd like to change. And, it makes it difficult to change that \
styling (if you decide you'd prefer a different font, or size, etc.). \
Fortunately, the <span class='cm-tag'>&lt;style&gt;</span> tag solves \
this problem.</p>\
<p>In the style tag, you're actually another language, CSS (\
<span class='definition'>cascading style sheets</span>). It mostly \
consists of a <span class='definition'>selector</span>, a '{', the \
same type of style definition you'd use in the <span class='cm-atom'>\
style</span> attribute, and then a '}'.</p>\
<p>The <span class='definition'>selector</span> describes what HTML \
elements should have that styling applied to them. They can be made to \
be very specific and descriptive, or very wide-ranging. We'll talk more \
about them later, but in our case the simple tag name <span class='cm-tag'>\
li</span> simply means that the style enclosded in the {}'s applies to \
all <span class='cm-tag'>l</span>ist <span class='cm-tag'>i</span>tems.</p>\
<p>Modify the styling to make the font blue, 15 pixels, and Verdana.</p>",
	
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