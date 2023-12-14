<template>
  <div style="width: 100%; height: 100%" class="map_contanier">
    <div class="map" id="map">
      <Control class="control"></Control>
    </div>
  </div>
</template>

<script lang="ts" setup>
import 'leaflet/dist/leaflet.css'
import '@/utils/leaflet/css/index.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setView, setControl } from '@/utils/leaflet'
import Control from './control.vue'

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const opt: any = setView('map')

  // 设置控件
  // setControl(opt.map, opt.baseLayer)
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

.control {
  position: absolute;
  right: 10px;
  z-index: 999;
}
</style>
