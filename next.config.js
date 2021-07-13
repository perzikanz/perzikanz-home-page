const isProd = process.env.NODE_ENV === 'production';
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  assetPrefix: isProd ? 'https://storage.googleapis.com/home-page-html' : '',
  reactStrictMode: true,
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],
  nextConfig,
]);
