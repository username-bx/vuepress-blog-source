module.exports = {
    title: '空山新语(雨)', // Title for the site. This will be displayed in the navbar.
    theme: 'vuepress-theme-meteorlxy',
    // 网站语言
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
    themeConfig: {
      // 主题语言，参考下方 [主题语言] 章节
      // lang: 'zh-CN',


      // 个人信息（没有或不想设置的，删掉对应字段即可）
      personalInfo: {

        // 昵称
        nickname: 'xue',
        // 个人简介 (支持 HTML)
        description: 'Love coding<br/>Happy Life',
        // 电子邮箱
        email: 'bx.ma0327@gmail.com',
        // 所在地
        location: 'ShangHai City, China',
        // 头像
        // 设置为外部链接
        // avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
        avatar: './img/avatar.jpg',
      },



      // 顶部导航栏内容
      nav: [
        { text: '首页', link: '/', exact: true },
        { text: '文章', link: '/posts/', exact: false },
        { text: '介绍', link: '/self/', exact: false },
        { text: 'UI作品展示', link: '/show/', exact: false },
      ],

      // 是否开启平滑滚动
      smoothScroll: true,
    },
    // dev 需要注释 base   build 打开
    base: './'
  }