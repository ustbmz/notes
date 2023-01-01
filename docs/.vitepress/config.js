export default {
  lang: 'en-US',
  title: 'duOne',
  description: 'duOne classes study notes.',
  appearance: true,
  base: '/',
  ignoreDeadLinks: true,
  titleTemplate: 'duone notes',

  // Theme related configurations.
  themeConfig: {
    setTitle: 'Me',
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'FrontEnd',
        items: [{ text: 'Basic', link: '/frontend/' }],
      },
      { text: 'About', link: '/about/' },
    ],
    sidebar: {
      '/frontend/': [
        {
          setTitle: 'Test title page',
          text: 'Basic',
          items: [
            { text: 'basic', link: '/frontend/basic/' },
            { text: 'form', link: '/frontend/form/' },
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
