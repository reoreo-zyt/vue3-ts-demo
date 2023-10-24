/**
 * @name ConfigMarkDownPlugin
 * @description 渲染 md 文件
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
import { plugin, Mode } from 'vite-plugin-markdown'

export const ConfigMarkDownPlugin = () => {
  return plugin({
    mode: [Mode.TOC, Mode.HTML, Mode.VUE],
  })
}
