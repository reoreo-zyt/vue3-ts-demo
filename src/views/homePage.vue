<template>
  <div class="main">
    <div v-for="(item, index) in data.frame" :key="'views-homePage' + index">
      <div class="main-item">
        <!-- <i-图标集-标图名/> -->
        <!-- element-plus -->
        <!-- <i-ep-Plus /> -->
        <!-- https://icon-sets.iconify.design/openmoji/anxious-face-with-sweat/ -->
        <!-- 直接使用图标 -->
        <span class="main-item-icon">
          <app-icon :icon="item.icon"></app-icon>
        </span>
        <span>{{ item.name }}</span>
        <span>
          {{ item.pkg }}
          <app-icon icon="icon-park:click" style="cursor: pointer"></app-icon>
        </span>
      </div>
      <div>{{ item.params }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// 统一为 data 形式
let data = reactive({
  frame: [
    {
      name: '',
      pkg: '',
      url: '',
      icon: '',
      params: ``,
    },
  ],
})

fetch('../../package.json')
  .then((data) => data.json())
  .then((res) => {
    console.log(res)
    const dependencies = res.dependencies
    data.frame = []
    for (let i in dependencies) {
      data.frame.push({
        name: i,
        pkg: dependencies[i],
        url: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
        icon: 'logos:element',
        params: ``,
      })
    }
    // data.frame = [
    //   {
    //     name: 'element-plus',
    //     pkg: dependencies['element-plus'],
    //     url: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
    //     icon: 'logos:element',
    //     params: ``,
    //   },
    //   {
    //     name: 'vue',
    //     pkg: dependencies['vue'],
    //     url: '',
    //     icon: 'vscode-icons:file-type-vue',
    //     params: ``,
    //   },
    //   {
    //     name: 'vue-router',
    //     pkg: dependencies['vue-router'],
    //     url: '',
    //     icon: 'vscode-icons:file-type-vue',
    //     params: ``,
    //   },
    // ]
  })
</script>

<style scoped lang="scss">
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

.main {
  position: relative;
  padding: 2rem 25%;
  font-size: 1.4rem;
  font-family: 'IM Fell French Canon Pro', sans-serif;
  background: #fff;
  line-height: 1.6;
  &-item {
    &-icon {
      margin-right: 8px;
    }
  }
}

@media all and (max-width: 400px) {
  .main {
    padding: 2rem;
  }
}
</style>
