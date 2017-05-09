var path = require('path');

module.exports = {
	entry: './app/index.js',
	output: {
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	devtool: 'source-map'
};