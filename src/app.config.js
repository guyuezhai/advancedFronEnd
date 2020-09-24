export default {
  pages: [
    'pages/index/index',
    'pages/list/index',
    'pages/mine/index',
    'pages/post/index',
    'pages/detail/index',
    'pages/depos/index',
    'pages/article/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        'iconPath': './images/home@2x.png',
        'selectedIconPath': './images/home_s@2x.png',
      },
      {
        pagePath: 'pages/depos/index',
        text: '题库',
        'iconPath': './images/service_n@2x.png',
        'selectedIconPath': './images/service_s@2x.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        'iconPath': './images/me_n@2x.png',
        'selectedIconPath': './images/me_s@2x.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '前端修仙之路',
    navigationBarTextStyle: 'black'
  }
}
