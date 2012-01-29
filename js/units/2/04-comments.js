// HTML Comments
addLesson(Object({
	title       : 'No Comment?',
	id          : 'comments',
	description : "<p>\
Normally, text in an HTML document gets rendered to the screen, but \
it also provides a way for you to put \
<span class='cm-comment'>comments</span> in the code that don't appear \
in the document. If you look at the source code of most HTML documents \
(many browsers enable you to do so by right-clicking on the page and \
selecting 'View Source'), you'll probably see at least a few of them</p>\
<p>Unlike other languages, HTML does not make use of \
<span class='definition'>syntactic whitespace</span>, which meants \
that you can put as many spaces and newlines between tags as you want, \
and it won't affect the way it renders. Most HTML authors use a combination \
of indentation, newlines to separates lines of code, and comments to \
improve the <span class='definition'>readability</span> of the code. \
Even if no one but you will be editing your code, it doesn't take long \
to appreciate well-formatted markup.</p>\
<p>Any text between <span class='cm-comment'>&lt;!--</span> and \
<span class='cm-comment'>--&gt;</span> is considered a comment. Note \
the difference in how readable the bottom portion of code is compared \
to the top, and then move the tags around and add a comment to mimic \
the styling of the rest.</p>",

	input       : "<h1>The Main Section</h1>\n\
<h2>Subsection</h2><p><a href='a.html'>Page 1</a><br/>\
<a href='b.html'>Page 2</a></p>\n\n\
<!-- This means the same as above, but is easier to read -->\n\
<h2>Subsection</h2>\n\
  <!-- These pages talk about Foo -->\n\
  <p>\n\
    <a href='c.html'>Page 3</a>\n\
	<br/><a href='d.html'>Page 4</a>\n\
  </p>",

	solution    : "<h1>The Main Section</h1>\n\
<h2>Subsection</h2>\n\
  <!-- These pages talk about Bar -->\n\
  <p>\n\
    <a href='a.html'>Page 1</a><br/>\n\
    <a href='b.html'>Page 2</a>\n\
  </p>\n\n\
<!-- This means the same as above, but is easier to read -->\n\
<h2>Subsection</h2>\n\
  <!-- These pages talk about Foo -->\n\
  <p>\n\
    <a href='c.html'>Page 3</a>\n\
	<br/><a href='d.html'>Page 4</a>\n\
  </p>",
  	
	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		// Make sure they put in a third comment
		if (item.filter(function() { return this.nodeType == 8; }).length < 3) {
			return false;
		}
		// Make sure that there are at least a few text items
		if (item.filter(function() { return this.nodeType == 3; }).length < 6) {
			return false;
		}
		return true;
	}
}));
