import path from 'path';


export default {
    entry: './lib/mini-axios.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'dist'),
        library: {
            type: 'module', // 确保输出为 ESM
        },
    },
    experiments: {
        outputModule: true, // 启用模块化输出
    },
    resolve: {
        extensions: ['.ts', '.js'],
        fallback: {
            https: 'https-browserify', // 添加 https 模块的 polyfill
            http: 'stream-http'
        },
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
    mode: 'production',
    devtool: 'source-map',
};
