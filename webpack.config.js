var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin'); //https://github.com/jantimon/html-webpack-plugin

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/build",
        filename: 'bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2016', 'react']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },{
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }

        ]
    },
};
