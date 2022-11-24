<template>
  <div id="cesium-container"></div>
</template>

<script setup lang="ts">
import { Viewer } from 'cesium'
import { onMounted, ref } from 'vue'

onMounted(() => {
  const viewer = ref(new Viewer('cesium-container'))
})
</script>

<style scoped>
#cesium-container {
  overflow: hidden;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
