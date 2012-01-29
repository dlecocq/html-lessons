// Self-closing tags
addLesson(Object({
	title       : 'There\'s No End!',
	id          : 'self-closing',
	description : "<p>\
While most tags have both a start and an end tag, it's overkill for \
certain elements. For example, there are tags to simply add a new line \
to text, or to draw a horizontal line as a divider. Since it wouldn't \
make sense to put other content inside either of them, these tags are called \
<span class='em'>self-closing</span> tags.</p>\
\
<p>In place of an end tag, self-closing tags simply place a '/' at \
the end of the the start tag. The <span class='cm-tag'>&lt;hr/&gt;</span> \
(meaning <span class='cm-tag'>h</span>orizontal <span class='cm-tag'>r</span>ule) \
tag draws a horizontal line. The <span class='cm-tag'>&lt;br/&gt;</span> \
(meaning <span class='cm-tag'>br</span>eak) tag adds a new empty line. Use the \
<span class='cm-tag'>hr</span> tag to add a line between the two paragraphs.</p>",

	input       : '<p>Line one</p>\n<p>Line two</p>',
	
	solution    : '<p>Line one</p>\n<hr/>\n<p>Line two</p>',
	
	pass        : [
		'<p>Line one</p><hr/><p></p>',
		'<p></p><hr/><p></p>',
		'<p></p>               <hr/>Howdy<p></p>'],
		
	fail        : [
		'<p>Line one<hr/></p><p>Line two</p>',
		'<p>Line one</p><p>Line Two</p>'],
	
	valid       : function(input) {
		var items = $(input);
		items = items.filter('p, hr');
		
		if (items.length != 3) {
			return false;
		}
		
		return $(items[0]).is('p') && $(items[1]).is('hr') && $(items[2]).is('p');
	}
}));