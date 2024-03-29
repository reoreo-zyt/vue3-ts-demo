// 自动注册 md 文件夹下的所有 md 文件作为路由
import type { RouterTypes, RouteRawConfig } from '~/basic'

import MarkdownVue from '@/components/MarkDown/index.vue'
import { html } from '../../README.md'

const md = (string) => h(MarkdownVue, { content: string, key: string })
const README = md(html)

// 获取当前文件下的所有 md 文件，导入渲染自动生成路由
const files = import.meta.glob('./**/*.md') // 自定义规则
console.error(files, '==files==')
const routes: RouterTypes = []
const routeItem: RouteRawConfig = {
  path: '/md/',
  redirect: '/md/README',
  name: '文档',
  children: [],
}

routeItem.children?.push({
  path: '/md/README',
  component: README,
  name: 'README',
})

for (const i in files) {
  const copy = JSON.parse(JSON.stringify(i))
  const path = copy
  const name = copy.replace('./', '').replace('/index.md', '')
  // vite 动态导入会报错，需要引入 /* @vite-ignore */
  const { html } = await import(/* @vite-ignore */ path)
  const doc = md(html)
  routeItem.children?.push({ path: name, component: doc, name: name })
}

routes.push(routeItem)

export default routes
