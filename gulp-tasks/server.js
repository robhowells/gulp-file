/**
* Server tasks
* ----------------
* Initiates local webserver in dist directory
*/

module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(base.dist)
		.pipe(plugins.webserver(config.server));
	};
};