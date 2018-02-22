const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const ROOT = function (inPath) {
  return path.resolve(__dirname, inPath)
};

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js', '.html', '.css', '.png'],
    modules: [ROOT('public/app'), ROOT('node_modules'), ROOT('public/img')],
    alias: {
      'app': ROOT('public/app')
    }
  },
  module: {
    rules: [{
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
        loaders: [{
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './tsconfig.test.json'
            }
          },
          {
            loader: 'angular2-template-loader',
            options: {
              baseRef: ROOT('public')
            }
          }
        ]
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
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    }),
    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './public')),
  ]
}
