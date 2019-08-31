module.exports = function(grunt) {
  return {
    options: {
      //sourceMap:true,
    },

    default: {
      files: {
        'index.html': ['header.html', 'content.html', 'footer.html'],
      }
    },

  }
};