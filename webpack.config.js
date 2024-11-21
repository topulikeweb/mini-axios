import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const adapters = [{
    name: 'xhr',
    target: 'umd'
}, {
    name: 'fetch',
    target: 'umd'
}, {
    name: 'http',
    target: 'commonjs'
}]
const generateConfig = (adapters) => {
    return adapters.map((adapter) => {
        const { name, target } = adapter
        return {
            entry: `./lib/adapters/${name}.ts`,
            output: {
                filename: `${name}.js`,
                path: path.resolve(__dirname, `dist`),
                library: 'miniAxios',
                libraryTarget: target,
                globalObject: 'this',
            },
            resolve: {
                extensions: ['.ts', '.js'],
                fallback: {
                    url: 'url',
                    http: 'stream-http',
                    https: 'https-browserify',
                    crypto: 'crypto-browserify',
                    stream: 'stream-browserify',
                    buffer: 'buffer',
                },
            },
            devServer: {
                static: {
                    directory: path.join(__dirname, 'dist'),
                },
                port: 3000,
                open: true,
                hot: true,
                compress: true,
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
        }
    })
}

let config = {}
config = generateConfig(adapters)
export default config