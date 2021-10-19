const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    host: 'localhost',
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /(\.css|\.sass|\.scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]',
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
