// Classes
addLesson(Object({
	title       : 'What\'s in a Name?',
	id          : 'forms-name',
	description : "\
<p>While it's all well and good to provide labels for the user's sake, \
eventually you'll want to send this data somewhere or do something with \
it in the browser. To this end, inputs generally have a name associated \
with them. It's this name that gets associated with the data in that input.</p>\
<p>Without getting too involved, what often happens when you submit a \
form is that that data is encoded in a particular format, and sent to a \
server with a <span class='cm-atom'>POST</span> request. In HTTP semantics, \
that simply means data of some kind if being submitted to a server. This \
is opposed to a <span class='cm-atom'>GET</span> request, which is what \
happens behind the scenes whenever you enter a url into your browser.</p>\
<p>But enough about HTTP 'verbs' (that's what they're called). Add the \
names 'email' and 'password' to the form.</p>",

	input       : "\
<form>\n\
  Name: <input type='text' name='name'/><br/>\n\
\n\
  Email: <input type='text'/><br/>\n\
\n\
  Password: <input type='password'/>\n\
</form>",

	solution    : "\
<form>\n\
  Name: <input type='text' name='name'/><br/>\n\
\n\
  Email: <input type='text' name='email'/><br/>\n\
\n\
  Password: <input type='password' name='password'/>\n\
</form>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		var name  = item.find('input[type="text"][name="name"]');
		var email = item.find('input[type="text"][name="email"]');
		var password = item.find('input[type="password"][name="password"]');
		return name.length == 1 && email.length == 1 && password.length == 1;
	}
}));