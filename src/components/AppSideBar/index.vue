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
import type { RouterTypes } from '~/basic'
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import r from '@/router/index'

const router = useRouter()

const treeData = reactive({
  treeLoading: false,
  cateList: [] as RouterTypes,
  expandedKeys: [],
})

function clickCateItem({ data }) {
  // 路由跳转
  router.push(data.path)
}

onMounted(() => {
  // 获取所有路由渲染
  treeData.cateList = r.routes
})
</script>
