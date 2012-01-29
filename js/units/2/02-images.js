// Images
addLesson(Object({
	title       : 'Pretty Pretty Pictures!',
	id          : 'images',
	description : "<p>\
The internet would be a much duller place without images. The \
<span class='cm-tag'>&lt;img&gt;</span> tag adds an image to your \
HTML document, with the <span class='cm-attribute'>src</span> attribute \
specifying the location of the image. Like the \
<span class='cm-tag'>&lt;hr/&gt;</span> and \
<span class='cm-tag'>&lt;br/&gt;</span> tags, the image tag is self-closing. \
After all, it's an image, and it doesn't make sense for it to have \
any text content.</p>\
<p>Make the image at right display the image located at 'img/fail.jpg'",
	
	input       : '<p>ZOMGROFL! Look at this picture: <img src="" /></p>',
	
	solution    : '<p>ZOMGROFL! Look at this picture: <img src="img/fail.jpg" /></p>',
	
	pass        : [
		'<p>ZOMGROFL! Look at this picture: <img src="img/fail.jpg" /></p>'],
	
	fail        : [
		'<p>ZOMGROFL! Look at this picture: <img src="fail.jpg" /></p>',
		'<p>ZOMGROFL! Look at this picture: <img src="/img/fail.jpg" /></p>',
		'<p><img src=""/></p>',
		'<p></p>'],
	
	valid       : function(input) {
		var item = $(input);
		return item.children('img[src="img/fail.jpg"]').length > 0;
	}
}));