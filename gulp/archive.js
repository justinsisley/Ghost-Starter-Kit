var gulp = require('gulp');
var UglifyJS = require('uglify-js');
var fs = require('fs');
var exec = require('child_process').exec;

gulp.task('archive', ['less', 'jshint', 'browserify-nowatch'], function() {
    var result = UglifyJS.minify('assets/js/main.js');
    fs.writeFileSync('assets/js/main.js', result.code, {encoding: 'utf8'});

    var packageJSON = JSON.parse(fs.readFileSync('package.json', {encoding: 'utf8'}));
    var version = packageJSON.version;

    var commands = [
        'zip -r ./dist/v' + version + '.zip ./',
        '-x "*node_modules*"',
        '-x "*gulp*"',
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