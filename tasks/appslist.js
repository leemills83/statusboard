module.exports = function(grunt) {
    grunt.registerTask('appslist', 'Generate list of applications.', function() {
        var applist = []
            config = grunt.config('appslist'),
            writeToFile = function() {

                try {
                    config.manifest.apps = applist;
                    grunt.file.write(config.filepath, JSON.stringify(config.manifest));
                }
                catch (e) {
                    grunt.fail.warn(e);
                }

            };

        // read all subdirectories from the apps folder
        grunt.file.expand("./apps/*/").forEach(function (dir) {
            var app = dir.split('/')[2],
                manifest;

            if (grunt.file.exists(dir+'core.js') && (grunt.file.exists(dir+'manifest.json'))) {
                manifest = require('../apps/'+ app +'/manifest.json');

                console.log('Adding '+ manifest.appname +' to application list');
                applist.push(manifest);
            } else {
                return grunt.fail.warn('Application '+ app +' not added to app list');
            }
        })
        writeToFile();
    });
};