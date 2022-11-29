/**
 * @name ConfigRestartPlugin
 * @description 监听配置文件修改自动重启Vite
 */
import ViteRestart from 'vite-plugin-restart'

export const ConfigRestartPlugin = () => {
  // !issue: https://github.com/antfu/vite-plugin-restart/issues/11
  return (() => {
    try {
      return ViteRestart({ restart: ['tsconfig.node.json'] })
    } catch {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore - Doesn't look like `vite-plugin-restart` exports correctly.
      return ViteRestart.default({ restart: ['tsconfig.node.json'] })
    }
  })()
}
