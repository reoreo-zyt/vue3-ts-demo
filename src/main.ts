import { createApp } from 'vue'
import './style.css'
// 在 .vue 文件中使用公共类的样式
import '@/styles/index.scss'
//
import '@/styles/tailwind.css'
// Markdown 样式
import 'github-markdown-css'
// Markdown 编辑器样式
import '@milkdown/theme-nord/style.css'
import r from '@/router'
import App from './App.vue'

createApp(App).use(r.router).mount('#app')
