import { createApp } from 'vue'
import './style.css'
// 在 .vue 文件中使用公共类的样式
import '@/styles/index.scss'
import App from './App.vue'
import naiveui from './plugins/naiveui'

createApp(App).use(naiveui).mount('#app')
