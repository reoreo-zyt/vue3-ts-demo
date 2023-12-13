<template>
  <div style="width: 100%; height: 100%">
    <div class="map" id="map"></div>
  </div>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css'
import '@/utils/leaflet/css/index.css'
import { setView, setControl } from '@/utils/leaflet'

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setView('map').then((opt: any) => {
    setControl(opt.map, opt.baseLayer)
  })
})
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}

#map {
  width: 100vw;
  height: 100vh;
  background: #222 url('@/assets/leaflet/totk-back.jpg');
}
</style>
