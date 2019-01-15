var path = require('path');

module.exports = {
  mode: "development",
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /|.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  }
}
