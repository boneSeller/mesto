const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './script/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  mode: "development",
  devServer: {
    static: path.resolve(__dirname, 'build'),
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}