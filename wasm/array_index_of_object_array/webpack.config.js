const path = require('path');
const UglifyJsPlugin = require('../node_modules/uglifyjs-webpack-plugin');

module.exports = {
    entry: "./index.js",
    plugins: [
        new UglifyJsPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.min.js",
    }
};