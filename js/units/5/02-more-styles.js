// More CSS styles
addLesson(Object({
	title       : 'Endless Style',
	id          : 'more-styles',
	description : "\
<p>There is almost no end to the stylings that are available for \
the style attribute. For example, you can use <span class='cm-atom'>\
font-family</span> to change the font used, or \
<span class='cm-atom'>font-size</span> to change how large \
text appears.</p>\
<p>When specifying multiple styles within the style tag, you separate \
them with a semicolon, ';'. For example, to set the font color to be \
red, and to make the font 10 pixels tall, you could say \
<span class='cm-atom'>style</span>=<span class='cm-comment'>\"color: red; \
font-size: 10px;\"</span>. Use this styling to make all the \
<span class='cm-tag'>&lt;li&gt;</span> tags have: \
<ol>\
<li>blue font using <span class='cm-atom'>color:</span></li>\
<li>size 15 font using <span class='cm-atom'>font-size:</span></li>\
<li>Verdana font using <span class='cm-atom'>font-family:</span></li>\
</ol>",

	input       : "\
<ol>\n\
  <li>One fish</li>\n\
  <li>Two fish</li>\n\
  <li>Red fish</li>\n\
  <li>Blue fish</li>\n\
</ol>",

	solution    : "\
<ol>\n\
  <li style=\"color:blue; font-size:15px; font-family:Verdana\">One fish</li>\n\
  <li style=\"color:blue; font-size:15px; font-family:Verdana\">Two fish</li>\n\
  <li style=\"color:blue; font-size:15px; font-family:Verdana\">Red fish</li>\n\
  <li style=\"color:blue; font-size:15px; font-family:Verdana\">Blue fish</li>\n\
</ol>",
	
	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var styles = [
			/\W*color\W*:\W*blue/,
			/\W*font-size\W*:\W*15/,
			/\W*font-family\W*:\W*verdana/i
		];
		var result = true;
		item.children('li').each(function(index, el) {
			for (var i in styles) {
				if (!($(el).attr('style') || '').match(styles[i])) {
					console.log('Failed for ' + styles[i]);
					result = false;
					return false;
				}
			}
		});
		return result;
	}
}));