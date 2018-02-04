const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const ROOT = function(inPath) {return path.resolve(__dirname, inPath)};

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [ROOT('public/app'), ROOT('node_modules')]
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
          exclude: [
            ROOT('node_modules/rxjs'),
            ROOT('node_modules/@angular')
          ]
        },
        {
          test: /\.ts$/,
          loaders: ['awesome-typescript-loader']
//          use: [
//            {loader: 'awesome-typescript-loader',
//            query: {
//              sourceMap: false,
//              inlineSourceMap: true,
//              compilerOptions: {removeComments: true}
//            }},
//            'angular-router-loader'
//          ],
//          exclude: [/\.e2e\.ts$/]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')

    })
    ]
  }
