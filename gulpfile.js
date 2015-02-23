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
var concat = require('gulp-concat');
var beep = require('beepbeep');

function onTaskError(err) {
    var message = err.plugin + ': ' + err.message;
    console.warn(gutil.colors.red(message));
    return beep();
}

function onStreamError() {
    return map(function(file, cb) {
        if (file.jshint && !file.jshint.success) {beep();}
        if (file.csslint && !file.csslint.success) {beep();}

        cb(null, file);
    });
}

gulp.task('csslint', function() {
    return gulp.src('less/master.less')
        .pipe(less().on('error', onTaskError))
        .on('error', function() {
            // A LESS parse error would break the watch task.
            // This saves the day by abandoning the rest of
            // the task and moving on if there's a parse error.
            this.emit('end');
        })
        .pipe(csslint('.csslintrc'))
        .pipe(onStreamError())
        .pipe(csslint.reporter());
});

gulp.task('less-compile', function() {
    return gulp.src(['less/vendor.less', 'less/master.less'])
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
        .pipe(cache('linting'))
        .pipe(jshint())
        .pipe(onStreamError())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(livereload());
});

gulp.task('es6-compile', function() {});

gulp.task('javascript', function() {
    return runSequence('jshint', 'es6-compile');
});

gulp.task('pre-sale', function() {
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