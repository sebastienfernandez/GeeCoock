const path = require('path')

const webpack = require('webpack')

let config = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.vue']
    },
    devServer: {
        noInfo: true
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                appendTsSuffixeTo: [/\.vue$/]
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        }
        ]
    }
}

module.exports = config