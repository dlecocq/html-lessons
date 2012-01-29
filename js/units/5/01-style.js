addUnit({
	title  : 'Style and CSS',
	lessons: []
});

// Style
addLesson(Object({
	title       : 'Stylin\'',
	id          : 'style',
	description : "\
<p>Rather than using tags like <span class='cm-tag'>&lt;big&gt;</span> \
and <span class='cm-tag'>&lt;del&gt;</span> to change the way text is \
displayed, a more popular approach is to use styles. HTML elements support \
a <span class='cm-atom'>style</span> attribute that describes how it \
should be displayed.</p>\
<p>The contents of the style attribute has its own syntax. In it's simplist \
form, it has the name of a style, and a value separated by a colon. \
For example, the text in the paragraph <span class='cm-tag'>&lt;p</span> \
<span class='cm-atom'>style</span>=<span class='cm-comment'>\"color: red\"</span>\
<span class='cm-tag'>&gt;</span>Hello!<span class='cm-tag'>&lt;/p&gt;</span> would \
be displayed red.</p>\
<p>We'll learn more styling options shortly, but for now, use the \
<span class='cm-atom'>style</span> attribute to make the text of the headers \
red</p>",
	
	input       : '<h1 style="">This Header Should Be Red</h1>\n\
<h1>As Should This One</h1>\n\
<h1>Oh, and This One</h1>',
	
	solution    : '<h1 style="color:red">This Header Should Be Red</h1>\n\
<h1 style="color:red">As Should This One</h1>\n\
<h1 style="color:red">Oh, and This One</h1>',

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var result = true;
		item.filter('h1').each(function(index, el) {
			if (!$(el).attr('style').match(/color\s*:\s*red/)) {
				result = false;
				return false;
			}
		});
		return result;
	}
}));