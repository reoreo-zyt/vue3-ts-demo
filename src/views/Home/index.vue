<template>
  <div class="home">
    <div class="store">
      <el-card>
        <div class="tit">前端技术栈</div>
        <div class="store-content">
          <el-row gutter="8">
            <el-col
              :xs="24"
              :md="12"
              :lg="6"
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
      <el-card>
        <div class="tit">后端技术栈</div>
        <div class="store-content">
          <el-row gutter="8">
            <el-col
              :xs="24"
              :md="12"
              :lg="6"
              v-for="(item, index) in backendFramework"
              :key="'backendFramework' + index"
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
      <el-card>
        <div class="tit">vite 插件</div>
        <div class="store-content">
          <el-row gutter="8">
            <el-col
              :xs="24"
              :md="12"
              :lg="6"
              v-for="(item, index) in pluginLibrary"
              :key="'pluginLibrary' + index"
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
import vueImage from '@/assets/images/vue.png';
import viteImage from '@/assets/images/vite.png';
import elementImage from '@/assets/images/element.png';
import piniaImage from '@/assets/images/pinia.svg';
import piniaPPImage from '@/assets/images/pinia-plugin-persistedstate.svg';
import tsImage from '@/assets/images/ts.png';
import scssImage from '@/assets/images/scss.ico';
import vueuseImage from '@/assets/images/vueuse.svg';
import storybookImage from '@/assets/images/storybook.svg';
import githubImage from '@/assets/images/github.svg';
import sortableImage from '@/assets/images/sortable.png';
import axiosImage from '@/assets/images/axios.svg';
import nestImage from '@/assets/images/nest.svg';
import rxjsImage from '@/assets/images/rxjs.png';
import { type FrameWork } from '@/views/Home/types/framework';

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
    imgUrl: vueImage,
    content: '为 Vue.js 提供富有表现力、可配置的、方便的路由',
    color: '#41b883',
    clickFn: () => {
      window.open('https://router.vuejs.org/zh/');
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
    imgUrl: piniaPPImage,
    content:
      'pinia-plugin-persistedstate，Pinia插件，用于持久化 Pinia store 的状态到本地存储',
    color: '#8839ef',
    clickFn: () => {
      window.open('https://prazdevs.github.io/pinia-plugin-persistedstate/');
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
  {
    imgUrl: scssImage,
    content: '世界上最成熟、最稳定、最强大的专业级CSS扩展语言！',
    color: '#533c78',
    clickFn: () => {
      window.open('https://www.sass.hk/');
    },
  },
  {
    imgUrl: vueuseImage,
    content: 'Vue 组合式工具集，基础 Vue 组合式工具的集合',
    color: '#41b883',
    clickFn: () => {
      window.open('https://vueuse.nodejs.cn/');
    },
  },
  {
    imgUrl: storybookImage,
    content: '无需繁重的工作即可构建组件库文档',
    color: '#FF4785',
    clickFn: () => {
      window.open('https://storybook.js.org/');
    },
  },
  {
    imgUrl: sortableImage,
    content: '为现代浏览器和触摸设备重新排序拖放列表。不需要 jQuery 或框架。',
    color: '#72b8ff',
    clickFn: () => {
      window.open('https://github.com/SortableJS/Sortable');
    },
  },
  {
    imgUrl: axiosImage,
    content: 'Axios 是一个基于 Promise 的 HTTP 库，可以用在浏览器和 node.js 中',
    color: '#5A29E4',
    clickFn: () => {
      window.open('https://axios-http.com/');
    },
  },
  {
    imgUrl: githubImage,
    content:
      'qs 是一个 node.js 和浏览器中的 url 查询字符串解析和序列化库。它可以将 JavaScript 对象转换为 url 查询字符串，也可以将 url 查询字符串解析为 JavaScript 对象。',
    color: '#24292E',
    clickFn: () => {
      window.open('https://github.com/ljharb/qs');
    },
  },
]);

const backendFramework = ref<FrameWork[]>([
  {
    imgUrl: nestImage,
    content:
      'Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用的框架。',
    color: '#FF4785',
    clickFn: () => {
      window.open('https://nest.nodejs.cn/');
    },
  },
  {
    imgUrl: rxjsImage,
    content:
      'RxJS 是一个库，它通过使用 observable 序列来编写异步和基于事件的程序。可以把 RxJS 当做是用来处理事件的 Lodash。',
    color: '#FF4785',
    clickFn: () => {
      window.open('https://cn.rx.js.org/manual/overview.html');
    },
  },
  {
    imgUrl: githubImage,
    content:
      'Argon2 是一种新兴的密码哈希函数，旨在提供比以往任何时候都更强的安全性',
    color: '#24292E',
    clickFn: () => {
      window.open('https://github.com/ranisalt/node-argon2');
    },
  },
  {
    imgUrl: githubImage,
    content:
      '在 TypeScript 生态系统中，reflect-metadata 库是一种强大的工具，它允许我们在运行时获取更多的类型信息，从而实现一些高级功能。',
    color: '#24292E',
    clickFn: () => {
      window.open('https://rbuckton.github.io/reflect-metadata/');
    },
  },
]);

const pluginLibrary = ref<FrameWork[]>([
  {
    imgUrl: githubImage,
    content: 'vite-plugin-compression 把文件打包成 gzip',
    color: '#24292E',
    clickFn: () => {
      window.open(
        'https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md',
      );
    },
  },
  {
    imgUrl: githubImage,
    content: 'vite-plugin-imagemin 压缩图片资源',
    color: '#24292E',
    clickFn: () => {
      window.open(
        'https://github.com/vbenjs/vite-plugin-imagemin/blob/main/README.zh_CN.md',
      );
    },
  },
  {
    imgUrl: githubImage,
    content: 'unplugin-auto-import 自动导入 vue vue-router pinia vueuse 等',
    color: '#24292E',
    clickFn: () => {
      window.open('https://github.com/unplugin/unplugin-auto-import');
    },
  },
  {
    imgUrl: githubImage,
    content: 'unplugin-vue-components 按需引入组件库组件和页面',
    color: '#24292E',
    clickFn: () => {
      window.open(
        'https://github.com/vbenjs/vite-plugin-imagemin/blob/main/README.zh_CN.md',
      );
    },
  },
  {
    imgUrl: githubImage,
    content:
      '‌vite-plugin-style-import 按需引入组件库样式，搭配 unplugin-vue-components 食用',
    color: '#24292E',
    clickFn: () => {
      window.open(
        'https://github.com/vbenjs/vite-plugin-style-import/blob/main/README.zh_CN.md',
      );
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
