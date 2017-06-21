const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ModulesCDNWebpackPlugin = require('modules-cdn-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin(),
    new ModulesCDNWebpackPlugin()
  ]
}
