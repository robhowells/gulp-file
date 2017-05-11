// Packages
var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')(),
	del = require('del'),
	runSequence = require('run-sequence');

// Top level dev and production directories
var base = {
	src: './src/',
	dist: './dist/'
};

// Lower level folder paths
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

// Configuration for plugins
var config = {
	isProduction: plugins.util.env.type === 'production',
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

// Helper function to get tasks from /gulp-tasks/ folder
function getTask(task) {
    return require('./gulp-tasks/' + task)(base, paths, config, gulp, plugins);
}

// Core automation tasks
gulp.task('html', getTask('html'));
gulp.task('styles', getTask('styles'));
gulp.task('scripts', getTask('scripts'));
gulp.task('images', getTask('images'));
gulp.task('server', getTask('server'));

// Initiates a server and watches for file changes
gulp.task('watch', ['server'], function() {
	gulp.watch(paths.styles.src, ['styles']);
	gulp.watch(paths.scripts.src, ['scripts']);
	gulp.watch(paths.images.src, ['images']);
	gulp.watch(paths.html.src, ['html']);
});

// Empties production directory
gulp.task('clean', function() {
    return del.sync(base.dist);
});

// Builds code into production directory
// Run 'gulp build --type production' for a production-ready build
gulp.task('build', function() {
	runSequence('clean', 
		['html', 'styles', 'scripts', 'images']
	)
});