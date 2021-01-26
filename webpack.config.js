const path = require('path');

module.exports = {
  // bundling mode
  mode: 'development',

  // entry files
  entry: './src/index.js',

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // plugins
  plugins: [],

  // file resolutions
  resolve: {
    extensions: ['.js'],
  },

  // loaders
  module: {
    rules: [],
  },
};
