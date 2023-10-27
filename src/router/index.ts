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
    name: 'homePage',
    component: () => import('@/views/homepage/index.vue'),
  },
  {
    path: '/element-ui',
    name: 'elementUi',
    component: () => import('@/views/element/button/index.vue'),
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404/index.vue'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401/index.vue'),
    hidden: true,
  },
  {
    path: '/query-table',
    name: 'queryTable',
    component: () => import('@/views/cv/queryTable/index.vue'),
  },
  {
    path: '/query-tree',
    name: 'queryTree',
    component: () => import('@/views/cv/queryTree/index.vue'),
  },
  // !monoca 打包后很大，10 m多
  {
    path: '/practice',
    name: 'practice',
    component: () => import('@/views/practice/index.vue'),
  },
  ...mdRoutes,
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
}

const router: Router = createRouter(options)

export default router
