const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const parts = require('./parts');

const paths = parts.paths;

const config = merge(
  parts.commonConfig,
  {
    entry: [
      paths.server
    ],
    output: {
      path: paths.build,
      filename: 'server.js',
      chunkFilename: '[chunkhash].js',
      publicPath: '/'
    },
    cache: false,
    debug: false,
    target: 'node',
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin()
    ],
    externals: nodeExternals()
  },
  parts.parseJSX(true),
  parts.parseImagesServer(),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
  parts.setFreeVariable(
    'process.env.BROWSER',
    false
  )
);

module.exports = config;
