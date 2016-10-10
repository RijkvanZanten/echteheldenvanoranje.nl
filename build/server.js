/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(10);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Hoi'
	        ),
	        this.props.children
	      );
	    }
	  }]);

	  return App;
	}(_react.Component);

	exports.default = App;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _radium = __webpack_require__(18);

	var _globalStyles = __webpack_require__(7);

	var _globalStyles2 = _interopRequireDefault(_globalStyles);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StyleProvider = (_temp = _class = function (_Component) {
	  _inherits(StyleProvider, _Component);

	  function StyleProvider() {
	    _classCallCheck(this, StyleProvider);

	    return _possibleConstructorReturn(this, (StyleProvider.__proto__ || Object.getPrototypeOf(StyleProvider)).apply(this, arguments));
	  }

	  _createClass(StyleProvider, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return _react2.default.createElement(
	        _radium.StyleRoot,
	        { radiumConfig: { userAgent: this.props.userAgent } },
	        _react2.default.createElement(_radium.Style, { rules: _globalStyles2.default }),
	        children
	      );
	    }
	  }]);

	  return StyleProvider;
	}(_react.Component), _class.displayName = 'EchteHeldenVanOranje', _temp);
	exports.default = StyleProvider;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _redux = __webpack_require__(3);

	var _reducers = __webpack_require__(8);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _reduxPersist = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configureStore() {
	  var store = void 0;

	  if (process.browser) {
	    var enhancers = (0, _redux.compose)((0, _reduxPersist.autoRehydrate)(), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	      return f;
	    });

	    store = (0, _redux.createStore)(_reducers2.default, undefined, // due to redux-persist
	    enhancers);
	  } else {
	    store = (0, _redux.createStore)(_reducers2.default);
	  }

	  if (false) {
	    module.accept('./reducers/index', function () {
	      var nextReducer = require('./reducers/index');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  'html': {
	    msTextSizeAdjust: '100%',
	    webkitTextSizeAdjust: '100%'
	  },
	  'body': {
	    margin: 0
	  },
	  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary': {
	    display: 'block'
	  },
	  'audio, canvas, progress, video': {
	    display: 'inline-block',
	    verticalAlign: 'baseline'
	  },
	  'audio:not([controls])': {
	    display: 'none',
	    height: 0
	  },
	  '[hidden], template': {
	    display: 'none'
	  },
	  'a': {
	    backgroundColor: 'transparent'
	  },
	  'a:active, a:hover': {
	    outline: 0
	  },
	  'abbr[title]': {
	    borderBottom: '1px dotted'
	  },
	  'b, strong': {
	    fontWeight: 'bold'
	  },
	  'dfn': {
	    fontStyle: 'italic'
	  },
	  'h1': {
	    fontSize: '2em',
	    margin: '0.67em 0'
	  },
	  'mark': {
	    background: '#ff0',
	    color: '#000'
	  },
	  'small': {
	    fontSize: '80%'
	  },
	  'sub, sup': {
	    fontSize: '75%',
	    lineHeight: 0,
	    position: 'relative',
	    verticalAlign: 'baseline'
	  },
	  'sup': {
	    top: '-0.5em'
	  },
	  'sub': {
	    bottom: '-0.25em'
	  },
	  'img': {
	    border: 0
	  },
	  'svg:not(:root)': {
	    overflow: 'hidden'
	  },
	  'figure': {
	    margin: '1em 40px'
	  },
	  'hr': {
	    boxSizing: 'content-box',
	    height: 0
	  },
	  'pre': {
	    overflow: 'auto'
	  },
	  'code, kbd, pre, samp': {
	    fontFamily: 'monospace, monospace',
	    fontSize: '1em'
	  },
	  'button, input, optgroup, select, textarea': {
	    color: 'inherit',
	    font: 'inherit',
	    margin: 0
	  },
	  'button': {
	    overflow: 'visible'
	  },
	  'button, select': {
	    textTransform: 'none'
	  },
	  'button, html input[type="button"], input[type="reset"], input[type="submit"]': {
	    webkitAppearance: 'button',
	    cursor: 'pointer'
	  },
	  'button[disabled], html input[disabled]': {
	    cursor: 'default'
	  },
	  'button::-moz-focus-inner, input::-moz-focus-inner': {
	    border: 0,
	    padding: 0
	  },
	  'input': {
	    lineHeight: 'normal'
	  },
	  'input[type="checkbox"], input[type="radio"]': {
	    boxSizing: 'border-box',
	    padding: 0
	  },
	  'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
	    height: 'auto'
	  },
	  'input[type="search"]': {
	    webkitAppearance: 'textfield',
	    boxSizing: 'content-box'
	  },
	  'input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-decoration': {
	    webkitAppearance: 'none'
	  },
	  'fieldset': {
	    border: '1px solid #c0c0c0',
	    margin: '0 2px',
	    padding: '0.35em 0.625em 0.75em'
	  },
	  'legend': {
	    border: 0,
	    padding: 0
	  },
	  'textarea': {
	    overflow: 'auto'
	  },
	  'optgroup': {
	    fontWeight: 'bold'
	  },
	  'table': {
	    borderCollapse: 'collapse',
	    borderSpacing: 0
	  },
	  'td, th': {
	    padding: 0
	  }
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(3);

	var rootReducer = (0, _redux.combineReducers)({});

	exports.default = rootReducer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(2);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '/', component: _App2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, null)
	);

	exports.default = routes;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(15);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(17);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(14);

	var _compression2 = _interopRequireDefault(_compression);

	var _rendering = __webpack_require__(11);

	var _rendering2 = _interopRequireDefault(_rendering);

	var _http = __webpack_require__(16);

	var _http2 = _interopRequireDefault(_http);

	var _socketActions = __webpack_require__(12);

	var _socketActions2 = _interopRequireDefault(_socketActions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var port = process.env.PORT || 3000;
	var host = process.env.HOST || 'localhost';

	var app = (0, _express2.default)();

	var server = _http2.default.Server(app);
	(0, _socketActions2.default)(server);

	app.use((0, _compression2.default)());

	app.use(_express2.default.static(_path2.default.join(__dirname, '..', '..', 'build', 'client'), {
	  index: false,
	  maxage: 604800000
	}));

	if (false) {
	  app.use(require('./devServer'));
	}

	app.use(_rendering2.default);

	server.listen(port, host, function () {
	  console.log('Server started at ' + host + ': ' + port); // eslint-disable-line
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "app/server"))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = handleRender;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(19);

	var _reactRouter = __webpack_require__(2);

	var _reactHelmet = __webpack_require__(20);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _reactRedux = __webpack_require__(21);

	var _StyleProvider = __webpack_require__(5);

	var _StyleProvider2 = _interopRequireDefault(_StyleProvider);

	var _configureStore = __webpack_require__(6);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _routes = __webpack_require__(9);

	var _routes2 = _interopRequireDefault(_routes);

	var _assets = __webpack_require__(13);

	var _assets2 = _interopRequireDefault(_assets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dev = ("production") !== 'production';

	var renderFullPage = function renderFullPage(dev, html, head, vendor, app, manifest) {
	  var script = '\n  <script>\n    [\n      \'/' + manifest.js + '\',\n      \'/' + vendor.js + '\',\n      \'/' + app.js + '\'\n    ].forEach(function(src) {\n      var script = document.createElement(\'script\');\n      script.src = src;\n      script.async = false;\n      document.head.appendChild(script);\n    });\n  </script>';

	  if (dev) script = '<script src="bundle.js" async></script>';

	  return '\n    <!doctype html>\n    <html ' + head.htmlAttributes.toString() + '>\n      <head>\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n      </head>\n      <body>\n        <div id="app">' + html + '</div>\n        ' + script + '\n      </body>\n    </html>\n  ';
	};

	function handleRender(req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
	    // Internal server error
	    if (err) {
	      res.status(500).send(err.message);
	    }

	    // On redirect
	    else if (redirect) {
	        res.redirect(redirect.pathname + redirect.search);
	      }

	      // Valid request
	      else if (props) {
	          props.userAgent = req.headers['user-agent'];

	          var store = (0, _configureStore2.default)();

	          var html = (0, _server.renderToStaticMarkup)(_react2.default.createElement(
	            _StyleProvider2.default,
	            { userAgent: req.headers['user-agent'] },
	            _react2.default.createElement(
	              _reactRedux.Provider,
	              { store: store },
	              _react2.default.createElement(_reactRouter.RouterContext, props)
	            )
	          ));
	          var head = _reactHelmet2.default.rewind();
	          var vendor = _assets2.default.vendor;
	          var app = _assets2.default.app;
	          var manifest = _assets2.default.manifest;

	          res.send(renderFullPage(dev, html, head, vendor, app, manifest));
	        }

	        // 404 route not found
	        else {
	            res.status(404).send('404 Not found');
	          }
	  });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _socket = __webpack_require__(23);

	var _socket2 = _interopRequireDefault(_socket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var listen = function listen(app) {
	  var io = _socket2.default.listen(app);

	  io.on('connection', function (socket) {
	    // socket actions
	    socket.on('action', function () {
	      socket.emit('action', 'hi there');
	    });
	  });
	};

	exports.default = listen;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = {
		"manifest": {
			"js": "manifest.762f7b362379a0214e7a.js"
		},
		"vendor": {
			"js": "vendor.480d1871966d87eea177.js"
		},
		"app": {
			"js": "app.c496ddec09bc10b3421c.js"
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("radium");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("react-helmet");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("redux-persist");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ }
/******/ ]);