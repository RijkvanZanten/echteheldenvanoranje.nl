import express from 'express';
import webpack from 'webpack';
import DashboardPlugin from 'webpack-dashboard/plugin';
import config from '../../build_configs/client.dev';

const app = express();

const compiler = webpack(config);
compiler.apply(new DashboardPlugin());

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: '/',
  quiet: true,
  hot: true,
  inline: true,
  lazy: false
}));

app.use(require('webpack-hot-middleware')(compiler));

// Server index uses commonJS for this import (dynamic loading)
module.exports = app;
