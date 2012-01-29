// This is an introduction to links
addLesson(Object({
	title       : 'HTML Entities',
	id          : 'entities',
	description : "<p>\
By now you know how to render text in a paragraph, and that tags make \
heavy use of symbols like &lt; and &gt;. So how do you make HTML display \
those characters? With HTML entities.</p>\
<p>HTML entities begin with <span class='cm-atom'>&amp;</span>, name \
an <span class='em'>entity</span> and then end with a <span class='em-atom'>;</span>.\
For example, <span class='cm-atom'>&amp;lt;</span> renders a less-than symbol (\
<span class='cm-atom'>&lt;</span>), and <span class='cm-atom'>&amp;gt;</span> \
renders a greater-than symbol (<span class='cm-atom'>&gt;</span>). Not only \
does HTML use entities for reserved characters, but also symbols that you \
normally wouldn't type directly. Use the list below to replace the text \
with their corresponding symbols.</p>\
<p><ul>\
<li><span class='cm-atom'>&amp;lt;</span> &rarr; &lt;</li>\
<li><span class='cm-atom'>&amp;gt;</span> &rarr; &gt;</li>\
<li><span class='cm-atom'>&amp;times;</span> &rarr; &times;</li>\
<li><span class='cm-atom'>&amp;amp;</span> &rarr; &amp;</li>\
<li><span class='cm-atom'>&amp;rarr;</span> &rarr; &rarr;</li>\
</ul></p>",
	
	input       : '<p>example &rarr; your turn</p>\n\
<p>2 (times) 5 = 10</p>\n\
<p>2 (less than) 5 (greater than) 3</p>\n\
<p>Beans (and) cornbread</p>',
	
	solution    : '<p>example &rarr; your turn</p>\n\
<p>2 &times; 5 = 10</p>\n\
<p>2 &lt; 5 &gt; 3</p>\n\
<p>Beans &amp; cornbread</p>',
	
	pass        : [
		'<p>example &rarr; your turn</p>\n\
<p>2 &times; 5 = 10</p>\n\
<p>2 &lt; 5 &gt; 3</p>\n\
<p>Beans &amp; cornbread</p>'],
	
	fail        : [
		'<p>example &rarr; your turn</p>\n\
<p>2 (times) 5 = 10</p>\n\
<p>2 &lt; 5 &gt; 3</p>\n\
<p>Beans &amp; cornbread</p>',
		'<p>example &rarr; your turn</p>\n\
<p>2 &times; 5 = 10</p>\n\
<p>2 &lt; 5 &gt; 3</p>\n\
<p>Beans (and) cornbread</p>'],
	
	valid       : function(input) {
		var item = $(input);
		var tests = ['&times;', '&lt;', '&gt;', '&amp;'];
		for (var index in tests) {
			var found = false;
			item.filter('p').each(function(i, obj) {
				var html = $(obj).text();
				var encoded = $('<p>' + tests[index] + '</p>').text();
				if (html.indexOf(encoded) > 0) {
					found = true;
					return true;
				}
			});
			if (!found) {
				return false;
			}
		}
		return true;
	}
}));