includes: {

  options: {
    flatten: true
  },

  default: {

    files: [{
      cwd: '',
      src: ['html/index.html'],
      dest: 'index.html',
    }, ],

  },

  grunt: {
    files: [{
      cwd: '',
      src: ['the-Gruntfile.js'],
      dest: 'Gruntfile.js',
    }, ],

  },

},