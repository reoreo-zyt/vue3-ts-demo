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

*使用 `vite-cli`*

```bash
yarn create vite
```

> 选择 vue typescript

*安装依赖、运行、打包*

```bash
yarn
yarn dev
yarn build
```

### 1.2 集成配置
