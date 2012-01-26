// This is the hello world lesson
lessons.push(Object({
	// This is the title of the particular lesson
	title       : 'Hello World',
	
	// This is the textual description of the particular lesson
	description : "<p>\
HTML is a <span class='em'>markup language</span>, meaning that it \
describes the semantic meaning of the contents of a page. It consists \
of <span class='em'>tags</span>, which is a tag name wrapped in \
'&lt;' and '&gt;' (like <span class='cm-tag'>&lt;meta&gt;</span>).</p>\
 \
<p>Tags generally have a <span class='em'>start</span> and an \
<span class='em'>end</span>, where everything between the two \
is the contents of the tag. The tags and everything inside of it is \
known as an <span class='em'>element</span>. As you will see in a \
moment, tags can contain other tags.</p>\
 \
<p>The end tag has the same name as its start tag, but with a '/' in front. \
On the right, you'll see a <span class='cm-tag'>&lt;p&gt;</span> tag \
(the <span class='cm-tag'>p</span> stands for <span class='cm-tag'>paragraph</span>) \
with the content 'howdy.' The <span class='cm-tag'>&lt;p&gt;</span> tag \
displays its contents as text. Make it display 'Hello World' instead.</p>",
	
	// This is any pre-fill to do to the input
	input       : '<p>Howdy</p>',
	
	// This is one possible solution
	solution    : '<p>Hello World</p>',
	
	// This is where we specify cases that should pass, and fail
	pass        : [
		'<p>hello world</p>',
		'<p>   heLLo wORld?</p>',
		'<p> hello, world!</p>'],
	fail        : [
		'<p>Howdy world</p>',
		'<p>Hey all</p>',
		'<a>Hello World</a>'],
	
	// This is the function that validates the input for this lesson
	valid       : function(input) {
		var item = $(input);
		// This should parse out to be a paragraph element with 
		// the text approximating 'Hello World'
		return item.is("p") && item.text().match(/\s*hello\W+world\s*/i);
	}
}));