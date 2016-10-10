import express from 'express';
import webpack from 'webpack';
import config from '../../build_configs/client.dev';


const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(ccompiler, {
  publicPath: '/',
  quiet: true,
  hot: true,
  inline: true,
  lazy: false
}));

app.use(require('webpack-hot-middleware')(compiler));

module.exports = app;
