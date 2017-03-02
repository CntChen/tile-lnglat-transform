/*
 * Created by CntChen 2016.05.06
 * write by ES5
 */

// TileLnglatTransform 已经作为全局变量引入
var TileLnglatTransformGaode = TileLnglatTransform.TileLnglatTransformGaode;
var TileLnglatTransformGoogle = TileLnglatTransform.TileLnglatTransformGoogle;
var TileLnglatTransformBaidu = TileLnglatTransform.TileLnglatTransformBaidu;

var lnglat = {
  lng: 113.3964152,
  lat: 23.0581857
};
var level = 15;

// test for Gaode map
// Google map work like Gaode map
console.log('Gaode map test:');
console.log('input lnglat:', lnglat, '\n', 'map level:', level);
var tile_gaode = TileLnglatTransformGaode.lnglatToTile(lnglat.lng, lnglat.lat, level);
console.log('to tile result:', tile_gaode);
console.log('verify url: http://wprd03.is.autonavi.com/appmaptile?style=7&x='+tile_gaode.tileX+'&y='+tile_gaode.tileY+'&z='+level);
var pixel_gaode = TileLnglatTransformGaode.lnglatToPixel(lnglat.lng, lnglat.lat, level);
console.log('to pixel result:', pixel_gaode);
var lnglat_gaode = TileLnglatTransformGaode.pixelToLnglat(pixel_gaode.pixelX, pixel_gaode.pixelY, tile_gaode.tileX, tile_gaode.tileY, level);
console.log('to lnglat result:', lnglat_gaode);
console.log('\n');

// test for Baidu map
// test data from http://www.cnblogs.com/jz1108/archive/2011/07/02/2095376.html
console.log('Baidu map test:');
console.log('input lnglat:', lnglat, '\n', 'map level:', level);
var point_baidu = TileLnglatTransformBaidu.lnglatToPoint(lnglat.lng, lnglat.lat);
console.log('to point result:', point_baidu);
var tile_baidu = TileLnglatTransformBaidu.lnglatToTile(lnglat.lng, lnglat.lat, level);
console.log('to tile result:', tile_baidu);
console.log('verify url: http://online1.map.bdimg.com/onlinelabel/?qt=tile&x='+tile_baidu.tileX+'&y='+tile_baidu.tileY+'&z='+level);
var pixel_baidu = TileLnglatTransformBaidu.lnglatToPixel(lnglat.lng, lnglat.lat, level);
console.log('to pixel result:', pixel_baidu);
var lnglat_baidu = TileLnglatTransformBaidu.pixelToLnglat(pixel_baidu.pixelX, pixel_baidu.pixelY, tile_baidu.tileX, tile_baidu.tileY, level);
console.log('to lnglat result:', lnglat_baidu);
var lnglat_frompoint_baidu = TileLnglatTransformBaidu.pointToLnglat(point_baidu.pointX, point_baidu.pointY);
console.log('to lnglat from point result:', lnglat_frompoint_baidu);