const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const modoDev = process.env.NODE_ENV !== 'production'
const uglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OpitimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode:  modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    devServer: {
        contentBase : './public',
        port: 9000

    },
    output: {
        filename : 'principal.js',
        path: __dirname +   '/public'
    },
    optimization: {
        minimizer: [new uglifyJSPlugin({
            cache: true,
            parallel: true
        }),
        new OpitimizeCSSAssetsPlugin({})
        ]

    },
    plugins : [
        new miniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use:[
                miniCssExtractPlugin.loader,
                //'style-loader', //Responsavel pro adiciona css a DOM, usando a tag STYLE
                'css-loader',
                'sass-loader'// responsavel por interpretar imports, url ...
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    }
}