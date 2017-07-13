/**
* Styles tasks
* ----------------
* Lints sass (development only)
* Creates sass sourcemaps (development only)
* Compiles sass
* Autoprefixes
* Optimises format (production only)
* Minifies (production only)
* Concatenates styles into one file
* Outputs concatenated style file into dist directory
*/

const styles = (base, paths, config, gulp, plugins) => {
	return () => {
		gulp.src(paths.styles.src)
		.pipe(plugins.if(!config.isProduction, plugins.sassLint(config.sassLint)))
		.pipe(plugins.if(!config.isProduction, plugins.sassLint.format()))
		.pipe(plugins.if(!config.isProduction, plugins.sassLint.failOnError()))
		.pipe(plugins.if(!config.isProduction, plugins.sourcemaps.init()))
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer(config.autoprefixer))
		.pipe(plugins.if(!config.isProduction, plugins.sourcemaps.write()))
		.pipe(plugins.if(config.isProduction, plugins.csscomb()))
		.pipe(plugins.if(config.isProduction, plugins.cssnano()))
		.pipe(plugins.concat('style.css'))
		.pipe(gulp.dest(paths.styles.dist));
	}
}

module.exports = styles;
