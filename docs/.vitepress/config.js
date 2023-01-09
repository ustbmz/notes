export default {
  lang: 'zh-CN',
  title: 'DCSN',
  description: 'duOne classes study notes.',
  appearance: true,
  base: '/',
  ignoreDeadLinks: true,
  titleTemplate: 'duone notes',
  markdown: {
    lineNumbers: true,
  },
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'FrontEnd',
        items: [
          { text: 'Basic', link: '/frontend/basic/' },
          { text: 'JavaScript', link: '/frontend/javascript/' },
        ],
      },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      '/frontend/basic/': [
        {
          text: 'Html Css 基础回顾',
          items: [
            { text: '基础回顾', link: '/frontend/basic/' },
            { text: '表单进阶', link: '/frontend/basic/03.表单进阶' },
            { text: '精灵图', link: '/frontend/basic/04.精灵图' },
            { text: '绝对定位', link: '/frontend/basic/05.绝对定位收官' },
            {
              text: '属性值的计算过程',
              link: '/frontend/basic/06.属性值的计算过程',
            },
            { text: '拓展知识', link: '/frontend/basic/07.拓展知识' },
          ],
        },
      ],
      '/frontend/javascript/': [
        {
          text: 'JavaScript 基础回顾',
          items: [
            {
              text: '知识回顾-数据的表达 1',
              link: '/frontend/javascript/02.知识回顾-数据的表达',
            },
            {
              text: '知识回顾-数据的表达 2',
              link: '/frontend/javascript/03.知识回顾-数据的表达',
            },
            {
              text: '知识回顾-数据的表达 3',
              link: '/frontend/javascript/04.知识回顾-数据的表达',
            },
            {
              text: '知识回顾-数据的运算',
              link: '/frontend/javascript/05.知识回顾-数据的运算',
            },
            {
              text: '知识回顾-流程的切割',
              link: '/frontend/javascript/07.知识回顾-流程的切割',
            },
            {
              text: '核心概念-数据的作用域',
              link: '/frontend/javascript/09.核心概念-数据的作用域',
            },
            {
              text: '核心概念-全局对象',
              link: '/frontend/javascript/10.核心概念-全局对象',
            },
            {
              text: '核心概念-构造函数',
              link: '/frontend/javascript/11.核心概念-构造函数',
            },
            {
              text: '核心概念-原型',
              link: '/frontend/javascript/12.核心概念-原型',
            },
            {
              text: '核心概念-This',
              link: '/frontend/javascript/13.核心概念-This',
            },
            {
              text: '核心概念-原型链',
              link: '/frontend/javascript/14.核心概念-原型链',
            },
            {
              text: '核心概念-继承',
              link: '/frontend/javascript/15.核心概念-继承',
            },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/ustbmz/notes' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present ustbmz',
    },
  },
};
