
const path = require("path");
const HtmlWapPackPlugin = require("html-webpack-plugin");
const { loadavg } = require("os");
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),

        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
    plugins: [
        new HtmlWapPackPlugin({
            title: 'Webpack begginer',
            template: "./src/template.html"

        })
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
    }
}
