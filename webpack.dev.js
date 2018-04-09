const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
    plugins: [
       	new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new BundleAnalyzerPlugin()
    ]
});
