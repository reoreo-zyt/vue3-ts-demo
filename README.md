## 这是一个 vue3 的模板

注意这里的模板基于 vite 与 ts

- `vue3` 分支
  - web 端模板
- `vue3-nuxt3` 分支
  - web 端服务器渲染模板

### 0、一些问题

#### LF will be replaced by CRLF the next time Git touches it

行尾序列编码不一致导致的问题

在使用工程 vue-cli 建立工程时，会把文件的行尾序列一致为 LF

windows 系统使用 git 时，在提交代码时会把 CRLF 更改为 LF，在拉取代码时，会把 LF 更改为 CRLF

windows 端行尾序列为 CRLF。MAC 端行尾序列为 LF

#### yarn 安装问题 There appears to be trouble with your network connection. Retrying…

yarn 安装超时

一般解决方法都是解决代理

```bash
#查看代理
yarn config list
#删除代理
yarn config delete proxy
#更换淘宝镜像
yarn config set registry https://registry.npm.taobao.org
#可能会报ssl的错误，可以设置为false
yarn config set strict-ssl false
```

#### 通过 @ 导入的文件找不到 .vue 模块

_找不到 .vue 模块_

可以在 src 下创建 `env.d.ts`

```ts
declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: ComponentOptions | ComponentOptions['setup'];
  export default component;
}
```

### git 代码提交信息规范

需要注意的点：

- 提交代码前先拉取代码
- 新功能拉取单独的分支开发，开发后合并到主分支上（个人开发没必要）

