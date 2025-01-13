<template>
  <div class="login">
    <!-- 登录页头部 -->
    <div class="login-header">
      <div class="flex-y-center">
        <el-switch
          v-model="isDark"
          inline-prompt
          active-icon="Moon"
          inactive-icon="Sunny"
          @change="toggleTheme"
        />
        <!-- <lang-select class="ml-2 cursor-pointer" /> -->
      </div>
    </div>
    <!-- 登录页内容 -->
    <div class="login-form"></div>
    <!-- 登录页底部 -->
    <div class="login-footer" v-if="0">
      <el-text size="small">
        Copyright ©
        <a href="http://beian.miit.gov.cn/" target="_blank">皖ICP备20006496号-2</a>
      </el-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from "@/stores";
import { ThemeEnum } from "@/enums/ThemeEnum";

const settingsStore = useSettingsStore();

const isDark = ref(settingsStore.theme === ThemeEnum.DARK); // 是否暗黑模式

// 主题切换
const toggleTheme = () => {
  const newTheme = settingsStore.theme === ThemeEnum.DARK ? ThemeEnum.LIGHT : ThemeEnum.DARK;
  settingsStore.changeTheme(newTheme);
};
</script>

<style lang="scss" scoped>


</style>
