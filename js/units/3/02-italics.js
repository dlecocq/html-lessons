// Italics
lessons.push(Object({
	title       : 'Tags Taste M-Italic',
	description : "<p>\
Another common way to draw attention to words is with <em>italics</em>. \
Like with bold, there are two tags that accomplish this. There's the \
<span class='cm-tag'>&lt;i&gt;</span> tag, which always renders text \
italicized, and there is the <span class='cm-tag'>&lt;em&gt;</span> tag, \
meaning <span class='cm-tag'>em</span>phasis, that is left up to the browser.</p>\
accomplish this for you: 'i' (meaning 'italics') and 'em' (meaning \
'emphasis'). And like boldface, 'i' always renders as italics, and \
'em' leaves the decision up to the browser. Use 'em' to make the   \
phrase 'very useful'.",
	input       : '<p>Used correctly, italics can be very useful.</p>',
	solution    : '<p>Used correctly, italics can be <em>very useful</em>.</p>',
	pass        : [],
	fail        : [],
	valid       : function(input) {
		return $(input).children('em').text().match(/\W*very useful\W*/);
	}
}));
