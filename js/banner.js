/* Stuff to do with the banner */
var Banner = Object({
	show : function (message, timeout) {
		$('#banner-message').text(message);
		$('#banner').show('blind', {direction: 'vertical'}, 500);
		if (timeout != null) {
			$('#banner').delay(timeout).queue(function() {
				Banner.hide();
			}).dequeue();
		}
	},
	
	hide : function() {
		$('#banner').hide('blind', {direction: 'vertical'}, 500);
	}, 
	
	initialize: function() {
		$('#banner-close').click(function() {
			// You should close this at least once to be 
			// considered as having visited
			Session.set('visited', true);
			Banner.hide();
		});
		
		if (Session.get('visited') == null) {
			Banner.show('Welcome to HTMLessons! Move through these short lessons to learn HTML!');
		}
	}
});