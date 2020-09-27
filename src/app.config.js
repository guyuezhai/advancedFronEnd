export default {
  pages: [
    'pages/index/index',
    'pages/depos/index',
    'pages/mine/index',
  ],
  subpackages: [
    {
      "root": "packageA",
      "pages": [
        'pages/article/index',
        'pages/detail/index',
        'pages/list/index',
      ]
    }
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
