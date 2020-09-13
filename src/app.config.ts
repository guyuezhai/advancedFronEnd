export default {
  pages: [
    'pages/index/index',
    'pages/list/index',
    'pages/mine/index',
    'pages/post/index',
    'pages/detail/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        'iconPath': './images/home.png',
        'selectedIconPath': './images/homeSelected.png',
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的',
        'iconPath': './images/mine.png',
        'selectedIconPath': './images/mineSelected.png',
      },
    ],
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '前端进阶',
    navigationBarTextStyle: 'black'
  }
}
