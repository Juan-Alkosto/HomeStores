module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            main: {
                options: {
                    ieCompat: false,
                    sourceMap: true,
                    sourceMapURL: '/',
                    compress: true,
                },
                files: [
                    {'dist/css/styles.css': 'less/styles.less'},
                ]
            }
        },
        watch: {
            files: ["less/**/*.less"],
            //tasks: ["less"],
            tasks: ["less:main"]
        },
    });
    grunt.loadNpmTasks('grunt-mustache-html');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', []);
    grunt.registerTask('lessy', ['less']);
};
