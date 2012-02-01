var endMessage = "\
That's all the lessons we have, for now! We hope you've \
found this useful thus far, and we plan to have more lessons \
soon!";

var HTMLessons = Object({
	// This is the lesson we're currently on
	current : 0,
	
	initialize : function() {
		// First things first, make the buttons
		$('#submit_button').button().click(function() { return false; });
		$('#reveal_button').button().click(function() { return false; });
		$('#advance_button').button().click(function() { HTMLessons.advance(); });
		
		$('#editor_radio').buttonset();
		
		// The button to turn it in
		$('#submit_button').click(function() {
			HTMLessons.checkLesson();
		});
		
		// The button to give up and see the solution
		$('#reveal_button').click(function() {
			HTMLessons.revealSolution();
		});
		
		$(window).bind('hashchange', HTMLessons.checkURL);
		HTMLessons.checkURL();
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
		$("title").text('HTMLessons | ' + title);
	},
	
	checkURL : function() {
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
	
	// Display a particular lesson
	displayLesson : function(number) {
		if (number >= lessons.length) {
			Banner.show('That\'s all the lessons we have for now. Check back soon!');
			number = lessons.length - 1;
		}
		
		var lesson = lessons[number];
		// Pre-fill the input space with the provided input
		Editor.set(lesson.input);
		// And display the description
		$('#lesson_message').html(lesson.description);
		// And update the title
		$('#lesson_title').text(lesson.title);
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
			HTMLessons.onLessonCorrect(lesson);
		} else {
			HTMLessons.onLessonError(lesson);
		}
	},
	
	// This reveals one possible solution to the problem.
	revealSolution : function() {
		var lesson = lessons[HTMLessons.current];
		if (lesson.solution) {
			Editor.set(lesson.solution);	
		}
		HTMLessons.onLessonRevealed(lesson);
	},
	
	/* Callbacks
	 *
	 * These are all the callbacks for various stages of completion.
	 * There are callbacks for correctly finishing a lesson, for 
	 * producing an error for a lesson, and even for finishing all 
	 * of the lessons
	 */
	
	// This is called when a lesson has its solution revealed
	onLessonRevealed : function(lesson) {
		
	},
	
	// This is called when a lesson is correctly finished
	onLessonCorrect : function(lesson) {
		alert('Correct!');
		$('#advance_button').button('enable');
		var successes = Session.get('successes') || {};
		if (successes[lesson.id] == null) {
			successes[lesson.id] = true;
			Session.set('successes', successes);
		}
	},
	
	// This is called when a lesson is incorrectly finished
	onLessonError : function(lesson) {
		alert('Nope, sorry!');
	},
	
	// This is called when all the lessons for a unit have been 
	// completed.
	onUnitComplete : function(unit) {
		
	},
	
	// This is called when all the lessons have been finished
	onAllLessonsComplete : function() {
		
	}
});