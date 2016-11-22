var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'), 
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	csscomb = require('gulp-csscomb'),
	sasslint = require('gulp-sass-lint'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	paths = {
		js: {
			src: ['./js/src/vendors/*.js', './js/src/components/*.js', './js/src/*.js'],
			dist: './js/dist',
			lint: ['./js/src/components/*.js', './js/src/*.js']
		},
		sass: {
			src: './scss/**/*.scss',
			dist: './css',
			lint: ['./scss/base/**/*.scss', './scss/global/**/*.scss', './scss/layout/**/*.scss']
		},
		img: {
	        src: './img/src/**/*.{jpg,jpeg,png,gif,svg,PNG,JPG,JPEG,PNG,GIF,SVG}',
	        dist: './img/'
	    }
	},
	config = {
		autoprefixer: {
			browsers: ['last 2 versions', '> 5%', 'Firefox ESR', 'ie 9']
		},
		img: {
			options: {
		      optimizationLevel: 3,
		      progessive: true,
		      interlaced: true
		    }
		}
	};

gulp.task('sass:lint', function() {
  return gulp.src(paths.sass.lint)
    .pipe(sasslint({
    	rules: {
    		'no-warn': 0,
        	'no-ids': 1,
        	'indentation': 0,
        	'no-css-comments': 0,
        	'property-sort-order': 0,
        	'mixins-before-declarations': 0,
        	'empty-line-between-blocks': 0,
        	'no-mergeable-selectors': 0,
        	'no-color-literals': 0
		},
    }))
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
});

gulp.task('sass:dev', function() {
	return gulp.src(paths.sass.src)
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(cleanCSS({debug: true}, function(details) {
			console.log('Original size of ' + details.name + ': ' + details.stats.originalSize + 'kb');
			console.log('Minified size of ' + details.name + ': ' + details.stats.minifiedSize + 'kb');
		}))
		.pipe(gulp.dest(paths.sass.dist));
		
});

gulp.task('sass:build', function() {
	return gulp.src(paths.sass.src)
		.pipe(plumber({
			handleError: function (err) {
				console.log(err);
				this.emit('end');
			}
		}))
		.pipe(sass())
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(csscomb())
		.pipe(concat('style.min.css'))
		.pipe(cleanCSS({debug: true}, function(details) {
			console.log('Original size of ' + details.name + ': ' + details.stats.originalSize + 'kb');
			console.log('Minified size of ' + details.name + ': ' + details.stats.minifiedSize + 'kb');
		}))
		.pipe(gulp.dest(paths.sass.dist));
		
});

gulp.task('js:lint', function() {
	return gulp.src(paths.js.lint)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
});

gulp.task('js:dev', function() {
	return gulp.src(paths.js.src)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(paths.js.dist))
});

gulp.task('js:build', function() {
	return gulp.src(paths.js.src)
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.dist))
});

gulp.task('img:min', function() {
	return gulp.src(paths.img.src)
		.pipe(imagemin(config.img))
		.pipe(gulp.dest(paths.img.dist));
});

gulp.task('watch', function() {
	gulp.watch(paths.js.src, ['js:lint'], ['js:dev']);
	gulp.watch(paths.sass.src, ['sass:lint', 'sass:dev']);
});

gulp.task('build', ['sass:build', 'js:build', 'img:min'], function() {});
