<template>
  <div class="app-container">
    <Map class="map"></Map>
    <SelectHero class="select-hero"></SelectHero>
  </div>
</template>

<script lang="ts" setup>
import SelectHero from './selectHero.vue';
import Map from './map.vue';
</script>

<style lang="scss" scoped>
.app-container {
  height: 100%;
  width: 100%;
  .select-hero {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
