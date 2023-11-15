<template>
  <div style="width: 100%; height: 100%">
    <div class="map" id="map"></div>
  </div>
</template>

<script lang="ts" setup>
import cimMap from '@/utils/cimMap'
const { initMap, addLayerGeojson } = cimMap()
const style = {
  stroke: {
    color: '#abe',
    width: 2,
  },
  fill: {
    color: '#abc',
  },
}
onMounted(() => {
  initMap('map').then((map) => {
    addLayerGeojson(map, '/geojson/china.json', style)
  })
})
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
