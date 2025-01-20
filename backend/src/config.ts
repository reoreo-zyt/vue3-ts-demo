export const Config = {
  captcha: {
    //验证码类型 math或text
    mode: 'math',
    //验证码过期时间
    expiresIn: 60 * 2,
  },
  //redis连接配置
  redis: {
    //主机地址
    host: '127.0.0.1',
    //端口
    port: 6379,
    //数据库
    db: 5,
    //密码
    //password:""
  },
  sessionSecret: "123456"
}
