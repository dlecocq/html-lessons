// More CSS styles
addLesson(Object({
	title       : 'Endless Style',
	id          : 'more-styles',
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