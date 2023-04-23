import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
// import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Version 1.0',
  description: 'The first security framework focused on data. We\'re working to define what capabilities are needed to secure data in our world today.',
  head: [
    ['meta', { name: 'theme-color', content: '#1bade4' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'icon', href: '/images/favicon.png' }]
  ],
  theme: defaultTheme({
    // default theme config
    logo: '/images/dsmm-logo.svg',
    colorMode: 'dark',
    colorModeSwitch: false,
    navbar: [
      {
        text: 'DSMM Home',
        link: 'https://www.datasecurity.org/',
      },
      {
        text: 'Working Group',
        link: 'https://www.datasecurity.org/#Working-Group'
      },
      {
        text: 'News',
        link: 'https://www.datasecurity.org/#News'
      }
    ],
  }),
  plugins: [
    searchPlugin({
      // options
    }),
    pwaPlugin({
      // options
    }),
  ],
})
