<template>
  <div class="main">
    <div v-for="(item, index) in data.frame" :key="'views-homePage' + index">
      <div class="main-item">
        <span class="main-item-icon">
          <app-icon :icon="item.icon"></app-icon>
        </span>
        <span>{{ item.name }}</span>
        <span>
          {{ item.pkg }}
          <app-icon
            icon="icon-park:click"
            style="cursor: pointer"
            @click="locateTo(item.link)"></app-icon>
        </span>
      </div>
      <div>{{ item.params }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

let data = reactive({
  frame: [
    {
      name: '',
      pkg: '',
      url: '',
      icon: '',
      params: ``,
      link: '',
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
        link: '',
      })
    }
  })

function locateTo(link: string) {
  console.log(link)
}
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
