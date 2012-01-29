var units = [];

var lessons = [];

var addUnit = function(obj) {
	units.push(obj);
}

var addLesson = function(obj) {
	var unit = units[units.length - 1];
	obj.unit = unit;
	unit.lessons.push(obj);
	lessons.push(obj);
}
