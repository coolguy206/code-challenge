module.exports = function(grunt) {

    // Default task(s).
    grunt.registerTask('hello', function() {
        console.log('hello world from Grunt!');
    });

    require('load-grunt-tasks')(grunt);

    // require('load-grunt-config')(grunt);

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['@babel/preset-env']
            },

            default: {
                files: [{
                    expand: true,
                    cwd: 'js/',
                    src: '*.js',
                    dest: 'js/babel/'
                }]
            },
        },

        uglify: {
            options: {
                compress: true,
                // sourceMap: true
            },

            default: {
                //dynamic files
                expand: true,
                cwd: 'js/browserify/',
                src: ['*.js'],
                dest: 'js/uglify/',
                ext: '.min.js',
            },
        },

        browserify: {
            default: {
                files: [{
                    expand: true,
                    cwd: 'js/babel',
                    src: '*.js',
                    dest: 'js/browserify'
                }]
            },

        },

        includes: {
            options: {
                // flatten: true
            },

            default: {
                files: [{
                    cwd: '',
                    src: ['html/index.html'],
                    dest: 'index.html',
                }, ],

            },
        },

        watch: {
            options: {
                livereload: true
            },

            default: {
                files: ['html/*.html', 'css/*.less', 'js/*.js'],
                tasks: ['less', 'babel', 'browserify', 'uglify', 'includes'],
            }
        },
        less: {
            options: {
                // sourceMap: true,
                // compress: true,
            },

            default: {
                expand: true,
                cwd: 'css/',
                src: '*.less',
                dest: 'css/less',
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