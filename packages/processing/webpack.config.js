const {
  webpackConfigModuleApp,
} = require('@creditas/microfrontend-webpack-config');

module.exports = webpackConfigModuleApp('processing-app', {
  output: {
    publicPath: '/processing',
  },
});
