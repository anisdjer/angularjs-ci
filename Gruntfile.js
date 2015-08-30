/*global module, require*/
module.exports = function (grunt) {
	'use strict';
	
	
	//grunt plugins
	require('load-grunt-tasks')(grunt);

	//config
	grunt.initConfig({
		ngdocs: {
			options : {
				title : "Angular CI documentation"
			},
			//all: ['src/vendor/ui-router/src/*.js']
			all: ['src/{,*/}*.js', '!src/vendor*']
		},
		karma: {
			options: {
				configFile: 'karma.js',
				singleRun: true,
				exclude: [],
				frameworks: ['jasmine'],
				reporters: 'dots', // 'dots' || 'progress'
				port: 8080,
				colors: true,
				autoWatch: true,
				autoWatchInterval: 0,
				browsers: [ grunt.option('browser') || 'PhantomJS' ]
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
	grunt.registerTask('test', 'Generate docs.', ['karma:unit']);
};
  