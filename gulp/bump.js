var gulp = require('gulp');
var bump = require('gulp-bump');

function bump(type) {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(bump({type: type}))
        .pipe(gulp.dest('./'));
}

gulp.task('bump', function() {
    return bump('patch');
});

gulp.task('bump-minor', function() {
    return bump('minor');
});

gulp.task('bump-major', function() {
    return bump('major');
});