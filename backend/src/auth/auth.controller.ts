//  src\auth\auth.controller.ts
import { Body, Controller, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { APITags } from '../enums/index';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags(APITags.UserManager)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * @description: 用户登录
   */
  @Post('login')
  @ApiOkResponse({ type: LoginDto })
  @ApiOperation({ summary: '查询用户表单数据是否存在数据库中' })
  login(@Body() loginDto: LoginDto, @Session() session: Record<string, any> ) {
    // 校验验证码的文本是否与 session 中保存的文本相同
    const isEqual = session.captcha === loginDto.captchaCode ? true : false;
    if(!isEqual) {
      return {
        code: "B0001",
        data: null,
        msg: "验证码校验失败！已重新刷新验证码！"
      }
    } else {
      return this.authService.login(loginDto);
    }
    // return this.authService.login(loginDto);
  }

  /**
   * @description: 用户注册
   */
  @Post('register')
  @ApiOkResponse({ type: RegisterDto })
  @ApiOperation({ summary: '把用户表单数据存储在数据库中' })
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }
}
