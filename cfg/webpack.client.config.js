const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: './src/client/index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    resolve: {
        extensions: [".jsx", ".js", "json"]
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']
            }
        ]
    }
};