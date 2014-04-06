module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        blocks: 'blocks/*/*.js',
        blocklist : {
            manifest: {},
            filepath: './core/blocklist.json'
        },
        pkg: grunt.file.readJSON('package.json'),
        tasks: 'tasks/*.js',
        jshint: {
            "curly": true,
            "eqnull": true,
            "eqeqeq": true,
            "undef": true,
            "globals": {
                "jQuery": true
            },
            blocks: '<% blocks %>',
            gruntfile: {
                src: 'Gruntfile.js'
            },
            tasks: '<% tasks %>'
        }
    });
    
    // Default task(s).
    grunt.task.loadTasks('tasks');
    grunt.registerTask('default', ['blocklist']);

    //Load prepackaged tasks 
    grunt.loadNpmTasks('grunt-contrib-jshint');
};