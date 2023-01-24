module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // 适配 docasaurus 的 tailwindcss 配置深色模式
  darkMode: ['class', '[data-theme="dark"]'],
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-',
  important: true,
  theme: {
    extend: {
      screens: {
        docusaurus: '996px'
      },
      boxShadow: {
        highlight: 'inset 0 1px 0 0 rgb(255 255 255 / 5%)'
      }
    }
  },
  plugins: []
};
