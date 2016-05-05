/*
 * 坐标相关参考文章：http://www.cnblogs.com/jz1108/archive/2011/07/02/2095376.html
 */

import BMap from './node-baidusdk';

class TransformClassBaidu {
  constructor(levelRange_max, LevelRange_min) {
    this.levelMax = levelRange_max;
    this.levelMin = LevelRange_min;
  }

  lngLatToPoint(longitude, latitude) {
    var projection = new BMap.MercatorProjection();
    var lngLat = new BMap.Point(longitude, latitude);
    var point = projection.lngLatToPoint(lngLat);
    return point;
  }

  pointToLngLat(pointX, pointY) {
    var point = new BMap.Pixel(pointX, pointY);
    var projection = new BMap.MercatorProjection();
    var lngLat = projection.pointToLngLat(point);
    return lngLat;
  }

  _lngToTileX(longitude, level) {
    var projection = new BMap.MercatorProjection();
    var lngLat = new BMap.Point(longitude, 0);
    var pixel = projection.lngLatToPoint(lngLat);
    var tileX = Math.floor(pixel.x * Math.pow(2, (level - 18)) / 256);
    return tileX;
  }

  _LatToTileY(latitude, level) {
    var projection = new BMap.MercatorProjection();
    var lngLat = new BMap.Point(0, latitude);
    var pixel = projection.lngLatToPoint(lngLat);
    var tileY = Math.floor(pixel.y * Math.pow(2, (level - 18)) / 256);

    return tileY;
  }

  /*
   * 从经纬度获取某一级别瓦片编号
   */
  lngLatToTileXY(longitude, latitude, level) {
    return {
      tileX: this.lngToTileX(longitude, level),
      tileY: this.LatToTileY(latitude, level),
    };
  }

  _lngToPixelX(longitude, level) {
    var tileX = this._lngToTileX(longitude, tileX);
    var projection = new BMap.MercatorProjection();
    var longitudeLat = new BMap.Point(longitude, 0);
    var pixel = projection.lngLatToPoint(lngLat);
    var xPoint = Math.floor(pixel.x * Math.pow(2, (level - 18)) - tileX * 256);
    return xPoint;
  }

  _LatToPixelY(latitude, level) {
    var tileY = this._LatToTileY(latitude, level);
    var projection = new BMap.MercatorProjection();
    var lngLat = new BMap.Point(0, latitude);
    var pixel = projection.lngLatToPoint(lngLat);
    var yPoint = Math.floor(pixel.y * Math.pow(2, (level - 18)) - tileY * 256);
    return yPoint;
  }

  lnglatToPixel(longitude, latitude){
    return {
      pixelX: this._lngToPixelX(longitude, level),
      pixelY: this._LatToPixelY(latitude, level),
    }
  }

  _PixelXTolng(pixelX, tileX, level) {
    var xPoint = (tileX * 256 + pixelX) * Math.pow(2, (18 - level));
    var point = new BMap.Pixel(xPoint, 0);
    var projection = new BMap.MercatorProjection();
    var lngLat = projection.pointToLngLat(point);
    return lngLat.lng;
  }

  _PixelYToLat(pixelY, tileY, level) {
    var yPoint = (tileY * 256 + pixelY) * Math.pow(2, (18 - level));
    var point = new BMap.Pixel(0, yPoint);
    var projection = new BMap.MercatorProjection();
    var lngLat = projection.pointToLngLat(point);
    return lngLat.lat;
  }

  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  PixelXYTolngLat(pixelX, pixelY, tileX, tileY, level) {
    var xPoint = (tileX * 256 + pixelX) * Math.pow(2, (18 - level));
    var yPoint = (tileY * 256 + pixelY) * Math.pow(2, (18 - level));
    var point = new BMap.Pixel(xPoint, yPoint);
    var projection = new BMap.MercatorProjection();
    var lngLat = projection.pointToLngLat(point);
    return lngLat;
  }

  GetRetain(level) {
    return Math.pow(2, (18 - level));
  }

}

export default TransformClassBaidu;