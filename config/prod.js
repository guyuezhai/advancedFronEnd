
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  terser:{
    enable:true,//开启js压缩
  },
  csso:{
    enable:true,//开启css压缩
  },
  defineConstants: {
    REPO_ADDRESS:JSON.stringify('gitee')
  },
  mini: {
    // webpackChain (chain, webpack) {
    //   chain.plugin('igonre').use(webpack.IgnorePlugin,[/^\.\/locale$/, /moment$/]);
    // }
  },
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
