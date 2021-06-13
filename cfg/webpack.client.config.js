const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};