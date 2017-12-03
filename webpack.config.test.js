const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: ['babel-polyfill', './index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: {
            esModules: true,
          },
        },
        enforce: 'post',
        exclude: [
          /node_modules|\.spec\.(js|jsx)$/,
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(ico|png|jpg|gif|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass', '.scss'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      disable: process.env.NODE_ENV === 'development',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: 'Deita Tranquilo - Coming Soon',
      favicon: 'assets/images/favicon.ico',
    }),
  ],
};

module.exports = webpackConfig;
