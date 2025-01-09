//  src\auth\auth.service.ts
import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { hash, verify } from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        phone: loginDto.phone,
      },
    });
    if (user) {
      const isPasswordCorrect = await verify(user.password, loginDto.password);
      if (isPasswordCorrect) {
        const token = await this.jwtService.signAsync({
          id: user.id,
          phone: user.phone,
        });
        return {
          code: 200,
          data: token,
          mag: '登录成功',
        };
      } else {
        throw new HttpException('密码错误', 200);
      }
    } else {
      throw new HttpException('用户不存在', 200);
    }
    // return loginDto;
  }
  async register(registerDto: RegisterDto) {
    // 验证用户是否存在
    const user = await this.prisma.user.findFirst({
      where: {
        phone: registerDto.phone,
      },
    }); // 存在则抛出异常
    if (user) {
      throw new HttpException('用户已存在', 200);
    } // 不存在则创建用户
    const newUser = await this.prisma.user.create({
      data: {
        phone: registerDto.phone,
        password: await hash(registerDto.password),
      },
    });
    const token = await this.jwtService.signAsync({
      id: newUser.id,
      phone: newUser.phone,
    });
    return {
      code: 200,
      data: token,
      mag: '注册成功',
    };
  }
}
