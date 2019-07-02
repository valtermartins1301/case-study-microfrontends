const {
  webpackConfigModuleApp,
} = require('@creditas/microfrontend-webpack-config');

module.exports = webpackConfigModuleApp('header-app', {
  output: {
    publicPath: '/header',
  },
});
