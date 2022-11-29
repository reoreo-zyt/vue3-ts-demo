/**
 * @name createVitePlugins
 * @description 压缩html，提供ejs模板语法
 */

import { createHtmlPlugin } from 'vite-plugin-html'

export const ConfigHtmlPlugin = () => {
  return createHtmlPlugin({
    minify: true,
    /**
     * 在这里写entry后，你将不需要在`index.html`内添加 script 标签，原有标签需要删除
     * @default src/main.ts
     */
    entry: 'src/main.ts',
    /**
     * 如果你想将 `index.html`存放在指定文件夹，可以修改它，否则不需要配置
     * @default index.html
     */
    template: 'index.html',
    /**
     * 需要注入 index.html ejs 模版的数据
     */
    inject: {
      data: {
        title: 'index',
        injectScript: `<script src="./inject.js"></script>`,
      },
    },
  })
}
