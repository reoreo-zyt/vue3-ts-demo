<template>
  <div class="app">
    <app-header class="app-header"></app-header>
    <router-view class="app-content"></router-view>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
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
  }

  .app-content {
    width: 85%;
  }
}
</style>
