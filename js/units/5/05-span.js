// Classes
addLesson(Object({
	title       : 'Span-ish Inquisition',
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
</span>. In fact, making that HTML appear color coded involves \
quite a few <span class='cm-tag'>&lt;span&gt;</span> tags. \
The curious reader might consider it an exercise.</p>\
<p>Place the names of the characters in this scene in <span class='cm-tag'>&lt;span&gt;\
</span> tag to style them with the class 'name.'</p>",

	input       : "\
<style>\n\
.name {\n\
	font-family: monospace;\n\
    background-color: lightgray;\n\
    font-size: 14px;\n\
}\n\
</style>\n\n\
<p>\n\
  Mr. Praline: I'll tell you what's wrong with it,\n\
  my lad. HE's dead, that's what's wrong with it!\n\
</p>\n\n\
<p>\n\
  Owner: No, no, 'e's uh,...he's resting.\n\
</p>\n\n\
<p>\n\
  Mr. Praline: Look, matey, I know a dead parrot\n\
  when I see one, and I'm looking at one right now.\n\
</p>\n\n\
<p>\n\
  Owner: No no he's not dead, he's, he's restin'!\n\
  Remarkable bird, the Norwegian Blue, idn'it, ay?\n\
  Beautiful plumage!\n\
</p>\n\n\
<p>\n\
  Mr. Praline: The plumage don't enter into it.\n\
  It's stone dead.\n\
</p>",

	solution    : "\
<style>\n\
.name {\n\
	font-family: monospace;\n\
    background-color: lightgray;\n\
    font-size: 14px;\n\
}\n\
</style>\n\n\
<p>\n\
  <span class='name'>Mr. Praline</span>: I'll tell you what's wrong with it,\n\
  my lad. HE's dead, that's what's wrong with it!\n\
</p>\n\n\
<p>\n\
  <span class='name'>Owner</span>: No, no, 'e's uh,...he's resting.\n\
</p>\n\n\
<p>\n\
  <span class='name'>Mr. Praline</span>: Look, matey, I know a dead parrot\n\
  when I see one, and I'm looking at one right now.\n\
</p>\n\n\
<p>\n\
  <span class='name'>Owner</span>: No no he's not dead, he's, he's restin'!\n\
  Remarkable bird, the Norwegian Blue, idn'it, ay?\n\
  Beautiful plumage!\n\
</p>\n\n\
<p>\n\
  <span class='name'>Mr. Praline</span>: The plumage don't enter into it.\n\
  It's stone dead.\n\
</p>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var results = item.find('span[class="name"]').length == 5;
		item.find('span[class="name"]').each(function(index, el) {
			var text = $(el).text();
			if (!text.match(/\W*mr\W*praline\W*/i)) {
				if (!text.match(/\W*owner\W*/i)) {
					results = false;
				}
			}
		});
		return results;
	}
}));