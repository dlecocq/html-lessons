var lessons = [];

// This is a snippet from Charles Dickens' "A Christmas Carol"
var dickens = "<h1>Chapter 1</h1>\n\
<p>Marley was dead: to begin with. There is no doubt whatever about\
that. The register of his burial was signed by the clergyman, the  \
clerk, the undertaker, and the chief mourner. Scrooge signed it.   \
And Scrooge's name was good upon 'Change, for anything he chose to \
put his hand to.</p>";

var validateEach = function(items, f) {
	var results = [];
	items.each(function(index) {
		if (f($(items[index]))) {
			results.push(items[index]);
		}
	});
	return results;
}

// This is the hello world lesson
lessons.push(Object({
	// This is the title of the particular lesson
	title       : 'Hello World',
	
	// This is the textual description of the particular lesson
	description : "\
HTML is a <strong>markup language</strong>, describing a page. It  \
consists of <strong>tags</strong>, which is a tag name wrapped in  \
'&lt;' and '&gt;'. Tags generally have a <strong>start tag</strong>\
 and an <strong>end tag</strong>, where everything between the two \
is the contents of the tag\. The end tag has the same tag name as  \
the start tag it's paired with, but with a '/' in front. For       \
example, a <strong>paragraph </strong> with the text 'Howdy!' would\
 be written &lt;p&gt;Howdy! &lt;/p&gt;. Using the provided box,    \
make a paragraph with the text 'Hello World' inside of it.",
	
	// This is any pre-fill to do to the input
	input       : '<p></p>',
	
	// This is one possible solution
	solution    : '<p>Hello World</p>',
	
	// This is where we specify cases that should pass, and fail
	pass        : [
		'<p>hello world</p>',
		'<p>   heLLo wORld?</p>',
		'<p> hello, world!</p>'],
	fail        : [
		'<p>Howdy world</p>',
		'<p>Hey all</p>',
		'<a>Hello World</a>'],
	
	// This is the function that validates the input for this lesson
	valid       : function(input) {
		var item = $(input);
		// This should parse out to be a paragraph element with 
		// the text approximating 'Hello World'
		return item.is("p") && item.text().match(/\s*hello\W+world\s*/i);
	}
}));

// This is an introduction to headers
lessons.push(Object({
	title       : 'Header? I Hardly Know Her!',
	description : "\
Paragraphs aren't the only types of text that HTML can display. You\
 can make headers with the tags h1, h2, h3, h4, h5 and h6. The     \
largest of these is h1, and they get progressively smaller. Try    \
making a few headers of various sizes.",
	input       : '<h1></h1>\n<h2></h2>',
	solution    : '<h1>Big Header</h1>\n<h2>Smaller</h2>\n<h3>Smaller Still</h3>',
	pass        : [
		'<h1>Header</h1>',
		'<h2>Header</h2>',
		'<h1>Header</h1><h2></h2>'],
	fail        : [
		'<p>Howdy</p>',
		'<br/>',
		'<a>What</a>'],
	valid       : function(input) {
		var item = $(input);
		return item.text() != '' && (item.is('h1') || item.is('h2') ||
			item.is('h3') || item.is('h4') || item.is('h5') || item.is('h6'));
	}
}));

// An introduction to attributes
lessons.push(Object({
	title       : 'Attributes',
	description : "\
Not only do tags all have a tag name, but they can optionally have \
additional <strong>attributes</strong that further describe the    \
element. They can be related to the size of the element on the page\
, the styling, or even whether or not links open in a new tab or   \
the same window. Bear in mind <ol><li>Attribute names should be    \
lowercase</li><li>Attribute values should appear in quotes</li><li>\
Attributes appear in the start tag, and never in the end tag.</li> \
</ol><br/>A common attribute is the 'id' attribute, which allows   \
you to uniquely identify that particular element. Give this header \
an id of 'myHeader'.",
	input       : '<h1 id="">My Awesome Webpage</h1>',
	solution    : '<h1 id="myHeader">My Awesome Webpage</h1>',
	pass        : [
		'<h1 id="myHeader">    what what</h1>',
		'<h1 name="foo" id="myHeader"></h1>'],
	fail        : [
		'<h1 id="something"></h1>',
		'<h2 id="something"></h2>'],
	valid       : function(input) {
		var item = $(input);
		return item.is('h1') && item.attr('id') == 'myHeader';
	}
}));

