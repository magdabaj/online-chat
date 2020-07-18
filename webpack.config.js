// const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    entry:  path.resolve(__dirname, './src/index.tsx'),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: [/\.js$/],
                exclude: /node_modules/,
                loader: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/, /\.test.(ts|tsx)$/],
                loader: ['babel-loader', 'ts-loader'],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        publicPath: "/",
        filename: "static/bundle.[hash].js",
        chunkFilename: "static/chunk.[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: "./src/index.html",
    //         filename: "index.html"
    //     })
    // ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        historyApiFallback: true,
        open: false,
        hot: true,
        contentBase: [
            // path.join(__dirname, 'public'),
            path.join(__dirname, 'dist'),
        ],
        port: 5000
    },
};