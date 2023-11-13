import { createApp } from 'vue'
import './style.css'
// 在 .vue 文件中使用公共类的样式
import '@/styles/index.scss'
//
import '@/styles/tailwind.css'
// Markdown 样式
import 'github-markdown-css'
// element-plus 样式
import 'element-plus/theme-chalk/index.css'
import { store } from '@/store'
import r from '@/router'
import App from './App.vue'

createApp(App).use(r.router).use(store).mount('#app')
