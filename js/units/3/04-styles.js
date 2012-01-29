// Various other formats
addLesson(Object({
	title       : 'The Many Styles of Text',
	id          : 'text-styles',
	
	description : "<p>\
There are a lot more transformations that can be done on text. You'll see \
in a few minutes another way of changing how text appears, but you should \
also be aware of these tags. The <span class='cm-tag'>&lt;big&gt;</span> \
and <span class='cm-tag'>&lt;small&gt;</span> tags make the text they contain \
bigger and smaller. The <span class='cm-tag'>&lt;del&gt;</span> tag makes \
text appear with a line through it as if <del>deleted</del>, and \
<span class='cm-tag'>&lt;ins&gt;</span> makes text appear as if it has just been \
<ins>inserted</ins>. Lastly, the <span class='cm-tag'>&lt;pre&gt;</span> \
marks text as preformatted, which is generally used for code.</p>\
<p>In the example at right, use these new tags to: \
<ol>\
<li>Make the word 'big' appear larger</li>\
<li>Make the word 'small' appear smaller</li>\
<li>Strike through the word 'deleting'</li>\
<li>Mark the word 'insert' as such</li>\
<li>Make the example code 'preformatted'</li>\
</ol></p>",

	input       : "<!-- Use 'big' and 'small' -->\n\
<p>Software projects come in all sizes, from small\n\
weekend projects to big year-long ones.</p>\n\n\
<!-- Use 'del' and 'ins' -->\n\
<p>Be careful when deleting code, but feel free \n\
to insert new code as you see fit.</p>\n\n\
<!-- Use 'pre' -->\n\
<p>Here's an example of HTML:</p>\n\
&lt;p&gt; Hello World! &ltp/&gt;",
	
	solution    : "<!-- Use 'big' and 'small' -->\n\
<p>Software projects come in all sizes, from <small>small</small>\n\
weekend projects to <big>big</big> year-long ones.</p>\n\n\
<!-- Use 'del' and 'ins' -->\n\
<p>Be careful when <del>deleting</del> code, but feel free \n\
to <ins>insert</ins> new code as you see fit.</p>\n\n\
<!-- Use 'pre' -->\n\
<p>Here's an example of HTML:</p>\n\
<pre>&lt;p&gt; Hello World! &ltp/&gt;</pre>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var tests = {
			'big'  : /\W*big\W*/,
			'small': /\W*small\W*/,
			'del'  : /\W*deleting\W*/,
			'ins'  : /\W*insert\W*/
		}
		for (var index in tests) {
			if (!item.children(index).text().match(tests[index]))  {
				return false;
			}
		}
		if (!item.filter('pre').text().match(/\W*hello\W*world\W*/i)) {
			return false;
		}
		return true;
	}
}));