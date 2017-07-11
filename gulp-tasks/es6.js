/**
* Scripts ES6 tasks
* ----------------
* Checks for script errors
* Transpiles ES6 code to ES5
* Outputs script files into temp directory
*/

module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(paths.scripts.src)
		.pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.babel())
        .pipe(gulp.dest('.tmp'));
	};
};
