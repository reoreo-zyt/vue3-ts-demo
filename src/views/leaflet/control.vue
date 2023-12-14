<template>
  <div class="map_container">
    <div
      class="map_tool"
      :style="{ right: reactiveRef.showDebounce ? '420px' : '20px' }">
      <app-icon
        class="map_tool_icon"
        :font-size="16"
        v-for="(item, index) in icons"
        :key="'map_tools_icon' + index"
        :icon="item.icon"
        @click="item.click"></app-icon>
    </div>
    <div class="map_debounce" v-if="reactiveRef.showDebounce">
      <div class="datav_menu">
        <div class="menu_base_panel"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const reactiveRef = reactive({
  showDebounce: false,
})
const icons = [
  { icon: 'uim:layer-group', click: handleMapLayer },
  { icon: 'ant-design:clear-outlined' },
  { icon: 'ri:screenshot-2-line' },
]

function handleMapLayer() {
  reactiveRef.showDebounce = !reactiveRef.showDebounce
}
</script>

<style lang="scss" scoped>
.map_container {
  width: 100%;
  height: 100%;
  .map_tool {
    position: absolute;
    border: 0;
    border-radius: 20px;
    background: hsla(0, 0%, 100%, 0.9);
    box-shadow: 1px 1px 5px #eaeaea;
    right: calc(20px);
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
  .map_debounce {
    width: 400px;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 999;
    background-color: #f3f5fa;
    .datav_menu {
      width: 100%;
      box-shadow: rgba(192, 192, 192, 0.66) 1px 0px 5px;
      .menu_base_panel {
        height: 100%;
        width: 100%;
        transition: all 0.3s ease;
        background-color: #f3f5fa;
        box-shadow: 1px 0 5px hsla(0, 0%, 75.3%, 0.66);
      }
    }
  }
}
</style>
