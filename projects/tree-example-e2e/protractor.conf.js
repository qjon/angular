// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter');
const screenshots = require('protractor-take-screenshots-on-demand');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        // '--headless'
      ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
  },
  plugins: [
    {
      path: './src/plugins/mouse-plugin.js'
    }
  ],
  onPrepare() {
    require('ts-node').register({
      project: './projects/tree-example-e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    //joiner between browser name and file name
    screenshots.browserNameJoiner = ' - '; //this is the default
    //folder of screenshots
    screenshots.screenShotDirectory = './projects/tree-example-e2e/src/screenshots';
    //creates folder of screenshots
    screenshots.createDirectory();
  }
};
