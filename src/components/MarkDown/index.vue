<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup lang="ts">
// 传入的 md 文件
defineProps({
  content: {
    type: String,
    required: true,
  },
})
</script>
