<template>
  <Icon
    :icon="iconName"
    :color="color"
    :fontSize="fontSize + 'px'"
    :style="styleComputed" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps({
  /**
   * iconify 图标
   * https://icon-sets.iconify.design/openmoji/anxious-face-with-sweat/
   */
  icon: {
    type: String,
    required: true,
    default: 'i-ep-user',
  },
  /** 图标颜色 */
  color: {
    type: String,
    default: '',
  },
  /** 控制图标大小 */
  fontSize: {
    type: Number,
    required: true,
    default: 16,
  },
})

const iconName = computed(() => props.icon)
const styleComputed = computed(() => {
  const width = props.fontSize * 2
  const height = props.fontSize * 2
  return { width, height }
})
</script>

<style>
svg {
  display: inline-block;
  overflow: hidden;
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentcolor;
}
</style>
