var HTMLessons = Object({
	// This is the lesson we're currently on
	current : 0,
	
	initialize : function() {
		// First things first, make the buttons
		$('#submit_button').button().click(function() { return false; });
		$('#reveal_button').button().click(function() { return false; });
		$('#advance_button').button().click(function() { HTMLessons.advance(); });
		
		// Now figure out what lesson we're on
		var lesson = location.hash;
		if (lesson.length == 0) {
			HTMLessons.current = 0;
		} else {
			// Match the first digit that you find in the location hash
			lesson = lesson.match(/\d+/);
			if (lesson.length > 0) {
				HTMLessons.current = parseInt(lesson[0]);
			} else {
				HTMLessons.current = 0;
			}
		}
		
		HTMLessons.displayLesson(HTMLessons.current);
	},
	
	// Advance to the next lesson
	advance : function() {
		HTMLessons.current += 1;
		if (HTMLessons.current > lessons.length) {
			HTMLessons.allLessonsComplete();
		} else {
			HTMLessons.displayLesson(HTMLessons.current);
			location.hash = 'lesson' + HTMLessons.current;
		}
	},
	
	// Set the page's title
	setTitle : function(title)  {
		$("title").text('Learn HTML | ' + title);
	},
	
	// Display a particular lesson
	displayLesson : function(number) {
		var lesson = lessons[number];
		// Pre-fill the input space with the provided input
		Editor.set(lesson.input);
		// And display the description
		$('#lesson_message').html(lesson.description);
		// And update the title
		HTMLessons.setTitle(lesson.title);
		// Hide the done buttons, and show the working buttons
		$('#advance_button').button('disable');
		// Hide any preview
		Editor.set(lesson.input);
		Editor.preview();
	},
	
	// This checks whether or not the submission is correct
	checkLesson : function() {
		var lesson = lessons[HTMLessons.current];
		var input  = Editor.get();
		if (lesson.valid($(input))) {
			HTMLessons.onLessonCorrect();
		} else {
			HTMLessons.onLessonError();
		}
		
		Editor.preview();
	},
	
	// This reveals one possible solution to the problem.
	revealSolution : function() {
		var lesson = lessons[HTMLessons.current];
		if (lesson.solution) {
			Editor.set(lesson.solution);	
		}
		HTMLessons.onLessonRevealed();
	},
	
	/* Callbacks
	 *
	 * These are all the callbacks for various stages of completion.
	 * There are callbacks for correctly finishing a lesson, for 
	 * producing an error for a lesson, and even for finishing all 
	 * of the lessons
	 */
	
	// This is called when a lesson has its solution revealed
	onLessonRevealed : function() {
		
	},
	
	// This is called when a lesson is correctly finished
	onLessonCorrect : function() {
		alert('Correct!');
		$('#advance_button').button('enable');
	},
	
	// This is called when a lesson is incorrectly finished
	onLessonError : function() {
		alert('Nope, sorry!');
	},
	
	// This is called when all the lessons have been finished
	onAllLessonsComplete : function() {
		
	}
});