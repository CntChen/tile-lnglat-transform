/**
 * Created by CntChen 2016.04.30
 * 提供了百度地图、高德地图、谷歌地图经纬度坐标与瓦片坐标的相互转换
 */

const MapTypes = {
    Gaode: 'Gaode',
    Google: 'Google',
    Baidu: 'Baidu',
    OSM: 'OSM',
};

const MapLevelRange = {
    [MapTypes.Gaode]: {
        min: 1,
        max: 19,
    },
    [MapTypes.Google]: {
        min: 0,
        max: 21,
    },
    [MapTypes.OSM]: {
        min: 0,
        max: 19,
    },
    [MapTypes.Baidu]: {
        min: 3,
        max: 18,
    },
};

import TransformClassSlippy from './transform-class-slippy';
let TileLnglatTransformGaode = new TransformClassSlippy(MapLevelRange[MapTypes.Gaode].max, MapLevelRange[MapTypes.Gaode].min);
let TileLnglatTransformGoogle = new TransformClassSlippy(MapLevelRange[MapTypes.Google].max, MapLevelRange[MapTypes.Google].min);
let TileLnglatTransformOSM = new TransformClassSlippy(MapLevelRange[MapTypes.OSM].max, MapLevelRange[MapTypes.OSM].min);

import TransformClassBaidu from './transform-class-baidu';
let TileLnglatTransformBaidu = new TransformClassBaidu(MapLevelRange[MapTypes.Baidu].max, MapLevelRange[MapTypes.Google].min);

// uglifyJS时保持字段名称
export {
    TileLnglatTransformGaode as TileLnglatTransformGaode,
    TileLnglatTransformGoogle as TileLnglatTransformGoogle,
    TileLnglatTransformOSM as TileLnglatTransformOSM,
    TileLnglatTransformBaidu as TileLnglatTransformBaidu,
};