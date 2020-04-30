const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPluging = require('mini-css-extract-plugin');

module.exports = {
   entry: path.join(__dirname, './src/index.js'),
   output: {
    filename: '[chunk].bundle.js',
    path: path.join(__dirname, 'dist'),
    },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
         },
         {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: ['url-loader?limit=10000', 'img-loader'],
          },
         {
            test: /\.(sa|c)ss$/i,
            use: [
              'style-loader',
              MiniCssExtractPluging.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          },
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      }),
      new MiniCssExtractPluging()
   ]
}