var path = require('path');

var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

var plugins = [
  new CleanPlugin('builds'),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'main',
  //   children: true,
  //   minChunks: 1,
  // }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //         warnings: false
  //     },
  // })
];

module.exports = {
  entry: './src',
  output: {
    path: 'builds/',
    filename: 'index.js',
    libraryTarget: "umd",
    library: 'TileLnglatTransform',
  },
  plugins: plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      include: /src/,
      loader: 'babel-loader',
    }, ],
  }
};