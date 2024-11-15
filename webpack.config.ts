// webpack.config.ts
require('ts-node/register');

import { Configuration } from 'webpack';

const config: Configuration = {
    entry: './lib/index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
module.exports = config