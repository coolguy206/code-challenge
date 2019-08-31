module.exports = function(grunt) {
  return {
    options: {
      compress: true,
      // sourceMap: true
    },

    navRedesignScripts: {
      //dynamic files
      expand: true,
      cwd: 'nav-redesign/<%= nav.folder %>/js',
      src: ['*.js'],
      dest: 'nav-redesign/<%= nav.folder %>/js/output/',
      ext: '.min.js',
    },

    globalJS: {
      //dynamic files
      expand: true,
      cwd: 'global/<%= global.name %>/js',
      src: ['*.js'],
      dest: 'global/<%= global.name %>/js/output/',
      ext: '.min.js',
    },

    landingPagesScripts: {
      //dynamic files
      expand: true,
      cwd: 'landing-page/<%= landing.name %>/<%= landing.date %>/js',
      src: ['*.js'],
      dest: 'landing-page/<%= landing.name %>/<%= landing.date %>/js/output/',
      ext: '.min.js',
    },

    contentCellScripts: {
      //dynamic files
      expand: true,
      cwd: 'content-cell/<%= cell.name %>/<%= cell.date %>/js',
      src: ['*.js'],
      dest: 'content-cell/<%= cell.name %>/<%= cell.date %>/js/output/',
      ext: '.min.js',
    }
  }
};