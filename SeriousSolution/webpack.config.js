var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  entry: {
    'det.bundle': ['./Assets/Det/custom.js', './Assets/Det/custom.style.js'],
    'angular.app': './src/main.ts',
    'angular.vendor': './src/vendor.ts',
    'angular.polyfills': './src/polyfills.ts'
  },
  output: {
    path: './Assets/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
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
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(eot|woff|ttf|svg|png|gif)/,
        loader: 'file',
        query: {
          emitFile: false,
          name: '/[path][name].[ext]'
        }
      },
       {
         test: /\.html$/,
         loader: 'html'
       }
    ]
  }
}

module.exports = config;