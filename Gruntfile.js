module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        apps: 'apps/*/*.js',
        appslist : {
            manifest: {},
            filepath: './core/applist.json'
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
            apps: '<% apps %>',
            gruntfile: {
                src: 'Gruntfile.js'
            },
            tasks: '<% tasks %>'
        }
    });
    
    // Default task(s).
    grunt.task.loadTasks('tasks');
    grunt.registerTask('default', ['appslist']);

    //Load prepackaged tasks 
    grunt.loadNpmTasks('grunt-contrib-jshint');
};