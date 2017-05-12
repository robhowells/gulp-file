/**
* Server tasks
* ----------------
* Initiates local webserver in dist directory
*/

module.exports = function (base, paths, config, gulp, plugins, del) {
	return function () {
		gulp.src(base.dist)
		.pipe(plugins.webserver(config.server));
	};
};