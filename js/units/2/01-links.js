// This is an introduction to links
lessons.push(Object({
	title       : 'Links All Around!',
	description : "<p>\
In a lot of ways, links are the internet. They consist of a clickable \
portion (usually text), and point to a new page, identified by a URL \
<span class='definition'>Uniform Resource Locator</span>. Links are \
described with the <span class='cm-tag'>&lt;a&gt;</span> tag, where the \
contents is the clickable portion. The <span class='cm-attribute'>href</span> \
attribute describes the destination of the link.</p>\
<p>Whatever goes between the start and end tags is clickable, whether \
it's an image or text. Make this link point to your favorite website.</p>",

	input       : '<a href="">My Favorite Site</a>',
	
	solution    : '<a href="http://stackoverflow.com">My Favorite Site</a>',
	
	pass        : [
		'<a href="foo">bar</a>',
		'<a id="howdy" href="foo">bar</a>'],
	
	fail        : [
		'<a href="">Site</a>',
		'<p>Nope</p>',
		'<a src="foo">howdy</a>'],
	
	valid       : function(input) {
		var item = $(input);
		return item.is('a') && item.attr('href') != '';
	}
}));