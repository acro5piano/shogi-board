const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const webpackConfig = {
  entry: './src/index.tsx',
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? '' : 'source-map',
  output: {
    filename: isProduction ? 'bundle.[hash].js' : 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@api': path.resolve(__dirname, './api/'),
      '@frontend': path.resolve(__dirname, './frontend/'),
      '@shared': path.resolve(__dirname, './shared/'),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: isProduction ? '[name].[hash].[ext]' : '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new ForkTsCheckerWebpackPlugin(),
  ],
}

module.exports = webpackConfig
