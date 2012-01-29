// More CSS Selectors
addLesson(Object({
	title       : 'Choosy CSS Chooses Jiff',
	id          : 'selectors',
	description : "\
CSS provides a very robust mechanism for denoting a set of tags,   \
called <strong>selector</strong>. Virtually any selector can be    \
derived, like selecting all anchor elements of class 'x' that      \
appear in a paragraph with class 'y'. Curious readers can          \
<a href='http://www.w3schools.com/cssref/css_selectors.asp'>read more</a>\
, of course, but some of the most common ones select tags with a   \
given <strong>.class</strong>, or <strong>#id</strong> or <strong> \
type</strong>. In the last exercise, you were introducued briefly  \
to the CSS selector for a class. Add an id attribute to the anchor \
tag to give it the styling it so rightly deserves.",
	input       : "\
<style>\n\
#myLink {\n\
	color: red\n\
}\n\
</style>\n\
<p>This <a href='#'>link</a> lacks some style.</p>",
	solution    : "\
<style>\n\
#myLink {\n\
	color: red\n\
}\n\
</style>\n\
<p>This <a id='myLink' href='#'>link</a> lacks some style.</p>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.children('a[id="myLink"]').length > 0;
	}
}));