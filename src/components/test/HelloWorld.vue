<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <div class="msg">{{ msg }}</div>
</template>

<style lang="scss" scoped>
.msg {
  font-size: $large-size;
}
</style>
