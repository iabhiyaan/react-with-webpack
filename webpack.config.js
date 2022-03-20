const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });
 
// console.log(process.env.REACT_APP_NAME);
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index.bundle.js",
        publicPath: '/'

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    devServer: {
        port: 3000,
        // watchContentBase: true,
        historyApiFallback: true,
        hot: false,
        open: true,
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },


            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: "file-loader"
            },
            {
                test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                loader: "file-loader"
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loader: 'css-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: "index.html",
            inject: 'body',
            templateParameters: {
                REACT_APP_NAME: process.env.REACT_APP_NAME,
            },
        }),
        // new InterpolateHtmlPlugin({
        //     'REACT_APP_NAME': process.env.REACT_APP_NAME
        //   }),
        // new webpack.DefinePlugin({
        //     "FOO": JSON.stringify("bar"),
        //     "process.env.APP_NAME": process.env.REACT_APP_NAME
        // }),
        // new Dotenv({
        //     path:  path.join(__dirname, "/environments/.env")
        // }),
    ]
}