// This is an introduction to links
lessons.push(Object({
	title       : 'Links All Around!',
	description : "\
As a user of the internet, you are probably aware of the fact that \
aside from being a series of tubes, links provide a way to refer to\
 other web pages. Links are described with the 'a' (meaning        \
'anchor') tag, and the url they point to is described with the     \
'href' attribute. Whatever appears between the start anchor tag and\
 the end tag is a clickable link. Make this link point to your     \
favorite website.",
	input       : '<a href="">My Favorite Site</a>',
	solution    : '<a href="http://stackoverflow.com">My Favorite Site</a>',
	pass        : [
		'<a href="foo">bar</a>',
		'<a id="howdy" href="foo">bar</a>'],
	fail        : [
		'<a href="">Site</a>',
		'<p>Nope</p>',
		'<a src="foo">howdy</a>'],
	valid       : function(input) {
		var item = $(input);
		return item.is('a') && item.attr('href') != '';
	}
}));

// Self-closing tags
lessons.push(Object({
	title       : 'There\'s No End!',
	description : "\
There are many cases where there is no text content or nested tags \
in a tag. In those cases, tags are often                           \
<strong>self-closing</strong>, meaning they have no end tag.       \
Instead, the slash that would normally go in the end tag goes at   \
the end of the start tag. For example, the 'hr' tag creates a      \
horizontal line ('hr' stands for 'horizontal rule'). Since it's    \
just a line, it wouldn't make sense to have any content in it, so  \
it appears as '&lt;hr/&gt;'. Try putting a horizontal line in      \
between these two paragraphs.",
	input       : '<p>Line one</p>\n<p>Line two</p>',
	solution    : '<p>Line one</p>\n<hr/>\n<p>Line two</p>',
	pass        : [
		'<p>Line one</p><hr/><p></p>',
		'<p></p><hr/><p></p>',
		'<p></p>               <hr/>Howdy<p></p>'],
	fail        : [
		'<p>Line one<hr/></p><p>Line two</p>',
		'<p>Line one<hr/>Line two</p>',
		'<p>Line one</p><p>Line Two</p>'],
	valid       : function(input) {
		var items = $(input);
		items = items.filter(function(i) {
			return $(items[i]).is('p') || $(items[i]).is('hr');
		});
		
		if (items.length != 3) {
			return false;
		}
		return $(items[0]).is('p') && $(items[1]).is('hr') && $(items[2]).is('p');
	}
}));

// Images
lessons.push(Object({
	title       : 'Pretty Pretty Pictures!',
	description : "\
You've probably also noticed that the internet is a good place for \
images, and as you may have guessed, there's a tag for that. The   \
'img' tag is that tag. Its 'src' (meaning 'source') attribute      \
points to the URL for the image you want to display. Like the 'hr' \
tag, the 'img' tag is self-closing. For example, make this img tag \
show the picture at (INSERT URL HERE, BELOW)",
	input       : '<img src="" />',
	solution    : '<img src="" />',
	valid       : function(input) {
		var item = $(input);
		return item.is('img') && item.attr('src') != '';
	}
}));

// Height and Width of images
lessons.push(Object({
	title       : 'Squish and Stretch',
	description : "\
Images can take more attributes than just the source url for the   \
picture. You can set the height and width of the image, too. Those \
dimensions are in number of pixels (pixels are the tiny dots that  \
make up your screen). Use the 'width' and 'height' attributes to   \
change the size of the image. What happens when you specify only   \
one of these, but not the other? What happens when you make the    \
image way too wide or too narrow?",
	input       : '<img src="" width="" height=""/>',
	solution    : '<img src="" width="100" height="200" />',
	valid       : function(input) {
		var item = $(input);
		return item.is('img') && (item.attr('width') != '' || item.attr('height') != '');
	}
}));

