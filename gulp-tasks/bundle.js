/**
* Script bundle tasks
* ----------------
* Bundles scripts
* Minifies scripts (production only)
*/

const bundle = (base, paths, config, gulp, plugins, del, browserify, source, buffer) => {
	return () => {
		browserify(`${base.temp}/app.js`)
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(plugins.if(config.isProduction, plugins.uglify()))
		.pipe(gulp.dest(paths.scripts.dist));
	}
}

module.exports = bundle;
