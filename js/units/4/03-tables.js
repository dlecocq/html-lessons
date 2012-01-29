// Turning the Tables
addLesson(Object({
	title       : 'Turning The Tables',
	description : "\
In addition to lists, HTML provides a way to describe tables. This \
can get a little bit crowded, but stick with it. A table begins    \
with the 'table' tag, and defines a number of rows with the 'tr'   \
tag. With me so far? Good. Each row defines a number of columns,   \
each with a 'td' tag. Columns get as big as the biggest element in \
that column, so they're good at keeping data aligned. Add a row to \
describe the newest widget your company sells.",

	input       : "\
<!-- Alright, we begin our table -->\n\
<table>\n\
	<!-- This is our first row -->\n\
	<tr>\n\
		<!-- These are not normal elements, but they're headers -->\n\
		<th>Item Number</th>\n\
		<th>Item Name</th>\n\
		<th>Number of Units</th>\n\
	</tr>\n\
	\n\
	<!-- This is the first item we have -->\n\
	<tr>\n\
		<!-- Columns 1, 2, and 3 -->\n\
		<td>1</td>\n\
		<td>Sprocket</td>\n\
		<td>7000</td>\n\
	</tr>\n\
	\n\
	<!-- This is the second item we have -->\n\
	<tr>\n\
		<td>2</td>\n\
		<td>Spracket</td>\n\
		<td>20</td>\n\
	</tr>\n\
	\n\
	<!-- Put your new widget here -->\n\
</table>",
	
	solution    : "\
<!-- Alright, we begin our table -->\n\
<table>\n\
	<!-- This is our first row -->\n\
	<tr>\n\
		<!-- These are not normal elements, but they're headers -->\n\
		<th>Item Number</th>\n\
		<th>Item Name</th>\n\
		<th>Number of Units</th>\n\
	</tr>\n\
	\n\
	<!-- This is the first item we have -->\n\
	<tr>\n\
		<!-- Columns 1, 2, and 3 -->\n\
		<td>1</td>\n\
		<td>Sprocket</td>\n\
		<td>7000</td>\n\
	</tr>\n\
	\n\
	<!-- This is the second item we have -->\n\
	<tr>\n\
		<td>2</td>\n\
		<td>Spracket</td>\n\
		<td>20</td>\n\
	</tr>\n\
	\n\
	<tr>\n\
		<td>3</td>\n\
		<td>Widget</td>\n\
		<td>50</td>\n\
	</tr>\n\
</table>",
	pass        : [],
	fail        : [],
	valid       : function(input) {
		var item = $(input);
		return item.find('tr').length > 3 && item.find('tr td').length >= 9;
	}
}));