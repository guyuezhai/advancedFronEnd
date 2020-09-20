const path = require('path')
const Config = require('webpack-chain');
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
      'transform-class-properties',
      'transform-decorators-legacy',
      'transform-object-rest-spread',
    ]

  },
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      {
        from:'src/wemark',
        to:'dist/wemark'
      }
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
  },
  weapp:{
    compile:{
      exclude:[
        'src/wemark/remarkable.js'
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
