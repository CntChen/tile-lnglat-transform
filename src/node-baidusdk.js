/*
 * Created by CntChen 2016.05.04
 * 从百度JavaScritp API v2.0 抽取代码,并作少量命名修改
 * http://lbsyun.baidu.com/index.php?title=jspopular
 * http://api.map.baidu.com/getscript?v=2.0&ak=E4805d16520de693a3fe707cdc962045&t=20160503160001
 */

// ----- Baidu API start

// util function
function Extend(a, b) {
  for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
  return a
};

function S(a, b) {
  for (var c in b) a[c] = b[c]
}

function Xa(a) {
  return "string" == typeof a
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
  this.lat = b
}
H.TL = function(a) {
  return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
};
H.prototype.lb = function(a) {
  return a && this.lat == a.lat && this.lng == a.lng
};

// Pixel
function Q(a, b) {
  this.x = a || 0;
  this.y = b || 0;
  this.x = this.x;
  this.y = this.y
}
Q.prototype.lb = function(a) {
  return a && a.x == this.x && a.y == this.y
};

// MercatorProjection
function fc() {}
fc.prototype.nh = function() {
  aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
};
fc.prototype.wi = function() {
  aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
};

function R() {}
R.prototype = new fc;
Extend(R, {
  $O: 6370996.81,
  lG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
  Au: [75, 60, 45, 30, 15, 0],
  fP: [
    [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
    [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
    [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
    [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
    [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
    [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
  ],
  iG: [
    [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
    [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
    [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
    [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
    [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
    [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
  ],
  Z1: function(a, b) {
    if (!a || !b) return 0;
    var c, d, a = this.Fb(a);
    if (!a) return 0;
    c = this.Tk(a.lng);
    d = this.Tk(a.lat);
    b = this.Fb(b);
    return !b ? 0 : this.Pe(c, this.Tk(b.lng), d, this.Tk(b.lat))
  },
  Vo: function(a, b) {
    if (!a || !b) return 0;
    a.lng = this.JD(a.lng, -180, 180);
    a.lat = this.ND(a.lat, -74, 74);
    b.lng = this.JD(b.lng, -180, 180);
    b.lat = this.ND(b.lat, -74, 74);
    return this.Pe(this.Tk(a.lng), this.Tk(b.lng), this.Tk(a.lat), this.Tk(b.lat))
  },
  Fb: function(a) {
    if (a === p || a === j) return new H(0, 0);
    var b, c;
    b = new H(Math.abs(a.lng), Math.abs(a.lat));
    for (var d = 0; d < this.lG.length; d++)
      if (b.lat >= this.lG[d]) {
        c = this.fP[d];
        break
      }
    a = this.gK(a, c);
    return a = new H(a.lng.toFixed(6), a.lat.toFixed(6))
  },
  Eb: function(a) {
    if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new H(0, 0);
    var b, c;
    a.lng = this.JD(a.lng, -180, 180);
    a.lat = this.ND(a.lat, -74, 74);
    b = new H(a.lng, a.lat);
    for (var d = 0; d < this.Au.length; d++)
      if (b.lat >= this.Au[d]) {
        c = this.iG[d];
        break
      }

    // 对疑似bug的修改 start
    // by CntChen 2016.05.08
    // @2016-09-19 已经得到官方确认为bug：https://cntchen.github.io/2016/05/09/%E7%99%BE%E5%BA%A6JavaScirpt%20%20API%E4%B8%AD%E7%BB%8F%E7%BA%AC%E5%BA%A6%E5%9D%90%E6%A0%87%E8%BD%AC%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87bug/
    if (!c)
      for (d = 0; d < this.Au.length; d++)
        if (b.lat <= -this.Au[d]) {
          c = this.iG[d];
          break
        }
    // 对疑似bug的修改 end

    // Baidu JavaScript 中原本代码, 2016.05.08依然如此
    // if (!c)
    //   for (d = this.Au.length - 1; 0 <= d; d--)
    //     if (b.lat <= -this.Au[d]) {
    //       c = this.iG[d];
    //       break
    //     }
    // Baidu JavaScript 中原本代码 end

    a = this.gK(a, c);
    return a = new H(a.lng.toFixed(2), a.lat.toFixed(2))
  },
  gK: function(a, b) {
    if (a && b) {
      var c = b[0] + b[1] * Math.abs(a.lng),
        d = Math.abs(a.lat) / b[9],
        d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
        c = c * (0 > a.lng ? -1 : 1),
        d = d * (0 > a.lat ? -1 : 1);
      return new H(c, d)
    }
  },
  Pe: function(a, b, c, d) {
    return this.$O * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
  },
  Tk: function(a) {
    return Math.PI * a / 180
  },
  Z3: function(a) {
    return 180 * a / Math.PI
  },
  ND: function(a, b, c) {
    b != p && (a = Math.max(a, b));
    c != p && (a = Math.min(a, c));
    return a
  },
  JD: function(a, b, c) {
    for (; a > c;) a -= c - b;
    for (; a < b;) a += c - b;
    return a
  }
});
Extend(R.prototype, {
  Jm: function(a) {
    return R.Eb(a)
  },
  nh: function(a) {
    a = R.Eb(a);
    return new Q(a.lng, a.lat)
  },
  qh: function(a) {
    return R.Fb(a)
  },
  wi: function(a) {
    a = new H(a.x, a.y);
    return R.Fb(a)
  },
  fc: function(a, b, c, d, e) {
    if (a) return a = this.Jm(a, e), b = this.Lc(b), new Q(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
  },
  zb: function(a, b, c, d, e) {
    if (a) return b = this.Lc(b), this.qh(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
  },
  Lc: function(a) {
    return Math.pow(2, 18 - a)
  }
});

var Je = R.prototype;
S(Je, {
  lngLatToPoint: Je.nh,
  pointToLngLat: Je.wi
});

// ----- Baidu API end

let BMap = {
  Point: H,
  Pixel: Q,
  MercatorProjection: R,
}

export default BMap;