/**
* Server tasks
* ----------------
* Initiates local webserver in dist directory
*/

const server = (base, paths, config, gulp, plugins) => {
	return () => {
		gulp.src(base.dist)
		.pipe(plugins.webserver(config.server));
	}
}

module.exports = server;
