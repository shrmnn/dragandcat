const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // bundling mode
  mode: 'production',

  // entry files
  entry: ['./src/index.js'],

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dragandcat/',
    filename: 'bundle.js',
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Drag and Cat',
      template: './public/index.html',
    }),
  ],

  // file resolutions
  resolve: {
    extensions: ['.js'],
  },

  // loaders
  module: {
    rules: [],
  },
};
