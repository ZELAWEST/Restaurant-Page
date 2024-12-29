const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
      
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/template.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },


            {
                test: /\.(jpg|png|svg|gif)$/,
                type: 'asset/resource',
            },


        ]
    },

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};
