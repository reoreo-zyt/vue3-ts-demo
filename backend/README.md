## 导入 sql

```sql
use 数据库名字;
source E:/projects/vue3-ts-demo/backend/carole.sql;
```



## 使用 NestJs 做后端接口

### 1、新建 Next 程序

```bash
yarn global add @nestjs/cli
```

```bash
nest new mock
```

### 2、使用 prisma 连接数据库

- `mysql` 8.4.3

```bash
npx prisma init --datasource-provider mysql
```

### 3、通过 prisma 创建表

定义 `User` 表

```prisma
/**
 * 主键 用户id
 * phone 用户账号
 * password用户密码
 * 创建时间
 * 更新时间
 */
model User {
  id         Int      @id @default(autoincrement())
  phone      String   @unique
  password   String
  createTime DateTime @default(now())
  updateTime DateTime @updatedAt()
}
```

```bash
npx prisma migrate dev --name creat
```

### 4、prisma 相关资料

[JWT 注册登录](https://juejin.cn/post/7386264336513646655)
