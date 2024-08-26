// vue.config.js

const webpack = require('webpack');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    allowedHosts: 'all',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false
      })
    ]
  },
  transpileDependencies: [
    'primevue'
  ],
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0] = Object.assign(args[0], {
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
      });
      return args;
    });
  }
};
