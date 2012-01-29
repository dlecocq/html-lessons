addUnit({
	title  : 'Style and CSS',
	lessons: []
});

// Style
addLesson(Object({
	title       : 'Stylin\'',
	id          : 'style',
	description : "\
Beyond these text transformations, you can apply even more with    \
something called <strong>style</strong>. Styles can be applied to  \
a tag using its style attribute, or through <strong>CSS</strong>   \
(cascading style sheets). Styles are a list of key:value pairs,    \
separated by ';' (semicolons). You can change the color of text    \
with the 'color' style like so: <pre>&lt;h1 style='color:blue'&gt;\
This is a Blue Header&lt/h1&gt;</pre>\
Use the 'color' style to change this header's color to red.",
	input       : '<h1 style="">Red Head(er)</h1>',
	solution    : '<h1 style="color:red">Red Head(er)</h1>',
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.is('h1') && item.attr('style').match(/color\s*:\s*red/);
	}
}));