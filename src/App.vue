<template>
  <div class="app">
    <app-side-bar class="app-header"></app-side-bar>
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

    ::v-deep .el-tree {
      background: $sidebar-color;
    }
  }

  .app-content {
    width: 85%;
  }
}
</style>
