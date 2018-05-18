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
			},{
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
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
