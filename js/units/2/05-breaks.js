// Breaks
lessons.push(Object({
	title       : 'Take a Break!',
	description : "<p>\
Because HTML doesn't interpret the space between tags as text, it \
has a tag to insert a new line in the middle of the paragraph. This, \
<span class='cm-tag'>&lt;br/&gt;</span> is the \
<span class='cm-tag'>br</span>eak tag.</p>\
<p>For example, we are using the &lt;br/&gt; tag to insert a break \
between this line<br/>and this line. The text continues right where \
it left off, but on the next line down. Put in breaks between the lines \
of this limmerick to format it correctly</p>",
	
	input       : "<p>There once was a man named Pope,\n\
who plugged into an oscilloscope.\n\
The cyclical trace\n\
of their carnal embrace\n\
had a damn near infinite slope!</p>",
	
	solution    : "<p>There once was a man named Pope,<br/>\n\
who plugged into an oscilloscope.<br/>\n\
The cyclical trace<br/>\n\
of their carnal embrace<br/>\n\
had a damn near infinite slope!</p>",
	
	pass : [],
	
	fail : ["<p>There once was a man named Pope,<br/>\n\
who plugged into an oscilloscope.<br/>\n\
The cyclical trace<br/>\n\
of their carnal embrace\
had a damn near infinite slope!</p>"],

	valid       : function(input) {
		return $(input).children('br').length > 3;
	}
}));
