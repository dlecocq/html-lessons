// Classes
addLesson(Object({
	title       : 'Radio? Check!',
	id          : 'radio-check',
	description : "\
<p>Text is useful as an input, but other times, you'd like to \
limit a user's options to a few select items. To this end, there \
are <span class='cm-tag'>radio</span> buttons (which allow only \
one to be selected), and <span class='cm-tag'>checkboxes</span> \
(which allow many to be selected).</p>\
<p>In the case of these input selectors, the <span class='cm-atom'>\
name</span> attribute still carries the same meaning as for text fields. \
It's the name associated with the values conveyed by the input. In the \
case of radio buttons, it also provides grouping -- only one button \
with the same <span class='cm-atom'>name</span> can be selected at once.</p>\
<p>The <span class='cm-atom'>name</span> attribute is the actual value \
associated with that button being selected, and is not visible to the user. \
Conversely, the label shown to the user does not get submitted with the form.</p>\
<p>Add two more checkboxes asking if a user likes a given band, and \
extend the age groups to include a '30-39' and a '40-49' category.</p>",

	input       : "\
<form>\n\
  <p>\n\
  Do you like...<br/>\n\
    <input type='checkbox' name='bands' value='Barenaked Ladies' />Barenaked Ladies<br/>\n\
  </p>\n\n\
  <p>\n\
  What's your age?<br/>\n\
    <input type='radio' name='age' value='10-19' />10 - 19 years<br/>\n\
    <input type='radio' name='age' value='20-29' />20 - 29 years<br/>\n\
  </p>\n\
</form>",

	solution    : "\
<form>\n\
  <p>\n\
  Do you like...<br/>\n\
    <input type='checkbox' name='bands' value='Barenaked Ladies' />Barenaked Ladies<br/>\n\
    <input type='checkbox' name='bands' value='Lady Gaga' />Lady Gaga<br/>\n\
    <input type='checkbox' name='bands' value='Cake' />Cake<br/>\n\
  </p>\n\n\
  <p>\n\
  What's your age?<br/>\n\
    <input type='radio' name='age' value='10-19' />10 - 19 years<br/>\n\
    <input type='radio' name='age' value='20-29' />20 - 29 years<br/>\n\
    <input type='radio' name='age' value='30-39' />30 - 39 years<br/>\n\
    <input type='radio' name='age' value='40-49' />40 - 49 years<br/>\n\
  </p>\n\
</form>",
    
	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var checks = item.find('input[type="checkbox"]');
		var radio  = item.find('input[type="radio"]');
		var result = checks.length >= 3;
		var s = '';
		for (var i = 1; i < 5; ++i) {
		    s += '\\s*' + i + '0\\s*-\\s*' + i + '9\\s*years';
		    result = result && $(radio[i-1]).attr('value').match(RegExp('\\s*' + i + '0\\s*-\\s*' + i + '9'));
		}
		return result && radio.parent().text().match(RegExp(s));
	}
}));