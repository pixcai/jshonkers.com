module.exports =
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

	'use strict';

	var _index = __webpack_require__(6);

	var _index2 = _interopRequireDefault(_index);

	var _koaMount = __webpack_require__(27);

	var _koaMount2 = _interopRequireDefault(_koaMount);

	var _chat = __webpack_require__(14);

	var _chat2 = _interopRequireDefault(_chat);

	var _jshonkers = __webpack_require__(21);

	var _jshonkers2 = _interopRequireDefault(_jshonkers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = new _index2.default();

	app.use((0, _koaMount2.default)(_chat2.default.MOUNT_PATH, new _chat2.default(app)));
	app.listen(_jshonkers2.default.serverConfig.port);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _App2 = __webpack_require__(7);

	var _App3 = _interopRequireDefault(_App2);

	var _serve = __webpack_require__(9);

	var _serve2 = _interopRequireDefault(_serve);

	var _router = __webpack_require__(11);

	var _router2 = _interopRequireDefault(_router);

	var _jshonkers = __webpack_require__(21);

	var _jshonkers2 = _interopRequireDefault(_jshonkers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var JSHonkers = function (_App) {
		_inherits(JSHonkers, _App);

		function JSHonkers() {
			_classCallCheck(this, JSHonkers);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JSHonkers).call(this));

			_this.use((0, _serve2.default)(process.cwd() + _jshonkers2.default.__PUBLIC__)).use(_router2.default.routes()).use(_router2.default.allowedMethods());
			return _this;
		}

		return JSHonkers;
	}(_App3.default);

	exports.default = JSHonkers;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _koa = __webpack_require__(8);

	var _koa2 = _interopRequireDefault(_koa);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var App = function App() {
		_classCallCheck(this, App);

		return Object.create(new _koa2.default());
	};

	exports.default = App;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _koaStatic = __webpack_require__(10);

	var _koaStatic2 = _interopRequireDefault(_koaStatic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _koaStatic2.default;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("koa-static");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Router = __webpack_require__(12);

	var _Router2 = _interopRequireDefault(_Router);

	var _chat = __webpack_require__(14);

	var _chat2 = _interopRequireDefault(_chat);

	var _Index = __webpack_require__(24);

	var _Index2 = _interopRequireDefault(_Index);

	var _jshonkers = __webpack_require__(21);

	var _jshonkers2 = _interopRequireDefault(_jshonkers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
		'/': {
			method: 'GET',
			callback: [function (ctx) {
				ctx.body = (0, _Index2.default)(Object.assign(_jshonkers2.default.tplVars, {
					__CHAT_PATH__: _chat2.default.MOUNT_PATH
				}));
			}]
		}
	};

	exports.default = _Router2.default.fromRoutes(routes);

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _koaRouter = __webpack_require__(13);

	var _koaRouter2 = _interopRequireDefault(_koaRouter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Router = function () {
	  function Router(opts) {
	    _classCallCheck(this, Router);

	    return Object.create(new _koaRouter2.default(opts));
	  }

	  _createClass(Router, null, [{
	    key: 'fromRoutes',
	    value: function fromRoutes(routes, opts) {
	      var methods = Object.keys(routes).map(function (pattern) {
	        return routes[pattern].method.toLowerCase();
	      });

	      return Object.keys(routes).reduce(function (router, pattern, i) {
	        return router[methods[i]].apply(router, [pattern].concat(_toConsumableArray(routes[pattern].callback)));
	      }, new Router(opts));
	    }
	  }]);

	  return Router;
	}();

	exports.default = Router;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("koa-router");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _App2 = __webpack_require__(7);

	var _App3 = _interopRequireDefault(_App2);

	var _router = __webpack_require__(15);

	var _router2 = _interopRequireDefault(_router);

	var _serve = __webpack_require__(9);

	var _serve2 = _interopRequireDefault(_serve);

	var _server = __webpack_require__(22);

	var _server2 = _interopRequireDefault(_server);

	var _chat = __webpack_require__(19);

	var _chat2 = _interopRequireDefault(_chat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Chat = function (_App) {
		_inherits(Chat, _App);

		function Chat(srv) {
			_classCallCheck(this, Chat);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this));

			_this.use((0, _serve2.default)(_chat2.default.__PUBLIC__)).use(_router2.default.routes()).use(_router2.default.allowedMethods());

			(0, _server2.default)().attach(srv);
			return _this;
		}

		_createClass(Chat, null, [{
			key: 'MOUNT_PATH',
			set: function set(path) {
				this.__MOUNT_PATH__ = path;
			},
			get: function get() {
				return this.__MOUNT_PATH__ || '/'.concat(Chat.name.toLowerCase());
			}
		}]);

		return Chat;
	}(_App3.default);

	exports.default = Chat;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Router = __webpack_require__(12);

	var _Router2 = _interopRequireDefault(_Router);

	var _index = __webpack_require__(14);

	var _index2 = _interopRequireDefault(_index);

	var _views = __webpack_require__(16);

	var _views2 = _interopRequireDefault(_views);

	var _chat = __webpack_require__(19);

	var _chat2 = _interopRequireDefault(_chat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
	  '/': {
	    method: 'GET',
	    callback: [function (ctx) {
	      ctx.body = (0, _views2.default)(Object.assign(_chat2.default.tplVars, {
	        __MOUNT_PATH__: _index2.default.MOUNT_PATH
	      }));
	    }]
	  }
	};

	exports.default = _Router2.default.fromRoutes(routes);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(17);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (__MOUNT_PATH__) {pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"zh-cmn-Hans\"\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"X-UA-Compatible\" content=\"IE=edge, Chrome=1\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"\u003E\u003Cmeta name=\"author\" content=\"JSHonkers, https:\u002F\u002Fgithub.com\u002FJSHonkers\u002Fjshonkers.com\"\u003E\u003Cmeta name=\"description\" content=\"A technical community concerned with JavaScript\"\u003E\u003Clink rel=\"stylesheet\" href=\"\u002F\u002Fcdn.bootcss.com\u002Fnormalize\u002F4.2.0\u002Fnormalize.min.css\"\u003E\u003Clink rel=\"stylesheet\" href=\"\u002F\u002Fcdn.bootcss.com\u002Fflexboxgrid\u002F6.3.0\u002Fflexboxgrid.min.css\"\u003E\u003Clink" + (" rel=\"stylesheet\""+pug.attr("href", __MOUNT_PATH__ + "/css/chat.min.css", true, true)) + "\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Ch1\u003EHello, IM!\u003C\u002Fh1\u003E\u003Cscript src=\"\u002F\u002Fcdn.bootcss.com\u002Fvue\u002F1.0.26\u002Fvue.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript src=\"\u002F\u002Fcdn.bootcss.com\u002Fsocket.io\u002F1.4.8\u002Fsocket.io.min.js\"\u003E\u003C\u002Fscript\u003E\u003Cscript" + (pug.attr("src", __MOUNT_PATH__ + "/js/client.min.js", true, true)) + "\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"__MOUNT_PATH__" in locals_for_with?locals_for_with.__MOUNT_PATH__:typeof __MOUNT_PATH__!=="undefined"?__MOUNT_PATH__:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + (valA && valB && ';') + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '', delim = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + delim + style + ':' + val[style];
	        delim = ';';
	      }
	    }
	    return out;
	  } else {
	    val = '' + val;
	    if (val[val.length - 1] === ';') return val.slice(0, -1);
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(18).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _path = __webpack_require__(20);

	var _jshonkers = __webpack_require__(21);

	var _jshonkers2 = _interopRequireDefault(_jshonkers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		__PUBLIC__: __dirname + '/' + (0, _path.basename)(_jshonkers2.default.__PUBLIC__),
		tplVars: {},
		serverConfig: {}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, "builtins/chat"))

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 21 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		serverConfig: {
			port: 3000
		},
		__PUBLIC__: __dirname + "/public",
		tplVars: {}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _socket = __webpack_require__(23);

	var _socket2 = _interopRequireDefault(_socket);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (opts) {
		return new _socket2.default(opts);
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("socket.io");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(17);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"zh-cmn-Hans\"\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"X-UA-Compatible\" content=\"IE=edge, Chrome=1\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\"\u003E\u003Cmeta name=\"author\" content=\"JSHonkers, https:\u002F\u002Fgithub.com\u002FJSHonkers\u002Fjshonkers.com\"\u003E\u003Cmeta name=\"description\" content=\"A technical community concerned with JavaScript\"\u003E\u003Clink rel=\"stylesheet\" href=\"\u002F\u002Fcdn.bootcss.com\u002Fnormalize\u002F4.2.0\u002Fnormalize.min.css\"\u003E\u003Clink rel=\"stylesheet\" href=\"\u002F\u002Fcdn.bootcss.com\u002Fflexboxgrid\u002F6.3.0\u002Fflexboxgrid.min.css\"\u003E\u003Clink rel=\"stylesheet\" href=\"\u002F\u002Fcdn.bootcss.com\u002Fhover.css\u002F2.0.2\u002Fcss\u002Fhover-min.css\"\u003E\u003Clink rel=\"stylesheet\" href=\"\u002F\u002Fcdn.bootcss.com\u002Fpace\u002F1.0.1\u002Fthemes\u002Fblack\u002Fpace-theme-minimal.min.css\"\u003E\u003Cscript src=\"\u002F\u002Fcdn.bootcss.com\u002Fpace\u002F1.0.2\u002Fpace.min.js\"\u003E\u003C\u002Fscript\u003E\u003Clink rel=\"stylesheet\" href=\"\u002Fcss\u002Findex.min.css\"\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E" + (null == (pug_interp = __webpack_require__(25).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(26).call(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
	module.exports = template;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(17);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (__CHAT_PATH__) {pug_html = pug_html + "\u003Cheader class=\"row\"\u003E\u003Cdiv class=\"col-xs\"\u003E\u003Cnav class=\"row\"\u003E\u003Ca class=\"hvr-underline-from-center col-xs nav-link\" href=\"\u002F\"\u003EHome\u003C\u002Fa\u003E\u003Ca" + (" class=\"hvr-underline-from-center col-xs nav-link\""+pug.attr("href", __CHAT_PATH__, true, true)) + "\u003EChat\u003C\u002Fa\u003E\u003Ca class=\"hvr-underline-from-center col-xs nav-link\" href=\"https:\u002F\u002Fgithub.com\u002FJSHonkers\u002Fjshonkers.com\"\u003EGithub\u003C\u002Fa\u003E\u003C\u002Fnav\u003E\u003Chgroup\u003E\u003Ch1\u003EJSHonkers\u003C\u002Fh1\u003E\u003Ch2\u003EA technical community concerned with JavaScript\u003C\u002Fh2\u003E\u003C\u002Fhgroup\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";}.call(this,"__CHAT_PATH__" in locals_for_with?locals_for_with.__CHAT_PATH__:typeof __CHAT_PATH__!=="undefined"?__CHAT_PATH__:undefined));;return pug_html;};
	module.exports = template;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(17);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;return pug_html;};
	module.exports = template;

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("koa-mount");

/***/ }
/******/ ]);