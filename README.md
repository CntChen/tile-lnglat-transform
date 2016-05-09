## tile-lnglat-transform
>提供了高德地图、百度地图、谷歌地图的经纬度坐标与瓦片坐标的相互转换

## 特点
* 实现了国内常用地图的经纬度坐标与瓦片坐标的相互转换
* 使用UMD模块打包，可以在node和broswer中直接使用

## 转换原理
各地图的瓦片坐标系定义、转换原理和转换公式可以参见博文：[国内主要地图瓦片坐标系定义及计算原理][国内主要地图瓦片坐标系定义及计算原理]

## 使用方法
*以node中使用为例。*

1. 安装
```
$ npm install git://github.com/CntChen/tile-lnglat-transform.git
```

2. 使用
```
// 引入模块
var TileLnglatTransform = require('tile-lnglat-transform');
// 根据地图平台使用转换类
var TileLnglatTransformGaode = TileLnglatTransform.TileLnglatTransformGaode;
var TileLnglatTransformGoogle = TileLnglatTransform.TileLnglatTransformGoogle;
var TileLnglatTransformBaidu = TileLnglatTransform.TileLnglatTransformBaidu;
```

## 文档

### 模块
每个地图平台提供一个转换对象。如：
```
TileLnglatTransform.TileLnglatTransformGaode;
TileLnglatTransform.TileLnglatTransformBaidu;
```

### 通用转换函数 

* 经纬度坐标转瓦片坐标 `lnglatToTile`
@input: `(longitude, latitude, level)`
@output:`{tileX, tileY}`

* 经纬度坐标转像素坐标 `lnglatToPixel`
@input: `(longitude, latitude, level)`
@output:`{pixelX, pixelY}`

* 瓦片的某一像素点坐标转经纬度坐标 `pixelToLnglat`
@input: `(pixelX, pixelY, tileX, tileY, level)`
@output:`{lng, lat}`

### 某平台独有函数

#### 高德地图/谷歌地图
* 无


#### 百度地图

* 经纬度坐标转平面坐标`lnglatToPoint`
@input: `{lng, lat}`
@output:`(pointX, pointY)`

* 平面坐标转经纬度坐标`pointToLnglat`
@input: `(pointX, pointY)`
@output:`{lng, lat}`

## 测试代码
代码位于`/test/`中，提供了node和broswer的测试代码

* node中测试
```
$ node test/test_node.js
```

* broswer中测试
浏览器打开`/test/test_broswer.html`或`/test/test_require.html`

## 正确性验证
已经验证高德地图、百度地图和谷歌地图各转换方法的正确性。

### 验证方法
为验证转换代码的正确性，在高德地图、百度地图和谷歌地图中将同一经纬度坐标标注出来，并计算其瓦片坐标和像素坐标，在瓦片中根据像素坐标标注点，与通过经纬度标注的结果做对比。

### 测试数据
使用的瓦片等级为15级，测试经纬度为：
```
var lnglat = {lng: 113.3964152,  lat: 23.0581857};
```

### 经纬度标注结果
在`/test/test_result/`文件夹中，以`13.3964152_23.0581857_XX位置.png`命名的图片。如：
```
113.3964152_23.0581857_高德位置.png
113.3964152_23.0581857_Google位置.png
113.3964152_23.0581857_百度位置.png
```

### 转换后结果
在`/test/test_result/`文件夹中,并以该瓦片的请求url命名。如：
```
httpwprd03.is.autonavi.comappmaptilestyle=7&x=26705&y=14226&z=15.png
httpmt2.google.cnvtlyrs=m@167000000&hl=zh-CN&gl=cn&x=26705&y=14226&z=15&s=Galil.png
httponline1.map.bdimg.comonlinelabelqt=tile&x=6163&y=1280&z=15.png
```
并在各个瓦片的像素坐标处作红色标记。该红色标记与经纬度标记做比较，可以验证经纬度到瓦片坐标和像素坐标转换的正确性。

## Todo
* Bing Map 的转换
> https://msdn.microsoft.com/en-us/library/bb259689.aspx

* 其他地图的转换

## 为该项目贡献代码
该项目代码使用ES6编写，使用webpack打包为UMD模块。

欢迎改进该项目代码或针对新的瓦片坐标定义方式提供转换代码。

### 修改代码或添加模块流程

1. Fork 并 clone项目

2. 安装依赖
```
$ npm install
```

3. 修改代码或添加模块
参考 `/src/`中的代码

4. 打包为UMD模块，打包结果路径为`/builds/index.js`
```
$ webpack
```

5. Pull request

## 参考资料
国内主要地图瓦片坐标系定义及计算原理
>http://cntchen.github.io/2016/05/09/%E5%9B%BD%E5%86%85%E4%B8%BB%E8%A6%81%E5%9C%B0%E5%9B%BE%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87%E7%B3%BB%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%AE%A1%E7%AE%97%E5%8E%9F%E7%90%86/
[国内主要地图瓦片坐标系定义及计算原理]:http://cntchen.github.io/2016/05/09/%E5%9B%BD%E5%86%85%E4%B8%BB%E8%A6%81%E5%9C%B0%E5%9B%BE%E7%93%A6%E7%89%87%E5%9D%90%E6%A0%87%E7%B3%BB%E5%AE%9A%E4%B9%89%E5%8F%8A%E8%AE%A1%E7%AE%97%E5%8E%9F%E7%90%86/

## 完