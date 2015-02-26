var gulp = require('gulp');
var cache = require('gulp-cached');
var less = require('gulp-less');
var csslint = require('gulp-csslint');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var errors = require('./errors');

gulp.task('csslint', function() {
    return gulp.src('less/master.less')
        .pipe(less().on('error', errors.onTaskError))
        .pipe(cache('csslint'))
        .on('error', errors.onTaskError)
        .pipe(csslint('.csslintrc'))
        .pipe(errors.onStreamError())
        .pipe(csslint.reporter());
});

gulp.task('less-compile', function() {
    return gulp.src(['less/vendor.less', 'less/master.less'])
        .pipe(cache('less-compile'))
        .pipe(concat('master.css'))
        .pipe(less().on('error', function() {}))
        .pipe(prefix())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload());
});

gulp.task('less', function() {
    return runSequence('csslint', 'less-compile');
});