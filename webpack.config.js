module.exports = {
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_module/,
          use: {
              loader: 'babel-loader',
          },
      }],
  },
};
