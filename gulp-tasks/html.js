/**
* HTML tasks
* ----------------
* Minifies HTML (production only)
* Copies HTML files into dist directory
*/

module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(paths.html.src)
		.pipe(plugins.if(config.isProduction, plugins.htmlmin(config.htmlMin)))
		.pipe(gulp.dest(paths.html.dist))
	};
};