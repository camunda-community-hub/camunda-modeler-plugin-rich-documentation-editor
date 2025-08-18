const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js', // or your main entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  devtool: 'cheap-module-source-map'
};