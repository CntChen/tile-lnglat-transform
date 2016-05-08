## Tile-lnglat-transform
>提供了高德地图、百度地图、谷歌地图的经纬度坐标与瓦片坐标的相互转换

## 特点
* 实现了国内常用地图的经纬度坐标与瓦片坐标的相互转换
* 使用UMD模块打包，可以在node和broswer中直接使用

## 转换原理
各地图的瓦片坐标特点和转换方式可以参见博文：
XXXX

## 使用方法

1. 安装
```
$ npm install tile-lnglat-transform
```



## 测试准确性

##

## Todo
* Bing Map 的转换
> https://msdn.microsoft.com/en-us/library/bb259689.aspx

* OSM TMS
* 其他地图的转换

## 为该项目贡献代码
该项目代码使用ES6编写，使用webpack打包为UMD模块。
*修改代码或添加模块流程：*

1. clone 项目

2. 安装依赖
```
$ npm install
```

3. 修改代码或添加模块
参考 `./src`中的代码

4. 打包为UMD模块，打包结果路径为`./builds/index.js`
```
$ webpack
```