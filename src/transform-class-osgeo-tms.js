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

class TransformClassTMS {
  constructor(levelRange_max, LevelRange_min) {
    this.levelMax = levelRange_max;
    this.levelMin = LevelRange_min;
  }

  /*
   * 某一瓦片等级下瓦片地图X轴(Y轴)上的瓦片数目
   */
  _getMapSize(level) {
    return Math.pow(2, level);
  }

  /*
   * 分辨率，表示水平方向上一个像素点代表的真实距离(m)
   */
  getResolution(latitude, level){
    let resolution = 6378137.0 * 2 * Math.PI * Math.cos(latitude) / 256 / this._getMapSize(level);
    return resolution;
  }

  _lngToTileX(longitude, level) {
    let x = (longitude + 180) / 360;
    let tileX = Math.floor(x * this._getMapSize(level));

    /**
     * 限定边界值, 解决 longitude=180 时边界值错误
     */
    tileX = Math.min(tileX, Math.pow(2, level) - 1);

    return tileX;
  }

  _latToTileY(latitude, level) {
    let lat_rad = latitude * Math.PI / 180;
    let y = (1 + Math.log(Math.tan(lat_rad) + 1 / Math.cos(lat_rad)) / Math.PI)/2;
    let tileY = Math.floor(y * this._getMapSize(level));
     
    // 代替性算法,使用了一些三角变化，其实完全等价
    //let sinLatitude = Math.sin(latitude * Math.PI / 180);
    //let y = 0.5 + Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
    //let tileY = Math.floor(y * this._getMapSize(level));

    return tileY;
  }

  /*
   * 从经纬度获取某一级别瓦片坐标编号
   */
  lnglatToTile(longitude, latitude, level) {
    let tileX = this._lngToTileX(longitude, level);
    let tileY = this._latToTileY(latitude, level)

    return {
      tileX,
      tileY
    };
  }

  _lngToPixelX(longitude, level) {
    let x = (longitude + 180) / 360;
    let pixelX = Math.floor(x * this._getMapSize(level) * 256 % 256);

    return pixelX;
  }

  _latToPixelY(latitude, level) {
    let sinLatitude = Math.sin(latitude * Math.PI / 180);
    let y = 0.5 + Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
    let pixelY = 255 - Math.floor(y * this._getMapSize(level) * 256 % 256);

    return pixelY;
  }

  /*
   * 从经纬度获取点在某一级别瓦片中的像素坐标
   */
  lnglatToPixel(longitude, latitude, level) {
    let pixelX = this._lngToPixelX(longitude, level);
    let pixelY = this._latToPixelY(latitude, level);

    return {
      pixelX,
      pixelY
    };
  }

  _pixelXTolng(pixelX, tileX, level) {
    let pixelXToTileAddition = pixelX / 256.0;
    let lngitude = (tileX + pixelXToTileAddition) / this._getMapSize(level) * 360 - 180;

    return lngitude;
  }

  _pixelYToLat(pixelY, tileY, level) {
    let pixelYToTileAddition = pixelY / 256.0;
    let latitude = Math.atan(_Math_sinh(Math.PI * (-1 + 2 * (tileY + 1 - pixelYToTileAddition) / this._getMapSize(level)))) * 180.0 / Math.PI;

    return latitude;
  }

  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  pixelToLnglat(pixelX, pixelY, tileX, tileY, level) {
    let lng = this._pixelXTolng(pixelX, tileX, level);
    let lat = this._pixelYToLat(pixelY, tileY, level);

    return {
      lng,
      lat
    };
  }
}

export default TransformClassTMS;
