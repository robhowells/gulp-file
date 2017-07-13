/**
* Image tasks
* ----------------
* 
*/

const images = (base, paths, config, gulp, plugins) => {
	return () => {
		gulp.src(paths.images.src)
		.pipe(plugins.newer(paths.images.dist))
		.pipe(plugins.imagemin(config.images))
		.pipe(gulp.dest(paths.images.dist));
	}
}

module.exports = images;
