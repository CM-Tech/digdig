"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: "./src/index.js",

	output: {
		filename: "project.bundle.js",
		publicPath: "/build/",
		path: path.resolve(__dirname, "build")
	},

	module: {
		rules: [
			{
				test: [/\.vert$/, /\.frag$/],
				use: "raw-loader"
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			CANVAS_RENDERER: JSON.stringify(true),
			WEBGL_RENDERER: JSON.stringify(true)
		})
	]
};
