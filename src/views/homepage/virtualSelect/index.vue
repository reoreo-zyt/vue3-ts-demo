<template>
  <div>
    <am-select
      placeholder="请选择(虚拟列表)"
      v-model="selectVlaue"
      :optionSource="stepList"
      useVirtual
      @change="selectChange"></am-select>
  </div>
</template>
<script setup lang="ts" name="useVirtual">
import { ref } from 'vue'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectVlaue = ref<any>()
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const stepList = Array.from({ length: 1000 }).map((_, idx) => ({
  value: `Option ${idx + 1}`,
  label: `${initials[idx % 10]}${idx}`,
}))
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectChange = (val: any) => {
  console.log('selectChange', val, selectVlaue.value)
}
</script>
