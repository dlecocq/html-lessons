// Append this unit to the list of units
addUnit({
	title  : 'Getting Textual',
	lessons: []
});

// Strong and bold
addLesson(Object({
	title       : 'Fortune Favors the Bold',
	id          : 'bold',
	description : "<p>\
Boring text is boring. Sometimes you want to draw attention to a   \
particular word or words by emboldening them. To this end, HTML \
provides the <span class='cm-tag'>&lt;b&gt;</span> and the \
<span class='cm-tag'>&lt;strong&gt;</span> tags.</p>\
<p>In most browsers, they accomplish the same thing -- making text \
<b>bold</b>, but while the meaning of the <span class='cm-tag'>&lt;b&gt;</span> \
tag is to make text bold, the meaning of \
<span class='cm-tag'>&lt;strong&gt;</span> tag is left up to the browser. \
There may come a time when browsers decide that <span class='cm-tag'>strong</span> \
is best reflected with purple cursive text, however unlikely that may be. \
But even so, this distinction is left up to the the browser that renders \
the page. Use the <span class='cm-tag'>strong</span> tag to make the \
word 'bold' appear as such.</p>",

	input       : '<p>He was a bold man that first ate an oyster. - Jonathan Swift </p>\n\
<p>That is a bold-faced lie!</p>\n\
<p>Be bold, be bold, and everywhere be bold. -Herbert Spencer</p>',
	
	solution    : '<p>He was a <strong>bold</strong> man that first ate an oyster. - Jonathan Swift </p>\n\
<p>That is a <strong>bold</strong>-faced lie!</p>\n\
<p>Be <strong>bold</strong>, be <strong>bold</strong>, and everywhere be <strong>bold</strong>. - Herbert Spencer</p>',

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		return $(input).children('strong').text().match(/(\W*bold\W*){3}/);
	}
}));
