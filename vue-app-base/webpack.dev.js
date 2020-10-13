const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
module.exports = merge(common,{
    mode: 'development',
    devtool: 'cheap-eval-module-source-map',
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true, //启动服务时，自动打开浏览器
        hot: true, //开启热更新功能
        contentBase: path.resolve(__dirname,'public')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})