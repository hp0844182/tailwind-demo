const HtmlWebpackPlugin = require('html-webpack-plugin')
/**@type {import('webpack').Configuration} */
const config = {
  module:{
    rules:[
      {
        test: /\.((t|j)sx?)$/, 
        exclude: /node_modules/,
        use:'babel-loader'
      },
      {
        test: /\.css$/, 
        exclude: /node_modules/,
        use:[
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    })
  ]
}
module.exports = config