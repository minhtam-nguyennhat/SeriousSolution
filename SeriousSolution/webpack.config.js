var webpack = require("webpack");
var path = require('path');

var config = {
  entry: './Assets/Det/js/custom.js',
  output: {
    path: './Assets/dist',
    filename: 'det.bundle.js'
  },
  resolve: {
    alias: {
      bootstrap: path.resolve('./bower-lib/bootstrap/dist/js/bootstrap.js'),
      tabdrop: path.resolve('./Assets/Det/js/bootstrap-tabdrop.js'),
      smoothScroll: path.resolve('./Assets/Det/js/jquery.smooth-scroll.js')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}

module.exports = config;


//entry: {
//    app: ['./Assets/Det/js/custom.js'],
//    vendors: ['jquery']
//},
//output: {
//    path: './Assets/dist',
//    filename:'det.bundled.js'
//},
//module: {
//    loaders: [
//      {
//        test: require.resolve(),
//        loader: ''
//      }
//    ]
//},
//resolve: {
//    alias: {
//      jquery: './bower-lib/jquery/dist/'
//    }
//},
//plugins: [
//  new webpack.ProvidePlugin({
//    $: "jquery",
//    jQuery: "jquery",
//    "window.jQuery": "jquery"
//  })
//]


//resolve: {
//  alias: {
//    jquery: path.resolve('./bower-lib/jquery/dist/jquery.js'),
//    tabdrop: path.resolve('./Assets/Det/js/bootstrap-tabdrop.js'),
//    smoothScroll: path.resolve('./Assets/Det/js/jquery.smooth-scroll.js')
//  }
//}