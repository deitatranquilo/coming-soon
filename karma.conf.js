// Karma configuration
// Generated on Mon Oct 02 2017 00:46:36 GMT-0300 (ART)

const webpackConfig = require('./webpack.config.test');

const karmaConfig = (config) => {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/components/**/*.jsx',
      'spec/**/*.spec.jsx',
    ],


    // list of files to exclude
    exclude: [
    ],

    webpack: webpackConfig,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.jsx': ['webpack', 'sourcemap'],
      'spec/**/*.spec.jsx': ['webpack', 'sourcemap'],
      'spec/**/*.spec.js': ['webpack', 'sourcemap'],
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

    reporters: ['progress', 'coverage-istanbul'],

    coverageIstanbulReporter: {
      reports: ['lcovonly', 'html', 'text-summary', 'text'],
      fixWebpackSourcePaths: true
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
    // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['jsdom', 'Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-coverage',
      'karma-coverage-istanbul-reporter',
      'karma-sourcemap-loader',
      'karma-jsdom-launcher',
      'karma-chrome-launcher',
    ],

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
  });
};

module.exports = karmaConfig;
