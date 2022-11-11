import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // Vite 路径别名配置
    alias: {
      '@': path.resolve('./src'),
    },
  },
  // 将 css 变量加载到全局，在 style 标签中可以使用
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/constant.scss";',
      },
    },
  },
  plugins: [vue()],
})
