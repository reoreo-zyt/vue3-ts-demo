<template>
  <div class="not-container">
    <img src="@/assets/images/500.png" class="not-img" alt="500" />
    <div class="not-detail">
      <h2>500</h2>
      <h4>抱歉，登录超时，您的网络不见了~🤦‍♂️🤦‍♀️</h4>
      <el-button type="primary" @click="router.push(HOME_URL)"
        >重新登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts" name="500">
import { useRouter } from 'vue-router';
import { HOME_URL } from '@/config';
const router = useRouter();
</script>

<style scoped lang="scss">
@use './index.scss';
</style>
