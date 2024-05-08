const path = require('path');

const TerserPlugin = require("terser-webpack-plugin");
const { GriffelCSSExtractionPlugin } = require('@griffel/webpack-extraction-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {

    let module = {};
    let plugins = [];

    if (env.extract) {
        module = {
            rules: [
                {
                    test: /\.(js|ts|tsx)$/,
                    include: [
                        path.resolve(__dirname, 'components'),
                        /\/node_modules\/@fluentui\//,
                        // see https://webpack.js.org/configuration/module/#condition
                    ],
                    use: {
                        loader: GriffelCSSExtractionPlugin.loader,
                    },
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },
            ],
        };

        plugins = [
            new MiniCssExtractPlugin({
                ignoreOrder: true,
            }), 
            new GriffelCSSExtractionPlugin()
        ];
    }

    return {
        mode: 'production',
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },
        externals: {
            react: 'React',
            'react-dom': 'ReactDOM'
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        module,
        plugins,
    };
};