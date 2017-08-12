(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TileLnglatTransform"] = factory();
	else
		root["TileLnglatTransform"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TileLnglatTransformBing = exports.TileLnglatTransformTencent = exports.TileLnglatTransformBaidu = exports.TileLnglatTransformOSM = exports.TileLnglatTransformGoogle = exports.TileLnglatTransformGaode = undefined;

	var _MapLevelRange;

	var _transformClassSlippy = __webpack_require__(1);

	var _transformClassSlippy2 = _interopRequireDefault(_transformClassSlippy);

	var _transformClassBaidu = __webpack_require__(2);

	var _transformClassBaidu2 = _interopRequireDefault(_transformClassBaidu);

	var _transformClassOsgeoTms = __webpack_require__(4);

	var _transformClassOsgeoTms2 = _interopRequireDefault(_transformClassOsgeoTms);

	var _transformClassBing = __webpack_require__(5);

	var _transformClassBing2 = _interopRequireDefault(_transformClassBing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Created by CntChen 2016.04.30
	 * 提供了百度地图、高德地图、谷歌地图经纬度坐标与瓦片坐标的相互转换
	 */

	var MapTypes = {
	  Gaode: 'Gaode',
	  Google: 'Google',
	  Baidu: 'Baidu',
	  OSM: 'OSM',
	  Tencent: 'Tencent',
	  Bing: 'Bing'
	};

	var MapLevelRange = (_MapLevelRange = {}, _defineProperty(_MapLevelRange, MapTypes.Gaode, {
	  min: 1,
	  max: 19
	}), _defineProperty(_MapLevelRange, MapTypes.Google, {
	  min: 0,
	  max: 21
	}), _defineProperty(_MapLevelRange, MapTypes.OSM, {
	  min: 0,
	  max: 19
	}), _defineProperty(_MapLevelRange, MapTypes.Baidu, {
	  min: 3,
	  max: 18
	}), _defineProperty(_MapLevelRange, MapTypes.Tencent, {
	  min: 3,
	  max: 19
	}), _defineProperty(_MapLevelRange, MapTypes.Bing, {
	  min: 3,
	  max: 19
	}), _MapLevelRange);

	var TileLnglatTransformGaode = new _transformClassSlippy2.default(MapLevelRange[MapTypes.Gaode].max, MapLevelRange[MapTypes.Gaode].min);
	var TileLnglatTransformGoogle = new _transformClassSlippy2.default(MapLevelRange[MapTypes.Google].max, MapLevelRange[MapTypes.Google].min);
	var TileLnglatTransformOSM = new _transformClassSlippy2.default(MapLevelRange[MapTypes.OSM].max, MapLevelRange[MapTypes.OSM].min);

	var TileLnglatTransformBaidu = new _transformClassBaidu2.default(MapLevelRange[MapTypes.Baidu].max, MapLevelRange[MapTypes.Baidu].min);

	var TileLnglatTransformTencent = new _transformClassOsgeoTms2.default(MapLevelRange[MapTypes.Tencent].max, MapLevelRange[MapTypes.Tencent].mi);

	var TileLnglatTransformBing = new _transformClassBing2.default(MapLevelRange[MapTypes.Bing].max, MapLevelRange[MapTypes.Bing].min);

	// uglifyJS时保持字段名称
	exports.TileLnglatTransformGaode = TileLnglatTransformGaode;
	exports.TileLnglatTransformGoogle = TileLnglatTransformGoogle;
	exports.TileLnglatTransformOSM = TileLnglatTransformOSM;
	exports.TileLnglatTransformBaidu = TileLnglatTransformBaidu;
	exports.TileLnglatTransformTencent = TileLnglatTransformTencent;
	exports.TileLnglatTransformBing = TileLnglatTransformBing;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * Created by CntChen 2016.04.30
	 * 参考资料：http://wiki.openstreetmap.org/wiki/Slippy_map_tilenames
	 * 适用地图：高德，Google Map，OSM
	 */

	function _Math_sinh(x) {
	  return (Math.exp(x) - Math.exp(-x)) / 2;
	}

	var TransformClassNormal = function () {
	  function TransformClassNormal(levelRange_max, LevelRange_min) {
	    _classCallCheck(this, TransformClassNormal);

	    this.levelMax = levelRange_max;
	    this.levelMin = LevelRange_min;
	  }

	  /*
	   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
	   */


	  _createClass(TransformClassNormal, [{
	    key: "_getMapSize",
	    value: function _getMapSize(level) {
	      return Math.pow(2, level);
	    }

	    /*
	     * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
	     */

	  }, {
	    key: "getResolution",
	    value: function getResolution(latitude, level) {
	      var resolution = 6378137.0 * 2 * Math.PI * Math.cos(latitude) / 256 / this._getMapSize(level);
	      return resolution;
	    }
	  }, {
	    key: "_lngToTileX",
	    value: function _lngToTileX(longitude, level) {
	      var x = (longitude + 180) / 360;
	      var tileX = Math.floor(x * this._getMapSize(level));
	      return tileX;
	    }
	  }, {
	    key: "_latToTileY",
	    value: function _latToTileY(latitude, level) {
	      var lat_rad = latitude * Math.PI / 180;
	      var y = (1 - Math.log(Math.tan(lat_rad) + 1 / Math.cos(lat_rad)) / Math.PI) / 2;
	      var tileY = Math.floor(y * this._getMapSize(level));

	      // 代替性算法,使用了一些三角变化，其实完全等价
	      //let sinLatitude = Math.sin(latitude * Math.PI / 180);
	      //let y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
	      //let tileY = Math.floor(y * this._getMapSize(level));

	      return tileY;
	    }

	    /*
	     * 从经纬度获取某一级别瓦片坐标编号
	     */

	  }, {
	    key: "lnglatToTile",
	    value: function lnglatToTile(longitude, latitude, level) {
	      var tileX = this._lngToTileX(longitude, level);
	      var tileY = this._latToTileY(latitude, level);

	      return {
	        tileX: tileX,
	        tileY: tileY
	      };
	    }
	  }, {
	    key: "_lngToPixelX",
	    value: function _lngToPixelX(longitude, level) {
	      var x = (longitude + 180) / 360;
	      var pixelX = Math.floor(x * this._getMapSize(level) * 256 % 256);

	      return pixelX;
	    }
	  }, {
	    key: "_latToPixelY",
	    value: function _latToPixelY(latitude, level) {
	      var sinLatitude = Math.sin(latitude * Math.PI / 180);
	      var y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
	      var pixelY = Math.floor(y * this._getMapSize(level) * 256 % 256);

	      return pixelY;
	    }

	    /*
	     * 从经纬度获取点在某一级别瓦片中的像素坐标
	     */

	  }, {
	    key: "lnglatToPixel",
	    value: function lnglatToPixel(longitude, latitude, level) {
	      var pixelX = this._lngToPixelX(longitude, level);
	      var pixelY = this._latToPixelY(latitude, level);

	      return {
	        pixelX: pixelX,
	        pixelY: pixelY
	      };
	    }
	  }, {
	    key: "_pixelXTolng",
	    value: function _pixelXTolng(pixelX, tileX, level) {
	      var pixelXToTileAddition = pixelX / 256.0;
	      var lngitude = (tileX + pixelXToTileAddition) / this._getMapSize(level) * 360 - 180;

	      return lngitude;
	    }
	  }, {
	    key: "_pixelYToLat",
	    value: function _pixelYToLat(pixelY, tileY, level) {
	      var pixelYToTileAddition = pixelY / 256.0;
	      var latitude = Math.atan(_Math_sinh(Math.PI * (1 - 2 * (tileY + pixelYToTileAddition) / this._getMapSize(level)))) * 180.0 / Math.PI;

	      return latitude;
	    }

	    /*
	     * 从某一瓦片的某一像素点到经纬度
	     */

	  }, {
	    key: "pixelToLnglat",
	    value: function pixelToLnglat(pixelX, pixelY, tileX, tileY, level) {
	      var lng = this._pixelXTolng(pixelX, tileX, level);
	      var lat = this._pixelYToLat(pixelY, tileY, level);

	      return {
	        lng: lng,
	        lat: lat
	      };
	    }
	  }]);

	  return TransformClassNormal;
	}();

	exports.default = TransformClassNormal;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by CntChen 2016.05.04
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 坐标相关参考文章：
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.cnblogs.com/jz1108/archive/2011/07/02/2095376.html
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * http://www.cnblogs.com/janehlp/archive/2012/08/27/2658106.html
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 适用地图：百度
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _nodeBaidusdk = __webpack_require__(3);

	var _nodeBaidusdk2 = _interopRequireDefault(_nodeBaidusdk);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TransformClassBaidu = function () {
	  function TransformClassBaidu(levelRange_max, LevelRange_min) {
	    _classCallCheck(this, TransformClassBaidu);

	    this.levelMax = levelRange_max;
	    this.levelMin = LevelRange_min;

	    this.projection = new _nodeBaidusdk2.default.MercatorProjection();
	  }

	  _createClass(TransformClassBaidu, [{
	    key: '_getRetain',
	    value: function _getRetain(level) {
	      return Math.pow(2, level - 18);
	    }

	    /*
	     * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
	     * 百度地图18级时的平面坐标就是地图距离原点的距离(m)
	     * 使用{lng:180, lat:0}时候的pointX是否等于地球赤道长一半来验证
	     */

	  }, {
	    key: 'getResolution',
	    value: function getResolution(latitude, level) {
	      return Math.pow(2, 18 - level) * Math.cos(latitude);
	    }

	    /*
	     * 从经纬度到百度平面坐标
	     */

	  }, {
	    key: 'lnglatToPoint',
	    value: function lnglatToPoint(longitude, latitude) {
	      var lnglat = new _nodeBaidusdk2.default.Point(longitude, latitude);
	      var point = this.projection.lngLatToPoint(lnglat);

	      // 提取对象的字段并返回
	      return {
	        pointX: point.x,
	        pointY: point.y
	      };
	    }

	    /*
	     * 从百度平面坐标到经纬度
	     */

	  }, {
	    key: 'pointToLnglat',
	    value: function pointToLnglat(pointX, pointY) {
	      var point = new _nodeBaidusdk2.default.Pixel(pointX, pointY);
	      var lnglat = this.projection.pointToLngLat(point);

	      // 不直接返回lnglat对象，因为该对象在百SDK中还有其他属性和方法
	      // 提取对象的字段后，与其他地图平台统一Lnglat的格式
	      return {
	        lng: lnglat.lng,
	        lat: lnglat.lat
	      };
	    }
	  }, {
	    key: '_lngToTileX',
	    value: function _lngToTileX(longitude, level) {
	      var point = this.lnglatToPoint(longitude, 0);
	      var tileX = Math.floor(point.pointX * this._getRetain(level) / 256);

	      return tileX;
	    }
	  }, {
	    key: '_latToTileY',
	    value: function _latToTileY(latitude, level) {
	      var point = this.lnglatToPoint(0, latitude);
	      var tileY = Math.floor(point.pointY * this._getRetain(level) / 256);

	      return tileY;
	    }

	    /*
	     * 从经纬度获取某一级别瓦片编号
	     */

	  }, {
	    key: 'lnglatToTile',
	    value: function lnglatToTile(longitude, latitude, level) {
	      var tileX = this._lngToTileX(longitude, level);
	      var tileY = this._latToTileY(latitude, level);

	      return {
	        tileX: tileX,
	        tileY: tileY
	      };
	    }
	  }, {
	    key: '_lngToPixelX',
	    value: function _lngToPixelX(longitude, level) {
	      var tileX = this._lngToTileX(longitude, level);
	      var point = this.lnglatToPoint(longitude, 0);
	      var pixelX = Math.floor(point.pointX * this._getRetain(level) - tileX * 256);

	      return pixelX;
	    }
	  }, {
	    key: '_latToPixelY',
	    value: function _latToPixelY(latitude, level) {
	      var tileY = this._latToTileY(latitude, level);
	      var point = this.lnglatToPoint(0, latitude);
	      var pixelY = Math.floor(point.pointY * this._getRetain(level) - tileY * 256);

	      return pixelY;
	    }

	    /*
	     * 从经纬度到瓦片的像素坐标
	     */

	  }, {
	    key: 'lnglatToPixel',
	    value: function lnglatToPixel(longitude, latitude, level) {
	      var pixelX = this._lngToPixelX(longitude, level);
	      var pixelY = this._latToPixelY(latitude, level);

	      return {
	        pixelX: pixelX,
	        pixelY: pixelY
	      };
	    }
	  }, {
	    key: '_pixelXToLng',
	    value: function _pixelXToLng(pixelX, tileX, level) {
	      var pointX = (tileX * 256 + pixelX) / this._getRetain(level);
	      var lnglat = this.pointToLnglat(pointX, 0);

	      return lnglat.lng;
	    }
	  }, {
	    key: '_pixelYToLat',
	    value: function _pixelYToLat(pixelY, tileY, level) {
	      var pointY = (tileY * 256 + pixelY) / this._getRetain(level);
	      var lnglat = this.pointToLnglat(0, pointY);

	      return lnglat.lat;
	    }

	    /*
	     * 从某一瓦片的某一像素点到经纬度
	     */

	  }, {
	    key: 'pixelToLnglat',
	    value: function pixelToLnglat(pixelX, pixelY, tileX, tileY, level) {
	      var pointX = (tileX * 256 + pixelX) / this._getRetain(level);
	      var pointY = (tileY * 256 + pixelY) / this._getRetain(level);
	      var lnglat = this.pointToLnglat(pointX, pointY);

	      return lnglat;
	    }
	  }]);

	  return TransformClassBaidu;
	}();

	exports.default = TransformClassBaidu;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Created by CntChen 2016.05.04
	 * 从百度JavaScritp API v2.0 抽取代码,并作少量命名修改
	 * http://lbsyun.baidu.com/index.php?title=jspopular
	 * http://api.map.baidu.com/getscript?v=2.0&ak=E4805d16520de693a3fe707cdc962045&t=20160503160001
	 */

	// ----- Baidu API start

	// util function
	function Extend(a, b) {
	  for (var c in b) {
	    b.hasOwnProperty(c) && (a[c] = b[c]);
	  }return a;
	};

	function S(a, b) {
	  for (var c in b) {
	    a[c] = b[c];
	  }
	}

	function Xa(a) {
	  return "string" == typeof a;
	}

	var j = void 0,
	    o = !0,
	    p = null,
	    q = !1;

	// Point
	function H(a, b) {
	  isNaN(a) && (a = Ib(a), a = isNaN(a) ? 0 : a);
	  Xa(a) && (a = parseFloat(a));
	  isNaN(b) && (b = Ib(b), b = isNaN(b) ? 0 : b);
	  Xa(b) && (b = parseFloat(b));
	  this.lng = a;
	  this.lat = b;
	}
	H.TL = function (a) {
	  return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat;
	};
	H.prototype.lb = function (a) {
	  return a && this.lat == a.lat && this.lng == a.lng;
	};

	// Pixel
	function Q(a, b) {
	  this.x = a || 0;
	  this.y = b || 0;
	  this.x = this.x;
	  this.y = this.y;
	}
	Q.prototype.lb = function (a) {
	  return a && a.x == this.x && a.y == this.y;
	};

	// MercatorProjection
	function fc() {}
	fc.prototype.nh = function () {
	  aa("lngLatToPoint方法未实现");
	};
	fc.prototype.wi = function () {
	  aa("pointToLngLat方法未实现");
	};

	function R() {}
	R.prototype = new fc();
	Extend(R, {
	  $O: 6370996.81,
	  lG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
	  Au: [75, 60, 45, 30, 15, 0],
	  fP: [[1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7], [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7], [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37], [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06], [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4], [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]],
	  iG: [[-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5], [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5], [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5], [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]],
	  Z1: function Z1(a, b) {
	    if (!a || !b) return 0;
	    var c,
	        d,
	        a = this.Fb(a);
	    if (!a) return 0;
	    c = this.Tk(a.lng);
	    d = this.Tk(a.lat);
	    b = this.Fb(b);
	    return !b ? 0 : this.Pe(c, this.Tk(b.lng), d, this.Tk(b.lat));
	  },
	  Vo: function Vo(a, b) {
	    if (!a || !b) return 0;
	    a.lng = this.JD(a.lng, -180, 180);
	    a.lat = this.ND(a.lat, -74, 74);
	    b.lng = this.JD(b.lng, -180, 180);
	    b.lat = this.ND(b.lat, -74, 74);
	    return this.Pe(this.Tk(a.lng), this.Tk(b.lng), this.Tk(a.lat), this.Tk(b.lat));
	  },
	  Fb: function Fb(a) {
	    if (a === p || a === j) return new H(0, 0);
	    var b, c;
	    b = new H(Math.abs(a.lng), Math.abs(a.lat));
	    for (var d = 0; d < this.lG.length; d++) {
	      if (b.lat >= this.lG[d]) {
	        c = this.fP[d];
	        break;
	      }
	    }a = this.gK(a, c);
	    return a = new H(a.lng.toFixed(6), a.lat.toFixed(6));
	  },
	  Eb: function Eb(a) {
	    if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new H(0, 0);
	    var b, c;
	    a.lng = this.JD(a.lng, -180, 180);
	    a.lat = this.ND(a.lat, -74, 74);
	    b = new H(a.lng, a.lat);
	    for (var d = 0; d < this.Au.length; d++) {
	      if (b.lat >= this.Au[d]) {
	        c = this.iG[d];
	        break;
	      }
	    } // 对疑似bug的修改 start
	    // by CntChen 2016.05.08
	    // @2016-09-19 已经得到官方确认为bug：https://cntchen.github.io/2016/05/09/%E7%99%BE%E5%BA%A6JavaScirpt%20%20API%E4%B8%AD%E7%BB%8F%E7%BA%AC%E5%BA%A6%E5%9D%90%E6%A0%87%E8%BD%AC%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87bug/
	    if (!c) for (d = 0; d < this.Au.length; d++) {
	      if (b.lat <= -this.Au[d]) {
	        c = this.iG[d];
	        break;
	      }
	    } // 对疑似bug的修改 end

	    // Baidu JavaScript 中原本代码, 2016.05.08依然如此
	    // if (!c)
	    //   for (d = this.Au.length - 1; 0 <= d; d--)
	    //     if (b.lat <= -this.Au[d]) {
	    //       c = this.iG[d];
	    //       break
	    //     }
	    // Baidu JavaScript 中原本代码 end

	    a = this.gK(a, c);
	    return a = new H(a.lng.toFixed(2), a.lat.toFixed(2));
	  },
	  gK: function gK(a, b) {
	    if (a && b) {
	      var c = b[0] + b[1] * Math.abs(a.lng),
	          d = Math.abs(a.lat) / b[9],
	          d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
	          c = c * (0 > a.lng ? -1 : 1),
	          d = d * (0 > a.lat ? -1 : 1);
	      return new H(c, d);
	    }
	  },
	  Pe: function Pe(a, b, c, d) {
	    return this.$O * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a));
	  },
	  Tk: function Tk(a) {
	    return Math.PI * a / 180;
	  },
	  Z3: function Z3(a) {
	    return 180 * a / Math.PI;
	  },
	  ND: function ND(a, b, c) {
	    b != p && (a = Math.max(a, b));
	    c != p && (a = Math.min(a, c));
	    return a;
	  },
	  JD: function JD(a, b, c) {
	    for (; a > c;) {
	      a -= c - b;
	    }for (; a < b;) {
	      a += c - b;
	    }return a;
	  }
	});
	Extend(R.prototype, {
	  Jm: function Jm(a) {
	    return R.Eb(a);
	  },
	  nh: function nh(a) {
	    a = R.Eb(a);
	    return new Q(a.lng, a.lat);
	  },
	  qh: function qh(a) {
	    return R.Fb(a);
	  },
	  wi: function wi(a) {
	    a = new H(a.x, a.y);
	    return R.Fb(a);
	  },
	  fc: function fc(a, b, c, d, e) {
	    if (a) return a = this.Jm(a, e), b = this.Lc(b), new Q(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2));
	  },
	  zb: function zb(a, b, c, d, e) {
	    if (a) return b = this.Lc(b), this.qh(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e);
	  },
	  Lc: function Lc(a) {
	    return Math.pow(2, 18 - a);
	  }
	});

	var Je = R.prototype;
	S(Je, {
	  lngLatToPoint: Je.nh,
	  pointToLngLat: Je.wi
	});

	// ----- Baidu API end

	var BMap = {
	  Point: H,
	  Pixel: Q,
	  MercatorProjection: R
	};

	exports.default = BMap;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * Created by CntChen 2017.03.06
	 * OSGEO TMS 标准，其坐标与Google瓦片坐标的tileY有差异
	 * 对比：http://www.maptiler.org/google-maps-coordinates-tile-bounds-projection
	 *      http://2010.foss4g.org/presentations/3653.pdf 
	 * 转换：https://alastaira.wordpress.com/2011/07/06/converting-tms-tile-coordinates-to-googlebingosm-tile-coordinates/
	 * 标准：http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification
	 *      http://wiki.openstreetmap.org/wiki/TMS
	 * 适用地图：腾讯
	 * http://blog.csdn.net/mygisforum/article/details/22997879
	 */

	function _Math_sinh(x) {
	  return (Math.exp(x) - Math.exp(-x)) / 2;
	}

	var TransformClassTMS = function () {
	  function TransformClassTMS(levelRange_max, LevelRange_min) {
	    _classCallCheck(this, TransformClassTMS);

	    this.levelMax = levelRange_max;
	    this.levelMin = LevelRange_min;
	  }

	  /*
	   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
	   */


	  _createClass(TransformClassTMS, [{
	    key: "_getMapSize",
	    value: function _getMapSize(level) {
	      return Math.pow(2, level);
	    }

	    /*
	     * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
	     */

	  }, {
	    key: "getResolution",
	    value: function getResolution(latitude, level) {
	      var resolution = 6378137.0 * 2 * Math.PI * Math.cos(latitude) / 256 / this._getMapSize(level);
	      return resolution;
	    }
	  }, {
	    key: "_lngToTileX",
	    value: function _lngToTileX(longitude, level) {
	      var x = (longitude + 180) / 360;
	      var tileX = Math.floor(x * this._getMapSize(level));
	      return tileX;
	    }
	  }, {
	    key: "_latToTileY",
	    value: function _latToTileY(latitude, level) {
	      var lat_rad = latitude * Math.PI / 180;
	      var y = (1 + Math.log(Math.tan(lat_rad) + 1 / Math.cos(lat_rad)) / Math.PI) / 2;
	      var tileY = Math.floor(y * this._getMapSize(level));

	      // 代替性算法,使用了一些三角变化，其实完全等价
	      //let sinLatitude = Math.sin(latitude * Math.PI / 180);
	      //let y = 0.5 + Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
	      //let tileY = Math.floor(y * this._getMapSize(level));

	      return tileY;
	    }

	    /*
	     * 从经纬度获取某一级别瓦片坐标编号
	     */

	  }, {
	    key: "lnglatToTile",
	    value: function lnglatToTile(longitude, latitude, level) {
	      var tileX = this._lngToTileX(longitude, level);
	      var tileY = this._latToTileY(latitude, level);

	      return {
	        tileX: tileX,
	        tileY: tileY
	      };
	    }
	  }, {
	    key: "_lngToPixelX",
	    value: function _lngToPixelX(longitude, level) {
	      var x = (longitude + 180) / 360;
	      var pixelX = Math.floor(x * this._getMapSize(level) * 256 % 256);

	      return pixelX;
	    }
	  }, {
	    key: "_latToPixelY",
	    value: function _latToPixelY(latitude, level) {
	      var sinLatitude = Math.sin(latitude * Math.PI / 180);
	      var y = 0.5 + Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
	      var pixelY = 255 - Math.floor(y * this._getMapSize(level) * 256 % 256);

	      return pixelY;
	    }

	    /*
	     * 从经纬度获取点在某一级别瓦片中的像素坐标
	     */

	  }, {
	    key: "lnglatToPixel",
	    value: function lnglatToPixel(longitude, latitude, level) {
	      var pixelX = this._lngToPixelX(longitude, level);
	      var pixelY = this._latToPixelY(latitude, level);

	      return {
	        pixelX: pixelX,
	        pixelY: pixelY
	      };
	    }
	  }, {
	    key: "_pixelXTolng",
	    value: function _pixelXTolng(pixelX, tileX, level) {
	      var pixelXToTileAddition = pixelX / 256.0;
	      var lngitude = (tileX + pixelXToTileAddition) / this._getMapSize(level) * 360 - 180;

	      return lngitude;
	    }
	  }, {
	    key: "_pixelYToLat",
	    value: function _pixelYToLat(pixelY, tileY, level) {
	      var pixelYToTileAddition = pixelY / 256.0;
	      var latitude = Math.atan(_Math_sinh(Math.PI * (-1 + 2 * (tileY + 1 - pixelYToTileAddition) / this._getMapSize(level)))) * 180.0 / Math.PI;

	      return latitude;
	    }

	    /*
	     * 从某一瓦片的某一像素点到经纬度
	     */

	  }, {
	    key: "pixelToLnglat",
	    value: function pixelToLnglat(pixelX, pixelY, tileX, tileY, level) {
	      var lng = this._pixelXTolng(pixelX, tileX, level);
	      var lat = this._pixelYToLat(pixelY, tileY, level);

	      return {
	        lng: lng,
	        lat: lat
	      };
	    }
	  }]);

	  return TransformClassTMS;
	}();

	exports.default = TransformClassTMS;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _transformClassSlippy = __webpack_require__(1);

	var _transformClassSlippy2 = _interopRequireDefault(_transformClassSlippy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by CntChen 2017.03.09
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 参考资料： https://msdn.microsoft.com/en-us/library/bb259689.aspx
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 适用地图： bing 地图 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

	var TransformClassBing = function (_TransformClassSlippy) {
	  _inherits(TransformClassBing, _TransformClassSlippy);

	  function TransformClassBing(levelRange_max, LevelRange_min) {
	    _classCallCheck(this, TransformClassBing);

	    return _possibleConstructorReturn(this, (TransformClassBing.__proto__ || Object.getPrototypeOf(TransformClassBing)).call(this, levelRange_max, LevelRange_min));
	  }

	  _createClass(TransformClassBing, [{
	    key: 'lnglatToQuadkey',
	    value: function lnglatToQuadkey(tileX, tileY, level) {
	      var tileX_binary = tileX.toString(2);
	      var tileY_binary = tileY.toString(2);

	      tileX_binary = '0'.repeat(level - tileX_binary.length) + tileX_binary;
	      tileY_binary = '0'.repeat(level - tileY_binary.length) + tileY_binary;

	      var key_binary = '';
	      for (var index = 0; index < level; index++) {
	        key_binary = key_binary + tileY_binary[index] + tileX_binary[index];
	      }

	      key_binary = key_binary.replace(/^0*/, '');
	      var key_decimal = Number.parseInt(key_binary, 2);
	      var quadkey = key_decimal.toString(4);

	      return quadkey;
	    }
	  }, {
	    key: 'quadkeyToLnglat',
	    value: function quadkeyToLnglat(quadkey) {
	      var level = quadkey.length;
	      var key_decimal = Number.parseInt(quadkey, 4);
	      var key_binary = key_decimal.toString(2);
	      if (key_binary.length % 2 != 0) {
	        key_binary = '0' + key_binary;
	      }

	      var tileY_binary = '';
	      var tileX_binary = '';
	      for (var index = 0; index < key_binary.length; index++) {
	        if (index % 2 === 0) {
	          tileY_binary = tileY_binary + key_binary[index];
	        } else {
	          tileX_binary = tileX_binary + key_binary[index];
	        }
	      }

	      var tileY = Number.parseInt(tileY_binary, 2);
	      var tileX = Number.parseInt(tileX_binary, 2);

	      return {
	        tileX: tileX,
	        tileY: tileY,
	        level: level
	      };
	    }
	  }]);

	  return TransformClassBing;
	}(_transformClassSlippy2.default);

	exports.default = TransformClassBing;

/***/ }
/******/ ])
});
;