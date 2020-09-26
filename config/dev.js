const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    REPO_ADDRESS:JSON.stringify('gitee')
  },
  mini: {
    webpackChain (chain, webpack) {
      chain.plugin('analyzer').use(BundleAnalyzerPlugin, [])
    }
  },
  h5: {
    esnextModules: ['taro-ui']
  }
}
