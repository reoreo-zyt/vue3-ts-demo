import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Config } from "@/config";
// api 文档插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// session 中间件
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api/v1');

  app.use(session({
    secret: Config.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 3600000 }
  }));

  const options = new DocumentBuilder()
    .setTitle('接口文档')
    .setDescription('系统接口文档') // 文档介绍
    .setVersion('0.0.1') // 文档版本
    .build();
  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);

  await app.listen(process.env.PORT ?? 8989);
}
bootstrap();
