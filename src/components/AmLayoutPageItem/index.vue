<template>
  <section
    class="am_layout_page_item"
    :class="{ page_item_no_margin: isNoMargin }">
    <slot />
  </section>
</template>
<script setup lang="ts">
defineProps({
  isNoMargin: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
.am_layout_page_item {
  padding: 16px;
  margin: 8px;
  background: var(--el-bg-color);
  border-radius: 4px;
}

.page_item_no_margin {
  padding: 0;
  margin: 0;
}
</style>
