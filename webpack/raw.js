module.exports = function() {
  return {
    module: {
      rules: [
            {
            test: /\.html$/,
            include: path.resolve(__dirname, 'source/pages/templates'),
            use: ['raw-loader']
          },
      ],
    },
  };
};