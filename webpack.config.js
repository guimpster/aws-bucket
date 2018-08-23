const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  mode: "development",
  target: "node",
  watch: true,
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  plugins: [],
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [{ loader: 'graphql-import-loader' }]
      }
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};