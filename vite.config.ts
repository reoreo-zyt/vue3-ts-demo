import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';
import postcssPxToViewport from 'postcss-px-to-viewport';
import ViteRestart from 'vite-plugin-restart';
import vueJsx from '@vitejs/plugin-vue-jsx';

import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from 'vite-plugin-style-import';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    // extensions: ['.js', '.ts', '.json', '.tsx'],
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vueJsx({}),
    visualizer({ open: false }), // 查看打包构建的包大小
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
    }),
    viteCompression({
      threshold: 10240, // 对大于 10kb 的文件进行压缩
    }),
    vue(),
  ],
  server: {
    port: 8080, //启动端口
    hmr: {
      host: '127.0.0.1',
      port: 8080,
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: '127.0.0.1:3000',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 1920 //---基于1920宽度为100vw
        })
      ]
    }
  },
  build: {
    polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
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
});
