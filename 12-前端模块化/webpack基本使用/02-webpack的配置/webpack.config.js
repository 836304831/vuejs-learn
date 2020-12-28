
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        // path需要时绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}