<template>
  <Icon :icon="iconName" :color="color" :style="style" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app-icon',
})
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: 'i-ep-user',
  },
  color: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '',
  },
  height: {
    type: String,
    default: '',
  },
})

const style = {
  width: props.width,
  height: props.height,
}

const iconName = computed(() => props.icon)
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
