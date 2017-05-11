module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(paths.html.src)
		.pipe(config.isProduction ? plugins.htmlmin(config.htmlMin) : plugins.util.noop())
		.pipe(gulp.dest(paths.html.dist))
	};
};