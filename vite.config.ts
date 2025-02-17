import { type UserConfig, defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import {
  name,
  version,
  engines,
  dependencies,
  devDependencies,
} from './package.json';

/** 增强开发体验插件 */
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入
import Components from 'unplugin-vue-components/vite'; // 全局组件自动注册
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // 自动导入 element-plus
import ViteRestart from 'vite-plugin-restart'; // 自动重启
import { visualizer } from 'rollup-plugin-visualizer'; // 查看构建的包大小
/** 打包优化插件 */
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
/** 支持功能 */
import vueJsx from '@vitejs/plugin-vue-jsx';
/** 样式相关 */
import UnoCSS from 'unocss/vite';

// 平台的名称、版本、运行所需的 node 版本、依赖、构建时间的类型提示
const __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: Date.now(),
};

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      // extensions: ['.js', '.ts', '.json', '.tsx'],
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          // 直接使用预设
          'vue',
          // 'vue-router',
          // 'pinia',
          // '@vueuse/core',
        ],
        resolvers: [ElementPlusResolver()],
        //注意这个配置和src同级
        dts: './src/types/auto-imports.d.ts',
      }),
      Components({
        deep: true, // 搜索子目录
        resolvers: [ElementPlusResolver()],
        dirs: ['src/components', 'src/**/components'], // 指定自定义组件位置(默认:src/components)
      }),
      ViteRestart({
        restart: ['vite.config.[jt]s'],
      }),
      visualizer({ open: false }),
      viteCompression({
        threshold: 10240, // 对大于 10kb 的文件进行压缩
      }),
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
      vue(),
      vueJsx({}),
      UnoCSS({
        hmrTopLevelAwait: false,
      }),
    ],
    server: {
      port: 8080, //启动端口
      hmr: {
        host: '127.0.0.1',
        port: 8080,
      },
      // 设置 https 代理
      open: false,
      proxy: {
        // 代理 /dev-api 的请求
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 代理目标地址：https://api.youlai.tech
          target: env.VITE_APP_API_URL,
          rewrite: (path: any) =>
            path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/styles/reset.scss" as *;
          `,
        },
      },
    },
    build: {
      // polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态文件目录
      cssCodeSplit: true, // 启用 CSS 代码拆分
      cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
      sourcemap: false, // 构建后是否生成 source map 文件
      manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
      ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
      ssr: undefined, // 生成面向 SSR 的构建
      write: true, // 启用将构建后的文件写入磁盘
      emptyOutDir: true, // 构建时清空该目录
      chunkSizeWarningLimit: 500, // chunk 大小警告的限制
      watch: null, // 设置为 {} 则会启用 rollup 的监听器
      // minify:false, // 表示打包后的文件内容不进行压缩，方便阅读
      terserOptions: {
        compress: {
          // 打包的时候可以移除console和debugger
          drop_console: true,
          drop_debugger: true,
        },
      }, // 传递给 minify: "terser" 的更多 minify 选项
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
