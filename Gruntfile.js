module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            public: {
                cwd: 'public',
                src: '**',
                dest: 'dist',
                expand: true
            }
        },
        clean: {
            dist: {
                src: 'dist'
            }
        },
        useminPrepare:{
            html: 'dist/**/*.html'
        },
        usemin: {
            html: 'dist/**/*.html'
        },
        imagemin: {
            public: {
                expand: true,
                cwd: 'dist/img',
                src: '**/*.{png,jpg,gif}',
                dest: 'dist/img'
            }
        }

    });
    //registrando task para minificacao
    grunt.registerTask('dist', ['clean', 'copy']);

    grunt.registerTask('minifica', ['useminPrepare',
        'concat', 'uglify', 'cssmin', 'usemin', 'imagemin']);

    // registrando tasks
    grunt.registerTask('default', ['dist', 'minifica']);


    // carregando tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
};