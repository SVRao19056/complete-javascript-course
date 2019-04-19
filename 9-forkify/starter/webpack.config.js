const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'

    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new htmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                include:  __dirname + '/src'
            }
        ]
    }
}
//entry: ['@babel/polyfill', './src/js/index.js'] latest babel , web pack