const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'https://storage.googleapis.com/home-page-html' : '',
  reactStrictMode: true,
  env: {
    IMAGE_DOMAIN: 'https://storage.googleapis.com/home-page-html',
  },
};
