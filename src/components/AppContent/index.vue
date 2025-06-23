<template>
  <div>
    <!-- 时间区域 -->
    <div class="time">
      <span id="span_dt_dt">这是我们一起走过的第</span>
      <b id="tian">{{ diffDay }}天</b>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';

const diffDay = ref('');

onMounted(() => {
  setInterval(() => {
    const timeStamp = new Date('2025-05-19T00:32:00').getTime();

    diffDay.value = String(dayjs().diff(dayjs(timeStamp), 'day'));
  }, 1000);
});
</script>

<style lang="scss" scoped>
.time {
  text-align: center;
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  #span_dt_dt {
    font-size: 1.8rem;
    line-height: 5rem;
    display: block;
    background-image: linear-gradient(
      270deg,
      #ff4500,
      #ffa500,
      #ffd700,
      #90ee90,
      #00ffff,
      #1e90ff,
      #9370db,
      #ff69b4,
      #ff4500
    );
    -webkit-background-clip: text;
    color: #0000;
    animation: jianbian 60s linear infinite;
    font-family: 'Noto Serif SC', serif;
    font-weight: 700;
  }
  b {
    font-size: 2.7rem;
    font-family: 'Noto Serif SC', serif;
    font-weight: 700;
  }
}
</style>
