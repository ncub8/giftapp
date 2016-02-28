module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['dist/**'],
        copy: {
            main: {
                files: [
                    {expand: true, src: ['*'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['bin/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['config/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['models/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['passport/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['public/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['routes/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['scripts/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['utils/**'], dest: 'dist/', filter: 'isFile'},
                    {expand: true, src: ['views/**'], dest: 'dist/', filter: 'isFile'}
                ]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'dist/public/javascripts/giftapp.js': ['dist/public/javascripts/giftapp.js'],
                    'dist/public/javascripts/controllers/dashMainController.js': ['dist/public/javascripts/controllers/dashMainController.js'],
                    'dist/public/javascripts/controllers/giftappFormController.js': ['dist/public/javascripts/controllers/giftappFormController.js'],
                    'dist/public/javascripts/services/giftlistFactory.js': ['dist/public/javascripts/services/giftlistFactory.js']
                }
            }
        },
        htmlmin:{
            options: {
                removeComments: true,
                colapseWhitespace: true
            },
            dist: {
                files: {
                    'dist/public/templates/dash-add.tpl.html': 'dist/public/templates/dash-add.tpl.html',
                    'dist/public/templates/dash-main.tpl.html': 'dist/public/templates/dash-main.tpl.html'
                }
            }
        }

    });

    //load the task plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    //register the default task
    grunt.registerTask('default', ['clean','copy','uglify','htmlmin']);

};
