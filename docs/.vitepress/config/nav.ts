import { DefaultTheme } from 'vitepress'

export const getNav = (): DefaultTheme.NavItem[] => {
  return [
    { text: '指南', link: '/guide/versakit/' },
    { text: '设计', link: '/design/theme/' },
    { text: '组件', link: '/components/layout/' },
    { text: '指令', link: '/directives/ripple/ ' },
    { text: '联系我们', link: '/contact/ ' },
  ]
}
