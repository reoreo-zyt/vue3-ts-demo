import { createApp } from 'vue'
import './style.css'
// 在 .vue 文件中使用公共类的样式
import '@/styles/index.scss'
// Markdown 样式
import 'github-markdown-css'
import r from '@/router'
import App from './App.vue'

createApp(App).use(r.router).mount('#app')
