<template>
  <el-menu
    class="app-header-menu"
    :default-active="activeIndex"
    :text-color="menuConfig.menuText"
    :background-color="menuConfig.menuBg"
    :active-text-color="menuConfig.menuActiveText"
    mode="horizontal"
    @select="handleSelect">
    <!-- TODO: 实现无限菜单项 -->
    <!-- 没有子节点、使用 el-menu-item 渲染 -->
    <!-- 有子节点、使用 el-sub-menu 渲染 -->
    <!-- 循环渲染、使用 app-header -->
    <!-- 模板写法的菜单组件 -->
    <el-menu-item index="1">主页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
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
  // asdasd
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const navigation = [
  { name: '首页', path: '/home' },
  { name: '数据中心', path: '/data_center' },
  {
    name: '开发中心',
    path: '',
    children: [
      { name: 'API文档', path: '/api_document' },
      { name: 'API示例', path: '/api_example' },
      { name: 'UI规范', path: '/ui_standard' },
      { name: 'UI组件', path: '/ui_component' },
      { name: 'UI应用', path: '/ui_application' },
      { name: '问题库', path: '/api_question' },
    ],
  },
  { name: '应用中心', path: '/application_center' },
  {
    name: '文档中心',
    path: '/document_center',
    children: [
      { name: 'API文档', path: '/document_center/api_document' },
      { name: '平台介绍', path: '/platform_introduction' },
      { name: '运维文档', path: '/operational_documents' },
      { name: '建设方案', path: '/Construction_plan' },
      { name: '建模规范', path: '/modeling_normalization' },
      { name: 'UE规范', path: '/ue_standard' },
    ],
  },
  { name: '案例中心', path: '/case_center' },
  { name: '多级菜单测试', path: '' },
]

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
