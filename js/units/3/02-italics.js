// Italics
lessons.push(Object({
	title       : 'Tags Taste M-Italic',
	description : "<p>\
Another common way to draw attention to words is with <em>italics</em>. \
Like with bold, there are two tags that accomplish this. There's the \
<span class='cm-tag'>&lt;i&gt;</span> tag, which always renders text \
italicized, and there is the <span class='cm-tag'>&lt;em&gt;</span> tag, \
meaning <span class='cm-tag'>em</span>phasis, that is left up to the browser.</p>\
<p>Like <span class='cm-tag'>&lt;strong&gt;</span> is preferred over the \
<span class='cm-tag'>&lt;b&gt;</span>, the <span class='cm-tag'>&lt;em&gt;</span>\
 tag is preferred over the <span class='cm-tag'>&lt;i&gt;</span> tag. While \
they accomplish the same thing, they carry different meaning. One means for \
text to simply be rendered in italics, and the other mean <em>emphasis</em>. \
While for most internet users there is no distinction, browsers for the \
visually-impaired often speak content to the user, and they interpret \
<span class='cm-tag'>&lt;em&gt;</span> but can ignore \
<span class='cm-tag'>&lt;i&gt;</span>.</p>",
	
	input       : '<p>Used correctly, italics can be very useful.</p>',
	
	solution    : '<p>Used correctly, italics can be <em>very useful</em>.</p>',
	
	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		return $(input).children('em').text().match(/\W*very useful\W*/);
	}
}));
