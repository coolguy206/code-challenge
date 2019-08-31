module.exports = function(grunt) {

  // Default task(s).
  grunt.registerTask('hello', function() {
    console.log('hello world from Grunt!');
  });

  require('load-grunt-tasks')(grunt);

  // require('load-grunt-config')(grunt);

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },

      default: {
        files: ['html/*.html', 'css/*.less', 'js/*.js'],
        tasks: ['less', 'includes'],
      }
    },
    less: {
      options: {
        // sourceMap: true,
        compress: true,
      },

      default: {
        expand: true,
        cwd: 'css/',
        src: '*.less',
        dest: 'css/output',
        ext: '.css',
      },

    },
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true,
          livereload: true
        }
      }
    },
    concurrent: {
      dev: {
        target1: ['watch'],
        target2: ['connect'],
      }
    },
    nodemon: {
      dev: {
        script: 'makeFile.js'
      }
    },
  });


};