// Paths
addLesson(Object({
	title       : 'The Long and Winding Path',
	id          : 'paths',
	description : "<p>\
Both images and links make use of URLs to identify their links and sources, \
so we'll go through them in more detail. Let's look at the url \
<span class='code'>http://en.wikipedia.org/wiki/Html</span>. The \
<span class='code'>http://</span> portion defines the protocol that your \
browser uses to communicate with the servers that run wikipedia. \
The <span class='code'>en.wikipedia.org</span> portion is a domain name, \
which identifies the websiteness of the website, for lack of a better term.\
The rest, <span class='code'>/wiki/Html</span>, specifies a path on that \
server.</p>\
<p>Paths on servers work just like paths on your own computer. For example, \
the <span class='code'>Html</span> document lives in the \
<span class='code'>wiki/</span> directory on Wikipedia, and the full URL \
identifies that we're requesting that path from the wikipedia server \
using the <span class='code'>http</span> protocol.</p>\
<p>When you provided an image with the path of \
<span class='code'>/img/fail.jpg</span>, the / at the beginning means that \
that path is <span class='definition'>absolute</span>, meaning it gets \
added directly on to the domain name. If we omit that /, then it indicates \
a <span class='definition'>relative</span> path, meaning it refers to a document \
in the same directory. That, of course, depends on the directory of the \
page of the document we're browsing.</p>\
<p>On <span class='code'>http://foo.com/index.html</span>:\
<ul>\
<li><span class='code'>/img/fail.jpg</span> &rarr; <span class='code'>http://foo.com/img/fail.jpg</span></li>\
<li><span class='code'>img/fail.jpg</span> &rarr; <span class='code'>http://foo.com/img/fail.jpg</span></li>\
</ul>\
On <span class='code'>http://foo.com/some/other/path.html</span>:\
<ul>\
<li><span class='code'>/img/fail.jpg</span> &rarr; <span class='code'>http://foo.com/img/fail.jpg</span></li>\
<li><span class='code'>img/fail.jpg</span> &rarr; <span class='code'>http://foo.com/some/other/img/fail.jpg</span></li>\
</ul></p>",
	input       : '<img src="" width="" height=""/>',
	solution    : '<img src="" width="100" height="200" />',
	valid       : function(input) {
		var item = $(input);
		return item.is('img') && (item.attr('width') != '' || item.attr('height') != '');
	}
}));