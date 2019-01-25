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
    extensions: ['.ts', '.js', '.html', '.css', '.png', '.svg'],
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
            loader: 'angular2-template-loader?keepUrl=true'
          }
        ]
      },
      {
        test: /\.(html|css)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'file-loader'
      },
      {
        enforce: "post",
        test: /.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        include: ROOT('public', 'app'),
        exclude: [/\.(e2e|spec)\.ts$/,
          /node_modules/, /testing/]
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
