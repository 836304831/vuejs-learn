
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge.merge(baseConfig,  {
    devServer: {
        // 指定为哪个文件夹提供本地服务
        contentBase: './dist',
        // 指定实时监听
        inline: true
    }
})
