const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

exports.paths = {
  app: path.join(__dirname, '..', 'app'),
  client: path.join(__dirname, '..', 'app', 'client'),
  server: path.join(__dirname, '..', 'app', 'server'),
  build: path.join(__dirname, '..', 'build'),
  clientBuild: path.join(__dirname, '..', 'build', 'client')
};

exports.commonConfig = {
  module: {
    noParse: /node_modules\/localforage/,
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: exports.paths.app
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: 'Building [:bar] :percent :elapseds',
      summary: false,
      clear: false
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  node: {
    __dirname: true,
    fs: 'empty'
  }
};

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
};

exports.addBanner = function() {
  return {
    plugins: [
      new webpack.BannerPlugin(
        'Rijk van Zanten\n' +
        'http://www.rijkvanzanten.nl\n' +
        'rijkvanzanten@me.com'
      )
    ]
  };
};

exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        // Eliminate comments
        comments: false,

        compress: {
          warnings: false,
        }
      })
    ]
  };
};

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    entry: entry,
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest']
      })
    ]
  };
};

exports.parseImagesClient = function() {
  return {
    module: {
      loaders: [
        {
         test: /\.(jpe?g|png|gif|svg)$/i,
         loaders: [
           'url?limit=10000&name=[name].[ext]?[hash:5]',
           'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
         ]
       }
      ]
    }
  };
};

exports.parseImagesServer = function() {
  return {
    module: {
      loaders: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'url?limit=10000&emitFile=false&name=[name].[ext]?[hash:5]'
          ]
        },
      ]
    }
  };
};

exports.parseJSX = function(babelrc) {
  if(babelrc) {
    return {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loaders: ['babel?cacheDirectory'],
            exclude: /node_modules/
          }
        ]
      }
    };
  } else {
    return {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
              plugins: [
                path.resolve(__dirname, '../node_modules/babel-plugin-transform-decorators-legacy'),
              ],
              presets: [
                path.resolve(__dirname, '../node_modules/babel-preset-es2015'),
                path.resolve(__dirname, '../node_modules/babel-preset-react'),
                path.resolve(__dirname, '../node_modules/babel-preset-react-hmre'),
                path.resolve(__dirname, '../node_modules/babel-preset-stage-1'),
              ]
            },
            exclude: /node_modules/
          }
        ]
      }
    };
  }
};
