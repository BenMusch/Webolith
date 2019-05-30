/* eslint-disable import/no-extraneous-dependencies */
/* Use for production build. Minifies, etc. */
import path from 'path';
// use import here instead of require, as require adds a 'default' key.
import webpackDev from './webpack.config.babel';

const webpack = require('webpack');
const _ = require('underscore');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = _.defaults({
  mode: 'production',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'djAerolith/static/dist/'),
    publicPath: '/static/dist/',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jQuery',
      jQuery: 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // For minifying React correctly.
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
}, webpackDev);

export default prodConfig;
