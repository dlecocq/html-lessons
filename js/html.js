var HTMLessons = Object({
	// This is the lesson we're currently on
	current : 0,
	
	initialize : function() {
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
		$('#input').val(lesson.input);
		// And display the description
		$('#lesson_container').html(lesson.description);
		// And update the title
		HTMLessons.setTitle(lesson.title);
	},
	
	checkLesson : function() {
		var lesson = lessons[HTMLessons.current];
		var input  = $('#input').val();
		if (lesson.valid(input)) {
			HTMLessons.onLessonCorrect();
		} else {
			HTMLessons.onLessonError();
		}
		
		// And lastly, set the results element to have the provided content
		$('#results').html(input);
	},
	
	/* Callbacks
	 *
	 * These are all the callbacks for various stages of completion.
	 * There are callbacks for correctly finishing a lesson, for 
	 * producing an error for a lesson, and even for finishing all 
	 * of the lessons
	 */
	
	// This is called when a lesson is correctly finished
	onLessonCorrect : function() {
		alert('Correct!');
		HTMLessons.advance();
	},
	
	// This is called when a lesson is incorrectly finished
	onLessonError : function() {
		alert('Nope, sorry!');
	},
	
	// This is called when all the lessons have been finished
	onAllLessonsComplete : function() {
		
	}
});