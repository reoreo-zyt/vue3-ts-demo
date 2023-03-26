import { UserConfig, ConfigEnv } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
import path from 'path'
import proxy from './build/vite/proxy'
import { VITE_PORT } from './build/constant'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'
  let base: string
  return {
    base,
    resolve: {
      // Vite 路径别名配置
      alias: {
        '@': pathSrc,
      },
      // 解决引入 element plus 后报错问题
      // https://github.com/jbaysolutions/vue-grid-layout/issues/666
      dedupe: ['vue'],
    },
    // plugins
    plugins: [
      createVitePlugins(isBuild),
      AutoImport({
        // Auto import functions from Vue, e.g. ref, reactive, toRef...
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
        resolvers: [ElementPlusResolver()],

        dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
      }),
      Components({
        resolvers: [
          // Auto register Element Plus components
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动按需加载iconify图标库图标
          IconsResolver(),
        ],

        dts: path.resolve(pathSrc, 'components.d.ts'),
      }),
      Icons({
        // 自动安装图标
        autoInstall: true,
      }),
    ],
    // css
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/constant.scss";',
        },
      },
    },
    // server
    server: {
      hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
      // 服务配置
      port: VITE_PORT, // 类型： number 指定服务器端口;
      open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
      cors: false, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
      host: '0.0.0.0', // IP配置，支持从IP启动
      proxy,
    },
  }
}
