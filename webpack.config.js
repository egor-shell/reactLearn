const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './index.jsx'
    },
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public'
    },
    module: {
        rules: [
            {
              test: /\.jsx?$/,
              include: path.resolve(__dirname, 'src'),
              exclude: path.resolve(__dirname, 'node_modules'),
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/env', '@babel/react'],
                  plugins: ['@babel/plugin-proposal-class-properties']
              }
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
              ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
      ],
      output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'app.js',
    },
      resolve: {
          extensions: ['.js', '.jsx']
      }
}