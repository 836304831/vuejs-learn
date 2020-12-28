
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        // path需要时绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader只负责将css文件加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时,从右从左加载
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                // css-loader只负责将css文件加载
                // style-loader负责将样式添加到DOM中
                // 使用多个loader时,从右从左加载
                use: [{
                    loader: 'style-loader'   // create style nodes from js string
                }, {
                    loader: 'css-loader'      // translates css into commonjs
                }, {
                    loader: 'less-loader'     // compiles less to css
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // 当加载图片小于limit时, 会将图片编译成base64字符串形式
                        // 当图片大于limit时,需要file-loader
                        limit: 8192,

                        // 设置打包图片的格式
                        name: 'imgs/[name].[hash:8].[ext]'
                    }

                }]
            }, {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}