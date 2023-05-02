const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'none' : 'source-map',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'script.js',
    },

    module: {
      rules: [
        {
          test: /\.scss$/,
          // loaders: ['to-string-loader', 'css-loader', 'sass-loader']
          use: [
            MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
          ],
        }, {
          test: /\.(png|jpe?g|gif|ico)$/,
          type: 'asset/resource',
        }, {
          test: /\.svg$/,
          type: 'asset',
          loader: 'svgo-loader',
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
        },
      ],
    },

    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
      new CopyWebpackPlugin({
        patterns: [{ from: './src/assets', to: 'assets' }],
      }),
      new FaviconsWebpackPlugin('./src/assets/favicon.ico'),
    ],
  };

  return config;
};
