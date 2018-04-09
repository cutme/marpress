const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackInlineAssetsPlugin = require('html-webpack-inline-assets-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

/*

const isProd = process.env.NODE_ENV === 'production'; //true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
})
*/

//const cssConfig = isProd ? cssProd : cssDev;
const minify = {
     collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}

module.exports = {
    entry: {
        app: "./src/app.js"
    },
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
    	rules: [
    		{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'happypack/loader?id=js'
			},
            {
                test: /\.s?css$/,
                loader: 'happypack/loader?id=scss',
                enforce: "pre"
            },
            {
                test: /\.(jpg|png|svg)$/i,
                exclude: /fonts/,
                use: [
                    //'file-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true',
                    'file-loader?name=[name].[ext]&outputPath=img',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                enabled: false,
                                progressive: false,
                                quality: 70
                            }
                        }
                    }
                ]  
            },
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				exclude: /img/,
				use: [
				    {
    				    loader: 'file-loader',
        				options: {
        				    name: 'fonts/[name].[ext]'
        				}
                    }
				]
			}
		]
    },
    
    devServer: {
        compress: true,
        hot: true,
        open: true,
        inline: true
    },

    plugins: [
        new HappyPack({
          id: 'scss',
          threads: 4,
          loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }),

        new HappyPack({
          id: 'js',
          threads: 4,
          loaders: ['babel-loader?presets[]=env']
        }),

		new HtmlWebpackPlugin({
		    filename: 'index.html',
		    cache: false,
    		chunks: ['app'],
            template: './src/index.html',
            minify: minify
		}),

	]
};