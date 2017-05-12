/**
* Set up & configuration
* ----------------
* Gulp packages
* Top level dev and dist directories
* Lower level file paths
* Plugin configurations
*/

var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	del = require('del'),
	runSequence = require('run-sequence');

var base = {
	src: './src/',
	dist: './dist/'
};

var paths = {
	html: {
		src: base.src + '**/*.html',
		dist: base.dist
	},
	styles: {
		src: base.src + 'scss/**/*.scss',
		dist: base.dist + 'css/'
	},
	scripts: {
		src: [base.src + 'js/vendors/*.js', base.src + 'js/components/*.js', base.src + 'js/*.js'],
		dist: base.dist + 'js/'
	},
	images: {
		src: base.src + 'img/**/*.{jpg,jpeg,png,gif}',
		dist: base.dist + 'img/'
	}
};

var config = {
	htmlMin: {
		collapseWhitespace: true
	},
	sassLint: {
		rules: {
			'no-warn': 0,
			'no-ids': 1,
			'indentation': 0,
			'no-css-comments': 0,
			'property-sort-order': 0,
			'mixins-before-declarations': 0,
			'empty-line-between-blocks': 0,
			'no-mergeable-selectors': 0
		}
	},
	autoprefixer: {
		browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
	},
	images: {
		options: {
			optimizationLevel: 3,
			progessive: true,
			interlaced: true
	    }
	},
	server: {
		livereload: true,
		directoryListing: false,
		open: true
	}
};

/**
* Helper functions
* ----------------
* Gets task groups from /gulp-tasks/ folder
*/

function getTask(task) {
    return require('./gulp-tasks/' + task)(base, paths, config, gulp, plugins, del);
}

/**
* Task groups
* ----------------
* Run via 'gulp dev' (development) or 'gulp build' (production) 
* See /gulp-tasks/ folder for task group contents
*/

gulp.task('html', getTask('html'));
gulp.task('styles', getTask('styles'));
gulp.task('scripts', getTask('scripts'));
gulp.task('images', getTask('images'));
gulp.task('server', getTask('server'));
gulp.task('clean', getTask('clean'));

/**
* Development mode
* ----------------
* Sets production flag to false
* Watches for file changes in dev directory
* Compiles debug-friendly code into dist directory
* Initiates server in dist directory
*/

gulp.task('dev', ['server'], function() {
	config.isProduction = false;
	gulp.watch(paths.html.src, ['html']);
	gulp.watch(paths.styles.src, ['styles']);
	gulp.watch(paths.scripts.src, ['scripts']);
	gulp.watch(paths.images.src, ['images']);
});

/**
* Production mode
* ----------------
* Sets production flag to true
* Empties dev directory
* Compiles production-ready code into dist directory
*/

gulp.task('build', function() {
	config.isProduction = true;
	runSequence('clean', 
		['html', 'styles', 'scripts', 'images']
	)
});
