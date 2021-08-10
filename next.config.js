const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? process.env.STORAGE_DOMAIN : '',
  basePath: process.env.SUB_DIRECTORY,
  trailingSlash: true,
  reactStrictMode: true,
};
