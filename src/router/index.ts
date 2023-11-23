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
    path: '/homepage',
    name: '管理后台封装组件',
    component: () => import('@/views/homepage/index.vue'),
  },
  {
    path: '/table',
    name: 'table 组件-使用 tsx 语法',
    component: () => import('@/views/table/index.vue'),
  },
  {
    path: '/element-ui/button',
    name: '组件库使用',
    redirect: '/element-ui/button',
    children: [
      {
        path: '/element-ui/button',
        name: '按钮',
        component: () => import('@/views/element/button/index.vue'),
      },
    ],
  },
  {
    path: '/error-page',
    redirect: '/error-page/404',
    name: '错误页面',
    children: [
      {
        path: '404',
        name: '404',
        component: () => import('@/views/error-page/404/index.vue'),
      },
      {
        path: '401',
        name: '401',
        component: () => import('@/views/error-page/401/index.vue'),
      },
    ],
  },
  {
    path: '/components',
    redirect: '/components/query-table',
    name: '组件',
    children: [
      {
        path: '/components/query-table',
        name: '查询表单',
        component: () => import('@/views/cv/queryTable/index.vue'),
      },
      {
        path: '/components/query-tree',
        name: '查询树',
        component: () => import('@/views/cv/queryTree/index.vue'),
      },
    ],
  },
  // !monoca 打包后很大，10 m多
  {
    path: '/practice',
    name: '题目练习',
    component: () => import('@/views/practice/index.vue'),
  },
  {
    path: '/veditor',
    name: '文章编辑器',
    component: () => import('@/views/veditor/index.vue'),
  },
  {
    path: '/leaflet',
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
