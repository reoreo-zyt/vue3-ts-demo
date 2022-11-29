/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ConfigCompressPlugin } from './compress'
import { ConfigRestartPlugin } from './restart'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
  ]

  // 开启.gz压缩  rollup-plugin-gzip
  vitePlugins.push(ConfigCompressPlugin())

  // 监听配置文件改动重启
  vitePlugins.push(ConfigRestartPlugin())

  return vitePlugins
}
