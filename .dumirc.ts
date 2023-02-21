import { defineConfig } from 'dumi';
import styles from './docs/style/style'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'Triangle-ui',
    logo: '/logo.svg',
    nav: [
      { title: '指南', link: '/guide' },
      { title: '组件', link: '/components/Alert' },
    ],
    socialLinks: {
      github: 'https://github.com/Triangle-Lab/triangle-design-project',
    },
    prefersColor: { default: 'light', switch: false }
  },
  styles: [styles],
  favicons: ['/logo.svg'],
});
