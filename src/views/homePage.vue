<template>
  <div v-for="(item, index) in examples" :key="'homePage' + index">
    <div>{{ item.name }}</div>
    <div v-for="(i, index) in item.routers" :key="'homePage-item' + index">
      <el-link :href="i.route" target="_blank">
        {{ i.name }}
        <el-icon class="el-icon--right">
          <icon-view />
        </el-icon>
      </el-link>
    </div>
    <el-test></el-test>
  </div>
</template>

<script lang="ts" setup>
import { View as IconView } from '@element-plus/icons-vue'
import ElTest from '@/components/test/index'

const examples = [
  {
    name: 'element plus 示例',
    routers: [
      {
        name: '查看 buttonCom',
        route: '/#/element/buttonCom',
      },
    ],
  },
]
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
