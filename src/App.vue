<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// 验证 scss
// import HelloWorld from './components/HelloWorld.vue'
import Cesium from './components/CesiumTest.vue'
</script>

<template>
  <!-- <HelloWorld msg="Hello Scss" /> -->
  <div class="app">
    <Cesium />
  </div>
</template>

<style scoped>
.app {
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
