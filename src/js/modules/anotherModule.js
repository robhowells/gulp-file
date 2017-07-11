class AnotherModule {

	init (message) {
		this.message = message;
		console.log(message);
	}

}

const anotherModule = new AnotherModule();

module.exports = anotherModule;
