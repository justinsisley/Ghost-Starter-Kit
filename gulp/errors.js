var gutil = require('gulp-util');
var map = require('map-stream');
var beep = require('beepbeep');

// Error handler that beeps on a single task
// failure or a parse error.
function onTaskError(err) {
    var plugin = err.plugin ? err.plugin + ': ' : '';
    var message = err.message;

    console.warn(gutil.colors.red(plugin + message));
    
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

module.exports = {
    onTaskError: onTaskError,
    onStreamError: onStreamError
};