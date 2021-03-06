// Karma configuration
// Generated on Fri Feb 02 2018 14:30:27 GMT-0500 (EST)

module.exports = function (config) {
  const testWebpackConfig = require('./webpack.test.js');
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [{
        pattern: './spec-bundle.js',
        watched: false
      },
      {
        pattern: 'public/img/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      }
    ],

    // list of files / patterns to exclude
    exclude: [],

    proxies: {
      '/app/': 'public/app/',
      "/img/": "public/img/"
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //'./spec-bundle.js': ['coverage', 'webpack', 'sourcemap']
      './spec-bundle.js': ['webpack', 'sourcemap']
    },
    webpack: testWebpackConfig,

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress', 'coverage', 'remap-coverage'],
    reporters: ['progress'],

    coverageReporter: {
      type: 'in-memory'
    },
    remapCoverageReporter: {
      'text-summary': null,
      'json-summary': './coverage/angular-coverage-summary.json'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
