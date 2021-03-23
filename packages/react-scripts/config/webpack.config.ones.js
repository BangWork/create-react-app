'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackScriptsPlugin = require('html-webpack-scripts-plugin');
const paths = require('./paths');

module.exports = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry: paths.appIndexJs,
    output: {
      path: isEnvProduction ? paths.appBuild : undefined,
      /**
       * publicPath 必需为相对路径，否则 import-html-entry 将不能成功加载资源
       */
      publicPath: '',
      // this defaults to 'window', but by setting it to 'this' then
      // module chunks which are built will work in web workers as well.
      globalObject: 'this',

      library: 'ONESPluginLibrary',
      libraryTarget: 'umd'
    },
    externals: {
      '@ones-ai/opf-core': '__ONES_AI_OPF_CORE'
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new HtmlWebpackScriptsPlugin({
        entry: /\/main/
      })
    ]
  };
};
