/*
 * Created by CntChen 2016.04.30
 */

function _Math_sinh(x) {
  return (Math.exp(x) - Math.exp(-x)) / 2;
}


class TransformClassNormal {
  constructor(levelRange_max, LevelRange_min) {
    this.levelMax = levelRange_max;
    this.levelMin = LevelRange_min;
  }

  _mapSize(level) {
    return Math.pow(2, level);
  }

  _lngToTileX(longitude, level) {
    let x = (longitude + 180) / 360;
    let tileX = Math.floor(x * _mapSize(level));
    return tileX;
  }

  _LatToTileY(latitude, level) {
    let sinLatitude = Math.sin(latitude * Math.PI / 180);
    let y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
    let tileY = Math.floor(y * _mapSize(level));
    return tileY;
  }

  /*
   * 从经纬度获取某一级别瓦片坐标编号
   */
  lngLatToTileXY(longitude, latitude, level) {
    let tileX = this._lngToTileX(longitude, level);
    let tileY = this._LatToTileY(latitude, level)

    return {
      tileX,
      tileY
    };
  }

  _lngToPixelX(longitude, level) {
    let x = (longitude + 180) / 360;
    let pixelX = ~~(Math.floor(x * _mapSize(level) * 256) % 256);
    return pixelX;
  }

  _LatToPixelY(latitude, level) {
    let sinLatitude = Math.sin(latitude * Math.PI / 180);
    let y = 0.5 - Math.log((1 + sinLatitude) / (1 - sinLatitude)) / (4 * Math.PI);
    let pixelY = ~~(Math.floor(y * _mapSize(level) * 256) % 256);
    return pixelY;
  }

  /*
   * 从经纬度获取点在某一级别瓦片中的像素坐标
   */
  lngLatToPixelXY(longitude, latitude, level) {
    let pixelX = this._lngToPixelX(longitude, level);
    let pixelY = this._LatToPixelY(latitude, level);

    return {
      pixelX,
      pixelY
    };
  }

  _PixelXTolng(pixelX, tileX, level) {
    let pixelXToTileAddition = pixelX / 256.0;
    return (tileX + pixelXToTileAddition) / _mapSize(level) * 360 - 180;
  }

  _PixelYToLat(pixelY, tileY, level) {
    let pixelYToTileAddition = pixelY / 256.0;
    return Math.atan(_Math_sinh(Math.PI * (1 - 2 * (tileY + pixelYToTileAddition) / _mapSize(level)))) * 180.0 / Math.PI;
  }

  /*
   * 从某一瓦片的某一像素点到经纬度
   */
  PixelXYTolngLat(pixelX, pixelY, tileX, tileY, level) {
    let lng = this._PixelXTolng(pixelX, tileX, level);
    let lat = this._PixelYToLat(pixelY, tileY, level);

    return {
      lng,
      lat
    };
  }
}

export default TransformClassNormal;