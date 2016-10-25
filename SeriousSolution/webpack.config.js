var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    'det.bundle': ['./Assets/Det/custom.js', './Assets/Det/custom.style.js']
  },
  output: {
    path: './Assets/dist',
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("[name].css")
  ]
  ,
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(eot|woff|ttf|svg|png)/,
        loader: 'file',
        query: {
          emitFile: false,
          name: '/[path][name].[ext]'
        }
      }
    ]
  }
}

module.exports = config;