import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  /** 组件Stories目录所在 —— Storybook会载入配置路径下的指定文件渲染展示 */
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.ts',
    '../src/**/*.stories.tsx',
  ],
  /** Storybook所用插件 —— Storybook功能增强 */
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  /** Storybook所用框架 —— Vue环境支持 */
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
