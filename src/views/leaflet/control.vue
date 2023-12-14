<template>
  <div class="map_tool">
    <app-icon
      class="map_tool_icon"
      v-for="(item, index) in icons"
      :key="'map_tools_icon' + index"
      :icon="item.icon"></app-icon>
  </div>
</template>

<script lang="ts" setup>
const icons = [
  { icon: 'uim:layer-group' },
  { icon: 'ant-design:clear-outlined' },
  { icon: 'ri:screenshot-2-line' },
]
</script>

<style lang="scss" scoped>
.map_tool {
  position: absolute;
  border: 0;
  border-radius: 20px;
  background: hsla(0, 0%, 100%, 0.9);
  box-shadow: 1px 1px 5px #eaeaea;
  right: 20px;
  top: 20px;
  display: flex;
  width: 36px;
  flex-wrap: wrap;
  padding: 5px;
  .map_tool_icon {
    color: #8e94ad;
    cursor: pointer;
    margin-bottom: 4px;
  }
}
</style>
