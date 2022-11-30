/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ConfigCompressPlugin } from './compress'
import { ConfigRestartPlugin } from './restart'
import { ConfigHtmlPlugin } from './html'
import { ConfigProgressPlugin } from './progress'
import { ConfigImageminPlugin } from './imagemin'

// TODO:
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
  ]

  const plugins = [
    ConfigCompressPlugin(),
    ConfigRestartPlugin(),
    ConfigHtmlPlugin(),
    ConfigProgressPlugin(),
    ConfigImageminPlugin(),
  ]

  for (let i = 0; i < plugins.length; i++) {
    vitePlugins.push(plugins[i])
  }

  return vitePlugins
}
