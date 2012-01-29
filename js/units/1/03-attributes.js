// An introduction to attributes
addLesson(Object({
	title       : 'Attributes',
	id          : 'attributes',
	description : "<p>\
We've established that the type of a tag is specified with its name. \
It's how we know a <span class='em-tag'>&lt;h1&gt;</span> is different \
from a <span class='cm-tag'>&lt;p&gt;</span>. But sometimes that alone \
is not enough, and so within the same &lt; and &gt;, you can specify \
additional pieces of information called \
<span class='cm-attribute'>attributes</span>.</p>\
\
<p>Attributes can describe the dimension of an image, the specific \
styling to use, or provide a unique string to identify that element within \
a page. This will allow us later to refer to a particular element to \
perform an action on it with javascript or style it individually.</p>\
\
<p>An attribute is a <span class='cm-attribute'>name</span>, followed by \
an equal sign, and then the attribute's <span class='cm-string'>value</span> \
in quotes. Change the id of the header element to be 'myHeader.'</p>",

	input       : '<h1 id="">My Awesome Webpage</h1>',
	solution    : '<h1 id="myHeader">My Awesome Webpage</h1>',
	pass        : [
		'<h1 id="myHeader">    what what</h1>',
		'<h1 name="foo" id="myHeader"></h1>'],
	fail        : [
		'<h1 id="something"></h1>',
		'<h2 id="something"></h2>'],
	valid       : function(input) {
		var item = $(input);
		return item.is('h1') && item.attr('id') == 'myHeader';
	}
}));
