/**
* Scripts tasks
* ----------------
* Checks for script errors
* Minifies scripts (production only)
* Concatenates script files into one file
* Outputs concatenated script file into dist directory
*/

module.exports = function (base, paths, config, gulp, plugins, del) {
	return function () {
		gulp.src(paths.scripts.src)
		.pipe(plugins.jshint())
		.pipe(plugins.jshint.reporter('jshint-stylish'))
		.pipe(plugins.if(config.isProduction, plugins.uglify()))
		.pipe(plugins.concat('app.js'))
		.pipe(gulp.dest(paths.scripts.dist));
	};
};