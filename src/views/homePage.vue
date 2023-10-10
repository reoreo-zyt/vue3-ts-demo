<template>
  <div class="main">
    <div
      v-for="(item, index) in reactiveRef.dependencies"
      :key="'views-homePage' + index">
      <div class="main-item">
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

// 统一为 reactiveRef 形式
let reactiveRef = reactive({
  dependencies: [
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
    console.error(res)
    const dependencies = res.dependencies
    reactiveRef.dependencies = []
    for (let i in dependencies) {
      reactiveRef.dependencies.push({
        name: i,
        pkg: dependencies[i],
        url: 'https://element-plus.gitee.io/zh-CN/guide/design.html',
        icon: 'logos:element',
        params: ``,
      })
    }
  })
</script>

<style scoped lang="scss">
.main {
  position: relative;
  padding: 2rem 25%;
  font-size: 1.4rem;
  background: #fff;
  line-height: 1.6;

  &-item {
    &-icon {
      margin-right: 8px;
    }
  }
}

@media all and (width <= 400px) {
  .main {
    padding: 2rem;
  }
}
</style>
