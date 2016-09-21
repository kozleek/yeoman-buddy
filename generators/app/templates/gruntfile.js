module.exports = function(grunt) {

    require("jit-grunt")(grunt);
    require("time-grunt")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // kompilace LESS souboru
        less: {
          dist: {
            options: {
                compress: true
            },
            files: {
                'assets/css/style.css': 'assets/less/style.less'
            }
          }
        },

        // pravidla pro automatickou kompilaci
        watch: {
            less: {
                files: ["**/**/*.less", "gruntfile.js"],
                tasks: ["less"],
                options: { atBegin: true }
            }
        }
    });

    grunt.registerTask("default", ["watch:less"]);
}
