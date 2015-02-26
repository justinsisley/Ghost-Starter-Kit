var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var errors = require('./errors');
var watch;

function browserifyBuild(options) {
    var b = browserify({
        cache: {},
        packageCache: {},
        fullPaths: true,
        debug: options.debug
    }).transform(babelify);

    if (watch) {
        b = watchify(b);
        
        b.on('update', function(){
            browserifyBundle(b);
        });
    }
  
    b.add('./js/main.js');
    browserifyBundle(b);
}

function browserifyBundle(b) {
    b.bundle()
        .on('error', errors.onTaskError)
        .pipe(source('main.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(livereload());
}

gulp.task('browserify-nowatch', function() {
    watch = false;
    browserifyBuild({debug: false});
});

gulp.task('browserify-watch', function() {
    watch = true;
    browserifyBuild({debug: true});
});

gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
        .pipe(cache('jshint'))
        .pipe(jshint())
        .pipe(errors.onStreamError())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(livereload());
});