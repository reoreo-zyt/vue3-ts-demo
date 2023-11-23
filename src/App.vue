<template>
  <div class="app">
    <div class="app-header">
      <div class="flex justify-between items-center m-2">
        <span class="text-[18px]">vue3-ts-demo</span>
        <app-icon
          icon="ant-design:menu-fold-outlined"
          class="cursor-pointer"></app-icon>
      </div>
      <app-side-bar></app-side-bar>
    </div>
    <router-view class="app-content"></router-view>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
$sidebar-color: #f5f7f9;

.app {
  display: flex;
  width: 100%;
  height: 100%;
  background: no-repeat;
  background: fixed;
  background-size: 100% 100% !important;
  transition: all 0.5s;

  .app-header {
    width: 15%;
    background: $sidebar-color;

    :deep(.el-tree) {
      background: $sidebar-color;
    }
  }

  .app-content {
    width: 85%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
</style>
