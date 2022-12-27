const path = require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  mode: process.env === 'development' ? 'development' : 'production', 
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
      {
        test: /\.mp3$/,
        loader: 'asset/resource',
        options: {
          outputPath: 'sounds',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true, // Cache busting
      filename: 'index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/images", to: "images" },
      ],
      options: {
        concurrency: 100,
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/sounds", to: "sounds" },
      ],
      options: {
        concurrency: 100,
      },
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
};