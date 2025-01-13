import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/views/Login/index.vue'),
  },
  // {
  //   path: '/user',
  //   name: 'User',
  //   meta: {
  //     title: '用户管理',
  //     keepAlive: true,
  //     requireAuth: false,
  //   },
  //   component: () => import('@/views/ProTable/user/index.vue'),
  // },
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/views/Home/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
