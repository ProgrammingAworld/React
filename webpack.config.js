var webpack = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
  // 入口，并且配置热替换
  entry: [
     'webpack-dev-server/client?http://localhost:8080',
     'webpack/hot/only-dev-server',
       __dirname + '/src/scripts/app.js'
 ],


  // 出口
  output: {
    path: __dirname + '/prd',
    // filename: '[name]-[hash].js'
    filename: 'bundle.js'
  },

  // sourcemap
  devtool: 'source-map',
  // 配置模块
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.jsx$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: ET.extract('style', 'css!sass')
      },
      {
        test: /\.string$/,
        loader: 'string'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },

  // vue
  vue: {
    loaders: {
      js: 'babel'
    }
  },

  //plugins定义
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),webpack.HotModuleReplacementPlugin()热替换的配置
    new ET('bundle.css',{
      allChunks:true
   }),
   new webpack.HotModuleReplacementPlugin()
  ]

}
