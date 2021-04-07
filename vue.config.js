module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/smaply-test/'
    : '/',
  css: {
    sourceMap: process.env.NODE_ENV === 'development',
  },
};
