/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { phoneReg } from '@/utils/domUtils'
import { MockMethod } from 'vite-plugin-mock'
import { resultError, resultSuccess, baseUrl } from '../_util'

export const createFakeUserList = [
  {
    userId: '1',
    username: 'admin',
    realname: '管理员',
    avatar:
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    desc: 'manager',
    password: '123456',
    phone: '18783231234',
    token: 'fakeToken1',
    homePath: '/dashboard/analysis',
    roles: [
      {
        roleName: 'Super Admin',
        value: 'super',
      },
    ],
  },
  {
    userId: '2',
    username: 'tester',
    password: '123456',
    realname: '测试用户',
    avatar:
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    desc: 'tester',
    token: 'fakeToken2',
    homePath: '/dashboard/workbench',
    phone: '18728972345',
    roles: [
      {
        roleName: 'Tester',
        value: 'test',
      },
    ],
  },
]

export default [
  // mock user login
  {
    url: `${baseUrl}/user/login/pwd`,
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body
      if (!username || !password) {
        return resultError('Username or password cannot be empty!')
      }
      const checkUser = createFakeUserList.filter(
        (item) =>
          [item.username, item.phone].includes(username) &&
          password === item.password,
      )
      if (!checkUser) {
        return resultError('Incorrect account or password！')
      }
      const {
        userId,
        username: _username,
        token,
        realname,
        desc,
        roles,
        avatar,
      } = checkUser[0]
      return resultSuccess({
        userId,
        username: _username,
        token,
        realname,
        desc,
        roles,
        avatar,
      })
    },
  },
  {
    url: `${baseUrl}/user/login/receive-code`,
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { phone } = body
      if (!phone) {
        return resultError('phone number cannot be empty!')
      }
      if (!phoneReg.test(phone)) {
        return resultError('phone number is not valid!')
      }

      const code = Math.random().toString(36).slice(-4)
      return resultSuccess({ code })
    },
  },
  {
    url: `${baseUrl}/user/login/sms-verify`,
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { phone, code } = body
      if (!phone || !code) {
        return resultError('phone number or code cannot be empty!')
      }
      if (!phoneReg.test(phone)) {
        return resultError('phone number is not valid!')
      }
      // if (code !== '6666') {
      //   return resultError('code is not valid!')
      // }

      const { userId, username, token, realname, desc, roles, avatar } =
        createFakeUserList[0]
      return resultSuccess({
        userId,
        username,
        token,
        realname,
        desc,
        roles,
        avatar,
      })
    },
  },
  {
    url: `${baseUrl}/user/register`,
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { phone, code, password } = body
      if (!phone || !code || !password) {
        return resultError('phone number or code or password cannot be empty!')
      }
      if (!phoneReg.test(phone)) {
        return resultError('phone number is not valid!')
      }
      // if (code !== '') {
      //   return resultError('code is not valid!')
      // }
      const newUser = {
        userId: '3',
        username: 'normal',
        password,
        phone,
        realname: 'normal member',
        avatar:
          'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
        desc: 'normal',
        token: 'fakeToken3',
        homePath: '/dashboard/workbench',
        roles: [
          {
            roleName: 'normal member',
            value: 'test',
          },
        ],
      }
      createFakeUserList.push(newUser)
      return resultSuccess({ message: '注册成功' })
    },
  },
] as MockMethod[]
