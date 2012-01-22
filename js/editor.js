var Editor = Object({
	markitup : null,
	
	initialize: function() {
		Editor.markitup = $('#input').markItUp({
			nameSpace         : 'html',
		    onShiftEnter      : { keepDefault:false, replaceWith:'<br />\n' },
		    onCtrlEnter       : { keepDefault:false, openWith:'\n<p>', closeWith:'</p>\n' },
		    onTab             : { keepDefault:false, openWith:'    ' },
		    markupSet         : []
		});
		
		// Set the timeout so that the preview updates periodically
		$('#input').keyup(function() {
			Editor.preview();
		});
		
		// The button to turn it in
		$('#submit_button').click(function() {
			HTMLessons.checkLesson();
		});
		
		// The button to give up and see the solution
		$('#reveal_button').click(function() {
			HTMLessons.revealSolution();
		})
	},
	
	// Get the contents of the editor
	get: function() {
		return $('#input').val();
	},
	
	// Set the contents of the editor
	set: function(t) {
		$('#input').val(t);
	},
	
	// Show a preview of our code
	preview: function() {
		$('#preview').html($('#input').val()).show();
	},
	
	// Hide said preview
	hidePreview: function() {
		$('#preview').hide();
	}
});