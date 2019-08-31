module.exports = function(grunt) {

  // Default task(s).
  grunt.registerTask('hello', function() {
    console.log('hello world from Grunt!');
  });

  require('load-grunt-tasks')(grunt);

  // require('load-grunt-config')(grunt);

  grunt.initConfig({
    include "grunt/watch.js"
    include "grunt/less.js"
    include "grunt/connect.js"
    include "grunt/concurrent.js"
    include "grunt/nodemon.js"
  });


};