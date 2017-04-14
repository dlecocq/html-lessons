addUnit({
	title  : 'Forms',
	lessons: []
});

// Classes
addLesson(Object({
	title       : 'Form-ulaic',
	id          : 'forms',
	description : "\
<p>You've seen 'em -- forms. They're a mechanism for describing, \
structuring, and prompting user input. Forms begin with a <span class='cm-tag'>\
&lt;form&gt;</span> tag, and contain several <span class='cm-tag'>\
&lt;input&gt;</span> tags. These input tags can have various types, \
and we'll see examples of those in a minute. However, one of the most \
commonly-used types is the <span class='cm-atom'>text</span> type.</p>\
<p>For example, you might prompt a user for the name, or email address \
with such an input tag. For inputs where you'd like to collect \
information, but it's sensitive and thus shouldn't be displayed to the \
screen, you can use the <span class='cm-atom'>password</span> type \
instead. It behaves exactly like the <span class='cm-atom'>text</span> \
except that symbols appear in place of each character.</p>\
<p>Follow the example and add an input for the user's \
email address, as well as a password.</p>",

	input       : "\
<form>\n\
  Name: <input type='text' /><br/>\n\
\n\
  Email: <!-- Input for email here! --> <br/>\n\
\n\
  Password: <!-- Input for password here! -->\n\
</form>",

	solution    : "\
<form>\n\
  Name: <input type='text' /><br/>\n\
\n\
  Email: <input type='text' /><br/>\n\
\n\
  Password: <input type='password' /><br/>\n\
</form>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var results = item.find('input[type="text"]').length == 2;
		return results && item.find('input[type="password"]').length == 1;
	}
}));