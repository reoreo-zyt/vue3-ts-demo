<template>
  <div>
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
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()

const treeData = reactive({
  treeLoading: false,
  cateList: [
    { name: '首页', children: [], path: '/' },
    {
      name: '组件',
      children: [
        { name: '测试', path: '/test' },
        { name: '查询表单', path: '/query-table' },
        { name: '查询树', path: '/queryTree' },
        { name: '搜索表单', path: '/searchTable' },
      ],
      path: '/',
    },
  ],
  expandedKeys: [],
})

function clickCateItem({ data }) {
  // 路由跳转
  router.push(data.path)
}
</script>
