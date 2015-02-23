var gulp = require('gulp');
var gutil = require('gulp-util');
var map = require('map-stream');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var cache = require('gulp-cached');
var less = require('gulp-less');
var csslint = require('gulp-csslint');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var beep = require('beepbeep');
var rimraf = require('rimraf');

// Error handler for single task failure or a
// parse error.
function onTaskError(err) {
    var message = err.plugin + ': ' + err.message;
    console.warn(gutil.colors.red(message));
    this.emit('end');
    beep();
}

// Error handler that beeps on linting errors
function onStreamError() {
    return map(function(file, cb) {
        if (file.jshint && !file.jshint.success) {beep();}
        if (file.csslint && !file.csslint.success) {beep();}
        cb(null, file);
    });
}

gulp.task('delete-temp', function() {
    return rimraf('tmp', function() {})
});

gulp.task('csslint', function() {
    return gulp.src('less/master.less')
        .pipe(less().on('error', onTaskError))
        .pipe(cache('csslint'))
        .on('error', onTaskError)
        .pipe(csslint('.csslintrc'))
        .pipe(onStreamError())
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

gulp.task('jshint', function() {
    return gulp.src('js/**/*.js')
        .pipe(cache('jshint'))
        .pipe(jshint())
        .pipe(onStreamError())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(livereload());
});

gulp.task('es6-compile', function() {
    return gulp.src('js/**/*.js')
        .pipe(cache('es6-compile'))
        .pipe(babel().on('error', onTaskError))
        .pipe(gulp.dest('tmp/js'));
});

gulp.task('browserify', function() {
    return gulp.src('tmp/js/main.js')
        .pipe(cache('browserify'))
        .pipe(browserify({insertGlobals: true}).on('error', onTaskError))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'))
        .pipe((function() {
            livereload.changed('assets/js/main.js');

            return map(function(file, cb) {
                cb(null, file);
            });
        })());
});

gulp.task('javascript', function() {
    return runSequence('jshint', 'es6-compile', 'browserify', 'delete-temp');
});

gulp.task('release', function() {
    // Should make a copy of all files and
    // folders, minus bower_components,
    // node_modules, js, less, .csslintrc,
    // .gitignore, .git, bower.json, gulpfile.js
    // then automatically zip up the remaining
    // files and folders, naming the zip file
    // "{theme name}_{version}.zip" using the package.json
    // version as the version tag. Bump the version
    // in package.json and bower.json
});

gulp.task('default', ['less', 'javascript'], function() {
    livereload.listen(35731);

    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('js/**/*.js', ['javascript']);
});