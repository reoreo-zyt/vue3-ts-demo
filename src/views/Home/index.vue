<template>
  <div class="home">
    <div class="store">
      <el-card>
        <div class="tit">技术栈</div>
        <div class="store-content">
          <el-row gutter="8">
            <el-col
              :xs="24"
              :md="12"
              :lg="8"
              v-for="(item, index) in framework"
              :key="'framework' + index"
            >
              <div class="store-item">
                <div class="logo">
                  <img :src="item.imgUrl" alt="" />
                  <el-button
                    @click="item.clickFn"
                    size="small"
                    :style="{ backgroundColor: item.color }"
                  >
                    Go
                  </el-button>
                </div>
                <div class="content">
                  {{ item.content }}
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import vueImage from '@/assets/images/vue.png';
import viteImage from '@/assets/images/vite.png';
import elementImage from '@/assets/images/element.png';
import piniaImage from '@/assets/images/pinia.svg';
import tsImage from '@/assets/images/ts.png';
import { type FrameWork } from './types/framework';

const framework = ref<FrameWork[]>([
  {
    imgUrl: vueImage,
    content:
      '渐进式 JavaScript 框架 易学易用，性能出色，适用场景丰富的 Web前端框架。',
    color: '#41b883',
    clickFn: () => {
      window.open('https://cn.vuejs.org/guide/introduction.html');
    },
  },
  {
    imgUrl: viteImage,
    content: 'Vite 下一代的前端工具链 为开发提供极速响应',
    color: '#9c5cfe',
    clickFn: () => {
      window.open('https://cn.vitejs.dev/');
    },
  },
  {
    imgUrl: elementImage,
    content:
      '网站快速成型工具，Element-plus一套为开发者、设计师和产品经理准备的桌面端组件库',
    color: '#409eff',
    clickFn: () => {
      window.open('https://element-plus.org/zh-CN/component/button.html');
    },
  },
  {
    imgUrl: piniaImage,
    content: 'Pinia 符合直觉的 Vue.js 状态管理库',
    color: '#ffc61e',
    clickFn: () => {
      window.open('https://pinia.web3doc.top/');
    },
  },
  {
    imgUrl: tsImage,
    content:
      'TypeScript具有类型系统，且是JavaScript的超集。它可以编译成普通的JavaScript代码。',
    color: '#007acc',
    clickFn: () => {
      window.open('https://www.tslang.cn/');
    },
  },
]);
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .store {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    .el-card {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      :deep(.el-card__body) {
        padding: 0 !important;
      }

      .tit {
        width: 100%;
        border-bottom: 1px var(--el-border-color-dark) solid;
        padding: 20px;
        padding-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
      }
      .store-content {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 10px;
        .store-item {
          width: 100%;
          padding: 10px 4px;
          height: 125px;
          border-radius: 5px;
          margin-bottom: 8px;
          border: 1px var(--el-border-color-dark) solid;
          .logo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .el-button {
              color: #fff;
            }
            img {
              width: 50px;
              height: 50px;
            }
          }
          .content {
            margin-top: 5px;
            // color: gray;
          }
        }
      }
    }
  }
}
</style>
