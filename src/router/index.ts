import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'homePage',
    component: () => import('../views/homePage.vue'),
  },
  {
    path: '/element/buttonCom',
    name: 'elementButtonCom',
    component: () => import('../views/element/buttonCom.vue'),
  },
]

const options: RouterOptions = {
  history: createWebHashHistory(),
  routes,
}

const router: Router = createRouter(options)

export default router
