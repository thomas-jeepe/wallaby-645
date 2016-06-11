
var wallabyWebpack = require('wallaby-webpack')
var config = require('./webpack.config.js')

config.module.loaders = config.module.loaders.filter(function(l) {
  return l.loader !== 'awesome-typescript-loader'
})

var webpackPostprocessor = wallabyWebpack(config)

module.exports = function () {

  return {
    files: [
      { pattern: 'src/**/*.ts', load: false },
      { pattern: 'src/**/*.tsx', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.ts', load: false },
      { pattern: 'test/**/*Spec.tsx', load: false }
    ],

    testRunner: 'mocha',

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests()
    }
  }
}