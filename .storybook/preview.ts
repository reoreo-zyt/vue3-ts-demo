import type { Preview } from '@storybook/vue3'
// import 'element-plus/lib/theme-chalk/index.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true, // 展开所有参数信息
    },
  },
}

export default preview
