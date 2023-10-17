<template>
  <div class="homepage">
    <div v-for="(link, index) in links" :key="'link_locate_' + index">
      <div class="link-name">
        <app-icon class="icon" :icon="link.icon"></app-icon>
        {{ link.name }}
      </div>
      <el-row :gutter="20" class="link-item">
        <el-col
          class="link-item-col"
          :span="6"
          v-for="(route, index) in link.routes"
          :key="'link_locate_' + index">
          <div class="link-content">
            <app-icon class="icon" :icon="route.icon"></app-icon>
            <div>
              <span class="name">{{ route.name }}</span>
              <div class="desc" :title="route.desc">{{ route.desc }}</div>
            </div>
            <div class="link">
              <app-icon
                @click="locateTo(route.to)"
                :icon="'icon-park-outline:to-right'"></app-icon>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
// TODO: 从接口中获取
const links = [
  {
    name: '快捷链接',
    icon: 'tabler:link',
    routes: [
      {
        name: '百度翻译',
        to: 'https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/',
        desc: '百度翻译-200种语言互译、沟通全世界！',
        icon: 'jam:baidu-circle',
      },
      {
        name: 'github',
        to: 'https://github.com/',
        desc: 'GitHub是一个面向开源及私有软件项目的托管平台，只支持git作为唯一的版本库格式进行托管。',
        icon: 'akar-icons:github-fill',
      },
    ],
  },
  {
    name: '组件库',
    icon: 'tabler:link',
    routes: [
      {
        name: 'element-plus',
        to: 'https://element-plus.org/zh-CN/',
        desc: 'Vue3 组件库',
        icon: 'ep:element-plus',
      },
    ],
  },
]

function locateTo(link: string) {
  window.open(link, '_blank')
}
</script>

<style lang="scss" scoped>
.homepage {
  .link-name {
    font-size: 18px;
    color: #555;
  }
  .link-item {
    cursor: pointer;
    margin-bottom: 10px;
    .link-item-col {
      color: #fff;
      .link-content {
        border-radius: 4px;
        background: #99a9bf;
        padding: 5px 10px;
        font-size: 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          font-size: 80px;
          width: 40px;
          height: 40px;
        }
        .name {
          margin-right: 4px;
        }
        .desc {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 150px;
          height: 50px;
        }
        .link {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
