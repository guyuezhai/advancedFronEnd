const path = require('path')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  projectName: 'taroapp',
  date: '2020-9-5',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  alias:{
    '@/components':path.resolve(__dirname,'..','src/components'),
    '@/utils':path.resolve(__dirname,'..','src/utils'),
    '@/models':path.resolve(__dirname,'..','src/models'),
    '@/services':path.resolve(__dirname,'..','src/services'),
    '@/images':path.resolve(__dirname,'..','src/images'),
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      ['env',
        {
          modules: false
        }
      ]
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      ['transform-runtime', {
        "helpers": false,
        "polyfill": false,
        "regenerator": true,
        "moduleName": 'babel-runtime'
      }]
    ]

  },
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      {
        from:'src/towxml',
        to:'dist/towxml'
      },
      // {
      //   from:'ec-canvas',
      //   to:'dist/ec-canvas'
      // }
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },

    // webpackChain (chain, webpack) {
      // chain.plugin('igonre').use(webpack.IgnorePlugin,[/^\.\/locale$/, /moment$/]);
      // chain.plugin('analyzer').use(BundleAnalyzerPlugin, [])
    // }
  },
  weapp:{
    compile:{
      exclude:[
        // 'src/components/ec-canvas/echarts.js'
      ]
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
