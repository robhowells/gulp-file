const anotherModule = require("./anotherModule.js");

class MyModule {

	init (value) {
		this.name = value;
		console.log("Code loaded from module.js");
		console.log(`Value passed in from main js file ${value}`);
		anotherModule.init("Message from anotherModule.js");
		return value * value;
	}

}

const myModule = new MyModule();

module.exports = myModule;
