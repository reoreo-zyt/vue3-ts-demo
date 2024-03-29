import { UserConfig } from 'vite'
import { createVitePlugins } from './build/vite/plugins'
import path from 'path'
import proxy from './build/vite/proxy'
import { VITE_PORT } from './build/constant'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// TODO: mock 模拟请求数据
// import { viteMockServe } from 'vite-plugin-mock'

// storybook 配置相关
import vue from '@vitejs/plugin-vue'

const pathSrc = path.resolve(__dirname, 'src')

const autoImport = AutoImport({
  // Auto import functions from Vue, e.g. ref, reactive, toRef...
  // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
  imports: ['vue', 'vue-router', 'pinia'],
  resolvers: [ElementPlusResolver()],
  dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
  eslintrc: {
    enabled: true, // <-- this
    filepath: './.eslintrc-auto-import.json',
  },
})

const components = Components({
  resolvers: [
    // Auto register Element Plus components
    // 自动导入 Element Plus 组件
    ElementPlusResolver(),
    // 自动按需加载iconify图标库图标
    IconsResolver(),
  ],

  dts: path.resolve(pathSrc, 'components.d.ts'),
})

const icons = Icons({
  // 自动安装图标
  autoInstall: true,
})

const plugins = [
  autoImport,
  // TODO:
  // viteMockServe({
  //   ignore: /^_/,
  //   mockPath: 'src/mock',
  //   watchFiles: true,
  //   enable: true,
  //   logger: true,
  // }),
  createVitePlugins(),
  components,
  icons,
]

// https://vitejs.dev/config/
export default (): UserConfig => {
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
    plugins: [...plugins],
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
    optimizeDeps: {
      include: [
        `monaco-editor/esm/vs/language/json/json.worker`,
        `monaco-editor/esm/vs/language/css/css.worker`,
        `monaco-editor/esm/vs/language/html/html.worker`,
        `monaco-editor/esm/vs/language/typescript/ts.worker`,
        `monaco-editor/esm/vs/editor/editor.worker`,
      ],
    },
  }
}

// storybook 配置项
export const sbPlugins = [vue(), autoImport, components, icons]
