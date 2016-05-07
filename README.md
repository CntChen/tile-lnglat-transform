##


## Todo
* Bing Map 的转换
> https://msdn.microsoft.com/en-us/library/bb259689.aspx

* 其他地图的转换

## 为该项目贡献代码
该项目代码使用ES6编写，使用webpack打包为UMD模块。
编写代码流程：

1. clone 项目

2. 安装依赖
```
$ npm install
```

3. 编写新的模块
参考 ./src

4. 打包为UMD模块，打包结果为`./builds/index.js`
```
$ webpack
```