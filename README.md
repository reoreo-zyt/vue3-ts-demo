## 0 一些问题

### LF will be replaced by CRLF the next time Git touches it

行尾序列编码不一致导致的问题

在使用工程 vue-cli 建立工程时，会把文件的行尾序列一致为 LF

windows 系统使用 git 时，在提交代码时会把 CRLF 更改为 LF，在拉取代码时，会把 LF 更改为 CRLF

windows 端行尾序列为 CRLF。MAC 端行尾序列为 LF

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
