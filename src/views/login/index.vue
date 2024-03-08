<template>
  <div class="login" @click="handleMap">
    <div class="login_title"></div>
    <div class="sheikah">
      <div class="sheikah_bg"></div>
      <div class="sheikah_mechine"></div>
    </div>
    <ConfigMove></ConfigMove>
  </div>
</template>

<script lang="ts" setup>
import ConfigMove from './configMove.vue'
const router = useRouter()

function handleMap() {
  router.push({ path: '/map' })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('@/assets/login/bg.jpg');
  cursor: pointer;

  .login_title {
    width: 100%;
    height: 100%;
    background: url('@/assets/login/banner.png') no-repeat center;
  }

  .sheikah {
    .sheikah_bg {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('@/assets/login/sheikah_bg.png') no-repeat;
      background-size: 200px 200px;
    }

    .sheikah_mechine {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url('@/assets/login/sheikah.png') no-repeat 0 0 fixed;
      background-size: 200px 200px;
    }
  }
}
</style>
