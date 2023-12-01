<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <el-switch v-model="dataTheme" inline-prompt @change="dataThemeChange" />
      <!-- TODO: 国际化 -->
      <el-dropdown trigger="click">
        <!-- <globalization
          class="hover:text-primary hover:!bg-[transparent] w-[20px] h-[20px] ml-1.5 cursor-pointer outline-none duration-300" /> -->
        <template #dropdown>
          <el-dropdown-menu class="translation">
            <el-dropdown-item
              :class="['dark:!text-white']"
              @click="translationCh">
              <app-icon
                class="check-zh"
                v-show="locale === 'zh'"
                icon="i-ep-user" />
              简体中文
            </el-dropdown-item>
            <el-dropdown-item
              :style="getDropdownItemStyle(locale, 'en')"
              :class="['dark:!text-white', getDropdownItemClass(locale, 'en')]"
              @click="translationEn">
              <span class="check-en" v-show="locale === 'en'">
                <app-icon icon="i-ep-user" />
              </span>
              English
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <Motion>
            <h2 class="outline-none">
              <TypeIt :values="[title]" :cursor="false" :speed="150" />
            </h2>
          </Motion>

          <el-form
            v-if="currentPage === 0"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large">
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    trigger: 'blur',
                  },
                ]"
                prop="username">
                <el-input clearable v-model="ruleForm.username" />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input clearable show-password v-model="ruleForm.password" />
              </el-form-item>
            </Motion>

            <Motion :delay="200">
              <el-form-item prop="verifyCode">
                <el-input clearable v-model="ruleForm.verifyCode">
                  <template v-slot:append>
                    <!-- TODO: 验证码 -->
                    <!-- <ReImageVerify v-model:code="imgCode" /> -->
                  </template>
                </el-input>
              </el-form-item>
            </Motion>

            <Motion :delay="250">
              <el-form-item>
                <div class="w-full h-[20px] flex justify-between items-center">
                  <el-checkbox v-model="checked">
                    <span class="flex">
                      <select
                        v-model="loginDay"
                        :style="{
                          width: loginDay < 10 ? '10px' : '16px',
                          outline: 'none',
                          background: 'none',
                          appearance: 'none',
                        }">
                        <option value="1">1</option>
                        <option value="7">7</option>
                        <option value="30">30</option>
                      </select>
                      <!-- {{ t('login.remember') }} -->
                      <el-tooltip effect="dark" placement="top">
                        <IconifyIconOffline icon="i-ep-user" class="ml-1" />
                      </el-tooltip>
                    </span>
                  </el-checkbox>
                  <el-button link type="primary">忘记密码</el-button>
                </div>
                <el-button
                  class="w-full mt-4"
                  size="default"
                  type="primary"
                  :loading="loading"
                  @click="onLogin()">
                  登录
                </el-button>
              </el-form-item>
            </Motion>

            <Motion :delay="300">
              <el-form-item>
                <div class="w-full h-[20px] flex justify-between items-center">
                  <el-button
                    v-for="(item, index) in operates"
                    :key="index"
                    class="w-full mt-4"
                    size="default">
                    {{ item.title }}
                  </el-button>
                </div>
              </el-form-item>
            </Motion>
          </el-form>

          <Motion v-if="currentPage === 0" :delay="350">
            <el-form-item>
              <el-divider>
                <p class="text-gray-500 text-xs">第三方登录</p>
              </el-divider>
              <div class="w-full flex justify-evenly">
                <span
                  v-for="(item, index) in thirdParty"
                  :key="index"
                  :title="item.title">
                  <app-icon
                    :icon="`ri:${item.icon}-fill`"
                    width="20"
                    class="cursor-pointer text-gray-500 hover:text-blue-400" />
                </span>
              </div>
            </el-form-item>
          </Motion>
          <!-- 手机号登录 -->
          <phone v-if="currentPage === 1" />
          <!-- 二维码登录 -->
          <qrCode v-if="currentPage === 2" />
          <!-- 注册 -->
          <regist v-if="currentPage === 3" />
          <!-- 忘记密码 -->
          <update v-if="currentPage === 4" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('@/style/login.css');
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

.translation {
  ::v-deep(.el-dropdown-menu__item) {
    padding: 5px 40px;
  }

  .check-zh {
    position: absolute;
    left: 20px;
  }

  .check-en {
    position: absolute;
    left: 20px;
  }
}
</style>

<script setup lang="ts">
import { bg } from './utils/static'
// TODO: 加载 svg 图片
// import dayIcon from '@/assets/svg/day.svg?component'
// import darkIcon from '@/assets/svg/dark.svg?component'
// import globalization from '@/assets/svg/globalization.svg?component'
import TypeIt from '@/components/ReTypeit'

const dataTheme = '#1b2a47'
let locale = 'zh'
const illustration = ''
const title = ''
let currentPage = 0
const ruleForm = {
  username: '',
  password: '',
  verifyCode: '',
}
const loginRules = {}
const checked = ''
const loginDay = 1
const loading = false
const operates = [{ title: '' }]
const thirdParty = [{ title: '', icon: 'i-ep-user' }]
// TODO: 主题更改
function dataThemeChange() {}

// TODO: 国际化
function translationCh() {}

function getDropdownItemStyle(current, translate) {
  console.log(current, translate)
}

function getDropdownItemClass(current, translate) {
  console.log(current, translate)
}

function translationEn() {}

function toRaw(comp) {
  console.log(comp)
}

// 提交校验
function onLogin() {}
</script>
