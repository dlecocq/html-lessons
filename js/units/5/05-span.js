// Classes
addLesson(Object({
	title       : 'Spick and Span',
	id          : 'span',
	description : "\
<p>One of the features that makes classes particularly useful (especially \
for style) is that they allow you to not only style multiple HTML elements \
simultaneously, but also to keep consistent styling on the page. For example, \
the editor you see at your right uses the <span class='cm-tag'>cm-tag</span> \
class to style all of its HTML tag names.</p>\
<p>In the case that you want to provide styling to just a word, phrase, or \
just a small portion of an element, you can use the <span class='cm-tag'>\
&lt;span&gt;</span> tag. It has no meaning other than a logical grouping, \
typically of style. For instance, when I enclose the word \
<span class='cm-tag'>tag</span> in a span element, it appears with the \
same styling as in the editor: \
<span class='cm-tag'>&lt;span</span> \
<span class='cm-atom'>class</span>=\
<span class='cm-comment'>\"cm-tag\"</span>\
<span class='cm-tag'>&gt;</span>tag<span class='cm-tag'>&lt;/span&gt;\
</span>. Writing the HTML to make that code snippet \
appear like it does is left as an exercise for the curious reader.</p>\
<p>Place all numbers and equations in a <span class='cm-tag'>&lt;span&gt;\
</span> to style them with the class 'math.'</p>",

	input       : "\
<style>\n\
.math {\n\
	font-family: monospace;\n\
    background-color: lightgray;\n\
    font-size: 14px;\n\
}\n\
</style>\n\n\
<p>\n\
  There are 10 types of people. \n\
  Those who understand binary, and those who don't.\n\
</p>\n\n\
<p>\n\
  Interestingly enough, e<sup>&pi;&times;i</sup>=-1\n\
</p>\n\n\
<p>\n\
  Light travels at about 3&times;10<sup>8</sup> m/s \n\
  in the vacuum of space\n\
</p>",

	solution    : "\
<style>\n\
.odd {\n\
    background-color: gray;\n\
}\n\
\n\
.even {\n\
    background-color: lightgray;\n\
}\n\
</style>\n\
<table>\n\
  <tr class='odd'>\n\
    <td>Jean-Luc</td><td>Picard</td>\n\
  </tr><tr class='even'>\n\
    <td>William</td><td>Riker</td>\n\
  </tr><tr class='odd'>\n\
    <td>Geordi</td><td>La Forge</td>\n\
  </tr><tr class='even'>\n\
    <td>Wesley</td><td>Crusher</td>\n\
  </tr><tr class='odd'>\n\
    <td>Deanna</td><td>Troi</td>\n\
  </tr><tr class='even'>\n\
    <td>Tasha</td><td>Yar</td>\n\
  </tr>\n\
</table>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var results = true;
		item.filter('style').each(function(index, el) {
			var text = $(el).text();
			if (!text.match(/.odd\W+background-color\W*:\W*gray/m)) {
				results = false;
			}
			if (!text.match(/.even\W+background-color\W*:\W*lightgray/m)) {
				results = false;
			}
		});
		return results;
	}
}));