var getConfig = require('hjs-webpack')
var webpack = require('webpack')
var vendorPath = './node_modules/'

var pjOptions = {
  // entry point for the app
  in: './src/app.js',
  out: './build',
  isDev: true,
  clearBeforeBuild: true,
  output:{
    filename:  '[name].js'
  }
}

var config = getConfig(pjOptions)

config.output.publicPath = '\\';
// config.resolve.alias = { jquery: vendorPath + 'jquery/src/jquery.js' }
config.plugins.push(
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')

);
config.entry = {
  // Add entries for vendors
  vendors: ['jquery'],
  // Reassign previous single entry to main entry
  ttt: './src/api.js',
  main: config.entry
};

module.exports = config
