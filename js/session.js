/* This is a mechanism for storing and retrieving data
 * in either localdata if it's available, or otherwise
 * in cookies. Oh, and all data is json-encoded
 */

var Session = Object({
	localStorage : window.localStorage,
	
	_setCookie : function(key, value, days) {
		/* Grace a http://www.quirksmode.org/js/cookies.html */
		var expires = '';
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = '; expires=' + date.toGMTString();
		}
		document.cookie = key + "=" + escape(value) + '; path=/' + expires;
	},
	
	/* Get a specified key's value */
	get : function(key) {
		if (Session.localStorage) {
			var s =  localStorage.getItem(key);
			if (s != null) {
				return JSON.parse(s);
			} else {
				return null;
			}
		} else {
			return Session.all()[key];
		}
	},
	
	/* Set a specified key */
	set : function(key, value) {
		if (Session.localStorage) {
			return localStorage.setItem(key, JSON.stringify(value));
		} else {
			return Session._setCookie(key, JSON.stringify(value));
		}
	},
	
	/* Delete / unset a key */
	unset : function(key) {
		if (Session.localStorage) {
			return localStorage.removeItem(key);
		} else {
			Session._setCookie(key, '', -1);
		}
	},
	
	/* Get all keys */
	keys : function() {
		if (Session.localStorage) {
			var results = [];
			for (var index = 0; index < localStorage.length; index++) {
				results.push(localStorage.key(index));
			}
			return results;
		} else {
			var results = [];
			for (var key in Session.all()) {
				results.push(key);
			}
			return results;
		}
	}, 
	
	/* Get all key / value pairs */
	all : function() {
		if (Session.localStorage) {
			var results = {};
			for (var index = 0; index < localStorage.length; index++) {
				var key = localStorage.key(index);
				results[key] = JSON.parse(localStorage.getItem(key));
			}
			return results;
		} else {
			var results = {};
			var split = document.cookie.split(';');
			for (var i = 0; i < split.length; i++) {
				var c = split[i].replace(/^\s*/, '');
				var eq = c.indexOf('=');
				if (eq >= 0) {
					results[c.substring(0, eq)] = JSON.parse(unescape(c.substring(eq + 1)));
				}
			}
			return results;
		}
	},
	
	clear : function() {
		var keys = Session.keys();
		for (var index in keys) {
			Session.unset(keys[index]);
		}
	}
});