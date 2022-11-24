<template>
  <div id="cesiumContainer"></div>
</template>

<script setup lang="ts">
import { Viewer } from 'cesium'
import { onMounted, ref } from 'vue'

onMounted(() => {
  const viewer = ref(new Viewer('cesiumContainer'))
})
</script>

<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
