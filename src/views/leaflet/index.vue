<template>
  <div style="width: 100%; height: 100%">
    <div class="map" id="map"></div>
  </div>
</template>

<script lang="ts" setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

onMounted(() => {
  // TODO: 设定下范围
  const bounds = new L.LatLngBounds(
    new L.LatLng(-49.875, 34.25),
    new L.LatLng(-100, 180),
  )
  const map = L.map('map', {
    crs: L.CRS.Simple,
    attributionControl: false,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
  }).setView([0, 0], 2)

  L.tileLayer('http://192.168.101.0:8080/{z}/{x}/{y}.png', {
    attribution: '&copy; David',
    minZoom: 3,
    maxZoom: 7,
    noWrap: true,
    bounds: bounds,
  }).addTo(map)
})
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
