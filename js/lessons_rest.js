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

/* 
// This is the format
lessons.push(Object({
	title       : '',
	id          : '',
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
*/