## 0 一些问题

### LF will be replaced by CRLF the next time Git touches it

行尾序列编码不一致导致的问题

在使用工程 vue-cli 建立工程时，会把文件的行尾序列一致为 LF

windows 系统使用 git 时，在提交代码时会把 CRLF 更改为 LF，在拉取代码时，会把 LF 更改为 CRLF

windows 端行尾序列为 CRLF。MAC 端行尾序列为 LF

### yarn 安装问题 There appears to be trouble with your network connection. Retrying…

yarn 安装超时

一般解决方法都是解决代理

```bash
#查看代理
yarn config list
#删除代理
yarn config delete proxy
#更换淘宝镜像
yarn config set registry https://registry.npm.taobao.org
```

以下解决了我的问题：

yarn.lock 里是通过别的仓库抓取的。这里 set registry 后执行 yarn install 依然走的是别的仓库。可以通过 yarn install --verbose 验证。可以通过忽略 lock 文件，同时 install 的时候加 registry 参数解决：

```bash
yarn install --no-lockfile --registry https://registry.npm.taobao.org
```

### 注意 dist 文件会包含 lint 检查中，导致 commit 提交前堵塞，打包后需要删除 dist 文件夹或者进行忽略检查。

eslint 检查忽略相关文件夹

> .eslintrc.cjs

```cjs
/dist
```

## 1. 代码提交规范

br: 此项特别针对 bug 号，用于向测试反馈 bug 列表的 bug 修改情况

feat：新功能（feature）

fix：修补

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）

chore：其他的小改动. 一般为仅仅一两行的改动, 或者连续几次提交的小改动属于这种

revert：撤销之前的 commit

upgrade：升级改造

bugfix：修补 bug

optimize：优化

perf: Performance 的缩写, 提升代码性能

test：新增测试用例或是更新现有测试

ci:主要目的是修改项目继续完成集成流程(例如 Travis，Jenkins，GitLab CI,Circle)的提交

build: 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交

## 2. 项目工程规范

- eslint 代码质量
- prettier 代码的统一格式、风格
- husky github hook，保证提交后代码的质量和格式

## 3. 配置的工程记录

### 自动引入组件

<!-- TODO: 应当自动生成组件文档 -->

- unplugin-vue-components 自动引入组件
  - 在 components 下的文件可以自动注册成组件
    - AppHeader `<app-header></app-header>`

### ncu 更新依赖包

- npm install -g npm-check-updates
  - ncu 展示最新依赖包
  - ncu -u 更新全部依赖包

### 使用 tsx

- @vitejs/plugin-vue-jsx

使用 element-plus 按钮的示例

```tsx
import { defineComponent } from 'vue'
// !在JSX中引入组件需要手动引入组件和组件样式，自动引入并不生效，复杂的功能再使用jsx吧
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'el-test',

  setup(props, context) {
    console.log(props, context)

    return () => <ElButton type='primary'>Primary</ElButton>
  },
})
```

### 使用图标

- 提供两种图标
  - element-plus [图标](https://element-plus.org/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88)
  - iconify [图标](https://icon-sets.iconify.design/openmoji/anxious-face-with-sweat/)

```html
<i-ep-Plus />
```

```html
<app-icon icon="icon-park:click" style="cursor: pointer"></app-icon>
```
