import { createApp } from 'vue';
import App from './App.vue';
import setupPlugins from '@/plugins';

const app = createApp(App); // 挂载pinia

// 本地SVG图标
// import "virtual:svg-icons-register";
// 暗黑主题样式
import 'element-plus/theme-chalk/dark/css-vars.css';
// 暗黑模式自定义变量
import '@/styles/dark/css-vars.css';
import '@/styles/index.scss';
import 'uno.css';

// 注册插件
app.use(setupPlugins);
app.mount('#app');
