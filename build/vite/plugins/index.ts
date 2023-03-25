/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
// dev
import { ConfigRestartPlugin } from './restart'
import { ConfigVueJsx } from './vueTsx'
// build
import { ConfigCompressPlugin } from './compress'
import { ConfigHtmlPlugin } from './html'
import { ConfigProgressPlugin } from './progress'
import { ConfigImageminPlugin } from './imagemin'

// TODO:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // Jsx支持
    ConfigVueJsx(),
    ConfigRestartPlugin(),
  ]

  console.log(process.env.VITE_NODE_ENV)

  // 打包构建插件
  const plugins = [
    // 这些插件应该在执行打包时才push进去
    ConfigCompressPlugin(),
    ConfigHtmlPlugin(),
    ConfigProgressPlugin(),
    ConfigImageminPlugin(),
  ]

  vitePlugins.push(...plugins)

  return vitePlugins
}
