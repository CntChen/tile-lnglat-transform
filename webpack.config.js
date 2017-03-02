var path = require('path');

var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');

var plugins = [
  new CleanPlugin('builds'),
];

var pluginsWithMin = plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
  })
]);

module.exports = [{
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
},
{
  entry: './src',
  output: {
    path: 'builds/',
    filename: 'index.min.js',
    libraryTarget: "umd",
    library: 'TileLnglatTransform',
  },
  plugins: pluginsWithMin,
  module: {
    loaders: [{
      test: /\.js$/,
      include: /src/,
      loader: 'babel-loader',
    }, ],
  }
}];