// Breaks
lessons.push(Object({
	title       : 'Take a Break!',
	description : "\
HTML doesn't car about tabs, or newlines. You should use this fact \
to your advantage to style your code to make it easier to read.    \
However, what if you <em>want</em> a line break in the middle of   \
some text? You can use the 'br' (meaning 'break') tag to add a     \
single new line. Put in line breaks between the lines of this      \
limmerick to format it correctly",
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
	valid       : function(input) {
		return $(input).children('br').length > 0;
	}
}));

// HTML Comments
lessons.push(Object({
	title       : 'No Comment?',
	description : "\
Comments are an important way to improve readability. You may not  \
think that so little could be so helpful, but once you work on HTML\
 with another programmer, you'll understand. Or if you don't work  \
on a project for even a couple of weeks, it's easy to forget what  \
one dense cluster of markup does. Comments do not affect how a     \
document is parsed. Anything between '&lt;!--' and '--&gt;' is     \
considered a comment. Add a comment above the following snippet to \
indicate that it's the beginning of a chapter.",
	input       : dickens,
	solution    : '<!-- Chapter 1 -->\n' + dickens,
	pass        : [],
	fail        : [],
	valid       : function(input) {
		// This... is deep magic
		return $(input).contents().filter(function(){ return this.nodeType == 8; }).length > 0;
	}
}));

// Strong and bold
lessons.push(Object({
	title       : 'Fortune Favors the Bold',
	description : "\
Boring text is boring. Sometimes you want to draw attention to a   \
particular <strong>word</strong> or words, by emboldening them. For\
 this, you can use the 'b' (meaning 'bold') tag or the 'strong'    \
tag. Whatever text appears between the start and end tag will be   \
turned bold, but nothing else. (There is a difference between 'b'  \
and strong. The 'b' tag always means 'bold,' and usually 'strong'  \
gets rendered as boldface, but it doesn't have to. Browsers decide \
how they want to draw attention to the word.) Use the 'strong' tag \
to emphasize the word 'emphasis'.",
	input       : '<p>Sometimes the right emphasis is important</p>',
	solution    : '<p>Sometimes the right <strong>emphasis</strong> is important</p>',
	pass        : [],
	fail        : [],
	valid       : function(input) {
		return $(input).children('strong').text().match(/\W*emphasis\W*/);
	}
}));

