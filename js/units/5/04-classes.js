// Classes
addLesson(Object({
	title       : 'How Classy',
	id          : 'classes',
	description : "\
<p>CSS includes a selector to find elements with a particular \
<span class='cm-atom'>class</span> attribute. More specifically, \
an element can have multiple classes in it's <span class='cm-atom'>\
class</span>attribute, separated by spaces, and the CSS selector will \
style all tags that have that class. In short, classes provide a way \
of grouping elements together for styling purposes, beyond just their \
particular tag.</p>\
<p>At right, there is a table where all the even rows should have the \
<span class='cm-atom'>background-color: </span>\
<span class='cm-comment'>lightgray</span> style, and the odd rows should have \
<span class='cm-atom'>background-color: </span>\
<span class='cm-comment'>gray</span>. The <span class='cm-tag'>\
.odd</span> selector in the <span class='cm-tag'>&lt;style&gt;</span> \
tag will style all rows with 'odd' in its <span class='cm-atom'>class</span>, \
and likewise the <span class='cm-tag'>.even</span> selector styles \
all the rows marked as 'even.' This is commonly used to help users \
track across long rows of data. Update the <span class='cm-tag'>\
&lt;style&gt;</span> tag to set the appropriate background colors.</p>",

	input       : "\
<style>\n\
.odd {\n\
  <!-- My background-color should be gray, or perhaps Earl Grey, hot -->\n\
}\n\
\n\
.even {\n\
  <!-- My background-color should be lightgray -->\n\
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
		return item.children('span.odd').length == 4 && item.children('span.even').length == 4;
	}
}));