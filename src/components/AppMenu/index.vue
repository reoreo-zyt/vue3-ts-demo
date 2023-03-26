<template>
  <el-menu
    class="app-header-menu"
    :default-active="activeIndex"
    :text-color="menuConfig.menuText"
    :background-color="menuConfig.menuBg"
    :active-text-color="menuConfig.menuActiveText"
    mode="horizontal"
    @select="handleSelect">
    <!-- TODO: 只实现了二级菜单，应该实现无限菜单项，考虑模板渲染和tsx渲染 -->
    <div
      v-for="(navItem, index) in navigation"
      :key="'app-meun-navigation' + index">
      <el-menu-item v-if="!navItem.children" :index="String(index)">
        {{ navItem.name }}
      </el-menu-item>
      <el-sub-menu v-if="navItem.children" :index="String(index)">
        <template #title>{{ navItem.name }}</template>
        <el-menu-item
          v-for="(navCItem, cIndex) in navItem.children"
          :key="'app-meun-navigation' + cIndex"
          :index="String(index) + String(cIndex)">
          {{ navCItem.name }}
        </el-menu-item>
      </el-sub-menu>
    </div>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-menu',
})
</script>

<script lang="ts" setup>
import { ref } from 'vue'

// 定义类型
defineProps<{
  menuConfig: object
  activeIndex: string
}>()

// 菜单栏配置项
const menuConfig = {
  menuBg: '',
  menuText: '#444',
  menuActiveText: '#007aff',
}

// 导航栏数据
const navigation = [
  { name: '项目搭建', path: '/home' },
  {
    name: '组件示例',
    path: '',
    children: [{ name: 'element-plus', path: '/api_document' }],
  },
  { name: '我的博客', path: '/application_center' },
]

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
