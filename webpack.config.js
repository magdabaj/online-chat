const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports = {
    entry: {
        app: ['./src/index.tsx'],
        vendor: ['react', 'react-dom']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', 'jsx' ,'.json'],
    },
    output: {
        publicPath: "/",
        filename: "static/bundle.[hash].js",
        chunkFilename: "static/chunk.[chunkhash].js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css',
            chunkFilename: 'chunk.[chunkhash].css',
        }),
    ],
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
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