[表情图标](https://blog.csdn.net/2302_76237327/article/details/141227026)

✨ `:sparkles:`
🐛 `:bug:`
♻️ `:recycle:`
📝 `:memo:`
✅ `:white_check_mark:`
🏗️ `:building_construction:`

```bash
✨ feat: 添加用户登录功能
🐛 fix：修复 bug
♻️ refactor：代码重构
📝 docs：文档更新
✅ test：添加或更新测试用例
chore：常规维护任务
style：代码风格调整
perf：性能优化
ci：持续集成相关
🏗️ build：构建系统相关
ci/cd：持续集成/持续部署相关
revert：回滚提交
security：安全相关
i18n：国际化
l10n：本地化
merge：合并分支
hotfix：紧急修复
dependencies：依赖管理
```

### 1、搭建 `vue3` 分支项目

前置环境：

- [nodejs](https://nodejs.org/zh-cn)
  - 你可以预览 [nodejs版本](https://nodejs.org/en/download/releases)，找到 lts 版本下载。
  - 推荐使用 [nvm](https://github.com/coreybutler/nvm-windows/releases) 作为 node 版本管理工具，这样遇到低版本项目可以随时切换。

工程化配置：

vite4 + vue3 + ts + pinia + vue-router + axios + commit 规范 + 代码质量检验

#### 1.1 项目脚手架

目前主流搭建 vue3 项目的脚手架包含：

- `vue-cli`
  - 早期 vue 项目搭建脚手架，使用 webpack 构建
- `create-vue`
  - vue3 专用脚手架，使用 vite 构建

如果你还没有安装 yarn，运行以下：

```bash
npm add yarn -g
```

使用脚手架：

```bash
yarn create vite
```

_-> 选择一个依赖_

![image.png](https://s2.loli.net/2025/02/12/3ZIApC9S5yYgQtN.png)

_-> 选择 vue_

![image.png](https://s2.loli.net/2025/02/12/BWSnPzlkCmevbuV.png)

_-> 选择 typescript_

![image.png](https://s2.loli.net/2025/02/12/fJUNt4Go7awcyjW.png)

_安装依赖并运行_

```bash
# 安装依赖
yarn
# 运行
yarn dev
```

_可以一键初始化，通过命令行参数创建_

```bash
yarn create vite my-vue-app --template vue
```

#### 1.2 优化下项目结构

![image.png](https://s2.loli.net/2025/02/12/Je9vU6tgVwlkzLa.png)

#### 1.3 配置 vite.config.ts

_先安装下 node 类型_

```bash
yarn add @types/node -D
```

##### 1.3.1 常用的项目配置

- 配置别名
- 代理服务器
- 全局样式引入
- 打包配置

```typescript
import { type UserConfig, defineConfig, loadEnv, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import {
  name,
  version,
  engines,
  dependencies,
  devDependencies,
} from './package.json';

// 平台的名称、版本、运行所需的 node 版本、依赖、构建时间的类型提示
const __APP_INFO__ = {
  pkg: { name, version, engines, dependencies, devDependencies },
  buildTimestamp: Date.now(),
};

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      // extensions: ['.js', '.ts', '.json', '.tsx'],
      //设置别名
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [vue()],
    server: {
      port: 8080, //启动端口
      hmr: {
        host: '127.0.0.1',
        port: 8080,
      },
      // 设置 https 代理
      open: false,
      proxy: {
        // 代理 /dev-api 的请求
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 代理目标地址：https://api.youlai.tech
          target: env.VITE_APP_API_URL,
          rewrite: (path: any) =>
            path.replace(new RegExp('^' + env.VITE_APP_BASE_API), ''),
        },
      },
    },
    css: {
      preprocessorOptions: {
        // 定义全局 SCSS 变量
        scss: {
          api: 'modern-compiler',
          additionalData: `
            @use "@/styles/variables.scss" as *;
          `,
        },
      },
    },
    build: {
      // polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
      outDir: 'dist', // 指定输出路径
      assetsDir: 'assets', // 指定生成静态文件目录
      cssCodeSplit: true, // 启用 CSS 代码拆分
      cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
      sourcemap: false, // 构建后是否生成 source map 文件
      manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
      ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
      ssr: undefined, // 生成面向 SSR 的构建
      write: true, // 启用将构建后的文件写入磁盘
      emptyOutDir: true, // 构建时清空该目录
      chunkSizeWarningLimit: 500, // chunk 大小警告的限制
      watch: null, // 设置为 {} 则会启用 rollup 的监听器
      // minify:false, // 表示打包后的文件内容不进行压缩，方便阅读
      terserOptions: {
        compress: {
          // 打包的时候可以移除console和debugger
          drop_console: true,
          drop_debugger: true,
        },
      }, // 传递给 minify: "terser" 的更多 minify 选项
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
```

##### 1.3.2 常用插件配置

###### 1.3.2.1 自动导入依赖 `unplugin-auto-import`\*

可以自动导入 vue vue-router pinia vueuse 的依赖项

安装依赖：

```bash
yarn add unplugin-auto-import -D
```

在 `vite.config.ts` 中引入

```bash
import AutoImport from 'unplugin-auto-import/vite';
```

```ts
......
plugin: [
  ......,
  AutoImport({
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: [
      // 直接使用预设
      'vue',
      // 'vue-router',
      // 'pinia',
      // '@vueuse/core',
    ],
    //注意这个配置和src同级
    dts: './src/types/auto-imports.d.ts',
  }),
]
......
```

引入自动导入后，将节省很多写依赖导入的时间，如下示例，不需再手动引入 `ref`：

```vue
<template>
  <div>{{ appTitle }}</div>
</template>

<script setup lang="ts">
/** 自动引入 */
const appTitle = ref('vue3-template');
</script>

<style scoped></style>
```

###### 1.3.2.2 自动注册文件夹下的 vue 组件

实际上，在 vue3 中，我们可以利用 install 函数，通过 import.meta.glob 遍历组件模块实现自动注册。

不过，既然有插件，那为什么不用呢：

安装依赖：

```bash
yarn add unplugin-vue-components -D
```

```ts
import Components from 'unplugin-vue-components/vite';

......
plugin: [
  ......,
  Components({
    deep: true, // 搜索子目录
    dirs: ['src/components', 'src/**/components'], // 指定自定义组件位置(默认:src/components)
  }),
]
......
```

###### 1.3.2.3 利用 `unplugin-auto-import` 和 `unplugin-vue-components` 自动引入 element-plus

具体实现可以看这篇文章：[你真的了解 ElementPlus 的按需导入吗？](https://juejin.cn/post/7344567644174336035)
如果有自己的组件库和工具库，可以写 resolver 让自动引入组件支持。

_引入 resolver_

```ts
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
```

```ts
......
plugin: [
  ......
  Components({
    ......
    resolvers: [ElementPlusResolver()],
    ......
  }),
  AutoImport({
    ......
    resolvers: [ElementPlusResolver()],
    ......
  }),
]
......
```

###### 1.3.2.4 增强开发体验插件

_vite 重启_

安装：

```bash
yarn add vite-plugin-restart -D
```

引入：

```ts
import ViteRestart from 'vite-plugin-restart';

......
plugin: [
  ViteRestart({
    restart: ['vite.config.[jt]s'],
  }),
]
......
```

_查看构建包大小_

安装

```bash
yarn add rollup-plugin-visualizer -D
```

引入

```ts
import { visualizer } from 'rollup-plugin-visualizer'; // 查看构建的包大小

......
plugin: [
  visualizer({ open: false }),
]
......
```

###### 1.3.2.5 打包优化

_vite-plugin-compression 压缩成 gzip_
_vite-plugin-imagemin 压缩图片_

```bash
yarn add vite-plugin-compression vite-plugin-imagemin -D
```

```ts
import viteCompression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

......
plugin: [
  viteCompression({
    threshold: 10240, // 对大于 10kb 的文件进行压缩
  }),
  viteImagemin({
    gifsicle: {
      optimizationLevel: 7,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 20,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          name: 'removeViewBox',
        },
        {
          name: 'removeEmptyAttrs',
          active: false,
        },
      ],
    },
  }),
]
......
```

在 package.json 中添加以下配置用来解决网络问题

```json
"resolutions": {
    "bin-wrapper": "npm:bin-wrapper-china"
}
```

###### 1.3.2.6 更多的功能引入

- 支持 jsx
- css 样式快速实现 unocss

```ts
/** 支持功能 */
import vueJsx from '@vitejs/plugin-vue-jsx';
/** 样式相关 */
import UnoCSS from 'unocss/vite';

......
      vueJsx({}),
      UnoCSS({
        hmrTopLevelAwait: false,
      }),
......
```

定义 unocss 规则：

在项目 `uno.config.ts`

```ts
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
    'flex-x-center': 'flex justify-center',
    'flex-y-center': 'flex items-center',
    'wh-full': 'w-full h-full',
    'flex-x-start': 'flex items-center justify-start',
    'flex-x-between': 'flex items-center justify-between',
    'flex-x-end': 'flex items-center justify-end',
    'absolute-lt': 'absolute left-0 top-0',
    'absolute-rt': 'absolute right-0 top-0 ',
    'fixed-lt': 'fixed left-0 top-0',
  },
  theme: {
    colors: {
      primary: 'var(--el-color-primary)',
      primary_dark: 'var(--el-color-primary-light-5)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
```

#### 1.4 集成配置与代码统一规范

##### 1.4.1 修改 tsconfig.node.json

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo", // 指定增量编译信息的存储位置
    "target": "ES2022", // 编译生成的目标版本代码
    "useDefineForClassFields": true, // * 这个编译条件只会在 ES2021 之前的版本生效，用于需要精确控制字段属性的场景。当启用该选项时，class中的字段声明会从使用赋值操作符（如foo = 100）的方式转变为使用 Object.defineProperty 方法进行定义。
    "lib": ["ES2023"], // 指定我们需要用到的库，也可以不配置，直接根据 target 来获取
    "jsx": "preserve", // jsx 的处理方式(保留原有的jsx格式)
    "sourceMap": true, // 是否生成 sourceMap 文件
    "resolveJsonModule": true, // 允许导入 JSON 文件
    "esModuleInterop": true, // 允许从没有设置默认导出的模块中默认导入
    "baseUrl": "./", // 解析非相对模块名称的基准目录
    "paths": {
      "@": ["src"],
      "@/*": ["src/*"]
    }, // 设置模块名称到基于 baseUrl 的路径映射
    "module": "ESNext", // 生成代码使用的模块化
    "skipLibCheck": true,
    "typeRoots": [
      "node_modules/@types", // 默认值
      "src/types"
    ], // 指定类型声明文件（.d.ts文件）的根目录

    /* Bundler mode */
    "moduleResolution": "node", // 用于指定编译器在查找导入模块时所遵循的策略。
    "allowImportingTsExtensions": true, // 是否需要显示添加 .ts 后缀
    "isolatedModules": true, // 以隔离模块的方式编译每个模块，这意味着每个模块将被视为一个独立的模块，不会与其他模块共享全局状态。
    "moduleDetection": "force", // * 强制使用 ES Module，即使文件扩展名为.js。（用于控制模块解析的行为。）
    "noEmit": true, // TypeScript编译器在执行编译时将不会生成任何输出文件

    /* 类型检查规则 */
    "strict": true, // 开启一系列的类型检查规则，以确保代码的健壮性和安全性。
    "noUnusedLocals": true, // 是否报告未使用的局部变量。
    "noUnusedParameters": true, // 是否对未使用的函数参数发出警告。
    "noFallthroughCasesInSwitch": true, // 检查 switch 语句中的 case 是否存在穿透（fall-through）情况。
    "noUncheckedSideEffectImports": true // 验证那些可能产生副作用的导入，例如CSS文件的导入。
  },
  "include": [
    "vite.config.ts",
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue"
  ] // 指定需要编译的文件或文件夹
}
```

##### 1.4.2 集成 eslint 和 prettier

安装 eslint、ts 解析器、默认规则的补充

```bash
yarn add eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

配置 .eslintrc.config.cjs

```cjs
module.exports = {
  parser: 'vue-eslint-parser', // 使用 vue-eslint-parser 解析 Vue 文件
  parserOptions: {
    // 解析器的选项
    parser: '@typescript-eslint/parser', // 使用 @typescript-eslint/parser 解析 TypeScript 文件
    ecmaVersion: 2022, // ECMAScript 版本
    sourceType: 'module', // 模块类型
    ecmaFeatures: {
      // ECMAScript 特性
      jsx: true, // 支持解析 JSX 语法
    },
  },
  extends: [
    // 继承的规则
    'plugin:vue/vue3-recommended', // 继承 Vue 3 的推荐规则
    'plugin:@typescript-eslint/recommended', // 继承 TypeScript 的推荐规则
  ],
  rules: {
    // 在这里添加你的自定义规则
    '@typescript-eslint/no-unused-vars': 'on', // 关闭未使用变量的警告
    'vue/multi-word-component-names': 'on', // 关闭组件名称必须为多单词的规则
    'vue/no-unused-components': 'on', // 关闭未使用组件的警告
    'vue/no-unused-vars': 'on', // 关闭未使用变量的警告
    'vue/no-deprecated-slot-attribute': 'on', // 关闭已弃用的 slot 属性的警告
    'vue/no-deprecated-v-on-native-modifier': 'on', // 关闭已弃用的 v-on.native 修饰符的警告
    'vue/no-deprecated-v-on-event-modifiers': 'on', // 关闭已弃用的 v-on 事件修饰符的警告
    'vue/no-deprecated-v-is': 'on', // 关闭已弃用的 v-is 指令的警告
    'vue/no-deprecated-slot-props': 'on', // 关闭已弃用的 slot 属性的警告
    'vue/no-deprecated-v-on-native-modifier': 'on', // 关闭已弃用的 v-on.native 修饰符的警告
    'vue/no-deprecated-v-on-event-modifiers': 'on', // 关闭已弃用的 v-on 事件修饰符的警告
  },
  // ESLint 9.x 开始，--ext 选项已经被废弃。你需要在配置文件中使用 files 属性来指定要检查的文件类型。
  files: ['&zwnj;**/*.js', '**&zwnj;/*.ts'],
  ignores: ['node_modules/', 'dist/', 'public/', 'index.html'], // 忽略的文件或文件夹
};
```

安装 prettier 和相关插件

```bash
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

修改 .prettier.config.cjs

```cjs
module.exports = {
  // 一行最多 80 字符
  printWidth: 80,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用 tab 缩进，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号代替双引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾使用逗号
  trailingComma: 'all',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'auto',
};
```

修改 .eslint.config.cjs 配置

```cjs
extends: [
  // 继承的规则
  'plugin:vue/vue3-recommended', // 继承 Vue 3 的推荐规则
  'plugin:@typescript-eslint/recommended', // 继承 TypeScript 的推荐规则
  'prettier', // 继承 Prettier 的规则
  'plugin:prettier/recommended', // 继承 Prettier 的推荐规则
],
```

##### 1.4.3 设置代码自动保存

[如何设置自动保存](https://blog.csdn.net/baidu_20313315/article/details/130007845)

1、安装插件 Prettier
2、files.autoSave 设置为onFocuschange
3、editor.defaultFormatter 设置为 Prettier
4、设置 editor.formatOnSave

##### 1.4.4 提交规范

参考：

[【vue3-element-admin】Husky + Lint-staged + Commitlint + Commitizen + cz-git 配置 Git 提交规范](https://blog.csdn.net/u013737132/article/details/130191363)
