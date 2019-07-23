const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withImages = require('next-images');

module.exports = withPlugins([
  [withTM, {transpileModules: ['lead-form']}],
  withImages,
]);
