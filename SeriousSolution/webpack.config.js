var webpack = require("webpack");
var path = require('path');

var config = {
  entry: './Assets/Det/js/custom.js',
  output: {
    path: './Assets/dist',
    filename: 'det.bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
  //,module: {
  //  //https://cloud.githubusercontent.com/assets/4727090/9842301/d437160e-5ade-11e5-9833-4942d1c60b8a.png
  //  loaders: [
  //    {
  //      test: /\.css$/,
  //      loader: 'css'
  //    },
  //    {
  //      test: /\.eot$/,
  //      loader: 'file'
  //    },
  //    {
  //      test: /\.(woff|woff2)$/,
  //      loader: 'url?limit=50000'
  //    },
  //    {
  //      test: /\.ttf$/,
  //      loader: 'url?limit=50000&mimetype=application/octet-stream'
  //    },
  //    {
  //      test: /\.(svg|png)$/,
  //      loader: 'url?limit=50000&mimetype=image/svg+xml'
  //    }
  //  ]
  //}
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

//resolve: {
//    alias: {
//      jquery: path.resolve(__dirname, './bower-lib/jquery/dist/jquery'),
//      bootstrap: path.resolve(__dirname, './bower-lib/bootstrap/dist/js/bootstrap')
//    }
//}