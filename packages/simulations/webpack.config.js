const {
  webpackConfigModuleApp,
} = require('@creditas/microfrontend-webpack-config');

module.exports = webpackConfigModuleApp('simulations-app', {
  output: {
    publicPath: '/simulations',
  },
});
