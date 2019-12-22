// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    name: 'build client',
    devtool: isProduction ? 'hidden-source-map' : 'eval',
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    entry: {
        app: path.join(__dirname, 'client', 'index'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                // loader: 'ts-loader',
                // options: {
                //     configFile: 'tsconfig.client.json',
                // },
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: 'tsconfig.client.json',
                },
                // exclude: path.join(__dirname, 'node_modules'),
                // exclude: /node_moduels/,
            },
        ],
    },
    plugins: [new webpack.LoaderOptionsPlugin({ dev: !isProduction })],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist/public/js'),
        publicPath: '/js',
    },
};
