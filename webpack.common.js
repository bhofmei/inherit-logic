const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    'polyfills': './public/polyfills',
    'vendor': './public/vendor',
    'bootstrap': './public/bootstrap'
  },
//  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    chunkFilename: '[name]-chunk.js',
    path:  path.resolve(__dirname, 'public/build'),
    filename: '[name].js',
    publicPath: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular-router-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['bootstrap', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      title: 'Cricket',
      filename: 'index.ejs',
      template: require('html-webpack-template'),
      inject: false,
      baseHref: '/',
      bodyHtmlSnippet: `<cricket-app>
<div class="container">
<h1>Loading Cricket...</h1>
Please wait.
</div>
</cricket-app>`,
      links: [{
        href: './img/cricket-icon.png',
        rel: 'shortcut icon',
        type: 'image/png'
      },
        "lib/bootstrap/dist/css/bootstrap.min.css",
        "lib/ng2-dnd/bundles/style.css",
        "lib/open-iconic/font/css/open-iconic-bootstrap.css"
        ],
      scripts: [
        "lib/jquery/dist/jquery.min.js",
        "lib/popper.js/dist/umd/popper.min.js",
        "lib/bootstrap/dist/js/bootstrap.min.js"
      ],
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    })
  ]
};
