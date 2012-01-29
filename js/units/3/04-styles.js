// Various other formats
addLesson(Object({
	title       : 'The Many Styles of Text',
	id          : 'text-styles',
	description : "<p>\
There are a lot more transformations that can be done on text. Take\
 a minute and try a few of them out:\
<ul>\
<li>big -- makes text larger</li>\
<li>small -- makes text smaller</li>\
<li>del -- deleted (strikethrough) text</li>\
<li>ins -- newly inserted text</li>\
<li>pre -- interprets text exactly as entered, and not HTML</li>\
<li><a href='http://www.w3schools.com/html/html_formatting.asp'>many more...</a></li>\
</ul></p>",
	input       : "<p>This is some <big>big text</big> and this \
is some <small>small text</small>. This text <del>has been      \
deleted</del>, but this text <ins>has been inserted</ins>. This \
text, on the other hand, <pre>has been preformatted</pre>.",
	solution    : "<p>This is some <big>big text</big> and this \
is some <small>small text</small>. This text <del>has been      \
deleted</del>, but this text <ins>has been inserted</ins>. This \
text, on the other hand, <pre>has been preformatted</pre>.",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		return true;
	}
}));