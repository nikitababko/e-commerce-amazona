const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('webpack');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/',
};

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devServer: {
    compress: true,
    port: 3000,
    // open,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/images/[name].[ext]',
        },
        include: path.join(__dirname, 'src'),
      },
    ],
  },

  resolve: {
    alias: {
      '~': PATHS.src, // Example: import Dog from "~/assets/img/dog.jpg"
      '@': `${PATHS.src}/js`, // Example: import Sort from "@/utils/sort.js"
      vue$: 'vue/dist/vue.js',
    },
  },

  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
