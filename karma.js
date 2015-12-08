// Karma configuration file
module.exports = function (karma) {
    var paths = {
        vendor: [
            "vendor/angular/angular.min.js",
            "vendor/angular-ui-router/release/angular-ui-router.min.js",
            "vendor/angular-mocks/angular-mocks.js"
        ],
        src: [
            "post/js/post.module.js",
            "post/js/post.controller.js",
            "post/js/post.service.js",
            "post/js/post.routes.js",
            "app/js/app.js",
            "app/js/app.routes.js"
        ],
        spec: ["**/specs/*.spec.js"]
    };

    karma.set({
        // base path, that will be used to resolve files and exclude
        basePath: 'src',
        // list of files / patterns to load in the browser
        files: Array.prototype.concat(paths.vendor, paths.src, paths.spec),
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            '**/js/*.js': ['coverage']
        },
        // optionally, configure the reporter
        coverageReporter: {
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' }
            ],
            dir: '../coverage'
        },
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
        browsers: ['PhantomJS']
    });
};
