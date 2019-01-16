var path = require('path');

module.exports = {
  mode: "development",
  entry: './src/counter_app_with_jsx.js',
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
