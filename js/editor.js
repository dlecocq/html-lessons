var Editor = Object({
	editor : null,
	scratch: null,
	
	initialize: function() {
		Editor.editor = CodeMirror.fromTextArea($('#input')[0], {
			value: 'hello!',
			mode: 'htmlmixed',
			lineNumbers: true,
			onChange: function(editor, opts) {
				$('#preview').html(Editor.get());
			}
		});
		
		$('#lesson-toggle').click(function() {
			$('#work-container').show();
			$('#scratch-container').hide();
		});
		
		$('#scratch-toggle').click(function() {
			if (Editor.scratch == null) {
				Editor.scratch = CodeMirror.fromTextArea($('#scratch')[0], {
					mode: 'htmlmixed',
					lineNumbers: true,
					onChange: function(editor, opts) {
						$('#scratch-preview').html(Editor.scratch.getValue());
					}
				});
			}
			Editor.scratch.refresh();
			$('#work-container').hide();
			$('#scratch-container').show();
		});
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
		$('#preview').html(Editor.get());
	}
});