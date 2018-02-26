const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Chat For Github',
			favicon: './favicon.ico',
			template: './test/index.html',
		}),
		new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('dev')})
	]
}
