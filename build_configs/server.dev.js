const webpack = require('webpack');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');

const parts = require('./parts');

const paths = parts.paths;

const config = merge(
  parts.commonConfig,
  {
    entry: [
      'webpack/hot/poll?1000',
      paths.server
    ],
    output: {
      path: paths.build,
      filename: 'server.dev.js',
      chunkFilename: '[chunkhash].js'
    },
    cache: true,
    debug: true,
    target: 'node',
    devtool: 'eval',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    externals: nodeExternals({
      whitelist: ['webpack/hot/poll?1000']
    })
  },
  parts.parseJSX(false),
  parts.parseImagesServer(),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'development'
  ),
  parts.setFreeVariable(
    'process.env.BROWSER',
    false
  )
);

module.exports = config;
