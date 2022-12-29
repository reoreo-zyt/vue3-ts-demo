import { createApp } from 'vue'
import './style.css'
// 在 .vue 文件中使用公共类的样式
import '@/styles/index.scss'
import App from './App.vue'

createApp(App).mount('#app')
