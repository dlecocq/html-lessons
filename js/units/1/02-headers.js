// This is an introduction to headers
addLesson(Object({
	title       : 'Header? I Hardly Know Her!',
	id          : 'headers',
	description : "<p>\
Paragraphs aren't the only types of text that HTML can display. There \
are a number of <span class='cm-tag'>header</span> tags that display \
text as well, but carry the added meaning of being the title of a section \
or subscection of a page.</p>\
\
<p>There are 6 such tags, with <span class='cm-tag'>h1</span> being the \
largest and most important, and <span class='cm-tag'>h6</span> being the \
smallest and least important. You can think of <span class='cm-tag'>h1</span> \
tags being the units of text book, and <span class='cm-tag'>h2</span>s \
being lessons, <span class='cm-tag'>h3</span>s being lessons, and so on.\
</p>\
\
<p>Because headers carry the added meaning of identifying a section, \
so they should only be used for that purpose, and not as a way to change style. \
We'll discuss style changes in unit 3.</p>\
\
<p>Experiment with changing the text of these headers, and adding your own.</p>",
	input       : '<h1></h1>\n<h2></h2>',
	
	solution    : '<h1>Unit 1</h1>\n\
	<h2>Chapter 1</h2>\n\
		<h3>Lesson 1</h3>\n\
		<h3>Lesson 2</h3>\n\
	<h2>Chapter 2</h2>\n\
		<h3>Lesson 1</h3>\n\
		<h3>Lesson 2</h3>\n\
<h1>Unit 2</h1>',
	
	pass        : [
		'<h1>Header</h1>',
		'<h2>Header</h2>'],
	
	fail        : [
		'<p>Howdy</p>',
		'<br/>',
		'<a>What</a>',
		'<h1>Header</h1><h2></h2>'],
	valid       : function(input) {
		var item = $(input);
		var result = true;
		var headers = item.filter('h1, h2, h3, h4, h5, h6');
		headers.each(function(index, el) {
			if ($(el).text() == '') {
				result = false;
				return false;
			}
		});
		return result && headers.length > 0;
	}
}));