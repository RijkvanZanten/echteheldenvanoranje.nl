const webpack = require('webpack');
const merge = require('webpack-merge');
const AssetsPlugin = require('assets-webpack-plugin');

const parts = require('./parts');

const paths = parts.paths;

const config = merge(
  parts.commonConfig,
  {
    entry: {
      app: paths.client
    },
    output: {
      path: paths.clientBuild,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js',
      publicPath: '/'
    },
    cache: false,
    debug: false,
    target: 'web',
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new AssetsPlugin({
        filename: 'assets.json',
        fullPath: false,
        path: './build'
      })
    ]
  },
  parts.parseJSX(true),
  parts.parseImagesClient(),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
  parts.setFreeVariable(
    'process.env.BROWSER',
    true
  ),
  parts.extractBundle({
    name: 'vendor',
    entries: [
      'react',
      'react-dom',
      'react-router',
      'radium',
      'react-helmet'
    ]
  }),
  parts.minify(),
  parts.addBanner()
);

module.exports = config;