// Italics
lessons.push(Object({
	title       : 'Tags Taste M-Italic',
	description : "\
Another common way to draw attention to words is with              \
<em>italics</em>. Like boldface, there are two tags that can       \
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

// Sub and sup
lessons.push(Object({
	title       : 'Sup-er Text',
	description : "\
HTML also provides a way to express superscript and subscripts. As \
you might expect, their names are 'sup' (meaning 'superscript') and\
 'sub' (meaning 'subscript'). Make the 'time=t' a subscript, and   \
the '2' a superscript.",
	input       : '<p>V time=t = g &times; t2</p>',
	solution    : '<p>V <sub>time=t</sub> = g &times; t &times; <sup>2</sup></p>',
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		var sub  = item.children('sub').text().match(/\W*time\s*\=\s*t\W*/);
		var sup  = item.children('sup').text().match(/\s*2\s*/);
		return sub && sup;
	}
}));

// Various other formats
lessons.push(Object({
	title       : 'The Many Styles of Text',
	description : "\
There are a lot more transformations that can be done on text. Take\
 a minute and try a few of them out:\
<ul>\
<li>big -- makes text larger</li>\
<li>small -- makes text smaller</li>\
<li>del -- deleted (strikethrough) text</li>\
<li>ins -- newly inserted text</li>\
<li>pre -- interprets text exactly as entered, and not HTML</li>\
<li><a href='http://www.w3schools.com/html/html_formatting.asp'>many more...</a></li>\
</ul>",
	input       : "<p>This is some <big>big text</big> and this \
is some <small>small text</small>. This text <del>has been      \
deleted</del>, but this text <ins>has been inserted</ins>. This \
text, on the other hand, <pre>has been preformatted</pre>.",
	solution    : "<p>This is some <big>big text</big> and this \
is some <small>small text</small>. This text <del>has been      \
deleted</del>, but this text <ins>has been inserted</ins>. This \
text, on the other hand, <pre>has been preformatted</pre>.",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		return true;
	}
}));

// Listing
lessons.push(Object({
	title       : 'Let Me List The Ways',
	description : "\
Thus far, we've dealt mostly in text. Particularly, headers and    \
paragraphs. But the pallate becomes sophisticated rather quickly,  \
and we need something more. This brings us to lists. Lists come in \
both the ordered (each item has a number associated with it) and   \
unordered varieties (each item is a bullet point). Ordered lists   \
begin begin with the 'ol' tag, while their unordered counterparts  \
begin with the 'ul' tag. Items in the list are identified by the   \
'li' tag. Add an item to your grocery list and to-do list",

	input       : "\
<p>My Grocery List:\n\
	<ul>\n\
		<li>Mac-and-cheese</li>\n\
		<li>Mountain Dew</li>\n\
		<li>Marmelade</li>\n\
	</ul>\n\
</p>\n\
<p>My To-Do List:\n\
	<ol>\n\
		<li>Learn HTML</li>\n\
		<li>Become a programming wizard</li>\n\
		<li>?</li>\n\
		<li>Profit</li>\n\
	</ol>\n\
</p>",

	solution    : "\
<p>My Grocery List:\n\
	<ul>\n\
		<li>Mac-and-cheese</li>\n\
		<li>Mountain Dew</li>\n\
		<li>Marmelade</li>\n\
		<li>Meat Loaf</li>\n\
	</ul>\n\
</p>\n\
<p>My To-Do List:\n\
	<ol>\n\
		<li>Learn HTML</li>\n\
		<li>Become a programming wizard</li>\n\
		<li>?</li>\n\
		<li>Profit</li>\n\
		<li>World Domination</li>\n\
	</ol>\n\
</p>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.children('ul li').length > 3 && item.children('ol li').length > 4;
	}
}));

// Turning the Tables
lessons.push(Object({
	title       : 'Turning The Tables',
	description : "\
In addition to lists, HTML provides a way to describe tables. This \
can get a little bit crowded, but stick with it. A table begins    \
with the 'table' tag, and defines a number of rows with the 'tr'   \
tag. With me so far? Good. Each row defines a number of columns,   \
each with a 'td' tag. Columns get as big as the biggest element in \
that column, so they're good at keeping data aligned. Add a row to \
describe the newest widget your company sells.",

	input       : "\
<!-- Alright, we begin our table -->\n\
<table>\n\
	<!-- This is our first row -->\n\
	<tr>\n\
		<!-- These are not normal elements, but they're headers -->\n\
		<th>Item Number</th>\n\
		<th>Item Name</th>\n\
		<th>Number of Units</th>\n\
	</tr>\n\
	\n\
	<!-- This is the first item we have -->\n\
	<tr>\n\
		<!-- Columns 1, 2, and 3 -->\n\
		<td>1</td>\n\
		<td>Sprocket</td>\n\
		<td>7000</td>\n\
	</tr>\n\
	\n\
	<!-- This is the second item we have -->\n\
	<tr>\n\
		<td>2</td>\n\
		<td>Spracket</td>\n\
		<td>20</td>\n\
	</tr>\n\
	\n\
	<!-- Put your new widget here -->\n\
</table>",
	
	solution    : "\
<!-- Alright, we begin our table -->\n\
<table>\n\
	<!-- This is our first row -->\n\
	<tr>\n\
		<!-- These are not normal elements, but they're headers -->\n\
		<th>Item Number</th>\n\
		<th>Item Name</th>\n\
		<th>Number of Units</th>\n\
	</tr>\n\
	\n\
	<!-- This is the first item we have -->\n\
	<tr>\n\
		<!-- Columns 1, 2, and 3 -->\n\
		<td>1</td>\n\
		<td>Sprocket</td>\n\
		<td>7000</td>\n\
	</tr>\n\
	\n\
	<!-- This is the second item we have -->\n\
	<tr>\n\
		<td>2</td>\n\
		<td>Spracket</td>\n\
		<td>20</td>\n\
	</tr>\n\
	\n\
	<tr>\n\
		<td>3</td>\n\
		<td>Widget</td>\n\
		<td>50</td>\n\
	</tr>\n\
</table>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.find('tr').length > 3 && item.find('tr td').length >= 9;
	}
}));

