<template>
  <nav class="app-header">
    <div class="app-header-logo">测试功能</div>
    <app-menu
      class="app-header-menu"
      :menu-config="{}"
      :active-index="String(0)"></app-menu>
    <div class="app-header-avatar">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            size="default"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </span>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-monitor">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-header',
})
</script>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-header {
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  user-select: none;
  border-bottom: solid 1px #e6e6e6;

  &-menu {
    width: 500px;
  }

  &-logo {
    display: flex;
    align-items: center;
    padding: 0 40px;
    font-size: 20px;
    font-weight: 500;
  }

  &-avatar {
    display: flex;
    align-items: center;
    margin: 0 16px;

    .el-avatar {
      cursor: pointer;
      border: 1px solid #eeee;
    }
  }
}
</style>
