module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(paths.styles.src)
		.pipe(!config.isProduction ? plugins.sassLint(config.sassLint) : plugins.util.noop())
		.pipe(!config.isProduction ? plugins.sassLint.format() : plugins.util.noop())
		.pipe(!config.isProduction ? plugins.sassLint.failOnError() : plugins.util.noop())
		.pipe(!config.isProduction ? plugins.sourcemaps.init() : plugins.util.noop())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer(config.autoprefixer))
		.pipe(!config.isProduction ? plugins.sourcemaps.write() : plugins.util.noop())
		.pipe(config.isProduction ? plugins.csscomb() : plugins.util.noop())
		.pipe(config.isProduction ? plugins.cssnano() : plugins.util.noop())
		.pipe(plugins.concat('style.css'))
		.pipe(gulp.dest(paths.styles.dist));
	};
};