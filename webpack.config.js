const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [".js", ".ts"]
	},
	module: {
		rules: [
			{
				test: /\.html?$/,
				loader: 'file-loader?name=[name].[ext]&outputPath=./',
				exclude: /node_modules/
			}, {
				test: /\.ts?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			}
		]
	}
};