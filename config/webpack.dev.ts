export {};
const { resolve } = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.ts');

module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式
  devtool: 'eval-cheap-module-source-map',
  target: 'web',
  entry: {
    app: ['./src/index.tsx'], // 入口文件
    vendors: ['react', 'react-dom', 'react-router-dom'], // 所引入的公共库
  },
  output: {
    filename: 'js/[name].js',
    path: resolve(__dirname, './dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 指定生成的文件所依赖哪一个html文件模板，模板类型可以是html、jade、ejs等
      template: './src/index.html',
    }),
    // 模块热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    // 当开启 HotModuleReplacementPlugin 的时候使用该插件直接返回更新文件名，而不是文件的id
    moduleIds: 'named',
    runtimeChunk: 'single', // js 热更新暂时失效，css 有效
  },
  devServer: {
    contentBase: resolve(__dirname, '../dist'),
    port: 8080,
    open: true,
    hot: true,
    progress: true,
    historyApiFallback: true,
  },
});
