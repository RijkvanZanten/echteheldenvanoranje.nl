const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const parts = require('./parts');

const config = merge(
  parts.commonConfig,
  {
    entry: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.resolve(__dirname, '..', 'app', 'client')
    ],
    output: {
      path: '/',
      filename: 'bundle.js',
      publicPath: '/',
      pathinfo: true
    },
    cache: true,
    debug: true,
    devtool: 'eval',
    target: 'web',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    resolve: {
       root: process.cwd()
    }
  },
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'development'
  ),
  parts.setFreeVariable(
    'process.env.BROWSER',
    true
  ),
  parts.parseJSX(false),
  parts.parseImagesClient()
);

module.exports = config;
