/**
 * Created by CntChen 2016.04.30
 * 提供了百度地图、高德地图、谷歌地图经纬度坐标与瓦片坐标的相互转换
 */

const MapLevelRange = {
    Gaode: {
        min: 0,
        max: 18,
    },
    Google: {
        min: 0,
        max: 20,
    },
    Baidu: {
        min: 0,
        max: 19,
    },
};

import TransformClassNormal from './transform-class-normal';
let TileLnglatTransformGaode = new TransformClassNormal(MapLevelRange[Gaode].max, MapLevelRange[Gaode].min);
let TileLnglatTransformGoogle = new TransformClassNormal(MapLevelRange[Google].max, MapLevelRange[Google].min);

import TransformClassBaidu from './transform-class-baidu';
let TileLnglatTransformBaidu = new TransformClassBaidu(MapLevelRange[Baidu].max, MapLevelRange[Google].min);

// uglifyJS时保持字段名称
export {
    TileLnglatTransformGaode as TileLnglatTransformGaode,
    TileLnglatTransformGoogle as TileLnglatTransformGoogle,
    TileLnglatTransformBaidu as TileLnglatTransformBaidu,
};