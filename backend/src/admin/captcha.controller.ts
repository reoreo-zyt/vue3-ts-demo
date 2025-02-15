import { Controller, Get, UseGuards, Session } from '@nestjs/common';
import { createMath, createText } from '@/common/utils/captcha';
import { Config } from '@/config';
import { redisUtils } from '@/common/utils/redisUtils';
import Result from '@/common/result/Result';
import { Constants } from '@/common/constant/Constants';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import CaptchaImageVo from './vo/CaptchaImageVo';
import { randomUUID } from 'crypto';
import { Throttle } from '@nestjs/throttler';
// import { AuthGuard } from '@/auth/auth.guard';
import * as svgCaptcha from 'svg-captcha';

@ApiTags('验证码模块')
@Controller('/captchaImage')
export class CaptchaController {
  /**
   * 生成验证码
   */
  // @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({
    summary: '获取验证码',
  })
  @ApiOkResponse({
    type: CaptchaImageVo,
  })
  @Throttle({
    default: {
      limit: 8,
      ttl: 1000 * 60,
    },
  })
  async getCaptchaImage(@Session() session: Record<string, any>) {
    const map = {
      math: createMath,
      text: createText,
    };
    //根据配置的是math还是text自动调用方法生成数据
    const captchaInfo: svgCaptcha.CaptchaObj = map[Config.captcha.mode]();
    //是否开启验证码
    const enable = await redisUtils.get(
      Constants.SYS_CONFIG_KEY + 'sys.account.captchaEnabled',
    );
    const captchaEnabled: boolean = enable == '' ? true : enable === 'true';
    const data = {
      captchaEnabled,
      img: captchaInfo.data,
      uuid: randomUUID(),
    };
    try {
      // TODO: redis 缓存报错了???
      // await redisUtils.set(
      //   Constants.CAPTCHA_CODE_KEY + data.uuid,
      //   captchaInfo.text.toLowerCase(),
      //   Config.captcha.expiresIn,
      // );

      // 将验证码信息存储到 session 中
      session.captcha = captchaInfo.text;
      return {
        code: "00000",
        data,
        msg: "生成验证码成功"
      };
    } catch (err) {
      return Result.Error('生成验证码错误，请重试');
    }
  }
}
