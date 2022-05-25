const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Dart Frog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'VeryGoodOpenSource/dart_frog',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    contributors: true,
    displayAllHeaders: true,
    nav: [
      {
        text: "pub.dev",
        link: "https://pub.dev/packages/dart_frog",
      },
    ],
    sidebarDepth: 1,
    sidebar: [
        {
          title: 'Guide',   // required
          path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 0,    // optional, defaults to 1
          children: [
            '/guide/',
            '/roadmap.md',
            '/CONTRIBUTING.md'
          ]
        },
        {
          title: 'Tutorials',   // required
          path: '/totorials/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1
          children: [
            '/tutorials/quickstart.md'
          ]
        },
        {
          title: 'Documentation 📝',   // required
          path: '/documentation/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2,    // optional, defaults to 1
          children: [
            '/documentation/'
          ]
        },
  ],
    markdown: {
      code: {
        lineNumbers: false,
      },
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
