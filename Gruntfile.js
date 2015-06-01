module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            'default': {
                options: {
                    style: 'expanded',
                    loadPath: ['bower_components/foundation/scss'],
                    banner: [
                        '/*!',
                        '   Alex Pate',
                        '   @alexjpate',
                        '   Last Update: ' + grunt.template.date('dd-mm-yyyy') + '',
                        '   Includes Normalize',
                        '   normalize.css v3.0.1 | MIT License | github.com/necolas/normalize.css',
                        '*/\n'
                    ].join('\n')
                },
                files: [{
                    expand: true,
                    cwd: '_assets/scss/',
                    src: ['**/*.scss'],
                    dest: '_assets/css/',
                    ext: '.css'
                }],
            },

        },

        autoprefixer: { // https://github.com/nDmitry/grunt-autoprefixer
            options: {
                browsers: ['last 20 versions']
            },
            no_dest: {
                src: '_assets/css/base.css' // output file
            }
        },

        svgmin: {
            options: {
                plugins: [
                    {
                        removeViewBox: false
                    }, {
                        removeUselessStrokeAndFill: false
                    }
                ],
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'img/svg-src/',
                        src: ['**/*.svg'],
                        dest: 'img/',
                        ext: '.svg'
                    }
                ]
            }

        },

        jekyll: {
            server : {
                src : '_layouts',
                dest: 'dev',
                server : true,
                server_port : 8000,
                auto : true
            },
            dev: {
                src: '_layouts',
                dest: '_site'
            },
            prod: {
                src: '_layouts',
                dest: 'prod'
            }
        },

        watch: {
            configFiles: {
                files: [ 'Gruntfile.js', 'config/*.js' ],
                options: {
                    reload: true
                }
            },
            css: {
                files: ['_assets/scss/**/*'],
                tasks: ['default']
            },
            // svg: {
            //     files: ['img/svg-src/**/*'],
            //     tasks: ['svgtask']
            // },
            jekyll: {
                files: [
                    '_layouts/*.html',
                    '_includes/*.html',
                    '_posts/*',
                    '_work/*',
                    'index.html',
                    'journal.html',
                    'information.html',
                    '_assets/css/base.css',
                    '404/*'
                ],
                tasks: ['jekyll:dev']
            }
        }
    });

    // Load Plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-jekyll');
    // Default task(s).
    grunt.registerTask('default', ['sass', 'autoprefixer']);
    grunt.registerTask('svgtask', ['svgmin']);
};