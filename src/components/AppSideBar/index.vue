<template>
  <query-tree
    ref="tree"
    class="tree"
    v-loading="treeData.treeLoading"
    :tree-data="treeData.cateList"
    :expanded-keys="treeData.expandedKeys"
    node-key="sfid"
    :active-content-menu="false"
    @node-click="clickCateItem"
    :tree-props="{
      label: 'name',
      children: 'children',
      isLeaf: 'isLeaf',
    }"></query-tree>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const treeData = reactive({
  treeLoading: false,
  // TODO: 获取 router 的路由
  cateList: [
    { name: '首页', children: [], path: '/' },
    {
      name: '错误页面',
      children: [
        { name: '401', path: '/401' },
        { name: '404', path: '/404' },
      ],
      path: '/',
    },
    {
      name: 'element-ui',
      children: [{ name: '按钮', path: '/element-ui' }],
    },
    {
      name: '组件',
      children: [
        { name: '查询表单', path: '/query-table' },
        { name: '查询树', path: '/query-tree' },
      ],
      path: '/',
    },
    {
      name: '题目练习',
      children: [{ name: '两数相加', path: '/practice' }],
      path: '/practice',
    },
    {
      name: '文档',
      children: [{ name: '测试', path: '/md/test' }],
      path: '/md/test',
    },
  ],
  expandedKeys: [],
})

function clickCateItem({ data }) {
  // 路由跳转
  router.push(data.path)
}
</script>
