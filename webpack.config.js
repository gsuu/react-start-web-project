const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    'react-hot-loader/patch',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, "/public"),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
			test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},{
				test: /\.less$/,
				loaders: ["style-loader", "css-loader", "less-loader"]
			}
		]
  },
  mode: 'development',
  devServer: {
    historyApiFallback:{
      index: '/public/index.html'
    },
  }
};

module.exports = config;
