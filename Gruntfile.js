/*global module, require*/
module.exports = function (grunt) {
	'use strict';
	
	
	//grunt plugins
	require('load-grunt-tasks')(grunt);

	//config
	grunt.initConfig({
		ngdocs: {
			options : {
				title : "Angular CI documentation",
                titleLink : ".."
			},
			//all: ['src/vendor/ui-router/src/*.js']
			all: ['src/*.js', 'src/{,*/}*/js/*.js', '!src/vendor*']
		},
		karma: {
			options: {
				configFile: 'karma.js',
				singleRun: true,
				frameworks: ['jasmine'],
				autoWatch: true
			},
			unit: {
				browsers: [ grunt.option('browser') || 'PhantomJS' ]
			},
			background: {
				background: true,
				browsers: [ grunt.option('browser') || 'PhantomJS' ]
			},
			watch: {
				configFile: 'karma.js',
				singleRun: false,
				autoWatch: true,
				autoWatchInterval: 1
			}
		}
	});

	//alias tasks
	grunt.registerTask('doc', 'Generate docs.', ['ngdocs']);
	grunt.registerTask('test', 'Do tests.', ['karma:unit']);
};

