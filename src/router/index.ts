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
    path: '/:pathMatch(.*)*',
    name: '地图-leaflet',
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
