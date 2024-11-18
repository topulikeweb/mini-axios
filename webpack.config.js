import path from 'path';

const __dirname = new URL('.', import.meta.url).pathname;

export default {
    entry: './lib/mini-axios.ts',  // 入口文件
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'miniAxios',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000, // 你可以设置成你喜欢的端口号
        open: true, // 自动打开浏览器
        hot: true, // 开启 HMR 热更新
        compress: true, // 开启 gzip 压缩
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: 'development'
};
