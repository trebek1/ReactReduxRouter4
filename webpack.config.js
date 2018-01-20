'use strict'

const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const config = {
    context: resolve('src'),
    entry: {
      app: './index.js',
      vendor: [
        'react',
        'react-dom',
        'react-router-dom',
        'redux',
        'react-redux',
        'redux-thunk'
      ]
    },
    output: {
      filename: env.prod ? 'bundle.[name].[chunkhash].js' : 'bundle.[name].js',
      path: resolve('dist'),
      pathinfo: !env.prod
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'env', 'stage-2'],
              plugins: ['lodash']
            }
          }
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'sass-loader?outputStyle=expanded'
            ]
          })
        },
        {
          test: /\.(svg|ttf|woff|woff2)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        },
        {
          test: /\.(png|jpg|gif)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new ExtractTextPlugin(env.prod ? 'styles.[name].[chunkhash].css' : 'styles.[name].css'),
      new HtmlWebpackPlugin({
        template: '../public/index.html',
        inject: 'body'
      })
    ],
    resolve: {
      modules: [
        resolve('./src'),
        resolve('./node_modules'),
        resolve('./public')
      ]
    }
  }
  return config
}
