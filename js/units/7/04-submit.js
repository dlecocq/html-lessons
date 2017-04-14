// Classes
addLesson(Object({
	title       : 'Submit!',
	id          : 'form-submit',
	description : "\
<script>var submit = function() { alert('You submitted the form!'); }</script>\
<p>You've learned all you need to know about gathering data from \
as user... except for the actual bit about sending that data somewhere. \
Forms typically have one of these two fates: \
<ol>\
<li>Data is handled by JavaScript in the browser, or...</li>\
<li>Data is encoded and send to a server</li></ol></p>\
<p>Data being sent to a server is typically done through a <span class='cm-atom'>\
POST</span> request, which in HTTP semantics means that when requesting \
a url, your browser is also including some data in a certain format. \
There are many ways to accept this data, but it's beyond the scope of \
this discussion, unfortunately.</p>\
<p>Still, to send the data contained in a form to said server, we need \
two last pieces. First, the <span class='cm-atom'>submit</span>-type \
input, which appears as a button that, when clicked, submits the form. \
The second piece is the <span class='cm-atom'>action</span> attribute \
on the form. It describes either the JavaScript function or the URL to \
submit the form to.</p>\
<p>Add a submit button at the end of this form, and set the action of \
the form to be 'javascript:submit()'. When you're done, you can even \
try out your fancy new form!</p>",

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