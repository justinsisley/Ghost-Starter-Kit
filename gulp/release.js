var gulp = require('gulp');
var runSequence = require('run-sequence');
var fs = require('fs');
var exec = require('child_process').exec;

gulp.task('archive', ['less', 'jshint', 'browserify-nowatch'], function() {
    var packageJSON = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
    var version = packageJSON.version;
    var commands = [
        'zip -r ./dist/v' + version + '.zip ./',
        '-x "*node_modules*"',
        '-x *gulp*',
        '-x "gulpfile.js"',
        '-x "js*"',
        '-x "less*"',
        '-x "dist*"',
        '-x ".gitignore"',
        '-x ".csslintrc"',
        '-x ".jshintrc"',
        '-x ".git*"',
        '-x "README.md"'
    ];

    try {fs.mkdirSync('dist');} catch(e) {}

    exec(commands.join(' '));
});

gulp.task('release', function() {
    runSequence('bump', 'archive');
});

gulp.task('release-minor', function() {
    runSequence('bump-minor', 'archive');
});

gulp.task('release-major', function() {
    runSequence('bump-major', 'archive');
});