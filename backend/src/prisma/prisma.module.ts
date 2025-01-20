import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 导出 PrismaService 以便在其他模块中使用
})
export class PrismaModule {}
