module.exports = function(grunt) {

  require("jit-grunt")(grunt);
  require("time-grunt")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    // kompilace SASS
    sass: {
      dev: {
        options: { outputStyle: "compressed" },
        files: { "assets/css/style.min.css": "assets/scss/style.scss" }
      }
    },

    // autoprefixer
    autoprefixer: {
      dist: {
        options: { browsers: ['> 4% in CZ'] },
        files: { 'assets/css/style.min.css': 'assets/css/style.min.css' }
      }
    },

    watch: {
      sass: {
        options: { atBegin: true },
        files: ["**/**/*.scss", "gruntfile.js"],
        tasks: ["sass:dev"]
      }
    }
  });

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("makecss", ["sass:dev", "autoprefixer"]);
}
