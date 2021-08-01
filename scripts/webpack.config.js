const HtmlWebpackPlugin = require('html-webpack-plugin')
// 分析打包时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const path = require('path')
/**@type {import('webpack').Configuration} */
const config = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, process.env.ENTRY),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.((t|j)sx?)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src', 'index.html'),
    }),
    new SpeedMeasurePlugin(),
  ],
}
module.exports = config
