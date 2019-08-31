module.exports = function(grunt) {

  return {

    options: {
      // sourcemap: 'none',
      style: 'compressed',
      // lineNumbers:true,
    },

    global: {
      expand: true,
      cwd: 'css/global',
      src: '*.scss',
      dest: 'css/output',
      ext: '.css',
    },

    modular: {
      expand: true,
      cwd: 'css/modular',
      src: '*.scss',
      dest: 'css/output',
      ext: '.css',
    },

    pages: {
      expand: true,
      cwd: 'css/pages',
      src: '*.scss',
      dest: 'css/output',
      ext: '.css',
    },

  }
};
