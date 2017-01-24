var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'app.jsx')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	//开启dev source map
	devtool: 'eval-source-map',
	//开启webpack dev server
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		port: 8000
	},
	module: {
		preLoaders: [{
			test: /\.jsx?$/,
			loaders: ["eslint?parser=babel-eslint"],
			include: APP_PATH
		}],
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel'],
			include: APP_PATH
		}, {
			test: /\.css$/,
			loaders: ['style', 'css']
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}