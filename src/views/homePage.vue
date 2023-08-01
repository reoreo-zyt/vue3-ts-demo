<template>
  <div class="main m-1">
    <div class="app-code-panel-item code-content">
      <div class="code-content app-tree"></div>
      <div class="code-content"></div>
    </div>
    <div class="app-code-panel-item map-content"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.main {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  flex-direction: column;

  .app-code-panel-item {
    flex: 1;
    overflow: hidden;
  }

  .code-content {
    display: flex;
    align-items: stretch;

    .code-menu {
      width: 360px;
    }
  }

  .map-content {
    position: relative;
  }
}
</style>
