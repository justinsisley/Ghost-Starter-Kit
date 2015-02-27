var gulp = require('gulp');
var bump = require('gulp-bump');

gulp.task('bump', function() {
    return gulp.src(['./package.json'])
            .pipe(bump({type: 'patch'}))
            .pipe(gulp.dest('./'));
});

gulp.task('bump-minor', function() {
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'minor'}))
        .pipe(gulp.dest('./'));
});

gulp.task('bump-major', function() {
    return gulp.src(['./package.json'])
        .pipe(bump({type: 'major'}))
        .pipe(gulp.dest('./'));
});