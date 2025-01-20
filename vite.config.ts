import { type UserConfig, defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { resolve } from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';
// import postcssPxToViewport from 'postcss-px-to-viewport';
import ViteRestart from 'vite-plugin-restart';
import vueJsx from '@vitejs/plugin-vue-jsx';
import UnoCSS from 'unocss/vite';
import {
  name,
  version,
  engines,
  dependencies,
  devDependencies,
} from './package.json';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';

// 平台的名称、版本、运行所需的 node 版本、依赖、构建时间的类型提示
const __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: Date.now(),
};

const pathSrc = resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      // extensions: ['.js', '.ts', '.json', '.tsx'],
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
      },
    },
    plugins: [
      UnoCSS({
        hmrTopLevelAwait: false,
      }),
      vueJsx({}),
      visualizer({ open: true }), // 查看打包构建的包大小
      ViteRestart({
        restart: ['vite.config.[jt]s'],
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
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
      AutoImport({
        include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
        imports: [
          // 直接使用预设
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          // TODO： 自定义预设
          // {
          //   from: 'vue',
          //   imports: ['ref', 'reactive'],
          //   type: true
          // }
        ],
        //注意这个配置和src同级
        dts: './src/types/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        // 指定自定义组件位置(默认:src/components)
        dirs: ['src/components', 'src/**/components'],
      }),
      createSvgIconsPlugin({
        // 缓存图标位置
        iconDirs: [resolve(pathSrc, 'assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteCompression({
        threshold: 10240, // 对大于 10kb 的文件进行压缩
      }),
      vue(),
    ],
    // 预加载项目必需的组件
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'element-plus',
        'pinia',
        'axios',
        '@vueuse/core',
        'sortablejs',
        // 'echarts',
        'vue-i18n',
        'path-browserify',
        'path-to-regexp',
        'exceljs',
        'element-plus/es/components/form/style/css',
        'element-plus/es/components/form-item/style/css',
        'element-plus/es/components/button/style/css',
        'element-plus/es/components/input/style/css',
        'element-plus/es/components/input-number/style/css',
        'element-plus/es/components/switch/style/css',
        'element-plus/es/components/upload/style/css',
        'element-plus/es/components/menu/style/css',
        'element-plus/es/components/col/style/css',
        'element-plus/es/components/icon/style/css',
        'element-plus/es/components/row/style/css',
        'element-plus/es/components/tag/style/css',
        'element-plus/es/components/dialog/style/css',
        'element-plus/es/components/loading/style/css',
        'element-plus/es/components/radio/style/css',
        'element-plus/es/components/radio-group/style/css',
        'element-plus/es/components/popover/style/css',
        'element-plus/es/components/scrollbar/style/css',
        'element-plus/es/components/tooltip/style/css',
        'element-plus/es/components/dropdown/style/css',
        'element-plus/es/components/dropdown-menu/style/css',
        'element-plus/es/components/dropdown-item/style/css',
        'element-plus/es/components/sub-menu/style/css',
        'element-plus/es/components/menu-item/style/css',
        'element-plus/es/components/divider/style/css',
        'element-plus/es/components/card/style/css',
        'element-plus/es/components/link/style/css',
        'element-plus/es/components/breadcrumb/style/css',
        'element-plus/es/components/breadcrumb-item/style/css',
        'element-plus/es/components/table/style/css',
        'element-plus/es/components/tree-select/style/css',
        'element-plus/es/components/table-column/style/css',
        'element-plus/es/components/select/style/css',
        'element-plus/es/components/option/style/css',
        'element-plus/es/components/pagination/style/css',
        'element-plus/es/components/tree/style/css',
        'element-plus/es/components/alert/style/css',
        'element-plus/es/components/radio-button/style/css',
        'element-plus/es/components/checkbox-group/style/css',
        'element-plus/es/components/checkbox/style/css',
        'element-plus/es/components/tabs/style/css',
        'element-plus/es/components/tab-pane/style/css',
        'element-plus/es/components/rate/style/css',
        'element-plus/es/components/date-picker/style/css',
        'element-plus/es/components/notification/style/css',
        'element-plus/es/components/image/style/css',
        'element-plus/es/components/statistic/style/css',
        'element-plus/es/components/watermark/style/css',
        'element-plus/es/components/config-provider/style/css',
        'element-plus/es/components/text/style/css',
        'element-plus/es/components/drawer/style/css',
        'element-plus/es/components/color-picker/style/css',
        'element-plus/es/components/backtop/style/css',
        'element-plus/es/components/message-box/style/css',
        'element-plus/es/components/skeleton/style/css',
        'element-plus/es/components/skeleton/style/css',
        'element-plus/es/components/skeleton-item/style/css',
        'element-plus/es/components/badge/style/css',
        'element-plus/es/components/steps/style/css',
        'element-plus/es/components/step/style/css',
        'element-plus/es/components/avatar/style/css',
        'element-plus/es/components/descriptions/style/css',
        'element-plus/es/components/descriptions-item/style/css',
        'element-plus/es/components/checkbox-group/style/css',
        'element-plus/es/components/progress/style/css',
        'element-plus/es/components/image-viewer/style/css',
        'element-plus/es/components/empty/style/css',
      ],
    },
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
      // postcss: {
      //   plugins: [
      //     postcssPxToViewport({
      //       viewportWidth: 1920, //---基于1920宽度为100vw
      //     }),
      //   ],
      // },
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/styles/variables.scss" as *;
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
