const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

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
    path: path.resolve(__dirname, 'public/build'),
    filename: '[name].js',
    publicPath: 'build/'
  },
  module: {
    rules: [{
        test: /\.ts$/,
        use: [{
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'angular-router-loader'
          },
          {
            loader: 'angular2-template-loader?keepUrl=true'
          }
        ],
        exclude: [/.(spec|e2e)\.ts/, /testing/]
      },
      {
        test: /\.(html|css)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      },
      {
        test: /\.(svg|png)/,
        loader: 'url-loader'
      }
      /*{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }*/
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['bootstrap', 'vendor', 'polyfills']
    }),
    //    new webpack.optimize.CommonsChunkPlugin({
    //      name: 'manifest'
    //    }),
    new HtmlWebpackPlugin({
      title: 'InheritLogic',
      filename: 'index.ejs',
      template: require('html-webpack-template'),
      inject: false,
      baseHref: '/',
      bodyHtmlSnippet: `<cricket-app>
<div class="container text-center">
<h1 id="load-header" class="mt-3">Loading <span style="color:#007BFF;">INHERIT<span style="font-weight:200;">LOGIC</span></span>...</h1>
Please wait.
</div>
</cricket-app>`,
      links: [{
          href: './img/logos/white-blue-black.png',
          rel: 'shortcut icon',
          type: 'image/png'
        },
        "lib/bootstrap/dist/css/bootstrap.min.css",
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
