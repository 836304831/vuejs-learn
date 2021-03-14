module.exports = {
  plugins: {
    autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    "postcss-px-to-viewport": {
      viewportWidth: 750, // UI设计稿的宽度
      viewportHeight: 667, // 视窗的高度，对应的是设计稿的高度（也可以不配置）
      unitPrecision: 5, // 转换后的精度，即小数点位数
      viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw

      selectorBlackList: ['ignore', "wrap"], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false // 是否处理横屏情况
    }
  }
};
