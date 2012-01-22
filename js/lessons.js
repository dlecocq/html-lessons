var lessons = [];

// This is the hello world lesson
lessons[0] = Object({
	// This is the title of the particular lesson
	title       : 'Hello World',
	
	// This is the textual description of the particular lesson
	description : "\
HTML is a <strong>markup language</strong>, describing a page. It  \
consists of <strong>tags</strong>, which is a tag name wrapped in  \
'&lt;' and '&gt;'. Tags generally have a <strong>start tag</strong>\
 and an <strong>end tag</strong>, where everything between the two \
is the contents of the tag\. The end tag has the same tag name as  \
the start tag it's paired with, but with a '/' in front. For       \
example, a <strong>paragraph </strong> with the text 'Howdy!' would\
 be written &lt;p&gt;Howdy! &lt;/p&gt;. Using the provided box,    \
make a paragraph with the text 'Hello World' inside of it.\
",
	
	// This is any pre-fill to do to the input
	input       : '<p></p>',
	
	// This is the function that validates the input for this lesson
	valid       : function(input) {
		var item = $(input);
		// This should parse out to be a paragraph element with 
		// the text approximating 'Hello World'
		return item.is("p") && item.text().match(/\s*hello\W+world\s*/i);
	}
});

// This is the howdy, world lesson
lessons[1] = Object({
	title       : 'Header? I Hardly Know Her!',
	description : 'This is exercise number two',
	input       : '',
	valid       : function(input) {
		return true;
	}
})