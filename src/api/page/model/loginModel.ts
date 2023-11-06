export interface UserItem {
  id?: string //主键id
  username?: string //账号
  realname?: string //真实姓名
  departIds?: string //所属部门id 以逗号分隔
  roleIds?: string //角色id 以逗号分隔
  avatar?: string //头像
  birthday?: string //生日
  sex?: string // 0 未选择 1 男 2 女
  sex_dictText?: string
  email?: string //邮箱
  phone?: string //手机号
  workNo?: string //工号

  status?: string //1 正常 2 冻结
  status_dictText?: string

  createBy?: string //创建人
  createTime?: string //创建时间
  updateBy?: string
  updateTime?: string
  token?: string //token
}

export interface PWDParams {
  username: string
  password: string
}

export interface SMSParams {
  phone: string
  code: number
}
