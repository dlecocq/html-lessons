/* This is a mechanism for storing and retrieving data
 * in either localdata if it's available, or otherwise
 * in cookies. Oh, and all data is json-encoded
 */

var Session = Object({
	/* Get a specified key's value */
	get : function(key) {
		if (window.localStorage) {
			var s =  localStorage.getItem(key);
			if (s != null) {
				return JSON.parse(s);
			} else {
				return null;
			}
		} else {
			// Cookie-based alternative
		}
	},
	
	/* Set a specified key */
	set : function(key, value) {
		if (window.localStorage) {
			return localStorage.setItem(key, JSON.stringify(value));
		} else {
			
		}
	},
	
	/* Delete / unset a key */
	unset : function(key) {
		if (window.localStorage) {
			return localStorage.removeItem(key);
		} else {
			
		}
	},
	
	/* Get all keys */
	keys : function() {
		if (window.localStorage) {
			var results = [];
			for (var index in localStorage.length) {
				results.push(localStorage.key(index));
			}
			return results;
		}
	}
});