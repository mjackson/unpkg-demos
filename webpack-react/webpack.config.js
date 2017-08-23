const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DynamicCDNWebpackPlugin = require('dynamic-cdn-webpack-plugin')

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
    new HTMLWebpackPlugin({
      title: 'unpkg-demos :: webpack-react'
    }),
    new DynamicCDNWebpackPlugin()
  ]
}
