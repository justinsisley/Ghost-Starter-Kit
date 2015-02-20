var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var csslint = require('gulp-csslint');
var minifyCSS = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var beep = require('beepbeep');

function handleError(err) {
    var message = err.plugin + ': ' + err.message;
    console.warn(gutil.colors.red(message));
    beep();
}

gulp.task('csslint', function() {
    gulp.src('less/master.less')
        .pipe(less().on('error', handleError))
        .pipe(csslint('.csslintrc'))
        .pipe(csslint.reporter());
});

gulp.task('less-compile', function() {
    gulp.src(['less/vendor.less', 'less/master.less'])
        .pipe(concat('master.css'))
        .pipe(less().on('error', function() {
            // Intentional no-op, since the csslint
            // task will report any errors first
        }))
        .pipe(prefix())
        .pipe(minifyCSS({keepSpecialComments: 0}))
        .pipe(gulp.dest('assets/css'))
        .pipe(livereload());
});

gulp.task('less', function() {
    runSequence('csslint', 'less-compile');
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

gulp.task('default', ['less'], function() {
    livereload.listen(35731);

    gulp.watch('less/**/*.less', ['less']);
});