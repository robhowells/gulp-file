module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(paths.scripts.src)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(config.isProduction ? plugins.uglify() : plugins.util.noop())
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest(paths.scripts.dist));
	};
};