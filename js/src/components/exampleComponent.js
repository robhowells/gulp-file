var exampleComponent = function () {
	"use strict";

	var init = function() {
		var testArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

		for(var i = 0; i < testArray.length; i+=1) {
			return i;
		} 		
	}; 

	return {
		init: init
	};

}();