// Style
lessons.push(Object({
	title       : 'Stylin\'',
	description : "\
Beyond these text transformations, you can apply even more with    \
something called <strong>style</strong>. Styles can be applied to  \
a tag using its style attribute, or through <strong>CSS</strong>   \
(cascading style sheets). Styles are a list of key:value pairs,    \
separated by ';' (semicolons). You can change the color of text    \
with the 'color' style like so: <pre>&lt;h1 style='color:blue'&gt;\
This is a Blue Header&lt/h1&gt;</pre>\
Use the 'color' style to change this header's color to red.",
	input       : '<h1 style="">Red Head(er)</h1>',
	solution    : '<h1 style="color:red">Red Head(er)</h1>',
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.is('h1') && item.attr('style').match(/color\s*:\s*red/);
	}
}));

var example = "<style>\n\
h1 {\n\
color: blue;\n\
}\n\
</style>\n\
\n\
<h1>Red Header 1</h1>\n\
<h1>Red Header 2</h1>\n\
<h1>Red Header 3</h1>\n\
<h2>Not A Red Header</h1>";

// CSS
lessons.push(Object({
	title       : 'Cascading Style Sheets and the Style Tag',
	description : "\
Specifying the style attribute for each tag individually is not    \
tedious, but error-prone and difficult to change. For example, if  \
you have 10 headers on your page, and you write styles for them,   \
then decide you want to change the font used for each of them, you \
will have your work cut out for you. Enter stylesheets and the     \
'style' tag. They allow you to change the styling for groups of    \
tags in one place. For now, we'll use style tag to change the font \
color of <em>all</em> h1 tags. Now change the color of all these   \
headers from blue to red.",
	input       : example,
	solution    : example.replace('blue', 'red'),
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		var style = item.filter(function(i) { return $(item[i]).is('style'); });
		return style.text().match(/color\s*:\s*blue/);
	}
}));

// Classes
lessons.push(Object({
	title       : 'How Classy',
	description : "\
Tags can all accept the 'class' attribute. It allows you to give   \
some attribution to the type of tag it is, and is especially useful\
 with CSS. For example, suppose you have some paragraphs that are  \
the opening paragraph in a sections, and you'd like to give them   \
special treatment. You can't simply change the styling for         \
<em>all</em> 'p' tags, but classes provide a logical grouping. A   \
tag can have multiple classes, separated by spaces. Give these     \
paragraphs alternating classes like the example.",

	input       : "\
<style>\n\
.odd {\n\
	background-color: lightgray;\n\
}\n\
\n\
.even {\n\
	background-color: white;\n\
}\n\
</style>\n\
<p>\n\
<span class='odd'>'Twas brillig, and the slithy toves</span><br/>\n\
<span class='even'>Did gyre and gimble in the wabe;</span><br/>\n\
<span class='odd'>All mimsy were the borogoves,</span><br/>\n\
<span class='even'>And the mome raths outgrabe.</span><br/>\n\
</p><p>\n\
<span>'Beware the Jabberwock, my son!</span><br/>\n\
<span>The jaws that bite, the claws that catch!</span><br/>\n\
<span>Beware the Jubjub bird, and shun</span><br/>\n\
<span>The frumious Bandersnatch!</span></p>",

	solution    : "\
<style>\n\
.odd {\n\
	background-color: lightgray;\n\
}\n\
\n\
.even {\n\
	background-color: white;\n\
}\n\
</style>\n\
<p>\n\
<span class='odd'>'Twas brillig, and the slithy toves</span><br/>\n\
<span class='even'>Did gyre and gimble in the wabe;</span><br/>\n\
<span class='odd'>All mimsy were the borogoves,</span><br/>\n\
<span class='even'>And the mome raths outgrabe.</span><br/>\n\
</p><p>\n\
<span class='odd'>'Beware the Jabberwock, my son!</span><br/>\n\
<span class='even'>The jaws that bite, the claws that catch!</span><br/>\n\
<span class='odd'>Beware the Jubjub bird, and shun</span><br/>\n\
<span class='even'>The frumious Bandersnatch!</span></p>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.children('span.odd').length == 4 && item.children('span.even').length == 4;
	}
}));

