var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');
var gulpif = require('gulp-if');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var runSequence = require('run-sequence');
var errors = require('./errors');
var fs = require('fs');
var watch;

function browserifyBuild(options) {
    var b = browserify({
        cache: {},
        packageCache: {},
        fullPaths: false,
        debug: options.debug
    }).transform(babelify);

    if (watch) {
        b = watchify(b);
        
        b.on('update', function(){
            browserifyBundle(b);
        });
    }
  
    b.add('./js/main.js');
    
    return browserifyBundle(b);
}

function browserifyBundle(b) {
    return b.bundle()
        .on('error', errors.onTaskError)
        .pipe(source('main.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(livereload());
}

gulp.task('browserify-nowatch', function() {
    watch = false;

    return browserifyBuild({debug: false});
});

gulp.task('browserify-watch', function() {
    watch = true;

    return browserifyBuild({debug: true});
});

gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
        .pipe(cache('jshint'))
        .pipe(jshint())
        .pipe(errors.onStreamError())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(livereload());
});