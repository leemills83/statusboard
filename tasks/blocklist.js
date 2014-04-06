module.exports = function(grunt) {
    
    grunt.registerTask('blocklist', 'Generate list of blocks.', function() {
        var blocklist = [],
            config = grunt.config('blocklist'),
            writeToFile = function() {

                try {
                    config.manifest.blocks = blocklist;
                    grunt.file.write(config.filepath, JSON.stringify(config.manifest));
                }
                catch (e) {
                    grunt.fail.warn(e);
                }

            };

        // read all subdirectories from the blocks folder
        grunt.file.expand("./blocks/*/").forEach(function (dir) {
            var block = dir.split('/')[2],
                manifest;

            if (grunt.file.exists(dir+'core.js') && (grunt.file.exists(dir+'manifest.json'))) {
                manifest = require('../blocks/'+ block +'/manifest.json');

                console.log('Adding '+ manifest.blockname +' to application list');
                blocklist.push(manifest);
            } else {
                return grunt.fail.warn('Application '+ block +' not added to block list');
            }
        })
        writeToFile();
    });
};