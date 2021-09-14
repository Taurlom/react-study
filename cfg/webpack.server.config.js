const path = require('path');
const nodeExternals = require('webpack-node-externals');
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const { DefinePlugin } = require('webpack');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: [".jsx", ".js", ".json", ".ts", ".tsx"]
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "local",
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            onlyLocals: true
                        }
                    },
                    "sass-loader"
                ]
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["css-loader"]
            }
        ]
    },
    plugins: [ new DefinePlugin({'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`}) ]
};