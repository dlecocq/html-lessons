var Editor = Object({
	editor : null,
	
	initialize: function() {
		Editor.editor = CodeMirror.fromTextArea($('#input')[0], {
			value: 'hello!',
			mode: 'htmlmixed',
			lineNumbers: true,
			onChange: function(editor, opts) {
				Editor.preview();
			}
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
		return Editor.editor.getValue();
	},
	
	// Set the contents of the editor
	set: function(t) {
		Editor.editor.setValue(t);
	},
	
	// Show a preview of our code
	preview: function() {
		$('#preview').html(Editor.get()).show();
	},
	
	// Hide said preview
	hidePreview: function() {
		$('#preview').hide();
	}
});