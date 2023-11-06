import axios from 'axios'
import { PWDParams, SMSParams } from './model/loginModel'
import { Register } from './model/register'
// import http from '@/utils/request'
// import axios from 'axios'
enum Api {
  loginPwd = '/api/user/login/pwd',
  loginSMS = '/api/user/login/sms-verify',
  receiveCode = '/api/user/login/receive-code',
  register = '/api/user/register',
}

/**
 *  账号登录
 */
export const loginPwd = (params: PWDParams) => {
  return new Promise((resolve) => {
    axios.post(Api.loginPwd, params).then((res) => {
      resolve(res.data)
    })
  })
}

// 获取验证码
export const receiveCode = ({ phone }) => {
  return new Promise((resolve) => {
    axios.post(Api.receiveCode, { phone }).then((res) => {
      resolve(res.data)
    })
  })
}

// 验证码登录
export const loginSMS = (params: SMSParams) => {
  return new Promise((resolve) => {
    axios.post(Api.loginSMS, params).then((res) => {
      resolve(res.data)
    })
  })
}

// 注册
export const register = (params: Register) => {
  return new Promise((resolve) => {
    axios.post(Api.register, params).then((res) => {
      resolve(res.data)
    })
  })
}
