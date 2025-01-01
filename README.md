## 一些问题

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
#可能会报ssl的错误，可以设置为false
yarn config set strict-ssl false
```

## 一些工具

- `tree-cli`
  - npm 包，可以生成文件目录树结构

## 一些规范

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
build：构建系统相关
ci/cd：持续集成/持续部署相关
revert：回滚提交
security：安全相关
i18n：国际化
l10n：本地化
merge：合并分支
hotfix：紧急修复
dependencies：依赖管理
```

## 1、项目搭建

### 1.1 使用 `vite-cli`

_使用 `vite-cli`_

```bash
yarn create vite
```

> 选择 vue typescript

_安装依赖、运行、打包_

```bash
yarn
yarn dev
yarn build
```

### 1.2 集成配置

_安装 nodejs 的类型定义文件_

```bash
yarn add @types/node -D
```

_修改 tsconfig.node.json_

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

_修改 vite.config.ts_

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
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
    proxy: {
      '/api': {
        target: '127.0.0.1:55510',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  },
});
```

### 1.3 集成 `eslint` 和 `prettier`

_安装 eslint、ts 解析器、默认规则的补充_

```bash
yarn add eslint eslint-plugin-vue @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

_安装 .eslintrc.config.cjs_

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
