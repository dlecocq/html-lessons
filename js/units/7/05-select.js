// Classes
addLesson(Object({
	title       : 'Select an Option',
	id          : 'select-option',
	description : "\
<p>What about drop-downs? They're accomplished with the \
<span class='cm-tag'>&lt;select&gt;</span> tag, and multiple <span class='cm-tag'>\
&lt;option&gt;</span> tags. Like radio buttons, only one option can \
be selected at any one time, and each option describes a possible value.</p>\
<p>Like <span class='cm-tag'>&lt;input&gt;</span> tags, <span class='cm-tag'>\
&lt;option&gt;</span> tags should include a <span class='cm-atom'>value</span> \
attribute, which describe what's submitted with the form, and the text content \
of the tag is what is shown to the user.</p>\
<p>Add a couple of more options to the select desr</p>",

	input       : "\
<!-- Make sure to add 'action' to form! -->\n\
<form>\n\
  Name: <input type='text' name='name'/><br/>\n\n\
  Email: <input type='text'/><br/>\n\n\
  Password: <input type='password'/><br/>\n\n\
  <!-- Add a submit button here! -->\n\
</form>",

	solution    : "\
<form action='javascript:submit()'>\n\
  Name: <input type='text' name='name'/><br/>\n\n\
  Email: <input type='text'/><br/>\n\n\
  Password: <input type='password'/><br/>\n\n\
  <input type='submit' />\n\
</form>",
    
	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var form   = item.children().parent('form[action="javascript:submit()"]');
		var submit = item.find('input[type="submit"]');
		return form.length == 1 && submit.length == 1;
	}
}));