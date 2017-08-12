/*
 * Created by CntChen 2016.05.04
 * 坐标相关参考文章：
 * http://www.cnblogs.com/jz1108/archive/2011/07/02/2095376.html
 * http://www.cnblogs.com/janehlp/archive/2012/08/27/2658106.html
 * 适用地图：百度
 */

import BMap from './node-baidusdk';

class TransformClassBaidu {
  constructor(levelRange_max, LevelRange_min) {
    this.levelMax = levelRange_max;
    this.levelMin = LevelRange_min;

    this.projection = new BMap.MercatorProjection();
  }

  _getRetain(level) {
    return Math.pow(2, (level - 18));
  }

  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   * 百度地图18级时的平面坐标就是地图距离原点的距离(m)
   * 使用{lng:180, lat:0}时候的pointX是否等于地球赤道长一半来验证
   */
  getResolution(latitude, level){
    return Math.pow(2, (18 - level)) * Math.cos(latitude);
  }

  /*
   * 从经纬度到百度平面坐标
   */
  lnglatToPoint(longitude, latitude) {
    let lnglat = new BMap.Point(longitude, latitude);
    let point = this.projection.lngLatToPoint(lnglat);

    // 提取对象的字段并返回
    return {
      pointX: point.x,
      pointY: point.y
    };
  }

  /*
   * 从百度平面坐标到经纬度
   */
  pointToLnglat(pointX, pointY) {
    let point = new BMap.Pixel(pointX, pointY);
    let lnglat = this.projection.pointToLngLat(point);

    // 不直接返回lnglat对象，因为该对象在百SDK中还有其他属性和方法
    // 提取对象的字段后，与其他地图平台统一Lnglat的格式
    return {
      lng: lnglat.lng,
      lat: lnglat.lat
    };
  }

  _lngToTileX(longitude, level) {
    let point = this.lnglatToPoint(longitude, 0);
    let tileX = Math.floor(point.pointX * this._getRetain(level) / 256);

    return tileX;
  }

  _latToTileY(latitude, level) {
    let point = this.lnglatToPoint(0, latitude);
    let tileY = Math.floor(point.pointY * this._getRetain(level) / 256);

    return tileY;
  }

  /*
   * 从经纬度获取某一级别瓦片编号
   */
  lnglatToTile(longitude, latitude, level) {
    let tileX = this._lngToTileX(longitude, level);
    let tileY = this._latToTileY(latitude, level);

    return {
      tileX,
      tileY
    };
  }

  _lngToPixelX(longitude, level) {
    let tileX = this._lngToTileX(longitude, level);
    let point = this.lnglatToPoint(longitude, 0);
    let pixelX = Math.floor(point.pointX * this._getRetain(level) - tileX * 256);

    return pixelX;
  }

  _latToPixelY(latitude, level) {
    let tileY = this._latToTileY(latitude, level);
    let point = this.lnglatToPoint(0, latitude);
    let pixelY = Math.floor(point.pointY * this._getRetain(level) - tileY * 256);

    return pixelY;
  }

  /*
   * 从经纬度到瓦片的像素坐标
   */
  lnglatToPixel(longitude, latitude, level) {
    let pixelX = this._lngToPixelX(longitude, level);
    let pixelY = this._latToPixelY(latitude, level);

    return {
      pixelX,
      pixelY
    };
  }

  _pixelXToLng(pixelX, tileX, level) {
    let pointX = (tileX * 256 + pixelX) / this._getRetain(level);
    let lnglat = this.pointToLnglat(pointX, 0);

    return lnglat.lng;
  }

  _pixelYToLat(pixelY, tileY, level) {
    let pointY = (tileY * 256 + pixelY) / this._getRetain(level);
    let lnglat = this.pointToLnglat(0, pointY);

    return lnglat.lat;
  }

  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(pixelX, pixelY, tileX, tileY, level) {
    let pointX = (tileX * 256 + pixelX) / this._getRetain(level);
    let pointY = (tileY * 256 + pixelY) / this._getRetain(level);
    let lnglat = this.pointToLnglat(pointX, pointY);

    return lnglat;
  }
}

export default TransformClassBaidu;
