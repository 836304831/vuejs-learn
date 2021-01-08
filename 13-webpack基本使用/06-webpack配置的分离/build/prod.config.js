
const UglifyjsPlugin = require('uglifyjs-webpack-plugin')

const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge.merge(baseConfig, {
    plugins: [
        new UglifyjsPlugin()

    ]
})