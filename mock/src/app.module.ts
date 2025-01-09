import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    JwtModule.register({
      global: true, // 全局使用
      secret: 'dehua', // 秘钥
      signOptions: {
        // 签名配置
        expiresIn: '7d', // 过期时间
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
