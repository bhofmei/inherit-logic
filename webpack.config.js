const webpack = require('webpack');
const path = require('path');

module.exports = {

  entry: {
    'polyfills': './public/polyfills',
    'vendor': './public/vendor',
    'bootstrap': './public/bootstrap'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    path:  path.resolve(__dirname, 'public/build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['bootstrap', 'vendor', 'polyfills']
    })
  ]
};
