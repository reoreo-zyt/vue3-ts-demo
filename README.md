## 0 一些问题

### LF will be replaced by CRLF the next time Git touches it

行尾序列编码不一致导致的问题

在使用工程vue-cli建立工程时，会把文件的行尾序列一致为LF

windows系统使用git时，在提交代码时会把CRLF更改为LF，在拉取代码时，会把LF更改为CRLF

windows端行尾序列为CRLF。MAC端行尾序列为LF

## 1. 代码提交规范

br: 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况

feat：新功能（feature）

fix：修补

docs：文档（documentation）

style： 格式（不影响代码运行的变动）

refactor：重构（即不是新增功能，也不是修改bug的代码变动）

chore：其他的小改动. 一般为仅仅一两行的改动, 或者连续几次提交的小改动属于这种

revert：撤销之前的commit

upgrade：升级改造

bugfix：修补bug

optimize：优化

perf: Performance的缩写, 提升代码性能

test：新增测试用例或是更新现有测试

ci:主要目的是修改项目继续完成集成流程(例如Travis，Jenkins，GitLab CI,Circle)的提交

build: 主要目的是修改项目构建系统(例如glup，webpack，rollup的配置等)的提交
