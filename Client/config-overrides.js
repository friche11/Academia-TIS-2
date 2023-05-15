const webpack = require('webpack');
const Buffer = require('buffer').Buffer;

module.exports = function override(config) {
  config.plugins.push(
    new webpack.ProvidePlugin({
      'fs': 'fs',
      'Buffer': ['buffer', 'Buffer'],
    })
  );

  config.resolve.fallback = {
    ...config.resolve.fallback,
    util: require.resolve('util/'),
    crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve('buffer/'),
    buffer: require.resolve('buffer-browserify'),
    stream: require.resolve('stream-browserify'),
    assert: require.resolve('assert/'),
    path: require.resolve('path-browserify'),
    pg_hstore: require.resolve('pg-hstore'),
    fs: false,
  };

  return config;
};
