<template>
  <!-- 头部导航 -->
  <div class="header-wrap">
    <div class="header">
      <div class="logo">
        <h1>
          <router-link class="alogo" :to="HOME_URL">{{
            headerText
          }}</router-link>
        </h1>
      </div>
      <div class="word">
        <span class="wenan">{{ wenanText }}</span>
      </div>
    </div>
  </div>
  <!-- 头像内容 -->
  <div class="bg-wrap">
    <div class="bg-img">
      <div class="central central-800">
        <div class="middle animated fadeInDown">
          <div class="img-male">
            <el-image
              src="https://q1.qlogo.cn/g?b=qq&amp;nk=647159607&amp;s=640"
              draggable="false"
            />
            <span>Ki</span>
          </div>
          <div class="love-icon">
            <el-image src="/imgs/like.svg" draggable="false" />
          </div>
          <div class="img-female">
            <el-image
              src="https://q1.qlogo.cn/g?b=qq&amp;nk=917640289&amp;s=640"
              draggable="false"
            />
            <span>Li</span>
          </div>
        </div>
      </div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          ></use>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          ></use>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          ></use>
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HOME_URL } from '@/config/index';

const headerText = ref('Like_Girl v5.2.0');
const wenanText = ref('喜欢花 喜欢浪漫 喜欢你~');
</script>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background: #ffffffb0;
  color: #707070;
  box-shadow: 0 2px 15px 0 rgb(115 111 111 / 10%);
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    .logo {
      h1 {
        font-size: 1.5rem;
        font-family: 'Noto Serif SC', serif;
        font-weight: 700;
      }
    }
    .word {
      font-family: 'Noto Serif SC', serif;
      font-weight: 400;
      font-size: 1.1rem;
      width: 60%;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.bg-wrap {
  background: url(https://lovey.kikiw.cn/Style/img/headCover.webp) no-repeat
    center !important;
  background-size: cover !important;
  padding-top: 8rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  .central {
    width: 100%;
    margin: 2rem auto;
    padding: 1rem;
    box-sizing: border-box;
    .middle {
      border-radius: 2rem;
      padding: 3rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: #cfcfcfa1;
      padding: 4rem 5rem 3rem;
      border-radius: 4rem;
      user-select: none;
    }
    .fadeInDown {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
    }
    .love-icon {
      el-image {
        animation: img 2s linear infinite;
      }
    }
  }
}
</style>
