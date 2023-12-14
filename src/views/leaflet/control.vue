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
        :title="item.title"
        :icon="item.icon"
        @click="item.click"></app-icon>
    </div>
    <div class="map_debounce" v-if="reactiveRef.showDebounce">
      <div class="debounce_tabs">
        <el-tabs v-model="reactiveRef.selectTab" class="el_tabs">
          <el-tab-pane
            v-for="(item, index) in reactiveRef.tabs"
            :key="'debounce_tabs' + index"
            :label="item.label"
            :name="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="block"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const reactiveRef = reactive({
  showDebounce: false,
  selectTab: 'layer',
  tabs: [
    { label: '图层', name: 'layer' },
    { label: '收藏夹', name: 'save' },
  ],
})
const icons = [
  { icon: 'uim:layer-group', title: '图层服务', click: handleMapLayer },
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
    .debounce_tabs {
      background: rgb(255, 255, 255);
      border-radius: 0px 0px 8px 8px;
      height: 58px;
      padding: 0 10px;
    }
    .block {
      margin: 15px 10px;
      height: calc(100% - 100px);
      background: #fff;
      border-radius: 8px;
    }
  }
}

::v-deep .el_tabs .el-tabs__nav-wrap::after {
  background-color: transparent;
}
</style>
