/**
* Scripts ES6 tasks
* ----------------
* Checks for script errors
* Transpiles ES6 code to ES5
* Outputs script files into temp directory
*/

const es6 = (base, paths, config, gulp, plugins) => {
	return () => {
		gulp.src(paths.scripts.src)
		.pipe(plugins.eslint())
        .pipe(plugins.eslint.format())
        .pipe(plugins.babel())
        .pipe(gulp.dest(`${base.temp}`));
	}
}

module.exports = es6;
