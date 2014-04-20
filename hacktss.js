
//add the following tow line to your alloy.js
//Alloy.Globals.L = L; 
//var L = require('hacktss').hackL;

var _L = _L ? _L : Alloy.Globals.L;

var hackL = function(s) {
	if (arguments[0]===null) {
		return eval(arguments[1]);
	} else {
		_L.apply(null, arguments);
	}
};

exports.hackL = hackL;
