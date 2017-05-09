var path = require('path');

module.exports = {
	entry: './app/main.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/dist/',
		path: path.resolve(__dirname, 'dist/')
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: { presets: ['es2015'] },
				}],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	}
};