/**
* Clean tasks
* ----------------
* Empties dist directory
*/

const clean = (base, paths, config, gulp, plugins, del) => {
	return () => {
		del.sync([`${base.temp}/**`, `!${base.temp}`, `!${base.temp}/.gitkeep`, `${base.dist}/**`, `!${base.dist}`, `!${base.dist}/.gitkeep`]);
	}
}

module.exports = clean;
