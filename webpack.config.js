const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: ['bootstrap/dist/css/bootstrap.css', './app.js']
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  devServer: {
    contentBase: __dirname + '/src'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        use: ['json-loader']
      },
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2017'] }
        }]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' }
        ]
      },
      // For Bootstrap
      { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" }
    ]
  }
};
