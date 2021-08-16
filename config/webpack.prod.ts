export {};
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConfig = require('./webpack.base.ts');

module.exports = merge(baseConfig, {
  mode: 'production', // 生产模式
  entry: {
    app: ['./src/pages/index.tsx'],
  },
  output: {
    filename: 'index.js',
    path: resolve(__dirname, '../dist'), // 输出目录
    clean: true,
    libraryTarget: 'umd',
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
    },
  },
  plugins: [
    // 使用交互式可缩放树映射可视化Webpack输出文件的大小
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
});
