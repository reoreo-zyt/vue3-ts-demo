import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
} from 'vue-router'

import type { RouterTypes } from '~/basic'
import mdRoutes from '@/md/index'

const routes: RouterTypes = [
  {
    path: '/',
    name: '登录',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/map:pathMatch(.*)*',
    name: '塞尔达地图',
    component: () => import('@/views/leaflet/index.vue'),
  },
  ...mdRoutes,
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
}

const router: Router = createRouter(options)

export default { router, routes }
