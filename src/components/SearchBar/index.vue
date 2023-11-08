<template>
  <div :class="flex ? ['search-bar'] : ['search-bar', 'justify-between']">
    <div
      class="search-bar-group gap-[10px] flex flex-wrap overflow-hidden items-center">
      <div class="search-bar-item" v-for="(item, index) in search" :key="index">
        <div class="flex-box gap-[10px] flex items-center">
          <div
            class="label-text text-[14px] text-[rgb(96,98,102)] mr-[4px] break-keep v-middle">
            {{ item.label }}
          </div>
          <!-- TODO: 模板写法太繁琐了，tsx 优化下 -->
          <!-- TODO: 支持传属性值 -->
          <el-input
            v-if="item.component === 'el-input'"
            :placeholder="item.placeholder"
            v-model="item.value"
            :style="{
              ...item.style,
              width: item.style?.width || '180px',
            }"
            @input="inputChange($event, item)"
            @change="selectChange($event, item)"></el-input>
          <div
            class="flex_box gap-[10px] flex items-center"
            v-if="search.length">
            <el-button type="primary" @click="searchBtn">搜索</el-button>
            <el-button plain @click="resetBtn">重置</el-button>
          </div>
          <!-- TODO: 高级检索功能，弹出时间选择框 -->
          <div></div>
        </div>
      </div>
    </div>
    <div class="flex-box"></div>
  </div>
</template>

<script setup lang="ts">
import { Search } from './type'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  /** 是否左右布局 */
  flex: {
    type: Boolean,
    default: false,
  },
  /** 检索组件配置项 */
  search: {
    type: Array<Search>,
    required: true,
    default: [
      {
        label: '输入框',
        component: 'el-input',
        placeholder: '请输入',
        value: '',
      },
    ],
  },
})

const emits = defineEmits([
  /** 搜索触发事件 */
  'search-click',
])

function getParams() {
  // TODO: 处理下表单逻辑
  const params = {}
  return params
}

function inputChange($event, item) {
  console.error($event, item)
}
function selectChange($event, item) {
  console.error($event, item)
}
function searchBtn() {
  const params = getParams()
  emits('search-click', params)
}
function resetBtn() {
  props.search.forEach((item) => (item.value = ''))
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  margin-bottom: 10px;
  gap: 10px;

  /** 搜索、重置按钮样式 */
  .el-button + .el-button,
  .el-checkbox.is-bordered + .el-checkbox.is-bordered {
    margin-left: 0;
  }
}
</style>
