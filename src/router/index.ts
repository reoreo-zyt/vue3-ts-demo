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
    path: '/', // :pathMatch(.*)*
    redirect: '/map',
    name: '地图-leaflet',
    children: [
      {
        path: '/map:pathMatch(.*)*',
        name: '塞尔达地图',
        component: () => import('@/views/leaflet/index.vue'),
      },
    ],
  },
  ...mdRoutes,
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
}

const router: Router = createRouter(options)

export default { router, routes }
