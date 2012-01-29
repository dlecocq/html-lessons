// Sub and sup
addLesson(Object({
	title       : 'A bird! A plane! Supertext!',
	id          : 'supertext',
	description : "<p>\
Whether it's for exponents in mathematic expressions, or references, or for \
footnotes, HTML provides a way to mark text in <sup>superscript</sup> \
and in <sub>subscript</sub>. These tags are \
<span class='cm-tag'>&lt;sup&gt;</span> and \
<span class='cm-tag'>&lt;sub&gt;</span> respectively.</p>\
<p>In the equation on the right, make the 'gravity' subscript, \
the '2' superscript, and replace the '*' with the \
<span class='cm-atom'>&amp;times;</span> entity to show the \
distance a falling object travels.</p>",

	input       : '<p>D(t) = A gravity * t2</p>',
	
	solution    : '<p>D(t) = A<sub>gravity</sub> &times; t<sup>2</sup></p>',
	
	pass        : [],
	
	fail        : [
		'<p>D(t) = A gravity &times; t<sup>2</sup></p>',
		'<p>D(t) = A<sub>gravity</sub> &times; t2</p>',
		'<p>D(t) = A<sub>gravity</sub> * t<sup>2</sup></p>'
	],
	
	valid       : function(input) {
		var item = $(input);
		var time = item.html().indexOf($("<p>&times;</p>").html()) > 0;
		var sub  = item.children('sub').text().match(/\W*gravity\W*/);
		var sup  = item.children('sup').text().match(/\s*2\s*/);
		return sub && sup && time;
	}
}));
