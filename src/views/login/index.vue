<template>
  <div class="w-full p-4 custom-login">
    <!-- 右上角扫码部分，若不需要，可直接注销 -->
    <div class="flex items-center justify-end">
      <div class="px-3 py-2 rounded-md mr-2 flex items-center bg-[#ECFAF3]">
        <span class="we inline-block pr-2 bg-contain"></span>
        <span class="text-sm text-[#07C160]">微信扫码登录</span>
      </div>
      <router-link to="/login/scan">
        <img class="relative cursor-pointer" src="@/assets/login/qr.png" />
      </router-link>
    </div>
    <!-- 登陆表单主体部分，可按需进行修改 -->
    <div class="my-10 mx-auto max-w-96">
      <div class="text-3xl pb-6">博客文章管理后台</div>
      <el-tabs v-model="activeName" class="pt-5" @tab-click="handleClick">
        <!-- 密码登陆 -->
        <el-tab-pane label="密码登录" name="pwd">
          <basis-form :schemas="loginForm" label-width="0" class="pt-4">
            <template #action="{ validate, model }">
              <el-button
                type="primary"
                size="large"
                class="w-full mb-2"
                @click="handleLogin(validate, model, 'pwd')">
                登录
              </el-button>
            </template>
          </basis-form>
        </el-tab-pane>
        <!-- 验证码登陆 -->
        <el-tab-pane label="验证码登录" name="code">
          <basis-form
            ref="form"
            :schemas="codeLoginForm"
            label-width="0"
            class="pt-4"
            @change="handleChange">
            <template #suffix>
              <el-link
                v-if="!state.sending"
                type="primary"
                :underline="false"
                class="mr-2"
                href="javascript:;"
                @click="onSendCode">
                获取验证码
              </el-link>
              <span
                v-else
                class="text-sm text-gray-400 w-[70px] text-center flex items-center">
                重发{{ leftCount }}秒
              </span>
            </template>
            <template #action="{ validate, model }">
              <el-button
                type="primary"
                size="large"
                class="w-full mb-2"
                @click="handleLogin(validate, model, 'code')">
                登录
              </el-button>
            </template>
          </basis-form>
        </el-tab-pane>
      </el-tabs>
      <div class="flex justify-between text-sm text-gray-400">
        <router-link class="text-blue-400" to="/login/forget">
          忘记密码？
        </router-link>
        <div>
          还没有账号？
          <router-link class="text-blue-400" to="/login/reg">
            立即注册>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { FormSchema } from '@/types/form'
import { ElMessage, TabsPaneContext } from 'element-plus'
import sendUtils from '@/utils/sendCode'
import { phoneReg } from '@/utils/domUtils'
import { loginPwd, loginSMS } from '@/api/page/login'
import { useUserStore } from '@/store/modules/user'
import { HttpResponse } from '@/api/sys/model/http'

export type LoginType = 'pwd' | 'code'

export default defineComponent({
  setup() {
    const { replace } = useRouter()
    const userStore = useUserStore()
    // 默认为密码登陆，将pwd改成code，将默认为验证码登陆
    const activeName = ref('pwd')
    const codeLogin = ref()
    const mobilePhone = ref()

    const { state, handleSendCode, leftCount } = sendUtils()

    // switch login type
    const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event)
    }
    const form = ref()

    // 登陆表单配置，作为配置参数传递给basic-form组件
    const loginForm = reactive([
      {
        component: 'input',
        class: 'py-1',
        prop: 'username',
        attrs: {
          placeholder: '请输入手机号/账号',
          size: 'large',
          prefixIcon: 'Avatar',
        },
        value: 'admin',
        rules: [
          { required: true, message: '请输入手机号/账号', trigger: 'blur' },
          {
            min: 4,
            max: 32,
            message: '长度在 4 到 32 个字符',
            trigger: 'blur',
          },
        ],
      },
      {
        component: 'input',
        class: 'py-1',
        prop: 'password',
        attrs: {
          placeholder: '请输入密码',
          type: 'password',
          size: 'large',
          prefixIcon: 'Lock',
        },
        value: '123456',
        rules: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            min: 6,
            max: 18,
            message: '长度在 6 到 18 个字符',
            trigger: 'blur',
          },
        ],
      },
    ]) as FormSchema[]

    // 验证码登陆配置，作为配置参数传递给basic-form组件
    const codeLoginForm = reactive([
      {
        component: 'input',
        class: 'py-1',
        prop: 'phone',
        attrs: {
          placeholder: '请输入手机号',
          size: 'large',
          prefixIcon: 'Avatar',
        },
        rules: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: phoneReg, message: '请输入正确的手机号', trigger: 'blur' },
        ],
      },
      {
        component: 'input',
        class: 'py-1',
        prop: 'code',
        attrs: {
          placeholder: '请输入验证码',
          size: 'large',
          prefixIcon: 'Lock',
        },
        itemSlot: { suffix: 'suffix' },
        rules: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      },
    ]) as FormSchema[]

    // 验证码处理，state 为状态，sendCode为处理发送的函数，leftCount为重发时间
    const handleLogin = async (validate, model, type: LoginType) => {
      if (!validate) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let res: any
      // 账号登录
      if (type === 'pwd') {
        res = (await loginPwd(model)) as HttpResponse
      } else {
        // 验证码登录
        res = (await loginSMS(model)) as HttpResponse
      }
      if (res.code !== 0) {
        ElMessage.error(res.message)
        return
      }
      const data = res.data
      // 存储用户信息
      userStore.setUserInfo(data)
      console.log('res:', res)
      // 登陆成功后的跳转
      replace('/home')
      // go(-1)
    }

    const onSendCode = () => {
      form.value.validateField('phone').then(() => {
        console.log('validateField')
        handleSendCode(mobilePhone.value)
      })
    }

    const handleChange = (event) => {
      mobilePhone.value = event.phone
    }

    return {
      form,
      activeName,
      handleClick,
      loginForm,
      codeLoginForm,
      codeLogin,
      handleLogin,
      state,
      leftCount,
      handleSendCode,
      handleChange,
      onSendCode,
    }
  },
})
</script>

<style scoped lang="scss">
.we {
  width: 19px;
  height: 19px;
  background: url('@/assets/login/security.png') no-repeat center center;
}

.custom-login {
  :deep(.el-tabs__nav-wrap::after) {
    height: unset;
  }
}
</style>
