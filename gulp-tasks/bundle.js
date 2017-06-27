/**
* Script bundle tasks
* ----------------
* Bundles scripts 
* Minifies scripts (production only)
*/

module.exports = function (base, paths, config, gulp, plugins, del, browserify, source, buffer) {
	return function () {
		browserify('./' + base.temp +'/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest(paths.scripts.dist));
	};
};
