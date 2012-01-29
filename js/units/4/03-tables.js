// Turning the Tables
addLesson(Object({
	title       : 'Turning The Tables',
	description : "\
<p>In addition to lists, HTML provides a way to describe tables. The \
nature of tables means that the markup can get a little crowded, so \
using indentation, comments and spacing is key in keeping it organized.</p>\
<p>A table begins with the <span class='cm-tag'>&lt;table&gt;</span> tag \
containing several <span class='cm-tag'>&lt;tr&gt;</span> or \
<span class='cm-tag'>t</span>able <span class='cm-tag'>r</span>ow tags. \
Each row contains several <span class='cm-tag'>&lt;td&gt;</span> or \
<span class='cm-tag'>t</span>able <span class='cm-tag'>d</span>etail tags -- \
each of which goes into its own column.</p>\
<p>A table has as many columns as the the row with the most column has. So if \
one row has 5 <span class='cm-tag'>&lt;td&gt;</span> tags, and another has \
only 3, then the table will have 5 columns. Rows with fewer than those 5 columns \
would just have empty cells at the end.</p>\
<p>You can label columns by using <span class='cm-tag'>&lt;th&gt;</span> or \
<span class='cm-tag'>t</span>able <span class='cm-tag'>h</span>eader tags \
instead of <span class='cm-tag'>&lt;td&gt;</span>. They are typically \
rendered as bold-faced, but they have the semantic meaning of being column \
headers. Add an item to the list of expenses.</p>",

	input       : "\
<!-- Alright, we begin our table -->\n\
<table>\n\
  <!-- This is our first row -->\n\
  <tr>\n\
    <!-- These are not normal elements, but they're headers -->\n\
    <th>What</th>\n\
    <th>How much?</th>\n\
  </tr>\n\
  \n\
  <!-- This is the first item we have -->\n\
  <tr>\n\
    <!-- Columns 1, 2, and 3 -->\n\
    <td>Mountain Dew</td>\n\
    <td>$50</td>\n\
  </tr>\n\
  \n\
  <!-- This is the second item we have -->\n\
  <tr>\n\
    <td>Cheetos</td>\n\
    <td>$20</td>\n\
  </tr>\n\
  \n\
  <!-- Put your new item here -->\n\
</table>\n\
\n\
<!-- This is just to help show the elements of the table -->\n\
<style>\n\
td, th {\n\
  border: dotted 1px black;\n\
}\n\
</style>",
	
	solution    : "\
<!-- Alright, we begin our table -->\n\
<table>\n\
  <!-- This is our first row -->\n\
  <tr>\n\
    <!-- These are not normal elements, but they're headers -->\n\
    <th>What</th>\n\
    <th>How much?</th>\n\
  </tr>\n\
  \n\
  <!-- This is the first item we have -->\n\
  <tr>\n\
    <!-- Columns 1, 2, and 3 -->\n\
    <td>Mountain Dew</td>\n\
    <td>$50</td>\n\
  </tr>\n\
  \n\
  <!-- This is the second item we have -->\n\
  <tr>\n\
    <td>Cheetos</td>\n\
    <td>$20</td>\n\
  </tr>\n\
  \n\
  <tr>\n\
    <td>Skittles</td>\n\
    <td>$30</td>\n\
  </tr>\n\
</table>\n\
\n\
<!-- This is just to help show the elements of the table -->\n\
<style>\n\
td, th {\n\
  border: dotted 1px black;\n\
}\n\
</style>",

	pass        : [],
	
	fail        : [],
	
	valid       : function(input) {
		var item = $(input);
		return item.find('tr').length > 3 && item.find('tr td').length >= 6;
	}
}));