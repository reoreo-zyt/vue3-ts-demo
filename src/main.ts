import { createApp } from 'vue'
import './style.css'
// 在 .vue 文件中使用公共类的样式
import '@/styles/index.scss'
import router from '@/router'
// !这种方式会把包全部引入，还是选择按需加载吧
// http://element-plus.org/zh-CN/guide/quickstart.html#%E5%85%A8%E5%B1%80%E9%85%8D%E7%BD%AE
// import ElementPlus from 'element-plus'
import App from './App.vue'

createApp(App) //   .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .mount('#app')
