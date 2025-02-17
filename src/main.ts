import { createApp } from 'vue';
import App from './App.vue';
import directives from '@/directive/index';
import router from '@/router/index';

const app = createApp(App);

app.use(router).use(directives).mount('#app');
