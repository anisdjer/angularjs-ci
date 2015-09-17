// Karma configuration file
module.exports = function (karma) {

  karma.set({
    // base path, that will be used to resolve files and exclude
    basePath: 'src',

    // list of files / patterns to load in the browser
    files: [
		"vendor/angular/angular.min.js",
		"vendor/ui-router/release/angular-ui-router.min.js",
		"vendor/angular-mocks/angular-mocks.js",
		"posts/post.module.js",
		"app.js",
		"posts/post.controller.js",
		"posts/post.service.js",
		
		
		"**/*.spec.js",
	],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: karma.LOG_WARN,
    frameworks: ['jasmine'],

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers: [ 'PhantomJS' ]
  })
};