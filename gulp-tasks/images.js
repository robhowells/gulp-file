/**
* Image tasks
* ----------------
* 
*/

module.exports = function (base, paths, config, gulp, plugins) {
	return function () {
		gulp.src(paths.images.src)
		.pipe(plugins.newer(paths.images.dist))
		.pipe(plugins.imagemin(config.images))
		.pipe(gulp.dest(paths.images.dist));
	};
};