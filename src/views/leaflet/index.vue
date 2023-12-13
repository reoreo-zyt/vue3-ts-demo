<template>
  <div style="width: 100%; height: 100%">
    <div class="map" id="map"></div>
  </div>
</template>

<script lang="ts" setup>
import L from 'leaflet'
import './leaflet.hash'
import 'leaflet/dist/leaflet.css'

const tileSize = 256,
  factorx = 1 / (tileSize / 3), // 3 image pixels per game unit
  factory = 1 / (tileSize / 3),
  imageheight = 30000,
  imagewidth = 36000

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const overlays = new Object(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  markers = new Object(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  groupedOverlays = new Object()

function setView() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const Zelda = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    transformation: new L.Transformation(factorx, 70.31, -factory, 58.59),
  })

  const zeldaMap = L.map('map', {
    minZoom: 0,
    maxZoom: 10,
    // tileSize: 256,
    attributionControl: false,
    crs: Zelda,
    renderer: L.canvas(),
  })

  const southWest = zeldaMap.unproject([0, imageheight], 8),
    northEast = zeldaMap.unproject([imagewidth, 0], 8),
    bounds = L.latLngBounds(southWest, northEast)

  zeldaMap.setView(L.latLng(-1432, 395), 5)

  const tile_url =
    'https://raw.githubusercontent.com/designgears/totk-map-assets/main/tiles/'

  var sky = L.tileLayer(tile_url + 'sky_complete/{z}/{x}/{y}.png', {
      maxNativeZoom: 8,
      bounds: bounds,
    }),
    surface = L.tileLayer(tile_url + 'ground/{z}/{x}/{y}.png', {
      maxNativeZoom: 8,
      bounds: bounds,
    }),
    depths = L.tileLayer(tile_url + 'underground/{z}/{x}/{y}.png', {
      maxNativeZoom: 8,
      bounds: bounds,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    baseLayers = {
      Sky: sky,
      Surface: surface,
      Depths: depths,
    }

  sky.addTo(zeldaMap)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  new L.Hash(zeldaMap)
}

onMounted(() => {
  setView()
})
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}

/** 图层控制样式 */
.leaflet-control-layers-group-name {
  font-weight: 700;
  margin-bottom: 0.2em;
  margin-left: 3px;
}

.leaflet-control-layers-group {
  margin-bottom: 0.5em;
}

.leaflet-control-layers-scrollbar {
  overflow-y: scroll;
  padding-right: 10px;
}

.leaflet-control-layers-group-label {
  margin-bottom: 2px;
}

.leaflet-control-layers-group-selector,
.leaflet-control-layers-selector {
  vertical-align: top;
}

.leaflet-control-layers-group label:not(.leaflet-control-layers-group-label) {
  text-indent: 15px;
}

.leaflet-control-layers-group.group-collapsable.collapsed
  .leaflet-control-layers-group-collapse,
.leaflet-control-layers-group.group-collapsable:not(.collapsed)
  .leaflet-control-layers-group-expand,
.leaflet-control-layers-group.group-collapsable.collapsed
  label:not(.leaflet-control-layers-group-label) {
  display: none;
}

.leaflet-control-layers-group-expand-default::before {
  display: inline-block;
  width: 12px;
  text-align: center;
  content: '+';
}

.leaflet-control-layers-group-collapse-default::before {
  display: inline-block;
  width: 12px;
  text-align: center;
  content: '-';
}

/** map 样式 */
@font-face {
  font-family: 'Hylia Serif Beta', sans-serif;
  src: url('@/assets/fonts/HyliaSerifBeta-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: OpenSans, sans-serif;
  src: url('@/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')
    format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  font-family: OpenSans, sans-serif;
}

html,
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

canvas {
  -webkit-tap-highlight-color: rgb(255 255 255 / 0%);
  -webkit-touch-callout: none;
  user-select: none;
  user-select: none;
  user-select: none;
  user-select: none;
  user-select: none;
}

.leaflet-control-layers-group > .leaflet-control-layers-group-label {
  text-decoration: underline;
}

.leaflet-control-layers-group > label:not(.leaflet-control-layers-group-label) {
  font-style: italic;
  margin-left: 10px;
}

.leaflet-control-layers-expanded {
  min-width: 220px;
}

.leaflet-control-zoom-in,
.leaflet-control-zoom-out,
.leaflet-control-attribution,
.leaflet-popup-content-wrapper,
.leaflet-popup-tip,
.leaflet-tooltip,
.leaflet-control {
  color: rgb(200 195 188) !important;
  background-color: rgb(24 26 27) !important;
  border: 0 !important;
}

.leaflet-tooltip-right::before {
  border-color: transparent rgb(24 26 27) transparent transparent !important;
}

.leaflet-tooltip-left::before {
  border-color: transparent transparent transparent rgb(24 26 27) !important;
}

.leaflet-tooltip-top::before {
  border-color: rgb(24 26 27) transparent transparent transparent !important;
}

.leaflet-tooltip-bottom::before {
  border-color: transparent transparent rgb(24 26 27) transparent !important;
}

.leaflet-control-zoom-in {
  border-bottom: 1px solid rgb(104 101 97) !important;
}

.leaflet-control-layers-separator {
  border-top: 1px solid rgb(104 101 97) !important;
}

.leaflet-control-layers-group-label input[type='checkbox'] {
  vertical-align: middle;
  float: right;
  margin: 2px 2px 2px 0;
}

#map {
  width: 100vw;
  height: 100vh;
  background: #222 url('@/assets/leaflet/totk-back.jpg');
}
</style>
