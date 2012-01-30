// Classes
addLesson(Object({
	title       : 'How Classy',
	id          : 'classes',
	description : "\
Tags can all accept the 'class' attribute. It allows you to give   \
some attribution to the type of tag it is, and is especially useful\
 with CSS. For example, suppose you have some paragraphs that are  \
the opening paragraph in a sections, and you'd like to give them   \
special treatment. You can't simply change the styling for         \
<em>all</em> 'p' tags, but classes provide a logical grouping. A   \
tag can have multiple classes, separated by spaces. Give these     \
paragraphs alternating classes like the example.",

	input       : "\
<style>\n\
.odd {\n\
	background-color: lightgray;\n\
}\n\
\n\
.even {\n\
	background-color: white;\n\
}\n\
</style>\n\
<p>\n\
<span class='odd'>'Twas brillig, and the slithy toves</span><br/>\n\
<span class='even'>Did gyre and gimble in the wabe;</span><br/>\n\
<span class='odd'>All mimsy were the borogoves,</span><br/>\n\
<span class='even'>And the mome raths outgrabe.</span><br/>\n\
</p><p>\n\
<span>'Beware the Jabberwock, my son!</span><br/>\n\
<span>The jaws that bite, the claws that catch!</span><br/>\n\
<span>Beware the Jubjub bird, and shun</span><br/>\n\
<span>The frumious Bandersnatch!</span></p>",

	solution    : "\
<style>\n\
.odd {\n\
	background-color: lightgray;\n\
}\n\
\n\
.even {\n\
	background-color: white;\n\
}\n\
</style>\n\
<p>\n\
<span class='odd'>'Twas brillig, and the slithy toves</span><br/>\n\
<span class='even'>Did gyre and gimble in the wabe;</span><br/>\n\
<span class='odd'>All mimsy were the borogoves,</span><br/>\n\
<span class='even'>And the mome raths outgrabe.</span><br/>\n\
</p><p>\n\
<span class='odd'>'Beware the Jabberwock, my son!</span><br/>\n\
<span class='even'>The jaws that bite, the claws that catch!</span><br/>\n\
<span class='odd'>Beware the Jubjub bird, and shun</span><br/>\n\
<span class='even'>The frumious Bandersnatch!</span></p>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.children('span.odd').length == 4 && item.children('span.even').length == 4;
	}
}));