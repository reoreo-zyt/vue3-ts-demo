import {
  createRouter,
  createWebHashHistory,
  RouterOptions,
  Router,
  RouteRecordRaw,
} from 'vue-router'

// TODO: 在 Views 下新建一个文件夹，这个文件夹的页面自动生成路由
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
