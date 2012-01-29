// CSS
addLesson(Object({
	title       : 'The Style Tag',
	id          : 'style-tag',
	description : "\
Specifying the style attribute for each tag individually is not    \
tedious, but error-prone and difficult to change. For example, if  \
you have 10 headers on your page, and you write styles for them,   \
then decide you want to change the font used for each of them, you \
will have your work cut out for you. Enter stylesheets and the     \
'style' tag. They allow you to change the styling for groups of    \
tags in one place. For now, we'll use style tag to change the font \
color of <em>all</em> h1 tags. Now change the color of all these   \
headers from blue to red.",
	
	input       : "<style>\n\
h1 {\n\
\tcolor: blue;\n\
}\n\
</style>\n\
\n\
<h1>Red Header 1</h1>\n\
<h1>Red Header 2</h1>\n\
<h1>Red Header 3</h1>\n\
<h2>Not A Red Header</h1>",

	solution    : "<style>\n\
h1 {\n\
\tcolor: red;\n\
}\n\
</style>\n\
\n\
<h1>Red Header 1</h1>\n\
<h1>Red Header 2</h1>\n\
<h1>Red Header 3</h1>\n\
<h2>Not A Red Header</h1>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var style = item.filter(function(i) { return $(item[i]).is('style'); });
		return style.text().match(/color\s*:\s*red/);
	}
}));