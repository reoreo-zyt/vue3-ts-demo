import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import directives from '@/directive/index';

const app = createApp(App);

app.use(directives).mount('#app');
