<template>
  <main>
    <div v-for="(item, index) in data" :key="'views-homePage' + index">
      <div>{{ item.name }}</div>
      <!-- <i-图标集-标图名/> -->
      <!-- element-plus -->
      <i-ep-Plus />
      <!-- https://icon-sets.iconify.design/openmoji/anxious-face-with-sweat/ -->
      <!-- 直接使用图标 -->
      <app-icon :icon="'openmoji:anxious-face-with-sweat'"></app-icon>
      <div>{{ item.params }}</div>
    </div>
  </main>
</template>

<script lang="ts" setup>
// 定义类型
defineProps<{
  data: Array<object>
}>()

// 数据
const data = [
  {
    name: 'element-plus',
    url: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
    params: ``,
  },
  {
    name: 'vite',
    url: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
    params: ``,
  },
]
</script>

<style scoped>
@font-face {
  font-family: 'Sucrose Bold Two';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/sucrose.woff2')
    format('woff2');
}

@font-face {
  font-family: 'IM Fell French Canon Pro';
  src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/im-fell-french-canon-pro.woff2')
    format('woff2');
}

main {
  position: relative;
  padding: 2rem 25%;
  font-size: 1.4rem;
  font-family: 'IM Fell French Canon Pro', sans-serif;
  background: #fff;
  line-height: 1.6;
}

@media all and (max-width: 400px) {
  main {
    padding: 2rem;
  }
}
</style>
