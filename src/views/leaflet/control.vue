<template>
  <div class="map_container">
    <!-- 地图工具 -->
    <div
      class="map_tool"
      :style="{ right: reactiveRef.showDebounce ? '420px' : '20px' }">
      <app-icon
        class="map_tool_icon"
        :style="{
          color: reactiveRef.selectIcon === index ? '#8ea2ef' : '#8e94ad',
        }"
        :font-size="16"
        v-for="(item, index) in icons"
        :key="'map_tools_icon' + index"
        :title="item.title"
        :icon="item.icon"
        @click="handleSideControl(item.prop, index)"></app-icon>
    </div>
    <!-- 图层服务 -->
    <div class="map_debounce" v-show="reactiveRef.showDebounce">
      <div class="debounce_tabs">
        <el-tabs v-model="reactiveRef.selectTab" class="el_tabs">
          <el-tab-pane
            v-for="(item, index) in reactiveRef.tabs"
            :key="'debounce_tabs' + index"
            :label="item.label"
            :name="item.name"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="block">
        <el-tree
          class="block_tree"
          :data="reactiveRef.treeData"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent" />
      </div>
    </div>
    <!-- 底图及三维切换 -->
    <el-popover placement="top-start" :width="200" trigger="click">
      <template #reference>
        <div
          class="layer_select"
          :style="{ right: reactiveRef.showDebounce ? '420px' : '20px' }"
          @click="layerSelect">
          <div class="layer_select_item cursor-pointer">
            <app-icon icon="uim:scenery" :font-size="16"></app-icon>
            <div class="flex items-center justify-center">
              <span>底图切换</span>
              <app-icon
                class="ml-1 mr-1"
                :icon="layerIcon"
                :font-size="10"></app-icon>
            </div>
          </div>
        </div>
      </template>
      <!-- 切换底图 -->
      <el-tree
        class="layer_tree"
        :data="reactiveRef.layerData"
        show-checkbox
        :check-strictly="true"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        :default-checked-keys="['Surface']"
        @check-change="selectMap" />
    </el-popover>
  </div>
</template>

<script lang="ts" setup>
import { Tree } from 'element-plus/es/components/tree-v2/src/types'
import type Node from 'element-plus/es/components/tree/src/model/node' // TODO: 扩展类型
import { storeToRefs } from 'pinia'
import { useMapStore } from '@/store/modules/map' //路径别名，引入store
import AppIcon from '@/components/AppIcon/index.vue'

const mapStore = useMapStore()
//storeToRefs 会跳过所有的 action 属性
const { map, baseLayer } = storeToRefs(mapStore)
const reactiveRef = reactive({
  showDebounce: false,
  selectTab: 'layer',
  selectIcon: -1,
  tabs: [
    { label: '图层', name: 'layer' },
    { label: '收藏夹', name: 'likes' },
    { label: '物体查询', name: 'search' },
  ],
  treeData: [
    {
      id: 1,
      label: '食物',
      isFav: false,
      children: [
        { id: 11, label: '苹果', isFav: false },
        { id: 12, label: '金苹果', isFav: false },
      ],
    },
    {
      id: 2,
      label: '野怪',
      isFav: false,
      children: [
        { id: 21, label: '猪猪', isFav: true },
        { id: 22, label: '人马', isFav: true },
      ],
    },
  ],
  isOpenLayer: false,
  layerData: [],
})
const icons = [
  {
    icon: 'uim:layer-group',
    title: '图层服务',
    prop: 'layer',
  },
  { icon: 'uim:bag', title: '收藏夹', prop: 'likes' },
  { icon: 'uim:object-group', title: '物体查询', prop: 'search' },
  { icon: 'uim:github-alt', title: 'github', prop: 'github' },
]
const layerIcon = computed(() =>
  reactiveRef.isOpenLayer ? 'eva:arrow-up-outline' : 'eva:arrow-down-outline',
)

function handleSideControl(select, index) {
  const mapControl = {
    layer: handleTabSelect,
    likes: handleTabSelect,
    search: handleTabSelect,
    github: openLink,
  }
  mapControl[select](select, index)
}

function handleTabSelect(select, index) {
  reactiveRef.showDebounce = !reactiveRef.showDebounce
  if (reactiveRef.showDebounce) {
    reactiveRef.selectIcon = index
  } else {
    reactiveRef.selectIcon = -1
  }
  reactiveRef.selectTab = select
}

function openLink() {
  window.open(
    'https://github.com/reoreo-zyt/vue3-ts-demo/tree/totk-map',
    '_blank',
  )
}

function layerSelect() {
  reactiveRef.isOpenLayer = !reactiveRef.isOpenLayer
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const layerData: any = []
  const nameMap = {
    Sky: '天空',
    Surface: '地面',
    Depths: '地底',
  }
  for (let key in baseLayer.value) {
    layerData.push({ id: key, label: nameMap[key] })
  }
  reactiveRef.layerData = layerData
}

function selectMap(data, isSelect) {
  const selectMap = baseLayer.value[data.id]
  if (isSelect) {
    // 添加图层
    selectMap.addTo(map.value)
  } else {
    // 移除图层
    selectMap.remove(map.value)
  }
}

function renderContent(
  h,
  {
    node,
  }: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    node: Node
    data: Tree
  },
) {
  return h(
    'span',
    {
      class: 'custom-tree-node',
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
    h('span', null, node.label),
    h(
      'div',
      null,
      // 收藏
      h(
        // TODO: 自动引入组件在jsx中不生效，需要手动引入下
        AppIcon,
        {
          icon: node.isFav ? 'mdi:favorite-box-outline' : 'mdi:favorite-box',
          fontSize: 8,
          onClick: () => {
            node.isFav = false
          },
        },
        null,
      ),
      // 其他
      h(
        AppIcon,
        {
          icon: 'icon-park-twotone:more-app',
          fontSize: 8,
          style: 'margin-left: 8px',
          onClick: () => {},
        },
        null,
      ),
    ),
  )
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
      .block_tree {
        padding: 15px 10px;
      }
    }
  }
  .layer_select {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 140px;
    height: 36px;
    text-align: center;
    z-index: 95;
    border: none;
    border-radius: 8px;
    padding: 0;
    background: hsla(0, 0%, 100%, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    .layer_select_item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      font-size: 16px;
      color: #8e94ad;
    }
  }
}

:deep(.el_tabs .el-tabs__nav-wrap::after) {
  background-color: transparent;
}
</style>