// More CSS Selectors
lessons.push(Object({
	title       : 'Choosy CSS Chooses Jiff',
	description : "\
CSS provides a very robust mechanism for denoting a set of tags,   \
called <strong>selector</strong>. Virtually any selector can be    \
derived, like selecting all anchor elements of class 'x' that      \
appear in a paragraph with class 'y'. Curious readers can          \
<a href='http://www.w3schools.com/cssref/css_selectors.asp'>read more</a>\
, of course, but some of the most common ones select tags with a   \
given <strong>.class</strong>, or <strong>#id</strong> or <strong> \
type</strong>. In the last exercise, you were introducued briefly  \
to the CSS selector for a class. Add an id attribute to the anchor \
tag to give it the styling it so rightly deserves.",
	input       : "\
<style>\n\
#myLink {\n\
	color: red\n\
}\n\
</style>\n\
<p>This <a href='#'>link</a> lacks some style.</p>",
	solution    : "\
<style>\n\
#myLink {\n\
	color: red\n\
}\n\
</style>\n\
<p>This <a id='myLink' href='#'>link</a> lacks some style.</p>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.children('a[id="myLink"]').length > 0;
	}
}));

// More CSS styles
lessons.push(Object({
	title       : 'Endless Style',
	description : "\
There is almost no end to the number and variety of stylings that  \
are available in CSS:\
<ul>\
<li>font-family -- what font (or family of fonts) to use</li>\
<li>font-size -- how big should the font be?</li>\
<li>background-color -- you guessed it!</li>\
<li>text-align -- should text be left-aligned, justified, etc.?</li>\
<li><a href='http://www.w3schools.com/cssref/default.asp'>many more...</a></li>\
</ul>\
Play around below to experiment!",
	input       : "\
<style>\n\
p {\n\
	color: blue;\n\
	background-color: lightgray;\n\
	font-size: 15px;\n\
	font-family: verdana,sans-serif,serif;\n\
	text-align: justified;\n\
}\n\
</style>\n\
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras \
malesuada, dui at semper interdum, felis est porttitor ligula, ac\
 pharetra erat elit in lacus. Sed ornare, sem non pharetra       \
fringilla, lacus est fermentum felis, nec dapibus justo magna    \
quis nulla. Pellentesque eu nisi libero, et tincidunt nibh. Morbi\
 id dui ut dui porttitor commodo. Pellentesque ut ipsum nec arcu \
viverra consequat. Curabitur facilisis neque id purus posuere    \
porta. Nam lobortis faucibus elit, gravida congue elit faucibus  \
ac. Fusce non pellentesque turpis. Phasellus suscipit lectus in  \
sapien dapibus sed rutrum neque blandit. Sed interdum dignissim  \
eros a tincidunt. Sed elementum varius.",
	solution    : null,
	pass        : [],
	fail        : [],
	valid       : function(input) {
		return true;
	}
}));








 
// This is the format
lessons.push(Object({
	title       : '',
	description : "\
As a user of the internet, you are probably aware of the fact that \
",
	input       : '',
	solution    : '',
	pass        : [],
	fail        : [],
	valid       : function(input) {
		return false;
	}
}));