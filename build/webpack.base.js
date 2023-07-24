/**
 * 公共配置
 */
const path = require('path')

module.exports = {
    entry: path.join(__dirname, '../src/index.ts'), // 入口文件
    // 打包文件出口
    output: {
        filename: 'static/js/[name].js', // 每个输出js的名称
        path: path.join(__dirname, '../dist'), // 打包结果输出路径
        clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
        publicPath: '/' // 打包后文件的公共前缀路径
    },
    module: {
        rules: [
            {
                test: /\.vue$/, // 匹配.vue文件
                use: 'vue-loader', // 用vue-loader去解析vue文件
            },
            {
                test: /\.ts$/, // 匹配.ts文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                "@babel/preset-typescript",
                                {
                                    allExtensions: true, //支持所有文件扩展名(重要)
                                },
                            ],
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        // ...
        new VueLoaderPlugin(), // vue-loader插件
    ],
    resolve: {
        extensions: ['.vue', '.ts', '.js', '.json'],
    }
}
