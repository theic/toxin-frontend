const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        use:  [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader'
        }
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: { loader: 'file-loader' }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      template: './src/[name].sass',
      filename: '[name].css',
    }),
    new HTMLWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html',
    })
  ]
}
