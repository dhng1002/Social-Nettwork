const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.[contenthash].js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    },
    optimization: {
        runtimeChunk: 'single',
    },
    mode:'development',
    watch:true,
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template/base.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator:{
                    filename: 'asset/image/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator:{
                filename: 'asset/fonts/[hash][ext][query]'
            }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
        ],
    },
};