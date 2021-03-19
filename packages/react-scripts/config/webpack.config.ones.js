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
      library: 'someLibName',
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
