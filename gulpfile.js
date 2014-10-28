var gulp = require('gulp');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var eslint = require('gulp-eslint');

var files = {
	js: 'src/*.js'
};

gulp.task('jscs', function () {
	return gulp.src(files.js)
		.pipe(jscs());
});

gulp.task('jshint', function() {
	return gulp.src(files.js)
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('eslint', function () {
	return gulp.src(files.js)
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('lint', ['jscs', 'jshint', 'eslint']);